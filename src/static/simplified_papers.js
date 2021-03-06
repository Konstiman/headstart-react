const papers = [
  {
    readers: 124,
    x: 672.0232464636,
    y: 175.3176106317,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'Blended learning: Uncovering its transformative potential in higher education'
  },
  {
    readers: 129,
    x: 442.4969499578,
    y: 451.7695142028,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'Educating the next generation.'
  },
  {
    readers: 73,
    x: 435.8056286907,
    y: 869.666173224,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'Emerging Technologies in Distance Education'
  },
  {
    readers: 87,
    x: 897.8777943192,
    y: 869.6916332731,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'Handbook of Emerging Technologies for Learning'
  },
  {
    readers: 156,
    x: 632.694608643,
    y: 140.8814445969,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'Knowing Knowledge'
  },
  {
    readers: 106,
    x: 201.2611557623,
    y: 531.8548089099,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'The Future of Learning Institutions in a Digital Age'
  },
  {
    readers: 95,
    x: 194.4199263999,
    y: 861.8831317326,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'The good, the bad and the wiki: Evaluating student-generated content for collaborative learning'
  },
  {
    readers: 170,
    x: 505.938900389,
    y: 815.5730832341,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'Theory and practice of online learning'
  },
  {
    readers: 243,
    x: 47.4593772864,
    y: 690.5572023794,
    meanx: 447.7752875458,
    meany: 600.7994002427,
    area: 'The Future of Learning',
    title: 'What is Web 2.0? Ideas, technologies and implications for education by'
  },
  {
    readers: 87,
    x: 706.8144160345,
    y: 70.9710816323,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'Epistemological and methodological issues for the conceptualization, development, and assessment of ICT–TPCK: Advances in technological pedagogical content knowledge (TPCK)'
  },
  {
    readers: 50,
    x: 449.1206780056,
    y: 566.0828141215,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'Exploring teachers’ perceived self efficacy and technological pedagogical content knowledge with respect to educational use of the World Wide Web'
  },
  {
    readers: 105,
    x: 473.6828477397,
    y: 439.2400181048,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'Integrating technology into K-12 teaching and learning: current knowledge gaps and recommendations for future research'
  },
  {
    readers: 127,
    x: 875.2468685666,
    y: 496.91580543,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'Teachers ’ Technological Pedagogical Content Knowledge and Learning Activity Types: Curriculum-based Technology Integration Reframed'
  },
  {
    readers: 98,
    x: 523.4984020034,
    y: 682.1094928378,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'Technological Pedagogical Content Knowledge (TPACK): The Development and Validation of an Assessment Instrument for Preservice Teachers'
  },
  {
    readers: 358,
    x: 496.7632892793,
    y: 606.6777932037,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'Technological Pedagogical Content Knowledge: A Framework for Teacher Knowledge'
  },
  {
    readers: 43,
    x: 483.8226076454,
    y: 29.0063289081,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'Theoretical Perspectives Influencing the Use of Information Technology in Teaching and Learning'
  },
  {
    readers: 84,
    x: 721.9599485837,
    y: 198.1542296272,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'Tracing the development of teacher knowledge in a design seminar: Integrating content, pedagogy and technology'
  },
  {
    readers: 97,
    x: 686.0099480873,
    y: 405.126258453,
    meanx: 601.8798895495,
    meany: 388.2537580354,
    area: 'Technological Pedagogical Content Knowledge',
    title: 'What Happens When Teachers Design Educational Technology? the Development of Technological Pedagogical Content Knowledge'
  },
  {
    readers: 76,
    x: 823.8160260235,
    y: 503.6161025798,
    meanx: 426.9476168401,
    meany: 290.3320470518,
    area: 'Personal Learning Environment',
    title: 'Connectivism: Learning theory of the future or vestige of the past?'
  },
  {
    readers: 98,
    x: 888.5376613093,
    y: 404.4198615668,
    meanx: 426.9476168401,
    meany: 290.3320470518,
    area: 'Personal Learning Environment',
    title: 'Investigating faculty decisions to adopt Web 2.0 technologies: Theory and empirical tests'
  },
  {
    readers: 65,
    x: 213.3714685853,
    y: 348.4989341456,
    meanx: 426.9476168401,
    meany: 290.3320470518,
    area: 'Personal Learning Environment',
    title: 'Patterns of Personal Learning Environments'
  },
  {
    readers: 142,
    x: 222.3985752934,
    y: 279.8900902678,
    meanx: 426.9476168401,
    meany: 290.3320470518,
    area: 'Personal Learning Environment',
    title: 'Personal Learning Environments'
  },
  {
    readers: 154,
    x: 393.4089341772,
    y: 0,
    meanx: 426.9476168401,
    meany: 290.3320470518,
    area: 'Personal Learning Environment',
    title: 'Personal Learning Environments - the future of eLearning ?'
  },
  {
    readers: 113,
    x: 20.1530356522,
    y: 418.851349279,
    meanx: 426.9476168401,
    meany: 290.3320470518,
    area: 'Personal Learning Environment',
    title: 'Social software and participatory learning: Pedagogical choices with technology affordances in the Web 2.0 era Introduction: Social trends and challenges'
  },
  {
    readers: 58,
    x: 663.4633557046,
    y: 555.4928714709,
    meanx: 446.2084102615,
    meany: 317.9456444618,
    area: 'Online Learning and Technology Adoption',
    title: 'A theory of online learning as online participation'
  },
  {
    readers: 86,
    x: 789.2177906085,
    y: 283.4871199543,
    meanx: 446.2084102615,
    meany: 290.3320470518,
    area: 'Online Learning and Technology Adoption',
    title: 'Critical Inquiry in a Text-Based Environment: Computer Conferencing in Higher Education'
  },
  {
    readers: 169,
    x: 124.4199194114,
    y: 250.0215348859,
    meanx: 446.2084102615,
    meany: 290.3320470518,
    area: 'Online Learning and Technology Adoption',
    title: 'Evaluation of Evidence-Based Practices in Online Learning: A Meta-Analysis and Review of Online Learning Studies'
  },
  {
    readers: 139,
    x: 737.0243413029,
    y: 314.3420676805,
    meanx: 446.2084102615,
    meany: 290.3320470518,
    area: 'Online Learning and Technology Adoption',
    title: 'Findings on Facebook in higher education: A comparison of college faculty and student uses and perceptions of social networking sites'
  },
  {
    readers: 69,
    x: 298.8887725176,
    y: 270.5362478232,
    meanx: 446.2084102615,
    meany: 290.3320470518,
    area: 'Online Learning and Technology Adoption',
    title: 'Researching the community of inquiry framework: Review, issues, and future directions'
  },
  {
    readers: 116,
    x: 64.2362820237,
    y: 233.7940249562,
    meanx: 446.2084102615,
    meany: 290.3320470518,
    area: 'Online Learning and Technology Adoption',
    title: 'Understanding Technology Adoption: Theory and Future Directions for Informal Learning'
  },
  {
    readers: 112,
    x: 768.6556897452,
    y: 828.1255937402,
    meanx: 567.6643927509,
    meany: 499.4946661343,
    area: 'Mobile Learning',
    title: 'Mobile learning for HIV/AIDS healthcare worker training in resource-limited settings.'
  },
  {
    readers: 112,
    x: 158.7997448189,
    y: 364.4628115805,
    meanx: 567.6643927509,
    meany: 499.4946661343,
    area: 'Mobile Learning',
    title: 'Mobile learning: A framework and evaluation'
  },
  {
    readers: 121,
    x: 775.5377436885,
    y: 305.8955930823,
    meanx: 567.6643927509,
    meany: 499.4946661343,
    area: 'Mobile Learning',
    title: 'The effectiveness of m-learning in the form of podcast revision lectures in higher education'
  },
  {
    readers: 220,
    x: 666.1518496553,
    y: 876.2557156697,
    meanx: 526.4174104376,
    meany: 393.9149770531,
    area: 'Meta Analysis',
    title: 'Developing the theory of formative assessment'
  },
  {
    readers: 207,
    x: 450.3954405768,
    y: -23.7442843303,
    meanx: 526.4174104376,
    meany: 393.9149770531,
    area: 'Meta Analysis',
    title: 'Evaluation of Evidence-Based Practices in Online Learning'
  },
  {
    readers: 79,
    x: 726.5005546694,
    y: 360.2189137627,
    meanx: 526.4174104376,
    meany: 393.9149770531,
    area: 'Meta Analysis',
    title: 'Factors Affecting Technology Uses in Schools: An Ecological Perspective'
  },
  {
    readers: 102,
    x: 21.3981157154,
    y: 661.9918090701,
    meanx: 526.4174104376,
    meany: 393.9149770531,
    area: 'Meta Analysis',
    title: 'Mapping pedagogy and tools for effective learning design'
  },
  {
    readers: 97,
    x: 335.3441027647,
    y: 241.4667911766,
    meanx: 526.4174104376,
    meany: 393.9149770531,
    area: 'Meta Analysis',
    title: 'Mobile Learning projects - a critical analysis of the state of the art'
  },
  {
    readers: 104,
    x: 551.9151371181,
    y: 214.7831086824,
    meanx: 526.4174104376,
    meany: 393.9149770531,
    area: 'Meta Analysis',
    title: 'Teaching Courses Online: A Review of the Research'
  },
  {
    readers: 109,
    x: 766.5036511255,
    y: 767.9876818422,
    meanx: 526.4174104376,
    meany: 393.9149770531,
    area: 'Meta Analysis',
    title: 'Technology in Support of Collaborative Learning'
  },
  {
    readers: 73,
    x: 832.864871093,
    y: 52.3600805515,
    meanx: 526.4174104376,
    meany: 393.9149770531,
    area: 'Meta Analysis',
    title: 'What Forty Years of Research Says About the Impact of Technology on Learning: A Second-Order Meta-Analysis and Validation Study'
  },
  {
    readers: 103,
    x: 729.6181672071,
    y: 716.7257117554,
    meanx: 404.65553998,
    meany: 435.5735736544,
    area: 'Instructional Design',
    title: 'First principles of instruction'
  },
  {
    readers: 45,
    x: 22.3023322317,
    y: 38.8160029615,
    meanx: 404.65553998,
    meany: 435.5735736544,
    area: 'Instructional Design',
    title: 'Learning with Media'
  },
  {
    readers: 51,
    x: 154.6601360756,
    y: 383.687167035,
    meanx: 404.65553998,
    meany: 435.5735736544,
    area: 'Instructional Design',
    title: 'Levels of Technology Implementation (LoTi): A Framework for Measuring Classroom Technology Use'
  },
  {
    readers: 103,
    x: 387.4429422088,
    y: 417.9590200162,
    meanx: 404.65553998,
    meany: 435.5735736544,
    area: 'Instructional Design',
    title: 'Media will never influence learning'
  },
  {
    readers: 89,
    x: 794.0560489122,
    y: 727.8181875734,
    meanx: 404.65553998,
    meany: 435.5735736544,
    area: 'Instructional Design',
    title: 'Reconsidering Research on Learning from Media'
  },
  {
    readers: 92,
    x: 339.8536132449,
    y: 328.4353525848,
    meanx: 404.65553998,
    meany: 435.5735736544,
    area: 'Instructional Design',
    title: 'Smart People or Smart Contexts? Cognition, Ability, and Talent Development in an Age of Situated Approaches to Knowing and Learning'
  },
  {
    readers: 81,
    x: 220.2688157186,
    y: 611.7572558266,
    meanx: 519.0261826652,
    meany: 368.7753802104,
    area: 'Game-based Learning',
    title: 'Augmented Reality Simulations on Handheld Computers'
  },
  {
    readers: 116,
    x: 666.2955413592,
    y: 68.82076167,
    meanx: 519.0261826652,
    meany: 368.7753802104,
    area: 'Game-based Learning',
    title: 'Learning by Design: good video games as learning machines'
  },
  {
    readers: 177,
    x: 836.5123554062,
    y: 868.4044847726,
    meanx: 519.0261826652,
    meany: 368.7753802104,
    area: 'Game-based Learning',
    title: 'Literature Review in Games and Learning Literature Review in Games and Learning'
  },
  {
    readers: 140,
    x: 831.8235604563,
    y: 19.6846203646,
    meanx: 519.0261826652,
    meany: 368.7753802104,
    area: 'Game-based Learning',
    title: 'Making learning fun: Quest Atlantis, a game without guns'
  },
  {
    readers: 111,
    x: 234.8377656333,
    y: 492.7098415898,
    meanx: 519.0261826652,
    meany: 368.7753802104,
    area: 'Game-based Learning',
    title: 'Playing and Making Games for Learning: Instructionist and Constructionist Perspectives for Game Studies'
  },
  {
    readers: 74,
    x: 90.0093978882,
    y: 385.9062386249,
    meanx: 519.0261826652,
    meany: 368.7753802104,
    area: 'Game-based Learning',
    title: 'Scientific Habits of Mind in Virtual Worlds'
  },
  {
    readers: 107,
    x: 671.7022505975,
    y: 338.0542967717,
    meanx: 519.0261826652,
    meany: 368.7753802104,
    area: 'Game-based Learning',
    title: 'Video games and the future of learning'
  },
  {
    readers: 187,
    x: 600.7597742621,
    y: 164.8655420629,
    meanx: 519.0261826652,
    meany: 368.7753802104,
    area: 'Game-based Learning',
    title: 'What video games have to teach us about learning and literacy'
  },
  {
    readers: 195,
    x: 814.02535334,
    y: 549.2212624003,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'Confronting the Challenges of Participatory Culture: Media Education for the 21 Century'
  },
  {
    readers: 480,
    x: 502.1907017658,
    y: 626.2119635679,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'Digital Natives, Digital Immigrants Part 1'
  },
  {
    readers: 134,
    x: 760.361265599,
    y: 297.3596750749,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'Learning, Teaching, and Scholarship in a Digital Age: Web 2.0 and Classroom Research: What Path Should We Take Now?'
  },
  {
    readers: 196,
    x: 538.1432838925,
    y: 831.2592659767,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'Living and Learning with New Media: Summary of Findings from the Digital Youth Project'
  },
  {
    readers: 131,
    x: 222.8105794018,
    y: 206.9116846738,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'Net generation or Digital Natives: Is there a distinct new generation entering university?'
  },
  {
    readers: 852,
    x: 790.069670312,
    y: 0,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'Social Network Sites: Definition, History, and Scholarship'
  },
  {
    readers: 416,
    x: 155.904170615,
    y: 77.1516206342,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'The \'digital natives\' debate: A critical review of the evidence'
  },
  {
    readers: 103,
    x: 730.0296479647,
    y: 834.2730442008,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'The appropriation and repurposing of social technologies in higher education'
  },
  {
    readers: 171,
    x: 643.6444501608,
    y: 847.9200624268,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'The effect of Twitter on college student engagement and grades'
  },
  {
    readers: 187,
    x: 16.4619271234,
    y: 631.7679279267,
    meanx: 517.3641050175,
    meany: 490.2076506882,
    area: 'Digital Natives',
    title: 'The paradoxical future of digital learning'
  },
  {
    readers: 100,
    x: 138.3968519568,
    y: 116.5045738891,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'Design-based research and technology-enhanced learning environments'
  },
  {
    readers: 107,
    x: 515.5224049454,
    y: 259.1923322752,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'Design-Based Research Methods for Studying Learning in Context: Introduction'
  },
  {
    readers: 209,
    x: 460.8778765698,
    y: 825.4797837188,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'Design-Based Research: An Emerging Paradigm for Educational Inquiry'
  },
  {
    readers: 110,
    x: 900,
    y: 405.7773214708,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'Design-Based Research: Putting a Stake in the Ground'
  },
  {
    readers: 249,
    x: 423.7790277532,
    y: 547.1346317477,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'Design Experiments in Educational Research'
  },
  {
    readers: 101,
    x: 0,
    y: 746.8456677791,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'Design Research: Theoretical and Methodological Issues'
  },
  {
    readers: 121,
    x: 715.322074879,
    y: 696.9071606167,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'On the Science of Education Design Studies'
  },
  {
    readers: 97,
    x: 24.987701657,
    y: 636.4504242345,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'On the Theoretical Breadth of Design-Based Research in Education'
  },
  {
    readers: 158,
    x: 610.6444982265,
    y: 735.8348338232,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'Quantifying Qualitative Analyses of Verbal Data: A Practical Guide'
  },
  {
    readers: 167,
    x: 142.839299401,
    y: 537.3568732057,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'The Role of Design in Research: The Integrative Learning Design Framework'
  },
  {
    readers: 58,
    x: 317.3780389022,
    y: 804.0505228453,
    meanx: 386.3407067537,
    meany: 573.7758296006,
    area: 'Design-based Research',
    title: 'Toward a design science of education'
  },
  {
    readers: 91,
    x: 620.2529263486,
    y: 636.5822043572,
    meanx: 447.9385790826,
    meany: 447.380666542,
    area: 'Computer-supported Collaborative Learning',
    title: 'A framework to analyze argumentative knowledge construction in computer-supported collaborative learning'
  },
  {
    readers: 172,
    x: 59.0126021753,
    y: 455.542989836,
    meanx: 447.9385790826,
    meany: 447.380666542,
    area: 'Computer-supported Collaborative Learning',
    title: 'Computer-supported collaborative learning: An historical perspective'
  },
  {
    readers: 109,
    x: 843.0333441856,
    y: 131.208653288,
    meanx: 447.9385790826,
    meany: 447.380666542,
    area: 'Computer-supported Collaborative Learning',
    title: 'Knowledge building: Theory, pedagogy, and technology'
  },
  {
    readers: 86,
    x: 516.5173321495,
    y: 412.4566558465,
    meanx: 447.9385790826,
    meany: 447.380666542,
    area: 'Computer-supported Collaborative Learning',
    title: 'The pedagogical challenges to collaborative technologies'
  },
  {
    readers: 157,
    x: 200.8766905538,
    y: 601.1128293824,
    meanx: 447.9385790826,
    meany: 447.380666542,
    area: 'Computer-supported Collaborative Learning',
    title: 'What do you mean by \' collaborative learning \'?'
  },
  {
    readers: 156,
    x: 714.6735516045,
    y: 87.1575835341,
    meanx: 535.3528217712,
    meany: 106.7591799452,
    area: 'Community of Practice',
    title: 'A survey of current research on online communities of practice'
  },
  {
    readers: 232,
    x: 632.186940975,
    y: 40.8188766882,
    meanx: 535.3528217712,
    meany: 106.7591799452,
    area: 'Community of Practice',
    title: 'Communities of Practice: Learning, Meaning, and Identity'
  },
  {
    readers: 125,
    x: 307.988428765,
    y: 117.1086915265,
    meanx: 535.3528217712,
    meany: 106.7591799452,
    area: 'Community of Practice',
    title: 'Cultivating communities of practice: A guide to managing knowledge'
  },
  {
    readers: 662,
    x: 486.5623657402,
    y: 181.9515680319,
    meanx: 535.3528217712,
    meany: 106.7591799452,
    area: 'Community of Practice',
    title: 'Situated learning: Legitimate peripheral participation'
  },
  {
    readers: 198,
    x: 137.7958182735,
    y: 47.7491320879,
    meanx: 346.9329971155,
    meany: 296.7243487136,
    area: 'Cognitive Models',
    title: 'Cognitive Architecture and Instructional Design'
  },
  {
    readers: 199,
    x: 509.0789492629,
    y: 517.7580000461,
    meanx: 346.9329971155,
    meany: 296.7243487136,
    area: 'Cognitive Models',
    title: 'Cognitive load during problem solving: Effects on learning'
  },
  {
    readers: 186,
    x: 0,
    y: -19.7149840574,
    meanx: 346.9329971155,
    meany: 296.7243487136,
    area: 'Cognitive Models',
    title: 'Nine Ways to Reduce Cognitive Load in Multimedia Learning'
  },
  {
    readers: 178,
    x: 791.3516238914,
    y: 342.7663356062,
    meanx: 346.9329971155,
    meany: 296.7243487136,
    area: 'Cognitive Models',
    title: 'Scaffolding and Achievement in Problem-Based and Inquiry Learning: A Response to Kirschner, Sweller, and Clark (2006)'
  },
  {
    readers: 99,
    x: 189.14431929,
    y: 856.2951761384,
    meanx: 346.9329971155,
    meany: 296.7243487136,
    area: 'Cognitive Models',
    title: 'Toward a design theory of problem solving'
  },
  {
    readers: 309,
    x: 454.2272719754,
    y: 35.4924324606,
    meanx: 346.9329971155,
    meany: 296.7243487136,
    area: 'Cognitive Models',
    title: 'Work: An Analysis of the Failure of Constructivist, Discovery, Problem-Based, Experiential, and Inquiry-Based Teaching'
  }
];

export default papers;
