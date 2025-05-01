import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, PanResponder, Animated, Alert, ScrollView } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { Svg, Line, Path } from 'react-native-svg';

const CLOCK_CENTER = 150; // Half of the 320px clock background
const HANDLE_RADIUS = 5; // Half of the 28px handle

// Schedule component for creating/editing schedules
const ScheduleView = ({ onClose, onSave, schedule }) => {
  const validateTime = (timeString) => {
    if (!timeString) return '9:00 AM'; // Default
    try {
      const isPM = timeString.includes('PM');
      const isAM = timeString.includes('AM');
      if (!isPM && !isAM) return '9:00 AM'; // Invalid format
      
      let [hours, minutesPart] = timeString.split(':');
      if (!minutesPart) return '9:00 AM'; // Invalid format
      
      let minutes = minutesPart.replace(' AM', '').replace(' PM', '');
      
      hours = parseInt(hours);
      minutes = parseInt(minutes);
      
      // Validate hours and minutes
      if (isNaN(hours) || hours < 1 || hours > 12) hours = 9;
      if (isNaN(minutes) || minutes < 0 || minutes > 59) minutes = 0;
      
      // Format properly
      return `${hours}:${minutes.toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
    } catch (error) {
      return '9:00 AM'; 
    }
  };

  const [activeDays, setActiveDays] = useState(schedule?.activeDays || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  const [startTime, setStartTime] = useState(schedule?.startTime ? validateTime(schedule?.startTime) : '9:00 AM');
  const [finishTime, setFinishTime] = useState(schedule?.finishTime ? validateTime(schedule?.finishTime) : '5:00 PM');

  const startTimePanRef = useRef(new Animated.ValueXY()).current;
  const finishTimePanRef = useRef(new Animated.ValueXY()).current;
  
  const timeToAngle = (timeString) => {
    const isPM = timeString.includes('PM');
    let [hours, minutes] = timeString.replace(' AM', '').replace(' PM', '').split(':');
    hours = parseInt(hours);
    
    if (isPM && hours < 12) hours += 12;
    if (!isPM && hours === 12) hours = 0;
    
    const totalHours = hours + parseInt(minutes) / 60;
    
    return (totalHours / 24) * 360 - 90; 
  };
  
  // Convert angle to time
  const angleToTime = (angle) => {
    let normalizedAngle = (angle + 90) % 360;
    if (normalizedAngle < 0) normalizedAngle += 360;
    
    let hours = Math.floor((normalizedAngle / 360) * 24);
    let minutes = Math.floor(((normalizedAngle / 360) * 24 - hours) * 60);
    
    minutes = Math.round(minutes / 5) * 5;
    if (minutes === 60) {
      minutes = 0;
      hours = (hours + 1) % 24;
    }
    const isPM = hours >= 12;
    let displayHours = hours % 12;
    if (displayHours === 0) displayHours = 12;
    
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
  };
  
  const getPositionFromAngle = (angle) => {
    const radius = 160; 
    const radians = angle * (Math.PI / 180);
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
    return { x, y };
  };
  
  useEffect(() => {
    const startTimeAngle = timeToAngle(startTime);
    const finishTimeAngle = timeToAngle(finishTime);
    
    const startTimePos = getPositionFromAngle(startTimeAngle);
    const finishTimePos = getPositionFromAngle(finishTimeAngle);
    
    // Set initial positions without animation
    startTimePanRef.setValue({ x: startTimePos.x, y: startTimePos.y });
    finishTimePanRef.setValue({ x: finishTimePos.x, y: finishTimePos.y });
  }, []);
  
  const startTimePanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        startTimePanRef.extractOffset();
      },
      onPanResponderMove: (_, gestureState) => {
        // Calculate angle from gesture
        const dx = gestureState.dx;
        const dy = gestureState.dy;
        
        // Current position relative to clock center
        const currentX = startTimePanRef.x._offset;
        const currentY = startTimePanRef.y._offset;
        
        // Calculate new position
        const newX = currentX + dx;
        const newY = currentY + dy;
        
        // Calculate distance from origin
        const distance = Math.sqrt(newX * newX + newY * newY);
        
        // Normalize to keep on circle with radius 160
        const radius = 160;
        const factor = radius / distance;
        
        // Only update if we have a valid factor (prevents NaN)
        if (isFinite(factor) && factor > 0) {
          const normalizedX = newX * factor;
          const normalizedY = newY * factor;
          
          // Update position
          startTimePanRef.setValue({ 
            x: normalizedX - currentX, 
            y: normalizedY - currentY 
          });
          
          // Calculate angle in radians and convert to degrees
          const angle = Math.atan2(normalizedY, normalizedX) * (180 / Math.PI);
          
          // Update time
          const newTime = angleToTime(angle);
          setStartTime(validateTime(newTime));
        }
      },
      onPanResponderRelease: () => {
        startTimePanRef.flattenOffset();
      }
    })
  ).current;
  
  const finishTimePanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        finishTimePanRef.extractOffset();
      },
      onPanResponderMove: (_, gestureState) => {
        // Calculate angle from gesture
        const dx = gestureState.dx;
        const dy = gestureState.dy;
        
        // Current position relative to clock center
        const currentX = finishTimePanRef.x._offset;
        const currentY = finishTimePanRef.y._offset;
        
        // Calculate new position
        const newX = currentX + dx;
        const newY = currentY + dy;
        
        // Calculate distance from origin
        const distance = Math.sqrt(newX * newX + newY * newY);
        
        // Normalize to keep on circle with radius 160
        const radius = 160;
        const factor = radius / distance;
        
        // Only update if we have a valid factor (prevents NaN)
        if (isFinite(factor) && factor > 0) {
          const normalizedX = newX * factor;
          const normalizedY = newY * factor;
          
          // Update position
          finishTimePanRef.setValue({ 
            x: normalizedX - currentX, 
            y: normalizedY - currentY 
          });
          
          // Calculate angle in radians and convert to degrees
          const angle = Math.atan2(normalizedY, normalizedX) * (180 / Math.PI);
          
          // Update time
          const newTime = angleToTime(angle);
          setFinishTime(validateTime(newTime));
        }
      },
      onPanResponderRelease: () => {
        finishTimePanRef.flattenOffset();
      }
    })
  ).current;
  
  // Clock background View with ref to measure position
  const clockRef = useRef(null);
  
  // Calculate clock hand positions
  const startTimeAngle = timeToAngle(startTime);
  const finishTimeAngle = timeToAngle(finishTime);

  // Position functions for clock face elements
  const getHourPosition = (hour) => {
    const angle = (hour / 24) * 360 - 90;
    const radius = 120; // Radius for hour markers
    // Calculate positions around the circle
    const x = radius * Math.cos(angle * Math.PI / 180);
    const y = radius * Math.sin(angle * Math.PI / 180);
    // The center of the clock should use CLOCK_CENTER (160)
    return { left: x + CLOCK_CENTER, top: y + CLOCK_CENTER};
  };

  // Function to get AM/PM label positions
  const getAmPmPosition = (hour) => {
    const angle = (hour / 24) * 360 - 90; // -90 degrees to start at 12 o'clock
    const radius = 93; // Radius for AM/PM labels
    const x = radius * Math.cos(angle * Math.PI / 180);
    const y = radius * Math.sin(angle * Math.PI / 180);
    return { left: x + CLOCK_CENTER, top: y + CLOCK_CENTER};
  };

  // Function to get tick mark positions
  const daysOfWeek = [
    { label: 'M', value: 'Mon' },
    { label: 'T', value: 'Tue' },
    { label: 'W', value: 'Wed' },
    { label: 'T', value: 'Thu' },
    { label: 'F', value: 'Fri' },
    { label: 'S', value: 'Sat' },
    { label: 'S', value: 'Sun' },
  ];

  const toggleDay = (day) => {
    if (activeDays.includes(day)) {
      setActiveDays(activeDays.filter(d => d !== day));
    } else {
      setActiveDays([...activeDays, day]);
    }
  };

  // Update the handleSave function to consider the selected zones
  const handleSave = () => {
    const scheduleData = {
      activeDays,
      startTime,
      finishTime
    };
    
    onSave(scheduleData);
    onClose();
  };

  const Arc = ({
    startAngle,    // Angle (in degrees) for the start (e.g. from timeToAngle)
    endAngle,      // Angle (in degrees) for the end
    radius = 160,  // Radius of the arc (should match your draggable handle radius)
    center = { x: 160, y: 160 }, // Center of the circle (adjust as needed)
    strokeColor = '#FF5722',     // Customize the color of the arc
    strokeWidth = 8,             // Customize the width of the arc stroke
  }) => {
    // Normalize an angle to 0-360 degrees
    const normalizeAngle = (angle) => {
      let a = angle % 360;
      if (a < 0) a += 360;
      return a;
    };
  
    // Normalize start and end angles
    const start = normalizeAngle(startAngle);
    const end = normalizeAngle(endAngle);
  
    // Calculate the sweep angle (the arc span)
    let sweepAngle = end - start;
    if (sweepAngle < 0) {
      sweepAngle += 360;
    }
    
    // Determine if the arc should be a large arc (sweep > 180°)
    const largeArcFlag = sweepAngle > 180 ? 1 : 0;
    // Set the sweep flag to 1 (for clockwise direction)
    const sweepFlag = 1;
  
    // Convert angles to radians for coordinate calculations
    const startRad = (start * Math.PI) / 180;
    const endRad = (end * Math.PI) / 180;
  
    // Compute start and end points on the circle
    const startX = center.x + radius * Math.cos(startRad);
    const startY = center.y + radius * Math.sin(startRad);
    const endX = center.x + radius * Math.cos(endRad);
    const endY = center.y + radius * Math.sin(endRad);
  
    // Build the arc path string using the SVG arc command:
    // M = move to start, A = arc with rx,ry, x-axis-rotation, large-arc-flag, sweep-flag, end point.
    const d = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`;
  
    return (
      <Path
        d={d}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    );
  };  
  return (
    <View style={styles.scheduleViewContainer}>
      <Text style={styles.scheduleModalTitle}>
        {schedule ? 'Edit Schedule' : 'Set Your Schedule'}
      </Text>
      
      <View style={styles.scheduleSection}>
        <Text style={styles.scheduleSectionTitle}>Days Active</Text>
        <View style={styles.daysContainer}>
          {daysOfWeek.map((day) => (
            <TouchableOpacity
              key={day.value}
              style={[
                styles.dayButton,
                activeDays.includes(day.value) && styles.dayButtonActive,
              ]}
              onPress={() => toggleDay(day.value)}
            >
              <Text style={[
                styles.dayButtonText,
                activeDays.includes(day.value) && styles.dayButtonTextActive,
              ]}>
                {day.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.scheduleSection}>
        <Text style={styles.scheduleSectionTitle}>Start and Finish Times</Text>
        <View style={styles.timeContainer}>
          <View style={styles.timeItem}>
            <Text style={styles.timeLabel}>START</Text>
            <Text style={styles.timeValue}>{startTime}</Text>
          </View>
          <View style={styles.timeItem}>
            <Text style={styles.timeLabel}>FINISH</Text>
            <Text style={styles.timeValue}>{finishTime}</Text>
          </View>
        </View>
        <View 
          style={styles.clockBackground}
          ref={clockRef}
        >
          <View style={styles.clockOuterRing}>
            <View style={styles.clockCircle}>
              <Svg height="300" width="300" style={{ position: 'absolute', top: -2, left: -2 }}>
                {/* Regular hour tick marks */}
                {[...Array(24)].map((_, i) => {
                  // Skip where AM/PM markers are
                  if (i % 6 === 0) return null;
                  
                  const angle = (i / 24) * 360;
                  const radians = (angle - 90) * (Math.PI / 180);
                  
                  // Calculate outer and inner points of the tick
                  const outerRadius = 143;
                  const innerRadius = 132;
                  const innerX = innerRadius * Math.cos(radians) + 150;
                  const innerY = innerRadius * Math.sin(radians) + 150;
                  const outerX = outerRadius * Math.cos(radians) + 150;
                  const outerY = outerRadius * Math.sin(radians) + 150;
                  
                  return (
                    <Line
                      key={`tick-${i}`}
                      x1={innerX}
                      y1={innerY}
                      x2={outerX}
                      y2={outerY}
                      stroke="#888"
                      strokeWidth="3"
                    />
                  );
                })}
                
                {/* Minute dots - 3 between each hour */}
                {[...Array(72)].map((_, i) => {
                  // Calculate which hour segment this belongs to
                  const hourSegment = Math.floor(i / 3);
                  // Skip if this is related to AM/PM positions (0, 6, 12, 18)
                  if (hourSegment % 6 === 0) return null;
                  
                  // Calculate minute position (15, 30, or 45 minutes)
                  const minuteOffset = (i % 3 + 1) * 0.25; // 0.25, 0.5, or 0.75
                  const hour = hourSegment + minuteOffset;
                  
                  const angle = (hour / 24) * 360;
                  const radians = (angle - 90) * (Math.PI / 180);
                  
                  // Smaller dots for minutes
                  const outerRadius = 143;
                  const innerRadius = 136; // Less inward than hour marks
                  const innerX = innerRadius * Math.cos(radians) + 150;
                  const innerY = innerRadius * Math.sin(radians) + 150;
                  const outerX = outerRadius * Math.cos(radians) + 150;
                  const outerY = outerRadius * Math.sin(radians) + 150;
                  
                  return (
                    <Line
                      key={`minute-tick-${i}`}
                      x1={innerX}
                      y1={innerY}
                      x2={outerX}
                      y2={outerY}
                      stroke="#aaa" // Lighter color than hour marks
                      strokeWidth="2" // Thinner than hour marks
                    />
                  );
                })}
                
                {/* AM/PM position tick marks (0, 6, 12, 18) - slightly longer and thicker */}
                {[0, 6, 12, 18].map(hour => {
                  // Also add the 3 minute dots for AM/PM hours
                  const ticks = [];
                  
                  // Main AM/PM tick
                  const angle = (hour / 24) * 360;
                  const radians = (angle - 90) * (Math.PI / 180);
                  
                  // Calculate outer and inner points of the tick - longer than regular ticks
                  const outerRadius = 143;
                  const innerRadius = 128; // Slightly longer than regular ticks
                  const innerX = innerRadius * Math.cos(radians) + 150;
                  const innerY = innerRadius * Math.sin(radians) + 150;
                  const outerX = outerRadius * Math.cos(radians) + 150;
                  const outerY = outerRadius * Math.sin(radians) + 150;
                  
                  ticks.push(
                    <Line
                      key={`ampm-tick-${hour}`}
                      x1={innerX}
                      y1={innerY}
                      x2={outerX}
                      y2={outerY}
                      stroke="#0066cc"
                      strokeWidth="4"
                    />
                  );
                  
                  // Add 3 minute dots for this AM/PM hour
                  [0.25, 0.5, 0.75].forEach((offset, idx) => {
                    const minuteHour = hour + offset;
                    const minuteAngle = (minuteHour / 24) * 360;
                    const minuteRadians = (minuteAngle - 90) * (Math.PI / 180);
                    
                    const minuteInnerRadius = 136;
                    const minuteInnerX = minuteInnerRadius * Math.cos(minuteRadians) + 150;
                    const minuteInnerY = minuteInnerRadius * Math.sin(minuteRadians) + 150;
                    const minuteOuterX = outerRadius * Math.cos(minuteRadians) + 150;
                    const minuteOuterY = outerRadius * Math.sin(minuteRadians) + 150;
                    
                    ticks.push(
                      <Line
                        key={`ampm-minute-tick-${hour}-${idx}`}
                        x1={minuteInnerX}
                        y1={minuteInnerY}
                        x2={minuteOuterX}
                        y2={minuteOuterY}
                        stroke="#aaa" // Changed from #88b0da (blue) to #aaa (gray) to match other minute ticks
                        strokeWidth="2"
                      />
                    );
                  });
                  
                  return ticks;
                })}
              </Svg>
              
              {/* Hour labels - all hours except where AM/PM labels go */}
              {[1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23].map(hour => {
                const pos = getHourPosition(hour);
                
                // Dynamically adjust offset based on position around the clock
                const angle = (hour / 24) * 360 - 90;
                const radians = angle * (Math.PI / 180);
                const textWidth = hour >= 10 ? 16 : 9; // Approximate width of text
                const textHeight = 16; // Text height based on font size
                
                // Adjust offsets based on position around the clock
                let leftOffset = -textWidth/2; // Center horizontally
                let topOffset = -textHeight/2; // Center vertically
                
                // Fine tune based on quadrant
                if (angle >= -90 && angle < 0) {
                  // Top right quadrant
                  leftOffset -= 1;
                  topOffset -= 5;
                } else if (angle >= 0 && angle < 90) {
                  // Bottom right quadrant
                  leftOffset -= 1;
                  topOffset += -5;
                } else if (angle >= 90 && angle < 180) {
                  // Bottom left quadrant
                  leftOffset -= 3;
                  topOffset += -3;
                } else {
                  // Top left quadrant
                  leftOffset -= 1;
                  topOffset -= 3;
                }
                
                return (
                  <Text 
                    key={`hour-${hour}`} 
                    style={[
                      styles.hourMarker, 
                      { 
                        top: pos.top + topOffset, 
                        left: pos.left + leftOffset
                      }
                    ]}
                  >
                    {hour}
                  </Text>
                );
              })}
              
              {/* AM/PM labels at 0, 6, 12, 18 positions - update to use CLOCK_CENTER */}
              <Text style={[styles.amPmMarker, { top: getAmPmPosition(0).top - 16, left: getAmPmPosition(0).left - 25 }]}>12AM</Text>
              <Text style={[styles.amPmMarker, { top: getAmPmPosition(6).top - 12, left: getAmPmPosition(6).left - 12 }]}>6AM</Text>
              <Text style={[styles.amPmMarker, { top: getAmPmPosition(12).top - 5, left: getAmPmPosition(12).left - 25 }]}>12PM</Text>
              <Text style={[styles.amPmMarker, { top: getAmPmPosition(18).top - 12, left: getAmPmPosition(18).left - 30 }]}>6PM</Text>
              
              {/* Center point */}
              <View style={styles.clockCenter} />
            </View>
          </View>
          <Svg 
            height="320" 
            width="320" 
            viewBox="-10 -10 320 320"
            style={{ 
              overflow: 'visible',
              position: 'absolute', 
              zIndex: 500, // Higher than clock but lower than handles (which have 1000)
            }}
          >
            <Arc 
              startAngle={startTimeAngle}
              endAngle={finishTimeAngle}
              radius={155} // Match the outerRadius used for clock ticks (143)
              center={{ x: 150, y: 150 }} // Center of your clock (CLOCK_CENTER)
              strokeColor="rgba(58, 0, 250, 0.5)"
              strokeWidth={10}
            />
          </Svg>
          {/* Draggable time handles - positioned outside the SVG to ensure they're on top */}
          {/* StartTime handle */}
          <Animated.View
            style={[
              styles.timeHandle,
              {
                transform: [
                  { translateX: startTimePanRef.x },
                  { translateY: startTimePanRef.y },
                ],
                zIndex: 1000,
              },
            ]}
            {...startTimePanResponder.panHandlers}
          >
            <View style={[styles.timeHandleInner, styles.startTimeHandle]}>
              <Text style={[styles.timeHandleText, { color: '#2196F3' }]}>S</Text>
            </View>
          </Animated.View>
          
          {/* Finish Time handle */}
          <Animated.View
            style={[
              styles.timeHandle,
              {
                transform: [
                  { translateX: finishTimePanRef.x },
                  { translateY: finishTimePanRef.y },
                ],
                zIndex: 1000,
              },
            ]}
            {...finishTimePanResponder.panHandlers}
          >
            <View style={[styles.timeHandleInner, styles.finishTimeHandle]}>
              <Text style={[styles.timeHandleText, { color: '#FF9800' }]}>F</Text>
            </View>
          </Animated.View>
        </View>
      </View>

      <View style={styles.scheduleModalButtons}>
        <Button mode="text" onPress={onClose}>Cancel</Button>
        <Button disabled={activeDays.length === 0} mode="contained" onPress={handleSave}>Save</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleViewContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  scheduleModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scheduleSection: {
    marginBottom: 20,
  },
  scheduleSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f5',
    borderRadius: 12,
    padding: 10,
  },
  dayButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dayButtonActive: {
    backgroundColor: '#2196F3',
  },
  dayButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  dayButtonTextActive: {
    color: 'white',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeItem: {
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  timeValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clockBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    position: 'relative', // Ensure proper positioning context for children
    width: 320,           // Explicit width to match clockOuterRing
    height: 320,          // Explicit height to match clockOuterRing
    marginLeft: -15,
    
  },
  clockOuterRing: {
    width: 320, // Increased from 220 to 320
    height: 320, // Increased from 220 to 320
    borderRadius: 160, // Half of the width/height
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockCircle: {
    width: 300, // Increased from 200 to 300
    height: 300, // Increased from 200 to 300
    borderRadius: 150, // Half of the width/height
    backgroundColor: '#f8f8f8',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  hourMarker: {
    position: 'absolute',
    fontSize: 16, // Increased from 11 to 16
    fontWeight: '500',
    color: '#666',
  },
  amPmMarker: {
    position: 'absolute',
    fontSize: 18, // Increased from 12 to 18
    fontWeight: '600',
    color: '#0066cc',
  },
  tickMark: {
    position: 'absolute',
    width: 3, // Increased from 2 to 3
    height: 9, // Increased from 6 to 9
    backgroundColor: '#888',
    borderRadius: 1,
  },
  clockCenter: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3, // Half of the width/height
    backgroundColor: '#555',
    top: CLOCK_CENTER - 3, // Centered using the CLOCK_CENTER constant (half of handle height)
    left: CLOCK_CENTER - 3, // Centered using the CLOCK_CENTER constant (half of handle width)
    zIndex: 10,
  },
  scheduleModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  
  // Styles for draggable time handles
  timeHandle: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000, // Ensure it appears on top
    top: CLOCK_CENTER - HANDLE_RADIUS, // Center point minus half handle size
    left: CLOCK_CENTER - HANDLE_RADIUS, // Center point minus half handle size
  },
  timeHandleInner: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startTimeHandle: {
    borderColor: '#2196F3',
    borderWidth: 3,
  },
  finishTimeHandle: {
    borderColor: '#FF9800',
    borderWidth: 3,
  },
  timeHandleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ScheduleView; 