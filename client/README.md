# 18-Bogeys

[Link to project here](https://main--unruffled-haibt-df0e79.netlify.app/)

## Project Description

18 Bogeys is a golf round tracker that records various info about your golf game. It will record the course name and par, your name, handicap an the other players you are playing with as well as the date played. In addition you will fill in the scorecard as you play and at the end of the game you will submit it to a global feed.

## Wireframes

The wireframes below depict the phone and website view for the app as well as the flowchart to depicte the component Hierarchy. [View the source here.](https://whimsical.com/18-bogeys-MaEEdCsgf13WMQCcW74rcKß)

![imageAlt](https://imgur.com/P8SbGZF.png)
![imageAlt](https://imgur.com/k2C8BBO.png)

## Component Hierarchy

![imageAlt](https://imgur.com/5TDQWDm.png)

## API and Data Sample

[View database here!](https://airtable.com/shrpS72muo5RzImLc)

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recpcERi4gK15rKvo",
            "fields": {
                "courseName": "Swan Lake",
                "coursePar": "75",
                "playerName": "Matt Moyka",
                "handicap": "-4",
                "otherPlayers": "Justin",
                "date": "9/1/2021"
            },
            "createdTime": "2021-09-17T13:10:59.000Z"
        }
    ],
    "offset": "recpcERi4gK15rKvo"
}

```

### MVP/PostMVP

#### MVP

- Home page with clickable icons that route to each respective form or data.
- Get and post golf data from Airtable.
- Use forms to create game data and update Airtable.
- edit posts from the game feed through airtable.

#### PostMVP

- add a password bar to allow creator to delete, no secure just like a if(x === x)axios Delete input
- Add a search bar to search games by name

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Sept 16,17 | Proposal Approval / Airtable Setup         | in progress |
| Sept 18-20   | Component Creation / Get, Set, Delete Data | in progress |
| Oct 21   | finish axios/ finish forms / CSS Components            | in progress |
| Oct 22   | CSS Components / MVP Complete               | in progress |
| Oct 23   | Advanced CSS                               | in progress |
| Oct 24   | Presentations                              | in progress |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |           |         |
| Airtable setup            |    H     |     .5hrs      |           |          |
| Netlify           |    H     |      1hrs      |            |          |
| Data population pg 1      |    H     |      3hrs      |           |         |
| Data population pg 2      |    H     |      3hrs      |          |         |
| Data population pg 3      |    H     |      3hrs      |          |         |
| Data population pg 4      |    H     |      3hrs      |          |         |
| Data population pg 5      |    H     |      3hrs      |         |         |
| Form creation pg 1,2        |    H     |      2hrs      |         |        |
| Form creation pg 3,4        |    H     |      2hrs      |          |        |
| Data creation/update pg 1 |    H     |      3hrs      |          |         |
| Data creation/update pg 3 |    H     |      3hrs      |         |          |
| Component CSS pg 1        |    H     |      3hrs      |          |         |
| Component CSS pg 2        |    H     |      3hrs      |          |         |
| Component CSS pg 3        |    H     |      3hrs      |          |         |
| Component CSS pg 4        |    H     |      3hrs      |          |         |
| Component CSS pg 5        |    H     |      3hrs      |          |         |
| Total                     |    H     |    42.5hrs     |          |        |

## SWOT Analysis

### Strengths:

I have a good understanding of what i want my application to look like and what exactly I want it to do. I am also an avid golfer so I feel that I can deliver all the necessary info a golfer would want.

### Weaknesses:

There is a lot of posting and patching in the app and I am going to have to figure out how to connect it all. For example I have a form that is filled out submitted and then brings the user to another form thats going to add data to the first form.

### Opportunities:

This project will give me a great understanding of react and linking forms and storing data in a no code database. I will also use tailwind CSS for the styling on this project.

### Threats:

If I run into more errors than anticipated I will not be able to complete all the MVP features I want.