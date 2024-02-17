"use client"; 
import React from "react";
const columns = [
  {name: "NAME", uid: "name"},
  {name: "ROLE", uid: "role"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

const extebdedata = [
    {
      "id": 21,
      "name": "Benjamin Perez",
      "role": "Customer Success Manager",
      "team": "Customer Success",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=16",
      "email": "benjamin.perez@example.com"
    },
    {
      "id": 22,
      "name": "Harper Young",
      "role": "Brand Manager",
      "team": "Marketing",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=17",
      "email": "harper.young@example.com"
    },
    {
      "id": 23,
      "name": "Daniel King",
      "role": "Systems Administrator",
      "team": "IT",
      "status": "active",
      "age": "36",
      "avatar": "https://i.pravatar.cc/150?u=18",
      "email": "daniel.king@example.com"
    },
    {
      "id": 24,
      "name": "Mia Wood",
      "role": "Event Coordinator",
      "team": "Events",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=19",
      "email": "mia.wood@example.com"
    },
    {
      "id": 25,
      "name": "Alexander Stewart",
      "role": "Project Manager",
      "team": "Project Management",
      "status": "active",
      "age": "34",
      "avatar": "https://i.pravatar.cc/150?u=20",
      "email": "alexander.stewart@example.com"
    },
    {
      "id": 26,
      "name": "Avery Evans",
      "role": "Technical Writer",
      "team": "Documentation",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=21",
      "email": "avery.evans@example.com"
    },
    {
      "id": 27,
      "name": "Sofia Rivera",
      "role": "Digital Marketing Specialist",
      "team": "Marketing",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=22",
      "email": "sofia.rivera@example.com"
    },
    {
      "id": 28,
      "name": "Jackson Collins",
      "role": "UX Researcher",
      "team": "Design",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=23",
      "email": "jackson.collins@example.com"
    },
    {
      "id": 29,
      "name": "Scarlett Bailey",
      "role": "Account Executive",
      "team": "Sales",
      "status": "active",
      "age": "32",
      "avatar": "https://i.pravatar.cc/150?u=24",
      "email": "scarlett.bailey@example.com"
    },
    {
      "id": 30,
      "name": "Lucas Mitchell",
      "role": "Data Scientist",
      "team": "Analytics",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=25",
      "email": "lucas.mitchell@example.com"
    },
    {
      "id": 31,
      "name": "Chloe Cooper",
      "role": "Community Manager",
      "team": "Marketing",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=26",
      "email": "chloe.cooper@example.com"
    },
    {
      "id": 32,
      "name": "Henry Ward",
      "role": "Senior Developer",
      "team": "Engineering",
      "status": "active",
      "age": "37",
      "avatar": "https://i.pravatar.cc/150?u=27",
      "email": "henry.ward@example.com"
    },
    {
      "id": 33,
      "name": "Zoe Gonzalez",
      "role": "Product Manager",
      "team": "Product",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=28",
      "email": "zoe.gonzalez@example.com"
    },
    {
      "id": 34,
      "name": "Jack Reed",
      "role": "Customer Support Specialist",
      "team": "Support",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=29",
      "email": "jack.reed@example.com"
    },
    {
      "id": 35,
      "name": "Aria Hernandez",
      "role": "Graphic Designer",
      "team": "Design",
      "status": "active",
      "age": "27",
      "avatar": "https://i.pravatar.cc/150?u=30",
      "email": "aria.hernandez@example.com"
    },
    {
      "id": 36,
      "name": "William Nguyen",
      "role": "Software Engineer",
      "team": "Engineering",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=31",
      "email": "william.nguyen@example.com"
    },
    {
      "id": 37,
      "name": "Grace Hill",
      "role": "Content Writer",
      "team": "Marketing",
      "status": "active",
      "age": "26",
      "avatar": "https://i.pravatar.cc/150?u=32",
      "email": "grace.hill@example.com"
    },
    {
      "id": 38,
      "name": "Joseph Cook",
      "role": "Data Analyst",
      "team": "Analytics",
      "status": "active",
      "age": "34",
      "avatar": "https://i.pravatar.cc/150?u=33",
      "email": "joseph.cook@example.com"
    },
    {
      "id": 39,
      "name": "Lily Martinez",
      "role": "Social Media Manager",
      "team": "Marketing",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=34",
      "email": "lily.martinez@example.com"
    },
    {
      "id": 40,
      "name": "Logan Scott",
      "role": "UI/UX Designer",
      "team": "Design",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=35",
      "email": "logan.scott@example.com"
    },
    {
      "id": 41,
      "name": "Aurora Young",
      "role": "HR Manager",
      "team": "Human Resources",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=36",
      "email": "aurora.young@example.com"
    },
    {
      "id": 42,
      "name": "Elijah Carter",
      "role": "Business Analyst",
      "team": "Operations",
      "status": "active",
      "age": "32",
      "avatar": "https://i.pravatar.cc/150?u=37",
      "email": "elijah.carter@example.com"
    },
    {
      "id": 43,
      "name": "Madison Perez",
      "role": "Quality Assurance Tester",
      "team": "Engineering",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=38",
      "email": "madison.perez@example.com"
    },
    {
      "id": 44,
      "name": "David Hill",
      "role": "Financial Analyst",
      "team": "Finance",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=39",
      "email": "david.hill@example.com"
    },
    {
      "id": 45,
      "name": "Penelope Wright",
      "role": "Sales Representative",
      "team": "Sales",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=40",
      "email": "penelope.wright@example.com"
    },
    {
      "id": 46,
      "name": "Jayden Perez",
      "role": "Customer Success Manager",
      "team": "Customer Success",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=41",
      "email": "jayden.perez@example.com"
    },
    {
      "id": 47,
      "name": "Eleanor Brown",
      "role": "Brand Manager",
      "team": "Marketing",
      "status": "active",
      "age": "34",
      "avatar": "https://i.pravatar.cc/150?u=42",
      "email": "eleanor.brown@example.com"
    },
    {
      "id": 48,
      "name": "Gabriel Lopez",
      "role": "Systems Administrator",
      "team": "IT",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=43",
      "email": "gabriel.lopez@example.com"
    },
    {
      "id": 49,
      "name": "Hannah Bell",
      "role": "Event Coordinator",
      "team": "Events",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=44",
      "email": "hannah.bell@example.com"
    },
    {
      "id": 50,
      "name": "Isaac Scott",
      "role": "Project Manager",
      "team": "Project Management",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=45",
      "email": "isaac.scott@example.com"
    },
    {
      "id": 51,
      "name": "Aria Evans",
      "role": "Technical Writer",
      "team": "Documentation",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=46",
      "email": "aria.evans@example.com"
    },
    {
      "id": 52,
      "name": "Carter Rivera",
      "role": "Digital Marketing Specialist",
      "team": "Marketing",
      "status": "active",
      "age": "36",
      "avatar": "https://i.pravatar.cc/150?u=47",
      "email": "carter.rivera@example.com"
    },
    {
      "id": 53,
      "name": "Madelyn Collins",
      "role": "UX Researcher",
      "team": "Design",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=48",
      "email": "madelyn.collins@example.com"
    },
    {
      "id": 54,
      "name": "Nathan Bell",
      "role": "Account Executive",
      "team": "Sales",
      "status": "active",
      "age": "32",
      "avatar": "https://i.pravatar.cc/150?u=49",
      "email": "nathan.bell@example.com"
    },
    {
      "id": 55,
      "name": "Leah Mitchell",
      "role": "Data Scientist",
      "team": "Analytics",
      "status": "active",
      "age": "27",
      "avatar": "https://i.pravatar.cc/150?u=50",
      "email": "leah.mitchell@example.com"
    },
    {
      "id": 56,
      "name": "Luke Cooper",
      "role": "Community Manager",
      "team": "Marketing",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=51",
      "email": "luke.cooper@example.com"
    },
    {
      "id": 57,
      "name": "Aubrey Ward",
      "role": "Senior Developer",
      "team": "Engineering",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=52",
      "email": "aubrey.ward@example.com"
    },
    {
      "id": 58,
      "name": "Natalie Gonzalez",
      "role": "Product Manager",
      "team": "Product",
      "status": "active",
      "age": "34",
      "avatar": "https://i.pravatar.cc/150?u=53",
      "email": "natalie.gonzalez@example.com"
    },
    {
      "id": 59,
      "name": "Owen Reed",
      "role": "Customer Support Specialist",
      "team": "Support",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=54",
      "email": "owen.reed@example.com"
    },
    {
      "id": 60,
      "name": "Audrey Hernandez",
      "role": "Graphic Designer",
      "team": "Design",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=55",
      "email": "audrey.hernandez@example.com"
    },
    {
      "id": 61,
      "name": "Connor Nguyen",
      "role": "Software Engineer",
      "team": "Engineering",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=56",
      "email": "connor.nguyen@example.com"
    },
    {
      "id": 62,
      "name": "Elena Hill",
      "role": "Content Writer",
      "team": "Marketing",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=57",
      "email": "elena.hill@example.com"
    },
    {
      "id": 63,
      "name": "Eli Cook",
      "role": "Data Analyst",
      "team": "Analytics",
      "status": "active",
      "age": "36",
      "avatar": "https://i.pravatar.cc/150?u=58",
      "email": "eli.cook@example.com"
    },
    {
      "id": 64,
      "name": "Skylar Martinez",
      "role": "Social Media Manager",
      "team": "Marketing",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=59",
      "email": "skylar.martinez@example.com"
    },
    {
      "id": 65,
      "name": "Brayden Scott",
      "role": "UI/UX Designer",
      "team": "Design",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=60",
      "email": "brayden.scott@example.com"
    },
    {
      "id": 66,
      "name": "Isaiah Young",
      "role": "HR Manager",
      "team": "Human Resources",
      "status": "active",
      "age": "34",
      "avatar": "https://i.pravatar.cc/150?u=61",
      "email": "isaiah.young@example.com"
    },
    {
      "id": 67,
      "name": "Nora Carter",
      "role": "Business Analyst",
      "team": "Operations",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=62",
      "email": "nora.carter@example.com"
    },
    {
      "id": 68,
      "name": "Dominic Perez",
      "role": "Quality Assurance Tester",
      "team": "Engineering",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=63",
      "email": "dominic.perez@example.com"
    },
    {
      "id": 69,
      "name": "Maya Hill",
      "role": "Financial Analyst",
      "team": "Finance",
      "status": "active",
      "age": "32",
      "avatar": "https://i.pravatar.cc/150?u=64",
      "email": "maya.hill@example.com"
    },
    {
      "id": 70,
      "name": "Tristan Wright",
      "role": "Sales Representative",
      "team": "Sales",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=65",
      "email": "tristan.wright@example.com"
    },
    {
      "id": 71,
      "name": "Addison Perez",
      "role": "Customer Success Manager",
      "team": "Customer Success",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=66",
      "email": "addison.perez@example.com"
    },
    {
      "id": 72,
      "name": "Eva Brown",
      "role": "Brand Manager",
      "team": "Marketing",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=67",
      "email": "eva.brown@example.com"
    },
    {
      "id": 73,
      "name": "Nicholas King",
      "role": "Systems Administrator",
      "team": "IT",
      "status": "active",
      "age": "36",
      "avatar": "https://i.pravatar.cc/150?u=68",
      "email": "nicholas.king@example.com"
    },
    {
      "id": 74,
      "name": "Samantha Bell",
      "role": "Event Coordinator",
      "team": "Events",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=69",
      "email": "samantha.bell@example.com"
    },
    {
      "id": 75,
      "name": "John Stewart",
      "role": "Project Manager",
      "team": "Project Management",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=70",
      "email": "john.stewart@example.com"
    },
    {
      "id": 76,
      "name": "Makayla Evans",
      "role": "Technical Writer",
      "team": "Documentation",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=71",
      "email": "makayla.evans@example.com"
    },
    {
      "id": 77,
      "name": "Christopher Rivera",
      "role": "Digital Marketing Specialist",
      "team": "Marketing",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=72",
      "email": "christopher.rivera@example.com"
    },
    {
      "id": 78,
      "name": "Savannah Collins",
      "role": "UX Researcher",
      "team": "Design",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=73",
      "email": "savannah.collins@example.com"
    },
    {
      "id": 79,
      "name": "Nathan Bailey",
      "role": "Account Executive",
      "team": "Sales",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=74",
      "email": "nathan.bailey@example.com"
    },
    {
      "id": 80,
      "name": "Layla Mitchell",
      "role": "Data Scientist",
      "team": "Analytics",
      "status": "active",
      "age": "36",
      "avatar": "https://i.pravatar.cc/150?u=75",
      "email": "layla.mitchell@example.com"
    },
    {
      "id": 81,
      "name": "Eli Hill",
      "role": "Community Manager",
      "team": "Marketing",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=76",
      "email": "eli.hill@example.com"
    },
    {
      "id": 82,
      "name": "Anna Evans",
      "role": "Senior Developer",
      "team": "Engineering",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=77",
      "email": "anna.evans@example.com"
    },
    {
      "id": 83,
      "name": "Julian Gonzalez",
      "role": "Product Manager",
      "team": "Product",
      "status": "active",
      "age": "32",
      "avatar": "https://i.pravatar.cc/150?u=78",
      "email": "julian.gonzalez@example.com"
    },
    {
      "id": 84,
      "name": "Victoria Reed",
      "role": "Customer Support Specialist",
      "team": "Support",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=79",
      "email": "victoria.reed@example.com"
    },
    {
      "id": 85,
      "name": "Zachary Hernandez",
      "role": "Graphic Designer",
      "team": "Design",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=80",
      "email": "zachary.hernandez@example.com"
    },
    {
      "id": 86,
      "name": "Aaliyah Scott",
      "role": "Software Engineer",
      "team": "Engineering",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=81",
      "email": "aaliyah.scott@example.com"
    },
    {
      "id": 87,
      "name": "Henry Young",
      "role": "Content Writer",
      "team": "Marketing",
      "status": "active",
      "age": "34",
      "avatar": "https://i.pravatar.cc/150?u=82",
      "email": "henry.young@example.com"
    },
    {
      "id": 88,
      "name": "Katherine Cook",
      "role": "Data Analyst",
      "team": "Analytics",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=83",
      "email": "katherine.cook@example.com"
    },
    {
      "id": 89,
      "name": "Christian Martinez",
      "role": "Social Media Manager",
      "team": "Marketing",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=84",
      "email": "christian.martinez@example.com"
    },
    {
      "id": 90,
      "name": "Sarah Scott",
      "role": "UI/UX Designer",
      "team": "Design",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=85",
      "email": "sarah.scott@example.com"
    },
    {
      "id": 91,
      "name": "Gabriel Young",
      "role": "HR Manager",
      "team": "Human Resources",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=86",
      "email": "gabriel.young@example.com"
    },
    {
      "id": 92,
      "name": "Alexis Carter",
      "role": "Business Analyst",
      "team": "Operations",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=87",
      "email": "alexis.carter@example.com"
    },
    {
      "id": 93,
      "name": "Evan Perez",
      "role": "Quality Assurance Tester",
      "team": "Engineering",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=88",
      "email": "evan.perez@example.com"
    },
    {
      "id": 94,
      "name": "Claire Hill",
      "role": "Financial Analyst",
      "team": "Finance",
      "status": "active",
      "age": "34",
      "avatar": "https://i.pravatar.cc/150?u=89",
      "email": "claire.hill@example.com"
    },
    {
      "id": 95,
      "name": "Jason Wright",
      "role": "Sales Representative",
      "team": "Sales",
      "status": "active",
      "age": "30",
      "avatar": "https://i.pravatar.cc/150?u=90",
      "email": "jason.wright@example.com"
    },
    {
      "id": 96,
      "name": "Zoe Perez",
      "role": "Customer Success Manager",
      "team": "Customer Success",
      "status": "active",
      "age": "35",
      "avatar": "https://i.pravatar.cc/150?u=91",
      "email": "zoe.perez@example.com"
    },
    {
      "id": 97,
      "name": "Aaron Brown",
      "role": "Brand Manager",
      "team": "Marketing",
      "status": "active",
      "age": "31",
      "avatar": "https://i.pravatar.cc/150?u=92",
      "email": "aaron.brown@example.com"
    },
    {
      "id": 98,
      "name": "Abigail King",
      "role": "Systems Administrator",
      "team": "IT",
      "status": "active",
      "age": "28",
      "avatar": "https://i.pravatar.cc/150?u=93",
      "email": "abigail.king@example.com"
    },
    {
      "id": 99,
      "name": "Kevin Bell",
      "role": "Event Coordinator",
      "team": "Events",
      "status": "active",
      "age": "33",
      "avatar": "https://i.pravatar.cc/150?u=94",
      "email": "kevin.bell@example.com"
    },
    {
      "id": 100,
      "name": "Audrey Stewart",
      "role": "Project Manager",
      "team": "Project Management",
      "status": "active",
      "age": "29",
      "avatar": "https://i.pravatar.cc/150?u=95",
      "email": "audrey.stewart@example.com"
    }
  ]
  ;

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    "id": 6,
    "name": "Emily Johnson",
    "role": "Marketing Coordinator",
    "team": "Marketing",
    "status": "active",
    "age": "32",
    "avatar": "https://i.pravatar.cc/150?u=1",
    "email": "emily.johnson@example.com"
  },
  {
    "id": 7,
    "name": "Michael Smith",
    "role": "Senior Developer",
    "team": "Engineering",
    "status": "active",
    "age": "35",
    "avatar": "https://i.pravatar.cc/150?u=2",
    "email": "michael.smith@example.com"
  },
  {
    "id": 8,
    "name": "Sophia Brown",
    "role": "Product Manager",
    "team": "Product",
    "status": "active",
    "age": "30",
    "avatar": "https://i.pravatar.cc/150?u=3",
    "email": "sophia.brown@example.com"
  },
  {
    "id": 9,
    "name": "Matthew Taylor",
    "role": "Customer Support Specialist",
    "team": "Support",
    "status": "active",
    "age": "29",
    "avatar": "https://i.pravatar.cc/150?u=4",
    "email": "matthew.taylor@example.com"
  },
  {
    "id": 10,
    "name": "Olivia Martinez",
    "role": "Graphic Designer",
    "team": "Design",
    "status": "active",
    "age": "27",
    "avatar": "https://i.pravatar.cc/150?u=5",
    "email": "olivia.martinez@example.com"
  },
  {
    "id": 11,
    "name": "Ethan Wilson",
    "role": "Software Engineer",
    "team": "Engineering",
    "status": "active",
    "age": "31",
    "avatar": "https://i.pravatar.cc/150?u=6",
    "email": "ethan.wilson@example.com"
  },
  {
    "id": 12,
    "name": "Ava Anderson",
    "role": "Content Writer",
    "team": "Marketing",
    "status": "active",
    "age": "26",
    "avatar": "https://i.pravatar.cc/150?u=7",
    "email": "ava.anderson@example.com"
  },
  {
    "id": 13,
    "name": "Noah Thomas",
    "role": "Data Analyst",
    "team": "Analytics",
    "status": "active",
    "age": "33",
    "avatar": "https://i.pravatar.cc/150?u=8",
    "email": "noah.thomas@example.com"
  },
  {
    "id": 14,
    "name": "Isabella Garcia",
    "role": "Social Media Manager",
    "team": "Marketing",
    "status": "active",
    "age": "28",
    "avatar": "https://i.pravatar.cc/150?u=9",
    "email": "isabella.garcia@example.com"
  },
  {
    "id": 15,
    "name": "Liam Martinez",
    "role": "UI/UX Designer",
    "team": "Design",
    "status": "active",
    "age": "29",
    "avatar": "https://i.pravatar.cc/150?u=10",
    "email": "liam.martinez@example.com"
  },
  {
    "id": 16,
    "name": "Charlotte Clark",
    "role": "HR Manager",
    "team": "Human Resources",
    "status": "active",
    "age": "34",
    "avatar": "https://i.pravatar.cc/150?u=11",
    "email": "charlotte.clark@example.com"
  },
  {
    "id": 17,
    "name": "Mason Hernandez",
    "role": "Business Analyst",
    "team": "Operations",
    "status": "active",
    "age": "31",
    "avatar": "https://i.pravatar.cc/150?u=12",
    "email": "mason.hernandez@example.com"
  },
  {
    "id": 18,
    "name": "Amelia Lopez",
    "role": "Quality Assurance Tester",
    "team": "Engineering",
    "status": "active",
    "age": "27",
    "avatar": "https://i.pravatar.cc/150?u=13",
    "email": "amelia.lopez@example.com"
  },
  {
    "id": 19,
    "name": "James Lee",
    "role": "Financial Analyst",
    "team": "Finance",
    "status": "active",
    "age": "32",
    "avatar": "https://i.pravatar.cc/150?u=14",
    "email": "james.lee@example.com"
  },
  {
    "id": 20,
    "name": "Evelyn Scott",
    "role": "Sales Representative",
    "team": "Sales",
    "status": "active",
    "age": "30",
    "avatar": "https://i.pravatar.cc/150?u=15",
    "email": "evelyn.scott@example.com"
  },...extebdedata
];

export {columns, users};
