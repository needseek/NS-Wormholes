//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react RemoteIcon.jsx -o RemoteIcon.js
// 2. add, commit, push to main

import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const iconTypes = {
  arrowRight: {
    asset: "https://i.imgur.com/frEP0aa.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  back: {
    asset: "https://i.imgur.com/y27mqc4.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  backWhite: {
    asset: "https://i.imgur.com/rb64cfN.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  bankline: {
    asset: "https://i.imgur.com/4lzTAhT.png",
    ratio: {
      width: 0.9310344828,
      height: 1
    }
  },
  certificate: {
    asset: "https://i.imgur.com/CZCXZvr.png",
    ratio: {
      width: 1,
      height: 0.9473684211
    }
  },
  check: {
    asset: "https://i.imgur.com/FC2oVzq.png",
    ratio: {
      width: 1,
      height: 0.5
    }
  },
  close: {
    asset: "https://i.imgur.com/ciZZkR5.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  dollar: {
    fullAsset: "https://i.imgur.com/1FkRVH3.png",
    ratio: {
      width: 1,
      height: 0.511627907
    }
  },
  faqLine: {
    asset: "https://i.imgur.com/qP8Ipyy.png",
    ratio: {
      width: 1,
      height: 0.8125
    }
  },
  globe: {
    asset: "https://i.imgur.com/FRJduiJ.png",
    ratio: {
      width: 0.8888888889,
      height: 1
    }
  },
  group: {
    asset: "https://i.imgur.com/CspcaQ8.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  home: {
    fullAsset: "https://i.imgur.com/HKCwwfQ.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  info: {
    asset: "https://i.imgur.com/uW9C6YO.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  loan: {
    fullAsset: "https://i.imgur.com/3t32coA.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  logoIcon: {
    asset: "https://i.imgur.com/ypo1GAY.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  mma: {
    fullAsset: "https://i.imgur.com/e7wlYD1.png",
    ratio: {
      width: 1,
      height: 0.8823529412
    }
  },
  mobilemoney: {
    asset: "https://i.imgur.com/4PzL8xp.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  moneyorder: {
    asset: "https://i.imgur.com/4OoQPw6.png",
    ratio: {
      width: 1,
      height: 0.7333333333
    }
  },
  peeps: {
    asset: "https://i.imgur.com/ezDvd9q.png",
    ratio: {
      width: 1,
      height: 0.5679012346
    }
  },  
  phoneLine: {
    asset: "https://i.imgur.com/z1iAAaC.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  retire: {
    asset: "https://i.imgur.com/aQsuDBN.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  savings: {
    asset: "https://i.imgur.com/3t32coA.png",
    ratio: {
      width: 1,
      height: 0.8260869565
    }
  },
  selectLeft: {
    asset: "https://i.imgur.com/pcWQAbm.png",
    ratio: {  
      width: 0.5333333333,
      height: 1
    }
  },
  selectRight: {
    asset: "https://i.imgur.com/pfZyMOr.png",
    ratio: {
      width: 0.5333333333,
      height: 1
    }
  },
  smallbiz: {
    asset: "https://i.imgur.com/imKesdW.png",
    fullAsset: "https://i.imgur.com/yViaq30.png",
    ratio: {    
      width: 1,
      height: 1
    }
  },
  solidArrow: {
    asset: "https://i.imgur.com/NrcxyQ4.png",
    ratio: {  
      width: 0.375,
      height: 1
    }
  },
  star: {
    asset: "https://i.imgur.com/soQQ0u9.png",
    ratio: {
      width: 1,
      height: 0.9375
    }
  },
  trade: {
    fullAsset: "https://i.imgur.com/pgJwxrF.png",
    ratio: {
      width: 1.2,
      height: 1.2
    }
  },
  transfermoney: {
    asset: "https://i.imgur.com/vtwKdtf.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  usa: {
    asset: "https://i.imgur.com/xwoMn2t.png",
    ratio: {
      width: 1,
      height: 0.75
    }
  },
  wire: {
    fullAsset: "https://i.imgur.com/UAjVFyp.png",
    ratio: {
      width: 1,
      height: 0.652173913
    }
  }
}

const RemoteIcon = (props) => {
  const selectedIcon = iconTypes[props.type] || iconTypes.check;
  
  const assetSource = props.full && selectedIcon.fullAsset 
    ? { uri: selectedIcon.fullAsset } 
    : { uri: selectedIcon.asset };

  const styles = StyleSheet.create({
    icon: {
      ...props.style,
      display: 'flex',
      width: props.size * selectedIcon.ratio.width,
      height: props.size * selectedIcon.ratio.height,
      minWidth: props.size * selectedIcon.ratio.width,
      minHeight: props.size * selectedIcon.ratio.height,
      maxWidth: props.size * selectedIcon.ratio.width,
      maxHeight: props.size * selectedIcon.ratio.height,
    }
  });

  return <ImageBackground style={styles.icon} source={assetSource} resizeMode="contain" />;
};

export default RemoteIcon;