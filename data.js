var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.9880460169267362,
          "pitch": 0.20101584986518617,
          "rotation": 1.5707963267948966,
          "target": "2-lab-outside"
        },
        {
          "yaw": -0.8762333000302807,
          "pitch": 0.17834549355508145,
          "rotation": 4.71238898038469,
          "target": "4-auditorium"
        },
        {
          "yaw": 0.0036704534061762217,
          "pitch": 0.39251925395161535,
          "rotation": 0,
          "target": "1-it-block"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.490736322174177,
          "pitch": 0.016285644600097626,
          "title": "Lorem ipsum<br>",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "src": "videos/parking.webm"
        },
        {
          "yaw": 2.1814771691791073,
          "pitch": -0.0012331751663055002,
          "title": "Lorem ipsum",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    },
    {
      "id": "1-it-block",
      "name": "IT Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 1.6890041424487627,
        "pitch": 0.14835056011870407,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.3763462871632157,
          "pitch": 0.1165359078071102,
          "rotation": 0,
          "target": "0-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22251603580995116,
          "pitch": -0.11994114057424632,
          "title": "Lorem ipsum",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	  "src": "videos/it.webm"        
        },
        {
          "yaw": -2.885955473476848,
          "pitch": -0.05572006164615928,
          "title": "Lorem ipsum",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    },
    {
      "id": "2-lab-outside",
      "name": "Lab Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 1.8432814038919645,
        "pitch": 0.14093303211276975,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.267606880267003,
          "pitch": 0.1487001483885475,
          "rotation": 0,
          "target": "0-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.019584439690454758,
          "pitch": -0.04714486074557378,
          "title": "Lorem ipsum",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    },
    {
      "id": "3-lab-inside",
      "name": "Lab Inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08257848184619121,
          "pitch": 0.44856026393251724,
          "rotation": 0,
          "target": "2-lab-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-auditorium",
      "name": "Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -1.344806845403454,
        "pitch": -0.022252584017799393,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.4072821580903714,
          "pitch": 0.148329692718562,
          "rotation": 0,
          "target": "0-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.21530379209351658,
          "pitch": -0.037087640029671576,
          "title": "Lorem ipsum",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "yaw": 3.075358243115242,
          "pitch": 0.048671546800129306,
          "title": "Lorem ipsum",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    }
  ],
  "name": "Coimbatore Institute of Technology",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
