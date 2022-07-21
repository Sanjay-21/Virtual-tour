var APP_DATA = {
  "scenes": [
    {
      "id": "0-account",
      "name": "Account",
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
          "yaw": -1.0795845966994495,
          "pitch": 0.15786984212442157,
          "rotation": 5.497787143782138,
          "target": "3-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6991288216147247,
          "pitch": -0.015133418166193735,
          "title": "Title",
          "text": "Text",
          "src":"mixkit-surprised-man-and-a-green-screen-23839-medium_1.webm"
        }
      ]
    },
    {
      "id": "1-audit",
      "name": "audit",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-it",
      "name": "it",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-parking",
      "name": "parking",
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
          "yaw": -1.453585907624534,
          "pitch": 0.06756855725022604,
          "rotation": 5.497787143782138,
          "target": "1-audit"
        },
        {
          "yaw": 0.026064670079524177,
          "pitch": 0.388508562920002,
          "rotation": 0,
          "target": "2-it"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5603455023281398,
          "pitch": -0.22392245931766475,
          "title": "Title",
          "text": "Text",
          "src":"mixkit-surprised-man-and-a-green-screen-23839-medium.webm",
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
