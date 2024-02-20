var config_data = `
{
  "dataFormat": "tsv",
  "title": "Pit Scouting",
  "page_title": "ERROR 3130 PIT SCOUTING",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width (No Bumpers)",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight (No bumpers no battery)",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain Type",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "Tank<br>",
        "b": "Butterfly/Omni<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Human Player Skill",
              "code": "hp",
              "type": "text",
              "size": 20,
              "maxSize": 100
    },
    { "name": "Strengths",
          "code": "st",
          "type": "text",
          "size": 20,
          "maxSize": 100
    },
    { "name": "Weaknesses",
          "code": "wk",
          "type": "text",
          "size": 20,
          "maxSize": 100
        },
    { "name": "Auton (select the highest they can do): crosses line <br> (0 notes) ",
                  "code": "on",
                  "type": "checkbox",
                  "tooltip": "Shooting the preloaded note"
                  },
    { "name": "Auton: 1 note shot <br> (Preloaded note) ",
          "code": "wn",
          "type": "checkbox",
          "tooltip": "Shooting the preloaded note"
          },
    { "name": "Auton: 2 notes shot <br> (Preloaded note + 1)",
         "code": "twn",
         "type": "checkbox",
         "tooltip": "Shooting the preloaded note and one more"
    },
    { "name": "Auton: 3 notes shot <br> (Preloaded note + 2) ",
            "code": "tn",
            "type": "checkbox",
            "tooltip": "Shooting the preloaded note and two more notes"
    },
    { "name": "Auton: 4 notes shot <br> (Preloaded note + 3)",
          "code": "n",
          "type": "checkbox",
          "tooltip": "Shooting the preloaded note and three more notes"
    },
    { "name": "Auton: 1 amp <br> (Preloaded note) ",
              "code": "oa",
              "type": "checkbox"
    },
    { "name": "Auton: 2 amp <br> (Preloaded note + 1)",
             "code": "twa",
             "type": "checkbox"
    },
    { "name": "Auton: 3 amp <br> (Preloaded note + 2)",
                "code": "ta",
                "type": "checkbox"
    },
    { "name": "Auton: 4 amp <br> (Preloaded note + 3)",
              "code": "fa",
              "type": "checkbox"
    },
    { "name": "Auton: Other",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 100,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
