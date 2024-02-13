var config_data = `
{
  "dataFormat": "tsv",
  "title": "Match Scouting",
  "page_title": "ERROR 3130 MATCH SCOUTING",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Comp",
      "code": "e",
      "type": "event",
      "defaultValue": "2023tnkn",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Auto Notes Used",
          "code": "nu",
          "type": "clickable_image",
          "dimensions": "3 5",
          "filename": "2024/field_image.png",
          "clickRestriction": "ten",
          "allowableResponses": "1 2 3 4 5 6 7 8 9 11 14",
          "shape": "circle 5 black red true"
        }
  ],
  "teleop": [
    { "name": "Amp Scores",
          "code": "ast",
          "type": "counter"
    },
    { "name": "Amps Missed",
              "code": "am",
              "type": "counter"
    },
    { "name": "Speaker Scores",
          "code": "ssc",
          "type": "counter"
    },
    { "name": "Successfully shot right next to the speaker",
      "code": "sw",
      "type": "checkbox",
      "tooltip": "Successfully shot right next to the speaker"
    },
    { "name": "Successfully shot between the subwoofer and stage",
              "code": "sb",
              "type": "checkbox",
              "tooltip": "Successfully shot between the subwoofer and stage"
    },
    { "name": "Successfully shot from the Podium <br>(protected side of the stage)",
            "code": "fp",
            "type": "checkbox",
            "tooltip": "Successfully shot from the protected side of the stage"
    },
    { "name": "Successfully shot From BEHIND The Podium",
          "code": "bp",
          "type": "checkbox",
          "tooltip": "Successfully shot from BEHIND the podium"
    },
    { "name": "Shots Missed",
           "code": "smc",
           "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Human Player<br>",
        "f": "Floor/Dropped from the HP station<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Pieces Dropped",
           "code": "sst",
           "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Stage Timer <br> Start timer when the robot enters the stage boundaries",
      "code": "dt",
      "type": "timer",
      "tooltip": "Start timer when the robot enters the stage boundaries"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "h": "Harmony<br>",
        "f": "Fell but eventually made it Onstage<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective (slamming, getting in the way, chaos)<br>",
        "a": "Average (not notable)<br>",
        "v": "Very Effective (smooth, efficient)<br>"
      },
      "defaultValue": "a"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average (chasing, too slow, penalties)<br>",
        "a": "Average (pinning every once and awhile)<br>",
        "e": "Above Average (excellent pinning, shutting down teams)<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "Slow<br>",
        "3": "Average<br>",
        "5": "Fast"
      },
      "defaultValue":"3"
    },
    { "name": "Bricked",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Make good <br> alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Observations <br> (penalties, strengths, weaknesses, other noteworthy things)",
      "tooltip": "penalties, strengths, weaknesses, other noteworthy things",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 200
    }
  ]
}`;
