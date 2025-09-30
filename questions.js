// questions.js

// === Multiple Choice (sample) ===
const mcBank = [
  {
    id: "mc1",
    q: "Which IR theory emphasizes the anarchic structure of the international system?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc2",
    q: "Who argued that 'anarchy is what states make of it'?",
    choices: ["Kenneth Waltz", "John Mearsheimer", "Alexander Wendt", "Robert Keohane"],
    answer: 2
  },
  {
    id: "mc3",
    q: "The democratic peace theory claims:",
    choices: [
      "Democracies never fight wars",
      "Democracies rarely fight each other",
      "Democracies are more likely to win wars",
      "Democracies always cooperate economically"
    ],
    answer: 1
  },
  {
    id: "mc4",
    q: "Which concept best describes states joining a stronger power rather than balancing against it?",
    choices: ["Bandwagoning", "Balancing", "Hedging", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc5",
    q: "According to Waltz, what primarily explains international outcomes?",
    choices: ["Leaders’ psychology", "Domestic institutions", "System polarity and distribution of power", "Norm diffusion"],
    answer: 2
  },
  {
    id: "mc6",
    q: "Which IR theory focuses most heavily on the role of international institutions in mitigating anarchy?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 1
  },
  {
    id: "mc7",
    q: "The 'security dilemma' refers to:",
    choices: [
      "States feeling insecure when they lack allies",
      "The risk of misperception between democracies",
      "Actions taken for defense that appear offensive to others, causing spirals of insecurity",
      "The inability of weak states to resist strong states"
    ],
    answer: 2
  },
  {
    id: "mc8",
    q: "Which of the following scholars is most associated with offensive realism?",
    choices: ["Robert Keohane", "Alexander Wendt", "John Mearsheimer", "Robert Jervis"],
    answer: 2
  },
  {
    id: "mc9",
    q: "The Prisoner’s Dilemma is often used in IR to illustrate:",
    choices: [
      "The benefits of international law",
      "The challenges of cooperation under anarchy",
      "The inevitability of economic interdependence",
      "The logic of deterrence"
    ],
    answer: 1
  },
  {
    id: "mc10",
    q: "Which IR approach highlights the power of ideas, norms, and identities?",
    choices: ["Realism", "Liberalism", "Constructivism", "Neorealism"],
    answer: 2
  },
  {
    id: "mc11",
    q: "Which of the following best describes 'polarity' in international relations?",
    choices: [
      "The ideological division of states",
      "The number of great powers in the system",
      "The distribution of nuclear weapons",
      "The role of international organizations"
    ],
    answer: 1
  },
  {
    id: "mc12",
    q: "According to defensive realism, states seek:",
    choices: [
      "Maximum power regardless of cost",
      "Security through maintaining the balance of power",
      "Normative legitimacy in global governance",
      "Absolute economic gains"
    ],
    answer: 1
  },
  {
    id: "mc13",
    q: "Which of the following IR theorists is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Kenneth Waltz", "Hans Morgenthau", "Stephen Walt"],
    answer: 0
  },
  {
    id: "mc14",
    q: "The term 'buck-passing' refers to:",
    choices: [
      "A strategy of shifting the burden of balancing to another state",
      "Delegating authority to international institutions",
      "Relying on allies for economic security",
      "Avoiding nuclear deterrence responsibilities"
    ],
    answer: 0
  },
  {
    id: "mc15",
    q: "What is the central assumption of Marxist IR theory?",
    choices: [
      "Class conflict drives international relations",
      "Anarchy shapes state behavior",
      "Institutions mitigate conflict",
      "Norms define interests"
    ],
    answer: 0
  },
  {
    id: "mc16",
    q: "Which concept explains why states may pursue policies that harm both themselves and others?",
    choices: ["Relative gains", "Absolute gains", "Soft power", "Democratic peace"],
    answer: 0
  },
  {
    id: "mc17",
    q: "In deterrence theory, 'second-strike capability' refers to:",
    choices: [
      "The ability to recover economically after war",
      "The ability to retaliate with nuclear weapons even after being attacked",
      "The right to launch preemptive wars",
      "The ability to compel an adversary to act"
    ],
    answer: 1
  },
  {
    id: "mc18",
    q: "Who argued that bipolar systems are more stable than multipolar systems?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer", "Bruce Russett"],
    answer: 0
  },
  {
    id: "mc19",
    q: "Which IR concept is most closely associated with Joseph Nye?",
    choices: ["Offensive realism", "Soft power", "Balance of threat", "Democratic peace"],
    answer: 1
  },
  {
    id: "mc20",
    q: "According to liberal theories, interdependence between states leads to:",
    choices: [
      "Increased risk of conflict",
      "Reduced likelihood of war",
      "Collapse of sovereignty",
      "Dominance of great powers"
    ],
    answer: 1
  },
  {
    id: "mc21",
    q: "Which theory views international politics as a struggle for power rooted in human nature?",
    choices: ["Classical realism", "Neorealism", "Neoliberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc22",
    q: "Which of the following best describes 'relative gains'?",
    choices: [
      "The benefits states receive regardless of others",
      "The benefits states receive compared to other states",
      "The expansion of domestic economic welfare",
      "The cumulative impact of institutional cooperation"
    ],
    answer: 1
  },
  {
    id: "mc23",
    q: "Which international institution was founded after World War II to promote collective security?",
    choices: ["League of Nations", "European Union", "United Nations", "NATO"],
    answer: 2
  },
  {
    id: "mc24",
    q: "The 'balance of threat' theory is associated with which scholar?",
    choices: ["Stephen Walt", "Kenneth Waltz", "Robert Keohane", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc25",
    q: "According to neoliberal institutionalists, institutions help states cooperate by:",
    choices: [
      "Changing state identities",
      "Providing information and reducing transaction costs",
      "Redistributing power among great powers",
      "Eliminating anarchy"
    ],
    answer: 1
  },
  {
    id: "mc26",
    q: "Which conflict is often cited as a failure of deterrence during the Cold War?",
    choices: [
      "Cuban Missile Crisis",
      "Vietnam War",
      "Korean War",
      "Soviet invasion of Afghanistan"
    ],
    answer: 2
  },
  {
    id: "mc27",
    q: "The 'tragedy of great power politics' is associated with:",
    choices: ["Kenneth Waltz", "Robert Jervis", "John Mearsheimer", "Hans Morgenthau"],
    answer: 2
  },
  {
    id: "mc28",
    q: "Which theory emphasizes the importance of domestic political regimes in shaping foreign policy?",
    choices: ["Democratic peace theory", "Balance of power theory", "Offensive realism", "Marxism"],
    answer: 0
  },
  {
    id: "mc29",
    q: "Which level of analysis focuses on leaders’ misperceptions and cognitive biases?",
    choices: ["Systemic", "State", "Individual", "Global"],
    answer: 2
  },
  {
    id: "mc30",
    q: "Which of the following is an example of a collective security organization?",
    choices: ["NATO", "Warsaw Pact", "United Nations", "ASEAN"],
    answer: 2
  },
  {
    id: "mc31",
    q: "Which IR concept describes the unintended consequences of states seeking security that lead to greater insecurity?",
    choices: ["Bandwagoning", "Security dilemma", "Collective security", "Relative gains"],
    answer: 1
  },
  {
    id: "mc32",
    q: "Which approach highlights the influence of non-state actors such as NGOs and multinational corporations?",
    choices: ["Realism", "Constructivism", "Liberalism", "Neorealism"],
    answer: 2
  },
  {
    id: "mc33",
    q: "Hans Morgenthau is most associated with which school of thought?",
    choices: ["Neorealism", "Classical realism", "Constructivism", "Neoliberalism"],
    answer: 1
  },
  {
    id: "mc34",
    q: "What does 'self-help' mean in the context of realism?",
    choices: [
      "States rely on their own capabilities for security",
      "States depend on international institutions for aid",
      "Citizens must support national defense",
      "States must cooperate to survive"
    ],
    answer: 0
  },
  {
    id: "mc35",
    q: "Which IR theory is most likely to argue that norms against slavery and colonialism shape state behavior?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 2
  },
  {
    id: "mc36",
    q: "Which of the following best exemplifies 'collective security'?",
    choices: [
      "States form alliances to balance against a stronger power",
      "States agree that an attack on one is an attack on all",
      "States pursue unilateral security measures",
      "States seek prestige through armament"
    ],
    answer: 1
  },
  {
    id: "mc37",
    q: "Which of the following is a core assumption of neorealism?",
    choices: [
      "Human nature drives conflict",
      "Anarchy constrains state behavior",
      "Democracy leads to peace",
      "Norms are socially constructed"
    ],
    answer: 1
  },
  {
    id: "mc38",
    q: "Robert Jervis is most associated with which IR concept?",
    choices: ["Security dilemma", "Democratic peace", "Complex interdependence", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc39",
    q: "Which of the following would a dependency theorist emphasize?",
    choices: [
      "The global capitalist system perpetuates inequality",
      "Anarchy drives conflict",
      "Institutions enable cooperation",
      "Identity shapes interests"
    ],
    answer: 0
  },
  {
    id: "mc40",
    q: "Which concept refers to the spread of nuclear weapons to additional states?",
    choices: ["Deterrence", "Nuclear proliferation", "Second-strike capability", "Extended deterrence"],
    answer: 1
  },
  {
    id: "mc41",
    q: "Which of the following best explains 'hegemonic stability theory'?",
    choices: [
      "A hegemon creates order in the international system",
      "Balance of power produces stability",
      "Democracies do not fight each other",
      "Institutions reduce transaction costs"
    ],
    answer: 0
  },
  {
    id: "mc42",
    q: "According to liberalism, international trade tends to:",
    choices: [
      "Increase conflict",
      "Promote peace and cooperation",
      "Undermine sovereignty",
      "Weaken institutions"
    ],
    answer: 1
  },
  {
    id: "mc43",
    q: "Which conflict illustrates the concept of 'proxy war' during the Cold War?",
    choices: ["World War I", "Korean War", "Cuban Missile Crisis", "Crimean War"],
    answer: 1
  },
  {
    id: "mc44",
    q: "Which of the following would constructivists highlight in explaining the end of the Cold War?",
    choices: [
      "Economic interdependence",
      "Shifts in Soviet identity and norms",
      "Military superiority of NATO",
      "Balance of power"
    ],
    answer: 1
  },
  {
    id: "mc45",
    q: "Which term best describes efforts to prevent the spread of nuclear weapons?",
    choices: ["Deterrence", "Counterforce", "Nonproliferation", "Compellence"],
    answer: 2
  },
  {
    id: "mc46",
    q: "What does 'balance of power' theory predict?",
    choices: [
      "States will align against the strongest power",
      "States will bandwagon with the strongest power",
      "Democracies will not fight one another",
      "Institutions always prevent conflict"
    ],
    answer: 0
  },
  {
    id: "mc47",
    q: "Which level of analysis would focus on regime type to explain foreign policy?",
    choices: ["Systemic", "State", "Individual", "Global"],
    answer: 1
  },
  {
    id: "mc48",
    q: "Which of the following is a criticism of democratic peace theory?",
    choices: [
      "It is based on too few cases",
      "It ignores economic interdependence",
      "It assumes norms are irrelevant",
      "It overstates the role of anarchy"
    ],
    answer: 0
  },
  {
    id: "mc49",
    q: "What is the central claim of offensive realism?",
    choices: [
      "States seek only enough power to ensure security",
      "States seek to maximize power whenever possible",
      "States prefer cooperation through institutions",
      "States are constrained by norms"
    ],
    answer: 1
  },
  {
    id: "mc50",
    q: "Which scholar is most associated with the concept of 'complex interdependence'?",
    choices: ["Robert Keohane & Joseph Nye", "John Mearsheimer", "Hans Morgenthau", "Stephen Walt"],
    answer: 0
  },
  {
    id: "mc51",
    q: "Which term refers to states using economic tools like sanctions or aid to influence others?",
    choices: ["Soft power", "Economic statecraft", "Dependency theory", "Neorealism"],
    answer: 1
  },
  {
    id: "mc52",
    q: "Which theory predicts that rising powers and established powers are prone to conflict?",
    choices: [
      "Hegemonic stability theory",
      "Power transition theory",
      "Democratic peace theory",
      "Dependency theory"
    ],
    answer: 1
  },
  {
    id: "mc53",
    q: "Which international relations concept emphasizes prestige and reputation as sources of power?",
    choices: ["Hard power", "Soft power", "Constructivism", "Bandwagoning"],
    answer: 1
  },
  {
    id: "mc54",
    q: "What is the difference between deterrence and compellence?",
    choices: [
      "Deterrence prevents action, compellence forces action",
      "Deterrence is economic, compellence is military",
      "Deterrence is systemic, compellence is individual",
      "Deterrence is liberal, compellence is realist"
    ],
    answer: 0
  },
  {
    id: "mc55",
    q: "Which of the following best describes a unipolar system?",
    choices: [
      "Two dominant powers",
      "Multiple roughly equal powers",
      "One dominant power with no peer competitor",
      "A balance between alliances"
    ],
    answer: 2
  },
  {
    id: "mc56",
    q: "Who argued that institutions matter only when supported by the distribution of power?",
    choices: ["Robert Keohane", "Kenneth Waltz", "John Mearsheimer", "Alexander Wendt"],
    answer: 2
  },
  {
    id: "mc57",
    q: "Which of the following is an example of a 'failed state' in IR literature?",
    choices: ["Germany", "Somalia", "Japan", "Canada"],
    answer: 1
  },
  {
    id: "mc58",
    q: "The term 'polarity' in IR refers to:",
    choices: [
      "The distribution of power across major actors",
      "The ideological differences among states",
      "The division between East and West",
      "The degree of globalization"
    ],
    answer: 0
  },
  {
    id: "mc59",
    q: "What is the 'long peace' according to John Lewis Gaddis?",
    choices: [
      "Peace in Europe after the Napoleonic Wars",
      "The absence of major war between great powers since 1945",
      "The détente period during the Cold War",
      "The peace established by the League of Nations"
    ],
    answer: 1
  },
  {
    id: "mc60",
    q: "Which theory argues that economic interdependence makes war less likely?",
    choices: [
      "Marxism",
      "Commercial liberalism",
      "Offensive realism",
      "Defensive realism"
    ],
    answer: 1
  },
  {
    id: "mc61",
    q: "Which international crisis nearly brought the US and USSR to nuclear war?",
    choices: [
      "Berlin Blockade",
      "Cuban Missile Crisis",
      "Vietnam War",
      "Korean War"
    ],
    answer: 1
  },
  {
    id: "mc62",
    q: "Who developed the concept of 'hegemonic stability theory'?",
    choices: ["Robert Keohane", "Stephen Krasner", "Charles Kindleberger", "John Mearsheimer"],
    answer: 2
  },
  {
    id: "mc63",
    q: "Which approach in IR emphasizes the historical and social construction of identities?",
    choices: ["Realism", "Liberalism", "Constructivism", "Neorealism"],
    answer: 2
  },
  {
    id: "mc64",
    q: "What is the main claim of dependency theory?",
    choices: [
      "Core states exploit peripheral states in the capitalist system",
      "States are independent actors in an anarchic world",
      "International institutions foster cooperation",
      "Norms shape state identity"
    ],
    answer: 0
  },
  {
    id: "mc65",
    q: "Which of the following is NOT a core liberal assumption?",
    choices: [
      "States can cooperate through institutions",
      "Economic interdependence reduces war",
      "Anarchy inevitably produces conflict",
      "Democracy contributes to peace"
    ],
    answer: 2
  },
  {
    id: "mc66",
    q: "Which type of realism emphasizes maximizing relative power to ensure survival?",
    choices: ["Defensive realism", "Offensive realism", "Classical realism", "Neorealism"],
    answer: 1
  },
  {
    id: "mc67",
    q: "Who wrote 'Politics Among Nations'?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "E.H. Carr", "Robert Keohane"],
    answer: 1
  },
  {
    id: "mc68",
    q: "The 'tragedy of the commons' illustrates:",
    choices: [
      "The inevitability of nuclear proliferation",
      "The overuse of shared resources under anarchy",
      "The benefits of hegemonic stability",
      "The decline of collective security"
    ],
    answer: 1
  },
  {
    id: "mc69",
    q: "What concept did Robert Keohane and Joseph Nye popularize?",
    choices: ["Democratic peace", "Complex interdependence", "Power transition theory", "Constructivism"],
    answer: 1
  },
  {
    id: "mc70",
    q: "Which of the following conflicts is often used to critique democratic peace theory?",
    choices: [
      "U.S. Civil War",
      "Kargil War (1999)",
      "Vietnam War",
      "Cuban Missile Crisis"
    ],
    answer: 1
  },
  {
    id: "mc71",
    q: "What is the main difference between neorealism and classical realism?",
    choices: [
      "Neorealism emphasizes structure, classical realism emphasizes human nature",
      "Neorealism emphasizes domestic politics, classical realism emphasizes anarchy",
      "Neorealism emphasizes identity, classical realism emphasizes norms",
      "Neorealism emphasizes cooperation, classical realism emphasizes institutions"
    ],
    answer: 0
  },
  {
    id: "mc72",
    q: "The concept of 'soft balancing' involves:",
    choices: [
      "Building nuclear weapons",
      "Using institutions, diplomacy, and economics to balance power",
      "Direct military confrontation",
      "Joining alliances against threats"
    ],
    answer: 1
  },
  {
    id: "mc73",
    q: "Which theory claims that war is less likely in a bipolar world?",
    choices: [
      "Balance of power theory",
      "Power transition theory",
      "Neorealism",
      "Offensive realism"
    ],
    answer: 2
  },
  {
    id: "mc74",
    q: "The 'clash of civilizations' thesis is associated with:",
    choices: ["Francis Fukuyama", "Samuel Huntington", "Robert Jervis", "Joseph Nye"],
    answer: 1
  },
  {
    id: "mc75",
    q: "Which of the following best exemplifies 'extended deterrence'?",
    choices: [
      "A state deters attack against itself",
      "A state threatens retaliation to protect an ally",
      "A state uses nuclear weapons against non-nuclear states",
      "A state engages in arms races to deter neighbors"
    ],
    answer: 1
  },
  {
    id: "mc76",
    q: "Which theory emphasizes the 'democratic peace'?",
    choices: ["Neorealism", "Neoliberalism", "Liberalism", "Marxism"],
    answer: 2
  },
  {
    id: "mc77",
    q: "What is the main contribution of Kenneth Waltz's 'Theory of International Politics'?",
    choices: [
      "Introduced constructivism",
      "Defined neorealism and systemic analysis",
      "Critiqued liberalism",
      "Developed dependency theory"
    ],
    answer: 1
  },
  {
    id: "mc78",
    q: "Which state behavior best illustrates 'balancing'?",
    choices: [
      "Joining an alliance against a rising power",
      "Bandwagoning with a stronger state",
      "Remaining neutral",
      "Forming economic partnerships"
    ],
    answer: 0
  },
  {
    id: "mc79",
    q: "Which concept describes the ability to influence others through culture and values?",
    choices: ["Hard power", "Soft power", "Relative gains", "Balance of power"],
    answer: 1
  },
  {
    id: "mc80",
    q: "Which theory argues that states pursue power not only for survival but for dominance?",
    choices: ["Defensive realism", "Offensive realism", "Neoliberalism", "Constructivism"],
    answer: 1
  },
  {
    id: "mc81",
    q: "Which alliance system was created in 1949 to counter Soviet influence?",
    choices: ["Warsaw Pact", "NATO", "ASEAN", "United Nations"],
    answer: 1
  },
  {
    id: "mc82",
    q: "Which of the following is an example of institutionalized collective defense?",
    choices: ["NATO", "UN General Assembly", "EU Parliament", "World Trade Organization"],
    answer: 0
  },
  {
    id: "mc83",
    q: "The concept of 'offense-defense balance' examines:",
    choices: [
      "The balance between military and economic power",
      "Whether military technology favors offense or defense",
      "The balance between institutions and anarchy",
      "The balance between norms and identities"
    ],
    answer: 1
  },
  {
    id: "mc84",
    q: "Who argued that liberal democracy and capitalism mark the 'end of history'?",
    choices: ["Samuel Huntington", "Francis Fukuyama", "Robert Keohane", "Hans Morgenthau"],
    answer: 1
  },
  {
    id: "mc85",
    q: "Which war is often used to critique realism due to its normative and identity-based causes?",
    choices: ["World War I", "World War II", "Cold War", "Yugoslav Wars"],
    answer: 3
  },
  {
    id: "mc86",
    q: "The 'spiral model' of conflict escalation emphasizes:",
    choices: [
      "Rational calculations of deterrence",
      "Misperceptions and unintended escalation",
      "The benefits of cooperation",
      "The inevitability of nuclear war"
    ],
    answer: 1
  },
  {
    id: "mc87",
    q: "Which concept refers to a situation where two states dominate the system?",
    choices: ["Unipolarity", "Multipolarity", "Bipolarity", "Polyarchy"],
    answer: 2
  },
  {
    id: "mc88",
    q: "Which theory best explains the peaceful relations within the European Union?",
    choices: ["Constructivism", "Neorealism", "Marxism", "Realism"],
    answer: 0
  },
  {
    id: "mc89",
    q: "Which of the following concepts emphasizes the role of perception in deterrence?",
    choices: [
      "Balance of power",
      "Security dilemma",
      "Credibility",
      "Relative gains"
    ],
    answer: 2
  },
  {
    id: "mc90",
    q: "Which of the following is an example of 'preventive war'?",
    choices: [
      "The 2003 U.S. invasion of Iraq",
      "The Korean War",
      "The Falklands War",
      "World War II"
    ],
    answer: 0
  },
  {
    id: "mc91",
    q: "What does 'bounded rationality' imply in foreign policy decision-making?",
    choices: [
      "Leaders have unlimited information",
      "Leaders make decisions with cognitive and informational limits",
      "States are always rational actors",
      "Institutions fully eliminate uncertainty"
    ],
    answer: 1
  },
  {
    id: "mc92",
    q: "Which IR theory emphasizes 'absolute gains' rather than 'relative gains'?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 1
  },
  {
    id: "mc93",
    q: "Which of the following is an example of 'proxy war'?",
    choices: [
      "Vietnam War",
      "World War I",
      "Spanish Civil War",
      "Crimean War"
    ],
    answer: 0
  },
  {
    id: "mc94",
    q: "What is the primary assumption of rational choice models in IR?",
    choices: [
      "States act randomly",
      "States act to maximize utility under constraints",
      "States are motivated only by ideology",
      "Institutions eliminate all uncertainty"
    ],
    answer: 1
  },
  {
    id: "mc95",
    q: "Which international relations scholar is associated with the 'English School'?",
    choices: ["Hedley Bull", "Robert Keohane", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc96",
    q: "Which of the following is an example of 'collective goods problem'?",
    choices: [
      "Overfishing in international waters",
      "A state bandwagoning with a stronger state",
      "Institutional cooperation in NATO",
      "Democratic peace"
    ],
    answer: 0
  },
  {
    id: "mc97",
    q: "Which term best describes the post-Cold War U.S. global position in the 1990s?",
    choices: ["Bipolarity", "Unipolarity", "Multipolarity", "Hegemonic decline"],
    answer: 1
  },
  {
    id: "mc98",
    q: "Which of the following is the main criticism of power transition theory?",
    choices: [
      "It ignores economic interdependence",
      "It assumes rising powers always fight declining ones",
      "It underestimates ideology",
      "It overlooks identity politics"
    ],
    answer: 1
  },
  {
    id: "mc99",
    q: "Which concept refers to the influence of domestic politics on foreign policy?",
    choices: ["Second image", "First image", "Third image", "Anarchy"],
    answer: 0
  },
  {
    id: "mc100",
    q: "Who argued that democracies are more likely to win wars due to accountability and effective institutions?",
    choices: ["Dan Reiter & Allan Stam", "John Mearsheimer", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc101",
    q: "Which institution replaced the League of Nations after World War II?",
    choices: ["European Union", "United Nations", "NATO", "Warsaw Pact"],
    answer: 1
  },
  {
    id: "mc102",
    q: "Which of the following describes the concept of 'sovereignty'?",
    choices: [
      "The ability of a state to influence others",
      "The supreme authority of a state within its territory",
      "The legitimacy of international organizations",
      "The power of alliances over individual states"
    ],
    answer: 1
  },
  {
    id: "mc103",
    q: "Which theory would argue that globalization erodes the traditional power of the state?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Globalization theory"],
    answer: 3
  },
  {
    id: "mc104",
    q: "Who is considered the father of classical realism?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc105",
    q: "The concept of 'mutually assured destruction' is central to which era?",
    choices: ["World War I", "World War II", "Cold War", "Post-Cold War"],
    answer: 2
  },
  {
    id: "mc106",
    q: "Which IR concept is illustrated by the US–China trade relationship?",
    choices: [
      "Complex interdependence",
      "Balance of power",
      "Bandwagoning",
      "Democratic peace"
    ],
    answer: 0
  },
  {
    id: "mc107",
    q: "Which of the following is an example of 'collective defense'?",
    choices: [
      "UN Security Council sanctions",
      "NATO’s Article 5 commitment",
      "World Trade Organization arbitration",
      "International Court of Justice rulings"
    ],
    answer: 1
  },
  {
    id: "mc108",
    q: "Which of the following best illustrates a 'non-state actor'?",
    choices: ["The United States", "NATO", "Al-Qaeda", "United Nations"],
    answer: 2
  },
  {
    id: "mc109",
    q: "The 'anarchical society' concept is most associated with which school?",
    choices: ["English School", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc110",
    q: "What is the central focus of feminist IR theory?",
    choices: [
      "Class struggle",
      "The role of women and gender in international politics",
      "The influence of norms on state behavior",
      "The inevitability of anarchy"
    ],
    answer: 1
  },
  {
    id: "mc111",
    q: "Which of the following conflicts best illustrates a 'proxy war' between the US and USSR?",
    choices: ["Vietnam War", "World War II", "Crimean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc112",
    q: "Which of the following best defines 'power projection'?",
    choices: [
      "The ability to defend one’s borders",
      "The ability to deploy military power globally",
      "The influence of culture abroad",
      "The spread of economic institutions"
    ],
    answer: 1
  },
  {
    id: "mc113",
    q: "What is the key difference between 'hard power' and 'soft power'?",
    choices: [
      "Hard power is coercive, soft power is persuasive",
      "Hard power is economic, soft power is military",
      "Hard power is multilateral, soft power is unilateral",
      "Hard power is democratic, soft power is authoritarian"
    ],
    answer: 0
  },
  {
    id: "mc114",
    q: "Which theory argues that international organizations reflect the interests of powerful states?",
    choices: [
      "Liberalism",
      "Realism",
      "Constructivism",
      "Dependency theory"
    ],
    answer: 1
  },
  {
    id: "mc115",
    q: "Which international relations concept explains cooperation despite incentives to defect?",
    choices: ["Prisoner’s Dilemma", "Balance of power", "Security dilemma", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc116",
    q: "Which of the following is a criticism of neoliberal institutionalism?",
    choices: [
      "It underestimates the persistence of power politics",
      "It ignores the role of institutions",
      "It denies the importance of trade",
      "It dismisses the impact of anarchy"
    ],
    answer: 0
  },
  {
    id: "mc117",
    q: "Which of the following best exemplifies 'constructivist' analysis?",
    choices: [
      "Explaining NATO’s persistence after the Cold War through shared identity",
      "Predicting war based on distribution of power",
      "Analyzing trade flows as causes of peace",
      "Studying balance of threat in alliances"
    ],
    answer: 0
  },
  {
    id: "mc118",
    q: "Which theory explains why weaker states align with stronger powers instead of balancing against them?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Containment"],
    answer: 0
  },
  {
    id: "mc119",
    q: "The concept of 'two-level games' in IR emphasizes:",
    choices: [
      "The interaction between domestic and international politics",
      "The balance of power at systemic and state levels",
      "The trade-off between economic and military power",
      "The interplay of norms and material interests"
    ],
    answer: 0
  },
  {
    id: "mc120",
    q: "Which approach in IR is most likely to study the role of international law?",
    choices: ["Realism", "Liberalism", "Neorealism", "Marxism"],
    answer: 1
  },
  {
    id: "mc121",
    q: "Which theory claims that power tends to shift gradually from West to East?",
    choices: ["World-systems theory", "Power transition theory", "Neorealism", "Constructivism"],
    answer: 1
  },
  {
    id: "mc122",
    q: "Which of the following wars best illustrates the concept of 'total war'?",
    choices: ["World War I", "Vietnam War", "Gulf War", "Crimean War"],
    answer: 0
  },
  {
    id: "mc123",
    q: "Which of the following is an example of 'preventive diplomacy'?",
    choices: [
      "Mediation to stop conflict before escalation",
      "Deploying peacekeepers after a ceasefire",
      "Humanitarian intervention during war",
      "Signing a treaty after a war ends"
    ],
    answer: 0
  },
  {
    id: "mc124",
    q: "The 'English School' combines realism and liberalism with an emphasis on:",
    choices: ["Anarchy", "International society", "Domestic politics", "Relative gains"],
    answer: 1
  },
  {
    id: "mc125",
    q: "Which of the following illustrates 'economic sanctions'?",
    choices: [
      "Trade embargoes to punish a state",
      "Military intervention to deter aggression",
      "Arms races between powers",
      "Alliances to balance power"
    ],
    answer: 0
  },
  {
    id: "mc126",
    q: "Which IR theory argues that capitalist states exploit poorer ones?",
    choices: ["Constructivism", "Marxism", "Neorealism", "Liberalism"],
    answer: 1
  },
  {
    id: "mc127",
    q: "Which of the following best describes 'collective action problems'?",
    choices: [
      "Difficulty achieving cooperation due to free riding",
      "States refusing to balance against rising powers",
      "Rising powers overtaking declining hegemons",
      "Institutions failing to adapt to change"
    ],
    answer: 0
  },
  {
    id: "mc128",
    q: "Which scholar is associated with the concept of 'balance of threat'?",
    choices: ["Stephen Walt", "Kenneth Waltz", "Robert Keohane", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc129",
    q: "What is the primary unit of analysis in realism?",
    choices: ["International organizations", "States", "Individuals", "Classes"],
    answer: 1
  },
  {
    id: "mc130",
    q: "Which of the following is a feature of bipolar systems?",
    choices: [
      "Instability due to shifting alliances",
      "Stability due to clear power blocs",
      "Chaos due to multiple great powers",
      "Dominance by a single hegemon"
    ],
    answer: 1
  },
  {
    id: "mc131",
    q: "Which event marked the beginning of the 'post-Cold War era'?",
    choices: ["Vietnam War", "Fall of the Berlin Wall", "Gulf War", "Cuban Missile Crisis"],
    answer: 1
  },
  {
    id: "mc132",
    q: "Which concept refers to military strategies that prevent adversaries from considering an attack?",
    choices: ["Preemption", "Deterrence", "Compellence", "Containment"],
    answer: 1
  },
  {
    id: "mc133",
    q: "Which theory emphasizes that states are motivated by fear of cheating in cooperation?",
    choices: ["Liberalism", "Realism", "Constructivism", "English School"],
    answer: 1
  },
  {
    id: "mc134",
    q: "The 'norm life cycle' concept was introduced by which scholars?",
    choices: [
      "Martha Finnemore and Kathryn Sikkink",
      "Kenneth Waltz and Stephen Walt",
      "Robert Keohane and Joseph Nye",
      "Hans Morgenthau and E.H. Carr"
    ],
    answer: 0
  },
  {
    id: "mc135",
    q: "Which international conflict best illustrates nuclear deterrence in action?",
    choices: ["Cuban Missile Crisis", "World War I", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc136",
    q: "Which of the following best explains 'institutional design'?",
    choices: [
      "The architecture of domestic governance",
      "Rules and procedures shaping international cooperation",
      "Military doctrine development",
      "The hierarchy of world orders"
    ],
    answer: 1
  },
  {
    id: "mc137",
    q: "Which of the following best describes 'multipolarity'?",
    choices: [
      "A system dominated by two powers",
      "A system dominated by one hegemon",
      "A system with several great powers",
      "A system without great powers"
    ],
    answer: 2
  },
  {
    id: "mc138",
    q: "Which IR theory argues that norms evolve and constrain state behavior?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc139",
    q: "Which of the following best illustrates 'preemptive war'?",
    choices: [
      "A strike to prevent an imminent attack",
      "A strike to prevent long-term potential threats",
      "A strike in defense of an ally",
      "A strike authorized by the UN"
    ],
    answer: 0
  },
  {
    id: "mc140",
    q: "Which of the following conflicts is often cited as an example of balance of power politics?",
    choices: ["Napoleonic Wars", "Vietnam War", "Cold War", "Iraq War"],
    answer: 0
  },
  {
    id: "mc141",
    q: "Which of the following scholars is most associated with the concept of 'offensive realism'?",
    choices: ["John Mearsheimer", "Robert Keohane", "Alexander Wendt", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc142",
    q: "Which IR concept emphasizes the use of norms and legitimacy in war?",
    choices: ["Just war theory", "Balance of threat", "Power transition theory", "Democratic peace"],
    answer: 0
  },
  {
    id: "mc143",
    q: "What is the core assumption of world-systems theory?",
    choices: [
      "Anarchy drives conflict",
      "The core exploits the periphery in the capitalist system",
      "Institutions mitigate anarchy",
      "Norms redefine interests"
    ],
    answer: 1
  },
  {
    id: "mc144",
    q: "Which IR theory emphasizes learning and adaptation in international politics?",
    choices: ["Realism", "Constructivism", "Liberalism", "Neorealism"],
    answer: 1
  },
  {
    id: "mc145",
    q: "Which of the following best describes 'human security'?",
    choices: [
      "State sovereignty above all",
      "Protection of individuals from threats like poverty and violence",
      "Nuclear deterrence",
      "Alliance commitments"
    ],
    answer: 1
  },
  {
    id: "mc146",
    q: "Which organization was created in 1995 to regulate global trade?",
    choices: ["UN", "IMF", "WTO", "EU"],
    answer: 2
  },
  {
    id: "mc147",
    q: "Which of the following is an example of 'peacekeeping'?",
    choices: [
      "UN troops monitoring a ceasefire",
      "A state launching a preemptive strike",
      "Economic sanctions against aggressors",
      "A hegemon enforcing order unilaterally"
    ],
    answer: 0
  },
  {
    id: "mc148",
    q: "Which theory highlights the role of identity in explaining why states cooperate?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc149",
    q: "Which IR theory views globalization as deepening inequality?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc150",
    q: "Which IR concept describes states forming temporary alliances to balance against stronger ones?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Buck-passing"],
    answer: 1
  },
  {
    id: "mc151",
    q: "Which of the following is a critique of realism?",
    choices: [
      "It underestimates the role of international institutions",
      "It overemphasizes norms",
      "It denies the persistence of anarchy",
      "It focuses too much on identity politics"
    ],
    answer: 0
  },
  {
    id: "mc152",
    q: "Which international event marked the failure of the League of Nations?",
    choices: [
      "World War I",
      "World War II",
      "Cuban Missile Crisis",
      "Cold War"
    ],
    answer: 1
  },
  {
    id: "mc153",
    q: "Which concept best describes U.S. military interventions aimed at spreading democracy?",
    choices: [
      "Soft balancing",
      "Democratic peace theory",
      "Liberal internationalism",
      "Realpolitik"
    ],
    answer: 2
  },
  {
    id: "mc154",
    q: "Which of the following best describes 'collective goods'?",
    choices: [
      "Goods available only to states in alliances",
      "Goods that cannot be denied to others once provided",
      "Goods produced only by hegemons",
      "Goods distributed solely by markets"
    ],
    answer: 1
  },
  {
    id: "mc155",
    q: "Who argued that the spread of nuclear weapons may enhance stability?",
    choices: ["Kenneth Waltz", "Robert Keohane", "John Mearsheimer", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc156",
    q: "Which of the following is an example of 'normative power'?",
    choices: [
      "The EU promoting human rights abroad",
      "The U.S. invasion of Iraq",
      "China building military bases in the South China Sea",
      "Russia’s annexation of Crimea"
    ],
    answer: 0
  },
  {
    id: "mc157",
    q: "Which concept explains why states fear being cheated in cooperation?",
    choices: ["Relative gains", "Bandwagoning", "Democratic peace", "Soft power"],
    answer: 0
  },
  {
    id: "mc158",
    q: "Which IR perspective is most associated with 'historical materialism'?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 3
  },
  {
    id: "mc159",
    q: "Which event symbolized the decline of bipolarity?",
    choices: ["Fall of the Berlin Wall", "Vietnam War", "Korean War", "Cuban Missile Crisis"],
    answer: 0
  },
  {
    id: "mc160",
    q: "What does 'security community' mean in IR?",
    choices: [
      "A system where war between members is unthinkable",
      "A coalition of states balancing against a hegemon",
      "An alliance formed for temporary interests",
      "A UN peacekeeping mission"
    ],
    answer: 0
  },
  {
    id: "mc161",
    q: "Which theory explains why rising powers may challenge existing orders?",
    choices: [
      "Balance of power theory",
      "Power transition theory",
      "World-systems theory",
      "Democratic peace theory"
    ],
    answer: 1
  },
  {
    id: "mc162",
    q: "Which concept argues that nuclear weapons reduce the likelihood of major wars?",
    choices: ["Nuclear deterrence", "Democratic peace", "Collective security", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc163",
    q: "Which level of analysis focuses on systemic structures?",
    choices: ["Individual", "State", "Systemic", "Domestic"],
    answer: 2
  },
  {
    id: "mc164",
    q: "Which IR concept refers to wars fought through surrogates supported by great powers?",
    choices: ["Cold War", "Proxy war", "Preventive war", "Bandwagoning"],
    answer: 1
  },
  {
    id: "mc165",
    q: "Which of the following best describes 'asymmetrical warfare'?",
    choices: [
      "Conflict between states of similar capabilities",
      "Conflict between unequal actors using unconventional tactics",
      "Conflict fought entirely with nuclear weapons",
      "Conflict within alliances"
    ],
    answer: 1
  },
  {
    id: "mc166",
    q: "Who coined the term 'soft power'?",
    choices: ["Robert Keohane", "Joseph Nye", "Kenneth Waltz", "Hans Morgenthau"],
    answer: 1
  },
  {
    id: "mc167",
    q: "Which international event highlighted the danger of misperception?",
    choices: [
      "Cuban Missile Crisis",
      "Vietnam War",
      "9/11 terrorist attacks",
      "World War I"
    ],
    answer: 3
  },
  {
    id: "mc168",
    q: "Which theory critiques realism for neglecting the role of norms?",
    choices: ["Constructivism", "Liberalism", "Marxism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc169",
    q: "Which type of realism sees states as security maximizers rather than power maximizers?",
    choices: ["Defensive realism", "Offensive realism", "Classical realism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc170",
    q: "Which IR concept emphasizes the link between domestic regime type and war?",
    choices: ["Democratic peace theory", "Balance of power theory", "Offensive realism", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc171",
    q: "Which of the following best describes 'absolute gains'?",
    choices: [
      "How much a state benefits in total, regardless of others",
      "How much a state benefits relative to others",
      "The ability of states to project hard power",
      "The gains achieved through military alliances"
    ],
    answer: 0
  },
  {
    id: "mc172",
    q: "Which of the following is a criticism of Marxist IR theory?",
    choices: [
      "It overemphasizes economics at the expense of politics",
      "It ignores the capitalist system",
      "It denies class conflict",
      "It neglects global inequality"
    ],
    answer: 0
  },
  {
    id: "mc173",
    q: "Which concept emphasizes that war is less likely between states with dense trade ties?",
    choices: ["Security dilemma", "Balance of power", "Commercial peace theory", "Power transition theory"],
    answer: 2
  },
  {
    id: "mc174",
    q: "Which of the following is an example of 'compellence'?",
    choices: [
      "Threatening sanctions to force policy change",
      "Deploying nuclear weapons to deter attack",
      "Signing a peace treaty",
      "Maintaining neutrality"
    ],
    answer: 0
  },
  {
    id: "mc175",
    q: "Who argued that democracies rarely fight each other due to shared norms?",
    choices: ["Bruce Russett", "Robert Keohane", "Kenneth Waltz", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc176",
    q: "Which IR theory emphasizes the 'logic of appropriateness' over the 'logic of consequences'?",
    choices: ["Realism", "Liberalism", "Constructivism", "Neorealism"],
    answer: 2
  },
  {
    id: "mc177",
    q: "Which of the following best defines 'offshore balancing'?",
    choices: [
      "A hegemon limiting direct intervention and relying on regional powers",
      "A hegemon projecting power globally",
      "A state building alliances within its region",
      "A state bandwagoning with a stronger power"
    ],
    answer: 0
  },
  {
    id: "mc178",
    q: "Which of the following best illustrates 'hard power'?",
    choices: [
      "Cultural influence",
      "Economic sanctions",
      "Military coercion",
      "Diplomatic persuasion"
    ],
    answer: 2
  },
  {
    id: "mc179",
    q: "Which theory argues that cooperation is possible but difficult under anarchy?",
    choices: ["Neorealism", "Liberal institutionalism", "Marxism", "World-systems theory"],
    answer: 1
  },
  {
    id: "mc180",
    q: "Which conflict is often used to highlight the failure of collective security?",
    choices: [
      "World War II",
      "Cold War",
      "Vietnam War",
      "Korean War"
    ],
    answer: 0
  },
  {
    id: "mc181",
    q: "Which IR concept emphasizes reputational effects in deterrence?",
    choices: ["Relative gains", "Credibility", "Bandwagoning", "Security dilemma"],
    answer: 1
  },
  {
    id: "mc182",
    q: "Which of the following best describes 'hegemonic decline'?",
    choices: [
      "A hegemon’s gradual loss of economic and military dominance",
      "The collapse of the balance of power",
      "The end of anarchy",
      "The erosion of institutions"
    ],
    answer: 0
  },
  {
    id: "mc183",
    q: "Which theory predicts that states may overestimate threats from adversaries?",
    choices: ["Balance of power theory", "Balance of threat theory", "Democratic peace theory", "Dependency theory"],
    answer: 1
  },
  {
    id: "mc184",
    q: "Which concept emphasizes that states often misinterpret defensive actions as offensive?",
    choices: ["Spiral model", "Deterrence model", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc185",
    q: "Which level of analysis is emphasized by 'second image' theories?",
    choices: ["Individual", "State/domestic politics", "Systemic", "Global"],
    answer: 1
  },
  {
    id: "mc186",
    q: "Which IR theory emphasizes capitalist exploitation of the periphery by the core?",
    choices: ["Marxism", "Constructivism", "Liberalism", "Realism"],
    answer: 0
  },
  {
    id: "mc187",
    q: "Which theory emphasizes how shared ideas create international order?",
    choices: ["Realism", "Liberalism", "Constructivism", "Neorealism"],
    answer: 2
  },
  {
    id: "mc188",
    q: "Which concept refers to the diffusion of military technology and tactics?",
    choices: ["Security dilemma", "Power diffusion", "Military revolution", "Bandwagoning"],
    answer: 2
  },
  {
    id: "mc189",
    q: "Which IR theory emphasizes the persistence of conflict even under institutions?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc190",
    q: "Which of the following best describes 'failed states'?",
    choices: [
      "States that cannot control territory or provide governance",
      "States that lose wars",
      "States that are transitioning to democracy",
      "States dependent on foreign aid"
    ],
    answer: 0
  },
  {
    id: "mc191",
    q: "Which scholar is most associated with the idea that nuclear proliferation may be stabilizing?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "Joseph Nye", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc192",
    q: "Which concept refers to military alliances formed to balance a common threat?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Collective security"],
    answer: 1
  },
  {
    id: "mc193",
    q: "Which of the following is a critique of liberal institutionalism?",
    choices: [
      "It overestimates the ability of institutions to overcome anarchy",
      "It denies the existence of international law",
      "It assumes states are irrational",
      "It ignores economic factors"
    ],
    answer: 0
  },
  {
    id: "mc194",
    q: "Which event is often cited as evidence of the 'democratic peace'?",
    choices: [
      "No wars between established democracies",
      "The Gulf War",
      "The Vietnam War",
      "The Crimean War"
    ],
    answer: 0
  },
  {
    id: "mc195",
    q: "Which of the following best describes 'preventive war'?",
    choices: [
      "A war launched to prevent a future threat",
      "A war launched to stop an imminent attack",
      "A war fought for humanitarian reasons",
      "A war fought under UN authorization"
    ],
    answer: 0
  },
  {
    id: "mc196",
    q: "Which of the following best describes 'neoclassical realism'?",
    choices: [
      "A blend of systemic realism with domestic factors",
      "An economic variant of realism",
      "A cultural reinterpretation of realism",
      "A normative critique of realism"
    ],
    answer: 0
  },
  {
    id: "mc197",
    q: "Which IR concept describes attempts to stop conflict through negotiation and mediation?",
    choices: ["Peacebuilding", "Preventive diplomacy", "Deterrence", "Containment"],
    answer: 1
  },
  {
    id: "mc198",
    q: "Which IR theory claims that ideas and norms are as important as material power?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc199",
    q: "Which of the following best illustrates 'power balancing'?",
    choices: [
      "NATO forming to counter Soviet power",
      "The UN sanctioning rogue states",
      "The U.S. promoting human rights",
      "The EU creating a common currency"
    ],
    answer: 0
  },
  {
    id: "mc200",
    q: "Which IR concept emphasizes the importance of alliances in deterring threats?",
    choices: ["Balance of power", "Soft power", "Dependency theory", "Constructivism"],
    answer: 0
  },
  {
    id: "mc201",
    q: "Which concept argues that states worry about the relative distribution of gains in cooperation?",
    choices: ["Absolute gains", "Relative gains", "Soft power", "Constructivism"],
    answer: 1
  },
  {
    id: "mc202",
    q: "Which of the following was the first major collective security organization?",
    choices: ["NATO", "United Nations", "League of Nations", "Warsaw Pact"],
    answer: 2
  },
  {
    id: "mc203",
    q: "Which IR theory emphasizes the role of capitalism in shaping state behavior?",
    choices: ["Realism", "Marxism", "Constructivism", "Liberalism"],
    answer: 1
  },
  {
    id: "mc204",
    q: "Which event demonstrated the danger of appeasement in IR?",
    choices: [
      "Munich Agreement of 1938",
      "Cuban Missile Crisis",
      "Vietnam War",
      "Fall of the Berlin Wall"
    ],
    answer: 0
  },
  {
    id: "mc205",
    q: "Which of the following best describes 'collective defense'?",
    choices: [
      "A system where all states unite to punish aggressors",
      "An alliance where members agree to defend each other",
      "A unilateral action to deter threats",
      "A peacekeeping mission"
    ],
    answer: 1
  },
  {
    id: "mc206",
    q: "Which international event triggered the formation of NATO?",
    choices: [
      "World War I",
      "World War II",
      "Korean War",
      "Cuban Missile Crisis"
    ],
    answer: 1
  },
  {
    id: "mc207",
    q: "Which IR theory focuses on the anarchic system as the main determinant of state behavior?",
    choices: ["Liberalism", "Constructivism", "Realism", "Dependency theory"],
    answer: 2
  },
  {
    id: "mc208",
    q: "Which concept is associated with deterrence based on overwhelming retaliatory force?",
    choices: [
      "Second-strike capability",
      "Mutually assured destruction",
      "Balance of power",
      "Soft balancing"
    ],
    answer: 1
  },
  {
    id: "mc209",
    q: "Which of the following wars is often seen as a classic example of a proxy war?",
    choices: ["Korean War", "Vietnam War", "World War I", "Crimean War"],
    answer: 1
  },
  {
    id: "mc210",
    q: "Which concept argues that norms evolve through emergence, acceptance, and internalization?",
    choices: ["Democratic peace", "Security dilemma", "Norm life cycle", "Balance of power"],
    answer: 2
  },
  {
    id: "mc211",
    q: "Which IR concept refers to a situation where states shift alliances to avoid costs?",
    choices: ["Balancing", "Buck-passing", "Bandwagoning", "Soft balancing"],
    answer: 1
  },
  {
    id: "mc212",
    q: "Which theory argues that states act primarily to survive under anarchy?",
    choices: ["Neorealism", "Neoliberalism", "Constructivism", "English School"],
    answer: 0
  },
  {
    id: "mc213",
    q: "Which of the following best illustrates 'economic interdependence'?",
    choices: [
      "U.S.–China trade relations",
      "U.S. military bases in Japan",
      "NATO military exercises",
      "UN peacekeeping missions"
    ],
    answer: 0
  },
  {
    id: "mc214",
    q: "Which theory critiques realism and liberalism for ignoring identity and ideas?",
    choices: ["Marxism", "Constructivism", "World-systems theory", "Dependency theory"],
    answer: 1
  },
  {
    id: "mc215",
    q: "Which IR concept refers to international norms regulating the use of force?",
    choices: ["Just war theory", "Democratic peace theory", "Security dilemma", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc216",
    q: "Which organization replaced GATT in 1995?",
    choices: ["UN", "WTO", "IMF", "World Bank"],
    answer: 1
  },
  {
    id: "mc217",
    q: "Which of the following is a critique of democratic peace theory?",
    choices: [
      "It ignores wars between young democracies",
      "It overstates the role of norms",
      "It underestimates institutions",
      "It dismisses realism"
    ],
    answer: 0
  },
  {
    id: "mc218",
    q: "Which IR concept emphasizes that cooperation is difficult because states fear cheating?",
    choices: ["Relative gains", "Security dilemma", "Prisoner’s Dilemma", "Bandwagoning"],
    answer: 2
  },
  {
    id: "mc219",
    q: "Which level of analysis examines the psychological traits of leaders?",
    choices: ["Individual", "State", "Systemic", "Global"],
    answer: 0
  },
  {
    id: "mc220",
    q: "Which of the following best describes 'imperial overstretch'?",
    choices: [
      "When a hegemon extends commitments beyond its capacity",
      "When a rising power overtakes a hegemon",
      "When states overestimate relative gains",
      "When alliances expand beyond borders"
    ],
    answer: 0
  },
  {
    id: "mc221",
    q: "Which concept is associated with Robert Keohane?",
    choices: [
      "Balance of power",
      "Neoliberal institutionalism",
      "Offensive realism",
      "World-systems theory"
    ],
    answer: 1
  },
  {
    id: "mc222",
    q: "Which war demonstrated the failure of the League of Nations?",
    choices: ["World War II", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc223",
    q: "Which concept is central to deterrence theory?",
    choices: ["Credibility", "Soft power", "Economic interdependence", "Institutionalism"],
    answer: 0
  },
  {
    id: "mc224",
    q: "Which of the following best describes 'global governance'?",
    choices: [
      "A world government replacing states",
      "Collective efforts to manage transnational issues",
      "A hegemon enforcing order",
      "UN control of all global policies"
    ],
    answer: 1
  },
  {
    id: "mc225",
    q: "Which IR theory is most likely to emphasize transnational networks?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 1
  },
  {
    id: "mc226",
    q: "Which conflict best illustrates 'balance of power' politics?",
    choices: ["Napoleonic Wars", "Vietnam War", "Iraq War", "Korean War"],
    answer: 0
  },
  {
    id: "mc227",
    q: "Which concept describes the spread of nuclear weapons to additional states?",
    choices: ["Deterrence", "Nuclear proliferation", "Extended deterrence", "Arms race"],
    answer: 1
  },
  {
    id: "mc228",
    q: "Which scholar developed the concept of 'complex interdependence'?",
    choices: ["Joseph Nye & Robert Keohane", "Kenneth Waltz", "John Mearsheimer", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc229",
    q: "Which of the following best describes 'detente'?",
    choices: [
      "Escalation of nuclear arms",
      "Relaxation of Cold War tensions",
      "Formation of NATO",
      "Collapse of the Soviet Union"
    ],
    answer: 1
  },
  {
    id: "mc230",
    q: "Which IR theory would most emphasize the role of class struggle in world politics?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc231",
    q: "Which concept refers to the belief that democracies do not go to war with each other?",
    choices: ["Democratic peace theory", "Balance of threat", "World-systems theory", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc232",
    q: "Which concept emphasizes the distribution of capabilities across the international system?",
    choices: ["Balance of power", "Polarity", "Relative gains", "Bandwagoning"],
    answer: 1
  },
  {
    id: "mc233",
    q: "Which of the following conflicts is considered a 'limited war'?",
    choices: ["Korean War", "World War I", "World War II", "Napoleonic Wars"],
    answer: 0
  },
  {
    id: "mc234",
    q: "Which of the following best describes 'humanitarian intervention'?",
    choices: [
      "Military action to protect populations from mass atrocities",
      "Military action to expand territory",
      "Economic sanctions against aggressors",
      "Alliance commitments"
    ],
    answer: 0
  },
  {
    id: "mc235",
    q: "Which IR perspective emphasizes shared norms as the foundation of order?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc236",
    q: "Which term refers to war between actors of unequal strength using unconventional tactics?",
    choices: ["Total war", "Proxy war", "Asymmetrical warfare", "Preventive war"],
    answer: 2
  },
  {
    id: "mc237",
    q: "Which IR theory claims that institutions reflect the interests of powerful states?",
    choices: ["Realism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc238",
    q: "Which of the following is an example of 'extended deterrence'?",
    choices: [
      "U.S. nuclear guarantee to NATO allies",
      "China deterring Taiwan unilaterally",
      "India deterring Pakistan domestically",
      "North Korea deterring South Korea directly"
    ],
    answer: 0
  },
  {
    id: "mc239",
    q: "Which organization replaced the League of Nations?",
    choices: ["NATO", "United Nations", "European Union", "WTO"],
    answer: 1
  },
  {
    id: "mc240",
    q: "Which theory emphasizes the social construction of interests?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc241",
    q: "Which of the following conflicts best illustrates 'containment' during the Cold War?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 2
  },
  {
    id: "mc242",
    q: "Which of the following best defines 'hegemony'?",
    choices: [
      "The domination of one state over others in the system",
      "The collapse of balance of power",
      "The persistence of norms",
      "The diffusion of technology"
    ],
    answer: 0
  },
  {
    id: "mc243",
    q: "Which IR theory emphasizes that states are primarily concerned with survival?",
    choices: ["Realism", "Constructivism", "Marxism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc244",
    q: "Which of the following is an example of 'peace enforcement'?",
    choices: [
      "UN-authorized military intervention",
      "UN observers monitoring a ceasefire",
      "Economic sanctions",
      "Humanitarian aid delivery"
    ],
    answer: 0
  },
  {
    id: "mc245",
    q: "Which of the following wars best illustrates nuclear deterrence?",
    choices: ["Cold War (no direct war)", "World War II", "Vietnam War", "Crimean War"],
    answer: 0
  },
  {
    id: "mc246",
    q: "Which scholar is most associated with 'hegemonic stability theory'?",
    choices: ["Robert Keohane", "Charles Kindleberger", "Joseph Nye", "Stephen Walt"],
    answer: 1
  },
  {
    id: "mc247",
    q: "Which of the following best describes 'bandwagoning'?",
    choices: [
      "Joining a stronger state rather than balancing against it",
      "Balancing against a rising hegemon",
      "Refusing to join alliances",
      "Building international institutions"
    ],
    answer: 0
  },
  {
    id: "mc248",
    q: "Which concept is most associated with Robert Jervis?",
    choices: ["Security dilemma", "Democratic peace", "Complex interdependence", "Norm life cycle"],
    answer: 0
  },
  {
    id: "mc249",
    q: "Which of the following wars exemplifies preventive war?",
    choices: [
      "2003 U.S. invasion of Iraq",
      "World War II",
      "Vietnam War",
      "Korean War"
    ],
    answer: 0
  },
  {
    id: "mc250",
    q: "Which IR concept highlights states’ pursuit of credibility in international politics?",
    choices: ["Balance of power", "Deterrence", "Relative gains", "Soft power"],
    answer: 1
  },
  {
    id: "mc251",
    q: "Which of the following best describes 'neorealism'?",
    choices: [
      "Focus on human nature as the cause of conflict",
      "Emphasis on the anarchic international structure",
      "Stress on the power of institutions",
      "Belief in the primacy of norms"
    ],
    answer: 1
  },
  {
    id: "mc252",
    q: "Which concept emphasizes that states often join alliances to balance against threats rather than power?",
    choices: ["Balance of threat", "Balance of power", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc253",
    q: "Which of the following best describes 'collective goods dilemma'?",
    choices: [
      "States benefiting from others’ efforts without contributing",
      "States refusing to balance against rising powers",
      "Hegemons exploiting weaker states",
      "Institutions imposing sanctions on states"
    ],
    answer: 0
  },
  {
    id: "mc254",
    q: "Which of the following best explains the U.S. policy of 'containment'?",
    choices: [
      "Efforts to prevent Soviet expansion during the Cold War",
      "Efforts to prevent nuclear proliferation",
      "Efforts to prevent oil shocks",
      "Efforts to contain global institutions"
    ],
    answer: 0
  },
  {
    id: "mc255",
    q: "Which of the following is an example of 'limited war'?",
    choices: [
      "Korean War",
      "World War I",
      "World War II",
      "Napoleonic Wars"
    ],
    answer: 0
  },
  {
    id: "mc256",
    q: "Which of the following is most associated with the concept of 'democratic peace'?",
    choices: ["Bruce Russett", "Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc257",
    q: "Which of the following best describes 'preemptive strike'?",
    choices: [
      "An attack to forestall an imminent attack",
      "An attack to prevent a future power shift",
      "An attack in defense of allies",
      "An attack for economic gain"
    ],
    answer: 0
  },
  {
    id: "mc258",
    q: "Which concept argues that international law matters only when backed by powerful states?",
    choices: [
      "Realism",
      "Liberalism",
      "Constructivism",
      "Dependency theory"
    ],
    answer: 0
  },
  {
    id: "mc259",
    q: "Which concept refers to the spread of ideas, practices, and institutions across borders?",
    choices: ["Globalization", "Balance of power", "Democratic peace", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc260",
    q: "Which of the following best describes 'multipolarity'?",
    choices: [
      "Two great powers dominate the system",
      "One hegemon dominates the system",
      "Several great powers share influence",
      "No great powers exist"
    ],
    answer: 2
  },
  {
    id: "mc261",
    q: "Which IR concept refers to the fear that others will benefit more from cooperation?",
    choices: ["Relative gains", "Absolute gains", "Security dilemma", "Balance of power"],
    answer: 0
  },
  {
    id: "mc262",
    q: "Which conflict is often used to demonstrate the limits of U.S. power in asymmetric warfare?",
    choices: ["Vietnam War", "World War I", "World War II", "Korean War"],
    answer: 0
  },
  {
    id: "mc263",
    q: "Which theory emphasizes the role of capitalist exploitation in shaping world politics?",
    choices: ["Realism", "Liberalism", "Marxism", "Constructivism"],
    answer: 2
  },
  {
    id: "mc264",
    q: "Which of the following best illustrates 'hegemonic stability theory'?",
    choices: [
      "British dominance in the 19th century",
      "The Cold War bipolar system",
      "Post–Cold War multipolarity",
      "UN peacekeeping in the 21st century"
    ],
    answer: 0
  },
  {
    id: "mc265",
    q: "Which IR concept refers to states using institutions and diplomacy instead of direct military force to balance?",
    choices: ["Hard balancing", "Soft balancing", "Bandwagoning", "Relative gains"],
    answer: 1
  },
  {
    id: "mc266",
    q: "Which event best illustrates 'mutually assured destruction'?",
    choices: [
      "Cuban Missile Crisis",
      "World War II",
      "Vietnam War",
      "Gulf War"
    ],
    answer: 0
  },
  {
    id: "mc267",
    q: "Which concept refers to when states overextend military and economic commitments?",
    choices: ["Relative gains", "Imperial overstretch", "Balance of power", "Bandwagoning"],
    answer: 1
  },
  {
    id: "mc268",
    q: "Which of the following is a critique of democratic peace theory?",
    choices: [
      "It ignores wars involving new democracies",
      "It denies the role of economic interdependence",
      "It dismisses the influence of institutions",
      "It underestimates the power of hegemons"
    ],
    answer: 0
  },
  {
    id: "mc269",
    q: "Which concept emphasizes that states act based on how they perceive others’ intentions?",
    choices: ["Balance of power", "Constructivism", "Bandwagoning", "Relative gains"],
    answer: 1
  },
  {
    id: "mc270",
    q: "Which IR concept refers to the use of military force to stop mass atrocities?",
    choices: ["Peacekeeping", "Humanitarian intervention", "Containment", "Deterrence"],
    answer: 1
  },
  {
    id: "mc271",
    q: "Which of the following is most associated with the 'English School'?",
    choices: ["International society", "Relative gains", "Balance of power", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc272",
    q: "Which conflict highlighted the dangers of entangling alliances?",
    choices: ["World War I", "World War II", "Korean War", "Vietnam War"],
    answer: 0
  },
  {
    id: "mc273",
    q: "Which IR concept suggests that nuclear weapons deter both conventional and nuclear wars?",
    choices: ["Extended deterrence", "Credibility", "Nuclear revolution", "Balance of threat"],
    answer: 2
  },
  {
    id: "mc274",
    q: "Which scholar developed the concept of 'offensive realism'?",
    choices: ["John Mearsheimer", "Kenneth Waltz", "Robert Keohane", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc275",
    q: "Which of the following best describes 'buck-passing'?",
    choices: [
      "Shifting the responsibility of balancing to another state",
      "Joining a hegemon for protection",
      "Overestimating relative gains",
      "Relying on institutions for collective action"
    ],
    answer: 0
  },
  {
    id: "mc276",
    q: "Which IR theory is most likely to argue that norms ended apartheid in South Africa?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 2
  },
  {
    id: "mc277",
    q: "Which event symbolized the end of the Cold War?",
    choices: [
      "Fall of the Berlin Wall",
      "Korean War",
      "Vietnam War",
      "Cuban Missile Crisis"
    ],
    answer: 0
  },
  {
    id: "mc278",
    q: "Which concept argues that states’ foreign policies are shaped by domestic institutions?",
    choices: ["Second image", "First image", "Third image", "Fourth image"],
    answer: 0
  },
  {
    id: "mc279",
    q: "Which of the following best describes 'proxy war'?",
    choices: [
      "A war fought indirectly through third parties",
      "A war fought over economic resources",
      "A war fought entirely with nuclear weapons",
      "A war fought under UN authority"
    ],
    answer: 0
  },
  {
    id: "mc280",
    q: "Which IR theory predicts stability under bipolarity?",
    choices: ["Neorealism", "Neoliberalism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc281",
    q: "Which IR theory claims that ideas and norms shape the interests of states?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc282",
    q: "Which of the following wars is an example of 'total war'?",
    choices: ["World War II", "Korean War", "Vietnam War", "Falklands War"],
    answer: 0
  },
  {
    id: "mc283",
    q: "Which of the following best defines 'globalization'?",
    choices: [
      "The decline of state sovereignty",
      "The increasing interconnectedness of states and societies",
      "The rise of unipolarity",
      "The spread of nuclear weapons"
    ],
    answer: 1
  },
  {
    id: "mc284",
    q: "Which concept explains why states prioritize survival above all?",
    choices: ["Balance of power", "Realism", "Constructivism", "Soft power"],
    answer: 1
  },
  {
    id: "mc285",
    q: "Which of the following is an example of 'balance of threat'?",
    choices: [
      "Alliances against Nazi Germany",
      "Bandwagoning with stronger states",
      "U.S. trade agreements with China",
      "UN Security Council sanctions"
    ],
    answer: 0
  },
  {
    id: "mc286",
    q: "Which IR theory argues that international organizations reflect state power?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc287",
    q: "Which IR concept refers to the fear that one side will benefit more from cooperation?",
    choices: ["Relative gains", "Absolute gains", "Prisoner’s Dilemma", "Soft power"],
    answer: 0
  },
  {
    id: "mc288",
    q: "Which of the following best describes 'peacekeeping'?",
    choices: [
      "Deploying neutral forces to monitor ceasefires",
      "Launching preemptive strikes",
      "Forcing adversaries into compliance",
      "Promoting trade agreements"
    ],
    answer: 0
  },
  {
    id: "mc289",
    q: "Which theory emphasizes the importance of system polarity?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc290",
    q: "Which of the following best illustrates 'soft power'?",
    choices: [
      "U.S. cultural influence through Hollywood",
      "Deployment of U.S. troops abroad",
      "Economic sanctions",
      "Military alliances"
    ],
    answer: 0
  },
  {
    id: "mc291",
    q: "Which concept argues that domestic political regimes affect war likelihood?",
    choices: ["Democratic peace theory", "Balance of power", "Neorealism", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc292",
    q: "Which conflict is often seen as evidence of power transition theory?",
    choices: [
      "Peloponnesian War",
      "Vietnam War",
      "Cold War",
      "World War II"
    ],
    answer: 0
  },
  {
    id: "mc293",
    q: "Which of the following best describes 'interdependence'?",
    choices: [
      "Mutual reliance between states",
      "Military alliances",
      "Nuclear deterrence",
      "Balance of power"
    ],
    answer: 0
  },
  {
    id: "mc294",
    q: "Which IR theory emphasizes moral norms in international politics?",
    choices: ["English School", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc295",
    q: "Which of the following is an example of 'preventive war'?",
    choices: [
      "2003 U.S. invasion of Iraq",
      "Vietnam War",
      "World War I",
      "Gulf War"
    ],
    answer: 0
  },
  {
    id: "mc296",
    q: "Which IR concept suggests states form alliances to balance power?",
    choices: ["Balancing", "Bandwagoning", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc297",
    q: "Which concept refers to the credibility of threats in deterrence?",
    choices: ["Relative gains", "Credibility", "Balance of power", "Democratic peace"],
    answer: 1
  },
  {
    id: "mc298",
    q: "Which theory emphasizes that norms and ideas shape international law?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc299",
    q: "Which of the following best describes 'balance of power'?",
    choices: [
      "States balancing against the strongest power",
      "States joining stronger states",
      "States forming institutions to cooperate",
      "States maximizing absolute gains"
    ],
    answer: 0
  },
  {
    id: "mc300",
    q: "Which conflict is often cited as an example of 'humanitarian intervention'?",
    choices: [
      "NATO intervention in Kosovo (1999)",
      "World War II",
      "Vietnam War",
      "Cold War"
    ],
    answer: 0
  },
    {
    id: "mc301",
    q: "Which of the following best describes 'power transition theory'?",
    choices: [
      "Stability is greatest when one state dominates",
      "States balance against the strongest power",
      "Institutions ensure global stability",
      "Democracies are less likely to fight"
    ],
    answer: 0
  },
  {
    id: "mc302",
    q: "Which concept refers to when weaker states align with stronger states for protection?",
    choices: ["Balancing", "Bandwagoning", "Soft balancing", "Buck-passing"],
    answer: 1
  },
  {
    id: "mc303",
    q: "Which theory argues that economic structures, not states, drive global politics?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc304",
    q: "Which IR concept suggests that nuclear weapons make major wars between great powers unlikely?",
    choices: ["Deterrence", "Nuclear revolution", "Extended deterrence", "Balance of power"],
    answer: 1
  },
  {
    id: "mc305",
    q: "Which of the following best describes the 'anarchical society'?",
    choices: [
      "A society without norms",
      "Order among states without central authority",
      "The collapse of the balance of power",
      "A world government"
    ],
    answer: 1
  },
  {
    id: "mc306",
    q: "Which event demonstrated the failure of appeasement in international politics?",
    choices: ["Munich Agreement (1938)", "Cuban Missile Crisis", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc307",
    q: "Which of the following wars is considered a 'proxy war'?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc308",
    q: "Which concept emphasizes that states can cooperate when institutions lower transaction costs?",
    choices: [
      "Neoliberal institutionalism",
      "Offensive realism",
      "Balance of threat",
      "Security dilemma"
    ],
    answer: 0
  },
  {
    id: "mc309",
    q: "Which IR theory emphasizes 'anarchy' as the defining condition of the system?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc310",
    q: "Which of the following best describes 'offensive realism'?",
    choices: [
      "States maximize power whenever possible",
      "States only seek enough power to survive",
      "States cooperate to maximize gains",
      "States rely on norms for peace"
    ],
    answer: 0
  },
  {
    id: "mc311",
    q: "Which organization exemplifies 'collective security'?",
    choices: ["UN", "NATO", "Warsaw Pact", "ASEAN"],
    answer: 0
  },
  {
    id: "mc312",
    q: "Which conflict is often cited as an example of U.S. 'imperial overstretch'?",
    choices: ["Vietnam War", "World War I", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc313",
    q: "Which concept suggests that norms evolve through a cycle of emergence, acceptance, and internalization?",
    choices: ["Security dilemma", "Democratic peace", "Norm life cycle", "Balance of power"],
    answer: 2
  },
  {
    id: "mc314",
    q: "Which scholar is associated with 'structural realism'?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc315",
    q: "Which IR theory highlights the importance of 'ideas' in shaping state interests?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc316",
    q: "Which IR concept refers to using institutions and norms instead of military force to constrain power?",
    choices: ["Soft balancing", "Hard balancing", "Bandwagoning", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc317",
    q: "Which of the following best illustrates 'detente'?",
    choices: [
      "Relaxation of U.S.–Soviet tensions in the 1970s",
      "Escalation of nuclear arms race",
      "NATO expansion after the Cold War",
      "Collapse of the Soviet Union"
    ],
    answer: 0
  },
  {
    id: "mc318",
    q: "Which theory argues that hegemonic decline leads to instability?",
    choices: ["Hegemonic stability theory", "Power transition theory", "Balance of power theory", "Democratic peace theory"],
    answer: 1
  },
  {
    id: "mc319",
    q: "Which IR concept emphasizes the importance of credibility in deterrence?",
    choices: ["Balance of power", "Relative gains", "Credibility", "Security dilemma"],
    answer: 2
  },
  {
    id: "mc320",
    q: "Which of the following wars best demonstrates nuclear deterrence in practice?",
    choices: ["Cold War (no direct war)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc321",
    q: "Which IR theory emphasizes cooperation through institutions?",
    choices: ["Neoliberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc322",
    q: "Which concept refers to when states allow others to bear the costs of balancing a threat?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc323",
    q: "Which concept is most associated with Joseph Nye?",
    choices: ["Soft power", "Offensive realism", "Balance of power", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc324",
    q: "Which conflict is often used to demonstrate the 'security dilemma'?",
    choices: ["Cold War arms race", "World War I", "Vietnam War", "Iraq War"],
    answer: 0
  },
  {
    id: "mc325",
    q: "Which of the following best describes 'extended deterrence'?",
    choices: [
      "Protecting allies with nuclear guarantees",
      "Preventing nuclear proliferation",
      "Deterring adversaries within borders",
      "Deterrence through norms"
    ],
    answer: 0
  },
  {
    id: "mc326",
    q: "Which concept emphasizes the importance of international society?",
    choices: ["English School", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc327",
    q: "Which of the following best describes 'asymmetrical warfare'?",
    choices: [
      "Conflict between actors of unequal strength",
      "Conflict between equal powers",
      "Conflict fought entirely through nuclear weapons",
      "Conflict fought for economic resources"
    ],
    answer: 0
  },
  {
    id: "mc328",
    q: "Which of the following conflicts illustrates 'balance of power'?",
    choices: ["Napoleonic Wars", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc329",
    q: "Which IR concept refers to the spread of nuclear weapons?",
    choices: ["Nuclear proliferation", "Extended deterrence", "Deterrence", "Arms race"],
    answer: 0
  },
  {
    id: "mc330",
    q: "Which theory suggests that anarchy does not necessarily lead to conflict?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc331",
    q: "Which scholar is most associated with 'offensive realism'?",
    choices: ["John Mearsheimer", "Kenneth Waltz", "Robert Keohane", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc332",
    q: "Which of the following best defines 'deterrence'?",
    choices: [
      "Preventing action by threatening unacceptable costs",
      "Building alliances to balance power",
      "Extending nuclear guarantees to allies",
      "Launching preemptive strikes"
    ],
    answer: 0
  },
  {
    id: "mc333",
    q: "Which IR concept is associated with credibility and signaling in military threats?",
    choices: ["Deterrence", "Soft power", "Bandwagoning", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc334",
    q: "Which of the following conflicts best illustrates the dangers of entangling alliances?",
    choices: ["World War I", "Vietnam War", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc335",
    q: "Which theory argues that norms shape what states perceive as legitimate actions?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc336",
    q: "Which of the following best describes 'hegemonic stability theory'?",
    choices: [
      "A hegemon provides stability to the international system",
      "Balance of power ensures stability",
      "Bipolarity prevents wars",
      "Democracies avoid wars with one another"
    ],
    answer: 0
  },
  {
    id: "mc337",
    q: "Which IR concept refers to the credibility of threats and promises in foreign policy?",
    choices: ["Deterrence", "Soft power", "Credibility", "Relative gains"],
    answer: 2
  },
  {
    id: "mc338",
    q: "Which of the following best describes 'collective goods problem'?",
    choices: [
      "Difficulty of providing goods that benefit all regardless of contribution",
      "Difficulty of balancing against rising powers",
      "Difficulty of preventing nuclear proliferation",
      "Difficulty of ensuring military credibility"
    ],
    answer: 0
  },
  {
    id: "mc339",
    q: "Which theory emphasizes that system polarity determines stability?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc340",
    q: "Which IR concept suggests that states seek to maximize absolute gains?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc341",
    q: "Which conflict is often used to illustrate the failures of collective security?",
    choices: ["World War II", "Vietnam War", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc342",
    q: "Which concept emphasizes that states may prioritize relative over absolute gains?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc343",
    q: "Which of the following is an example of preventive war?",
    choices: [
      "2003 U.S. invasion of Iraq",
      "World War II",
      "Korean War",
      "Vietnam War"
    ],
    answer: 0
  },
  {
    id: "mc344",
    q: "Which IR theory suggests that shared norms form the basis of international order?",
    choices: ["English School", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc345",
    q: "Which of the following is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Hans Morgenthau", "John Mearsheimer", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc346",
    q: "Which of the following wars exemplifies 'total war'?",
    choices: ["World War I", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc347",
    q: "Which concept argues that states’ behavior is influenced by social interactions?",
    choices: ["Constructivism", "Realism", "Liberalism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc348",
    q: "Which conflict is often cited as evidence of balance of threat theory?",
    choices: ["Alliances against Nazi Germany", "Vietnam War", "Gulf War", "Cold War"],
    answer: 0
  },
  {
    id: "mc349",
    q: "Which IR concept refers to wars fought indirectly through third parties?",
    choices: ["Proxy wars", "Total wars", "Preventive wars", "Limited wars"],
    answer: 0
  },
  {
    id: "mc350",
    q: "Which of the following is an example of 'humanitarian intervention'?",
    choices: [
      "NATO intervention in Kosovo (1999)",
      "World War II",
      "Vietnam War",
      "Cold War"
    ],
    answer: 0
  },
  {
    id: "mc351",
    q: "Which IR theory suggests that states cooperate when institutions reduce uncertainty?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc352",
    q: "Which IR concept refers to when states build up arms defensively but are perceived as offensive?",
    choices: ["Security dilemma", "Balance of power", "Relative gains", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc353",
    q: "Which theory argues that bipolarity is the most stable distribution of power?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc354",
    q: "Which conflict demonstrated the risks of nuclear brinkmanship?",
    choices: ["Cuban Missile Crisis", "World War II", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc355",
    q: "Which of the following best describes 'preventive war'?",
    choices: [
      "War fought to prevent a rising power from gaining strength",
      "War fought to repel imminent attacks",
      "War fought for humanitarian reasons",
      "War fought to balance threats"
    ],
    answer: 0
  },
  {
    id: "mc356",
    q: "Which IR theory emphasizes that domestic institutions shape foreign policy?",
    choices: ["Second-image theory", "First-image theory", "Third-image theory", "World-systems theory"],
    answer: 0
  },
  {
    id: "mc357",
    q: "Which IR concept emphasizes when leaders' perceptions drive conflict?",
    choices: ["First image", "Second image", "Third image", "Fourth image"],
    answer: 0
  },
  {
    id: "mc358",
    q: "Which IR theory claims that capitalism perpetuates underdevelopment in the global South?",
    choices: ["Dependency theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc359",
    q: "Which of the following conflicts illustrates 'proxy warfare'?",
    choices: ["Soviet involvement in Afghanistan", "World War I", "World War II", "Napoleonic Wars"],
    answer: 0
  },
  {
    id: "mc360",
    q: "Which IR concept refers to when norms become internalized and taken for granted?",
    choices: ["Norm internalization", "Security dilemma", "Democratic peace", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc361",
    q: "Which of the following best describes 'relative gains problem'?",
    choices: [
      "States care about distribution of benefits, not just absolute benefits",
      "States maximize total benefits regardless of distribution",
      "States avoid institutions due to sovereignty",
      "States refuse to balance threats"
    ],
    answer: 0
  },
  {
    id: "mc362",
    q: "Which IR theory critiques the assumption that states are the only important actors?",
    choices: ["Liberalism", "Realism", "Constructivism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc363",
    q: "Which of the following best describes 'complex interdependence'?",
    choices: [
      "Multiple channels of interaction reduce conflict",
      "Balance of power prevents war",
      "Nuclear weapons ensure peace",
      "Institutions undermine sovereignty"
    ],
    answer: 0
  },
  {
    id: "mc364",
    q: "Which of the following is an example of 'balance of power politics'?",
    choices: ["Alliances against Napoleonic France", "UN Security Council sanctions", "WTO trade rounds", "EU expansion"],
    answer: 0
  },
  {
    id: "mc365",
    q: "Which IR concept emphasizes the importance of shared identity among states?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc366",
    q: "Which IR theory would analyze climate change as a security threat?",
    choices: ["Constructivism", "Realism", "Liberalism", "Green theory"],
    answer: 3
  },
  {
    id: "mc367",
    q: "Which IR concept refers to the use of economic tools to achieve foreign policy goals?",
    choices: ["Economic statecraft", "Deterrence", "Soft power", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc368",
    q: "Which of the following best describes 'collective defense'?",
    choices: [
      "All states punish aggressors equally",
      "All states commit to defend each other against external attacks",
      "All states cooperate economically",
      "All states disarm simultaneously"
    ],
    answer: 1
  },
  {
    id: "mc369",
    q: "Which conflict exemplifies the failure of 'collective security' under the League of Nations?",
    choices: ["Invasion of Ethiopia (1935)", "Vietnam War", "World War I", "Cuban Missile Crisis"],
    answer: 0
  },
  {
    id: "mc370",
    q: "Which of the following is an example of 'soft power'?",
    choices: ["Japanese anime influencing global culture", "U.S. invasion of Iraq", "NATO military exercises", "Economic sanctions"],
    answer: 0
  },
  {
    id: "mc371",
    q: "Which IR theory suggests that shared values foster cooperation?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 2
  },
  {
    id: "mc372",
    q: "Which of the following best describes 'deterrence'?",
    choices: [
      "Threatening retaliation to prevent aggression",
      "Preemptive strikes against adversaries",
      "Balancing against powerful states",
      "Shifting costs onto allies"
    ],
    answer: 0
  },
  {
    id: "mc373",
    q: "Which concept explains that war is more likely when rising powers challenge declining ones?",
    choices: ["Power transition theory", "Balance of power theory", "Security dilemma", "Relative gains"],
    answer: 0
  },
  {
    id: "mc374",
    q: "Which scholar is most associated with the 'balance of power' concept?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "Robert Keohane", "Alexander Wendt"],
    answer: 1
  },
  {
    id: "mc375",
    q: "Which IR concept refers to the international spread of democratic norms?",
    choices: ["Democratization", "Democratic peace theory", "Constructivism", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc376",
    q: "Which conflict demonstrated the limits of U.S. power in asymmetrical warfare?",
    choices: ["Vietnam War", "World War I", "World War II", "Korean War"],
    answer: 0
  },
  {
    id: "mc377",
    q: "Which IR concept highlights states’ concerns about others cheating in cooperation?",
    choices: ["Prisoner’s Dilemma", "Security dilemma", "Bandwagoning", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc378",
    q: "Which of the following best describes 'extended deterrence'?",
    choices: [
      "A state deterring attacks against its allies",
      "A state deterring attacks within its borders",
      "A state preventing nuclear proliferation",
      "A state extending economic influence"
    ],
    answer: 0
  },
  {
    id: "mc379",
    q: "Which IR theory views the international system as a capitalist hierarchy?",
    choices: ["World-systems theory", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc380",
    q: "Which conflict illustrates the concept of 'hegemonic war'?",
    choices: ["Peloponnesian War", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc381",
    q: "Which IR concept argues that weaker states sometimes ally with stronger ones?",
    choices: ["Bandwagoning", "Balancing", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc382",
    q: "Which of the following best describes 'collective goods dilemma'?",
    choices: [
      "Difficulty of preventing free-riding on public goods",
      "Difficulty of deterring nuclear proliferation",
      "Difficulty of maintaining balance of power",
      "Difficulty of creating soft power"
    ],
    answer: 0
  },
  {
    id: "mc383",
    q: "Which of the following is most associated with 'soft power'?",
    choices: ["Joseph Nye", "Robert Keohane", "Hans Morgenthau", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc384",
    q: "Which IR theory emphasizes the impact of international institutions?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc385",
    q: "Which of the following conflicts best illustrates 'balance of threat'?",
    choices: ["Alliances against Nazi Germany", "World War II", "Vietnam War", "Cold War"],
    answer: 0
  },
  {
    id: "mc386",
    q: "Which IR concept refers to wars fought by great powers to reshape the system?",
    choices: ["Hegemonic wars", "Proxy wars", "Limited wars", "Asymmetric wars"],
    answer: 0
  },
  {
    id: "mc387",
    q: "Which of the following best describes 'asymmetrical warfare'?",
    choices: [
      "Conflict where weaker actors use unconventional tactics",
      "Conflict where both sides use nuclear weapons",
      "Conflict fought for economic gains",
      "Conflict fought through international institutions"
    ],
    answer: 0
  },
  {
    id: "mc388",
    q: "Which IR theory argues that anarchy is socially constructed?",
    choices: ["Constructivism", "Realism", "Neorealism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc389",
    q: "Which concept suggests that states balance against perceived threats, not just power?",
    choices: ["Balance of threat", "Balance of power", "Relative gains", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc390",
    q: "Which conflict is often used to demonstrate the logic of 'containment'?",
    choices: ["Korean War", "World War I", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc391",
    q: "Which IR concept refers to states overextending military commitments?",
    choices: ["Imperial overstretch", "Relative gains", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc392",
    q: "Which IR theory emphasizes economic interdependence as a force for peace?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc393",
    q: "Which IR concept refers to the spread of democracy as a stabilizing factor?",
    choices: ["Democratization", "Democratic peace theory", "Balance of power", "Norm diffusion"],
    answer: 1
  },
  {
    id: "mc394",
    q: "Which scholar developed the concept of 'hegemonic stability theory'?",
    choices: ["Charles Kindleberger", "Robert Keohane", "Joseph Nye", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc395",
    q: "Which of the following best describes 'preemptive war'?",
    choices: [
      "A strike against an imminent attack",
      "A strike against a rising future threat",
      "A war for economic gain",
      "A war to spread norms"
    ],
    answer: 0
  },
  {
    id: "mc396",
    q: "Which of the following best describes 'collective security'?",
    choices: [
      "An attack on one is an attack on all",
      "States defend only themselves",
      "Institutions undermine sovereignty",
      "States maximize absolute gains"
    ],
    answer: 0
  },
  {
    id: "mc397",
    q: "Which IR theory suggests that states’ interests are socially constructed?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc398",
    q: "Which of the following wars illustrates 'limited war'?",
    choices: ["Korean War", "World War I", "World War II", "Napoleonic Wars"],
    answer: 0
  },
  {
    id: "mc399",
    q: "Which IR concept highlights when leaders misperceive adversaries’ intentions?",
    choices: ["Security dilemma", "Misperception theory", "Bandwagoning", "Relative gains"],
    answer: 1
  },
  {
    id: "mc400",
    q: "Which of the following best describes 'democratic peace theory'?",
    choices: [
      "Democracies rarely fight each other",
      "Democracies avoid arms races",
      "Democracies dominate institutions",
      "Democracies never go to war"
    ],
    answer: 0
  },
  {
    id: "mc401",
    q: "Which IR theory emphasizes the pursuit of power as the central element of international politics?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc402",
    q: "Which IR concept refers to when the actions taken by one state to ensure security cause insecurity in others?",
    choices: ["Security dilemma", "Balance of power", "Relative gains", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc403",
    q: "Which IR concept emphasizes the importance of shared norms and values in shaping state behavior?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc404",
    q: "Which conflict highlighted the risk of nuclear escalation during the Cold War?",
    choices: ["Cuban Missile Crisis", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc405",
    q: "Which IR theory suggests that states form alliances based on perceived threats rather than raw power?",
    choices: ["Balance of threat", "Balance of power", "Bandwagoning", "Relative gains"],
    answer: 0
  },
  {
    id: "mc406",
    q: "Which concept explains why some states free-ride on others’ security efforts?",
    choices: ["Collective goods problem", "Relative gains", "Soft power", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc407",
    q: "Which of the following best describes 'hegemonic stability theory'?",
    choices: [
      "A hegemon creates order and stability in the international system",
      "Balance of power ensures peace",
      "Bipolarity reduces conflict",
      "Democracy prevents war"
    ],
    answer: 0
  },
  {
    id: "mc408",
    q: "Which scholar is most associated with 'complex interdependence'?",
    choices: ["Robert Keohane & Joseph Nye", "John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc409",
    q: "Which of the following conflicts is considered an example of a 'proxy war'?",
    choices: ["Vietnam War", "World War II", "Napoleonic Wars", "Gulf War"],
    answer: 0
  },
  {
    id: "mc410",
    q: "Which concept refers to using economic tools like sanctions to influence other states?",
    choices: ["Economic statecraft", "Deterrence", "Soft balancing", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc411",
    q: "Which IR theory highlights the anarchic structure of the international system?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc412",
    q: "Which of the following best describes 'democratic peace theory'?",
    choices: [
      "Democracies rarely go to war with each other",
      "Democracies never go to war",
      "Democracies dominate institutions",
      "Democracies avoid alliances"
    ],
    answer: 0
  },
  {
    id: "mc413",
    q: "Which concept refers to the buildup of military capabilities by rival states?",
    choices: ["Arms race", "Balance of power", "Security dilemma", "Deterrence"],
    answer: 0
  },
  {
    id: "mc414",
    q: "Which conflict symbolized the end of bipolarity?",
    choices: ["Cold War", "Vietnam War", "Korean War", "World War II"],
    answer: 0
  },
  {
    id: "mc415",
    q: "Which IR theory emphasizes that institutions matter for cooperation?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc416",
    q: "Which IR concept refers to wars fought indirectly through client states?",
    choices: ["Proxy wars", "Preventive wars", "Total wars", "Asymmetric wars"],
    answer: 0
  },
  {
    id: "mc417",
    q: "Which of the following best describes 'soft power'?",
    choices: [
      "Influencing others through culture, values, and legitimacy",
      "Influencing others through military strength",
      "Influencing others through economic sanctions",
      "Influencing others through alliances"
    ],
    answer: 0
  },
  {
    id: "mc418",
    q: "Which scholar is most associated with the idea that 'anarchy is what states make of it'?",
    choices: ["Alexander Wendt", "Kenneth Waltz", "Hans Morgenthau", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc419",
    q: "Which of the following best describes 'balance of power politics'?",
    choices: [
      "States align against the most powerful state",
      "States align with the most powerful state",
      "States rely on institutions instead of alliances",
      "States maximize economic gains"
    ],
    answer: 0
  },
  {
    id: "mc420",
    q: "Which IR concept refers to the spread of nuclear weapons to additional states?",
    choices: ["Nuclear proliferation", "Deterrence", "Extended deterrence", "Balance of power"],
    answer: 0
  },
  {
    id: "mc421",
    q: "Which IR theory argues that capitalism creates global inequality?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc422",
    q: "Which of the following best describes 'collective security'?",
    choices: [
      "An attack on one is an attack on all",
      "Each state provides for its own security",
      "States rely only on economic sanctions",
      "Institutions undermine sovereignty"
    ],
    answer: 0
  },
  {
    id: "mc423",
    q: "Which conflict demonstrated the dangers of entangling alliances?",
    choices: ["World War I", "Vietnam War", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc424",
    q: "Which of the following best describes 'humanitarian intervention'?",
    choices: [
      "Military intervention to stop mass atrocities",
      "Military intervention to expand territory",
      "Military intervention for economic gains",
      "Military intervention for prestige"
    ],
    answer: 0
  },
  {
    id: "mc425",
    q: "Which IR theory is most associated with 'hegemonic stability theory'?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc426",
    q: "Which conflict best illustrates the concept of 'containment'?",
    choices: ["Korean War", "World War I", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc427",
    q: "Which concept argues that states care about how gains are distributed among them?",
    choices: ["Relative gains", "Absolute gains", "Soft balancing", "Norm diffusion"],
    answer: 0
  },
  {
    id: "mc428",
    q: "Which scholar is most associated with classical realism?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc429",
    q: "Which of the following best describes 'imperial overstretch'?",
    choices: [
      "A hegemon extends commitments beyond its resources",
      "A weaker state allies with a stronger state",
      "States balance against powerful threats",
      "Institutions replace alliances"
    ],
    answer: 0
  },
  {
    id: "mc430",
    q: "Which IR theory emphasizes economic interdependence as a source of peace?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc431",
    q: "Which IR concept refers to the credibility of threats in foreign policy?",
    choices: ["Credibility", "Soft power", "Relative gains", "Deterrence"],
    answer: 0
  },
  {
    id: "mc432",
    q: "Which conflict is often cited as an example of U.S. 'overstretch'?",
    choices: ["Vietnam War", "Korean War", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc433",
    q: "Which IR theory emphasizes that global norms shape state identity?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc434",
    q: "Which concept suggests that democracies rarely fight one another?",
    choices: ["Democratic peace theory", "Balance of power", "Relative gains", "Collective security"],
    answer: 0
  },
  {
    id: "mc435",
    q: "Which IR concept refers to wars fought by great powers to redefine the system?",
    choices: ["Hegemonic wars", "Limited wars", "Proxy wars", "Preventive wars"],
    answer: 0
  },
  {
    id: "mc436",
    q: "Which IR theory emphasizes that states seek survival under anarchy?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc437",
    q: "Which conflict illustrated nuclear deterrence during the Cold War?",
    choices: ["Cold War (no direct war)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc438",
    q: "Which IR concept refers to relying on others to balance against threats?",
    choices: ["Buck-passing", "Bandwagoning", "Balancing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc439",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Hans Morgenthau", "John Mearsheimer", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc440",
    q: "Which IR concept refers to states joining a stronger state instead of opposing it?",
    choices: ["Bandwagoning", "Balancing", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc441",
    q: "Which of the following best describes 'asymmetric warfare'?",
    choices: [
      "Conflict between actors of unequal strength using unconventional tactics",
      "Conflict between equal powers",
      "Conflict between nuclear-armed states",
      "Conflict entirely through diplomacy"
    ],
    answer: 0
  },
  {
    id: "mc442",
    q: "Which IR concept emphasizes mutual reliance among states?",
    choices: ["Interdependence", "Balance of power", "Relative gains", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc443",
    q: "Which conflict illustrated the risks of entangling alliances?",
    choices: ["World War I", "World War II", "Cold War", "Vietnam War"],
    answer: 0
  },
  {
    id: "mc444",
    q: "Which IR theory highlights the role of class struggle in global politics?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc445",
    q: "Which IR concept refers to the spread of democratic norms across borders?",
    choices: ["Democratization", "Democratic peace theory", "Constructivism", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc446",
    q: "Which IR concept emphasizes when weaker actors exploit stronger ones’ vulnerabilities?",
    choices: ["Asymmetric warfare", "Proxy war", "Deterrence", "Relative gains"],
    answer: 0
  },
  {
    id: "mc447",
    q: "Which IR theory claims that norms evolve and change state behavior?",
    choices: ["Constructivism", "Realism", "Neorealism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc448",
    q: "Which of the following conflicts is considered a 'hegemonic war'?",
    choices: ["World War II", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc449",
    q: "Which IR theory is most associated with the concept of polarity?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc450",
    q: "Which of the following best describes 'collective goods dilemma'?",
    choices: [
      "Difficulty of preventing free-riding on public goods",
      "Difficulty of enforcing norms",
      "Difficulty of managing alliances",
      "Difficulty of balancing power"
    ],
    answer: 0
  },
  {
    id: "mc451",
    q: "Which IR concept emphasizes when a state uses culture and values to influence others?",
    choices: ["Soft power", "Hard power", "Deterrence", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc452",
    q: "Which conflict highlighted the Cold War policy of containment?",
    choices: ["Korean War", "World War II", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc453",
    q: "Which IR theory stresses that the anarchic system compels states to seek survival?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc454",
    q: "Which IR concept refers to wars fought by major powers to reshape the international system?",
    choices: ["Hegemonic wars", "Proxy wars", "Preventive wars", "Asymmetric wars"],
    answer: 0
  },
  {
    id: "mc455",
    q: "Which IR theory emphasizes economic interdependence as a stabilizing force?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc456",
    q: "Which of the following is an example of 'preventive war'?",
    choices: ["2003 U.S. invasion of Iraq", "World War II", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc457",
    q: "Which IR concept suggests that states join stronger powers for protection?",
    choices: ["Bandwagoning", "Balancing", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc458",
    q: "Which IR concept refers to the fear that cooperation will disproportionately benefit others?",
    choices: ["Relative gains", "Absolute gains", "Soft power", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc459",
    q: "Which IR theory suggests that norms shape the legitimacy of state actions?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc460",
    q: "Which conflict symbolized U.S. 'imperial overstretch'?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc461",
    q: "Which scholar is most associated with 'offensive realism'?",
    choices: ["John Mearsheimer", "Kenneth Waltz", "Robert Keohane", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc462",
    q: "Which IR concept refers to preventing action by threatening unacceptable retaliation?",
    choices: ["Deterrence", "Compellence", "Relative gains", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc463",
    q: "Which of the following is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Joseph Nye", "Hans Morgenthau", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc464",
    q: "Which IR theory suggests that class struggle drives international politics?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc465",
    q: "Which conflict highlighted the dangers of nuclear brinkmanship?",
    choices: ["Cuban Missile Crisis", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc466",
    q: "Which IR concept suggests states may shift burdens of balancing to others?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc467",
    q: "Which concept suggests that states worry about distribution of power across the system?",
    choices: ["Polarity", "Balance of power", "Relative gains", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc468",
    q: "Which IR theory emphasizes that democracies are less likely to fight one another?",
    choices: ["Democratic peace theory", "Balance of power theory", "World-systems theory", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc469",
    q: "Which IR concept emphasizes reliance on others for security provision?",
    choices: ["Buck-passing", "Bandwagoning", "Balancing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc470",
    q: "Which conflict is an example of a 'limited war'?",
    choices: ["Korean War", "World War II", "World War I", "Gulf War"],
    answer: 0
  },
  {
    id: "mc471",
    q: "Which IR concept refers to military buildups perceived as threatening by others?",
    choices: ["Security dilemma", "Balance of power", "Relative gains", "Deterrence"],
    answer: 0
  },
  {
    id: "mc472",
    q: "Which of the following best describes 'soft balancing'?",
    choices: [
      "Confronting powerful states using institutions and diplomacy",
      "Directly opposing powerful states with military alliances",
      "Joining stronger states for protection",
      "Shifting responsibility to others"
    ],
    answer: 0
  },
  {
    id: "mc473",
    q: "Which scholar is most associated with classical realism?",
    choices: ["Hans Morgenthau", "Robert Keohane", "Kenneth Waltz", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc474",
    q: "Which IR theory highlights the anarchic nature of the system?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc475",
    q: "Which IR concept refers to nuclear deterrence that prevents direct conflict between superpowers?",
    choices: ["Mutually assured destruction", "Extended deterrence", "Nuclear proliferation", "Balance of power"],
    answer: 0
  },
  {
    id: "mc476",
    q: "Which of the following best describes 'bandwagoning'?",
    choices: [
      "Aligning with stronger powers rather than opposing them",
      "Balancing against stronger powers",
      "Shifting burdens to others",
      "Building institutions to cooperate"
    ],
    answer: 0
  },
  {
    id: "mc477",
    q: "Which IR theory views states as unitary, rational actors?",
    choices: ["Realism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc478",
    q: "Which conflict is considered a 'proxy war' during the Cold War?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc479",
    q: "Which IR concept suggests that states’ identities are shaped by norms?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc480",
    q: "Which scholar is most associated with 'soft power'?",
    choices: ["Joseph Nye", "Robert Keohane", "Kenneth Waltz", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc481",
    q: "Which IR theory emphasizes the importance of institutions in fostering cooperation?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc482",
    q: "Which conflict demonstrated U.S. attempts to contain communism?",
    choices: ["Vietnam War", "World War I", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc483",
    q: "Which IR concept refers to states seeking credibility in their commitments?",
    choices: ["Credibility", "Relative gains", "Soft power", "Deterrence"],
    answer: 0
  },
  {
    id: "mc484",
    q: "Which IR theory views the system as hierarchical, with wealthy states exploiting poor states?",
    choices: ["Dependency theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc485",
    q: "Which IR concept highlights the difficulty of providing goods that benefit all regardless of contribution?",
    choices: ["Collective goods problem", "Relative gains", "Balance of power", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc486",
    q: "Which conflict is an example of nuclear deterrence preventing escalation?",
    choices: ["Cold War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc487",
    q: "Which IR theory is most associated with the phrase 'anarchy is what states make of it'?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc488",
    q: "Which of the following best describes 'relative gains'?",
    choices: [
      "States worry about others benefiting more from cooperation",
      "States maximize total benefits without concern for distribution",
      "States rely only on themselves for survival",
      "States form alliances to balance threats"
    ],
    answer: 0
  },
  {
    id: "mc489",
    q: "Which IR concept suggests states use military force to protect civilians from atrocities?",
    choices: ["Humanitarian intervention", "Containment", "Deterrence", "Balance of power"],
    answer: 0
  },
  {
    id: "mc490",
    q: "Which IR theory emphasizes the centrality of power in international politics?",
    choices: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc491",
    q: "Which scholar is most associated with 'hegemonic stability theory'?",
    choices: ["Charles Kindleberger", "Kenneth Waltz", "Hans Morgenthau", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc492",
    q: "Which of the following best describes 'asymmetric warfare'?",
    choices: [
      "Conflict where weaker actors use unconventional tactics",
      "Conflict between equal powers",
      "Conflict entirely fought with nuclear weapons",
      "Conflict fought under international law"
    ],
    answer: 0
  },
  {
    id: "mc493",
    q: "Which IR concept refers to military alliances formed to counterbalance stronger states?",
    choices: ["Balancing", "Bandwagoning", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc494",
    q: "Which conflict highlighted the success of containment during the Cold War?",
    choices: ["Korean War", "World War II", "Gulf War", "Napoleonic Wars"],
    answer: 0
  },
  {
    id: "mc495",
    q: "Which IR theory emphasizes norms, values, and identity in international relations?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc496",
    q: "Which concept argues that stability results when one state dominates?",
    choices: ["Hegemonic stability theory", "Balance of power", "Power transition theory", "Democratic peace theory"],
    answer: 0
  },
  {
    id: "mc497",
    q: "Which IR concept refers to nuclear retaliation capacity even after absorbing a first strike?",
    choices: ["Second-strike capability", "Extended deterrence", "Mutually assured destruction", "Nuclear proliferation"],
    answer: 0
  },
  {
    id: "mc498",
    q: "Which IR theory views global politics through the lens of capitalist exploitation?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc499",
    q: "Which IR concept refers to states shifting the burden of resisting threats to others?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc500",
    q: "Which of the following is an example of 'humanitarian intervention'?",
    choices: ["NATO intervention in Kosovo (1999)", "World War I", "Cold War", "Vietnam War"],
    answer: 0
  },
  {
    id: "mc501",
    q: "Which IR concept refers to the condition where no central authority governs states?",
    choices: ["Anarchy", "Polarity", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc502",
    q: "Which theory argues that states act primarily to maximize power?",
    choices: ["Offensive realism", "Defensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc503",
    q: "Which IR concept refers to international efforts to prevent the spread of nuclear weapons?",
    choices: ["Nonproliferation", "Deterrence", "Extended deterrence", "Arms race"],
    answer: 0
  },
  {
    id: "mc504",
    q: "Which IR theory emphasizes the socially constructed nature of international politics?",
    choices: ["Constructivism", "Realism", "Neorealism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc505",
    q: "Which of the following best describes 'balance of power'?",
    choices: [
      "States align against the strongest power",
      "States join stronger states",
      "States maximize absolute gains",
      "Institutions prevent conflict"
    ],
    answer: 0
  },
  {
    id: "mc506",
    q: "Which conflict is often cited as an example of 'containment' during the Cold War?",
    choices: ["Korean War", "Vietnam War", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc507",
    q: "Which IR concept refers to an attack intended to forestall an imminent attack?",
    choices: ["Preemptive strike", "Preventive war", "Compellence", "Extended deterrence"],
    answer: 0
  },
  {
    id: "mc508",
    q: "Which scholar is most associated with the idea that 'anarchy is what states make of it'?",
    choices: ["Alexander Wendt", "Kenneth Waltz", "John Mearsheimer", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc509",
    q: "Which IR theory emphasizes institutions as key to overcoming anarchy?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc510",
    q: "Which conflict best demonstrates nuclear deterrence in practice?",
    choices: ["Cold War (no direct war)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc511",
    q: "Which IR concept refers to the difficulty of providing public goods without free-riding?",
    choices: ["Collective goods problem", "Relative gains", "Soft power", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc512",
    q: "Which of the following best describes 'imperial overstretch'?",
    choices: [
      "When a hegemon extends beyond its capacity to maintain commitments",
      "When weaker states ally with stronger states",
      "When states rely on institutions",
      "When democracies spread norms"
    ],
    answer: 0
  },
  {
    id: "mc513",
    q: "Which IR theory predicts peace among democracies?",
    choices: ["Democratic peace theory", "Balance of power theory", "World-systems theory", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc514",
    q: "Which IR concept refers to when a rising power challenges an established hegemon?",
    choices: ["Power transition theory", "Balance of power", "Relative gains", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc515",
    q: "Which IR concept emphasizes mutual reliance between states?",
    choices: ["Interdependence", "Anarchy", "Relative gains", "Polarity"],
    answer: 0
  },
  {
    id: "mc516",
    q: "Which IR concept is illustrated by NATO's principle that an attack on one is an attack on all?",
    choices: ["Collective defense", "Collective security", "Balance of power", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc517",
    q: "Which IR theory argues that capitalism perpetuates global inequality?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc518",
    q: "Which conflict highlighted the failure of the League of Nations?",
    choices: ["World War II", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc519",
    q: "Which IR concept refers to spreading democracy as a stabilizing force?",
    choices: ["Democratic peace theory", "Democratization", "Constructivism", "Balance of threat"],
    answer: 1
  },
  {
    id: "mc520",
    q: "Which IR theory is most associated with the concept of polarity?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc521",
    q: "Which IR concept refers to the ability to retaliate even after absorbing a first strike?",
    choices: ["Second-strike capability", "Extended deterrence", "Mutually assured destruction", "Nuclear proliferation"],
    answer: 0
  },
  {
    id: "mc522",
    q: "Which IR theory emphasizes the centrality of norms in shaping international behavior?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc523",
    q: "Which conflict illustrated the U.S. policy of containment in Southeast Asia?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc524",
    q: "Which IR concept refers to joining stronger states for protection?",
    choices: ["Bandwagoning", "Balancing", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc525",
    q: "Which IR theory emphasizes that states seek only enough power to survive?",
    choices: ["Defensive realism", "Offensive realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc526",
    q: "Which conflict is an example of a 'hegemonic war'?",
    choices: ["World War II", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc527",
    q: "Which IR concept emphasizes the credibility of threats in deterrence?",
    choices: ["Credibility", "Soft power", "Relative gains", "Balance of power"],
    answer: 0
  },
  {
    id: "mc528",
    q: "Which IR theory views institutions as tools of powerful states?",
    choices: ["Realism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc529",
    q: "Which IR concept refers to wars fought indirectly through other actors?",
    choices: ["Proxy wars", "Preventive wars", "Total wars", "Asymmetric wars"],
    answer: 0
  },
  {
    id: "mc530",
    q: "Which IR theory claims that system polarity determines stability?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc531",
    q: "Which conflict symbolized the end of the Cold War?",
    choices: ["Fall of the Berlin Wall", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc532",
    q: "Which IR concept refers to when states seek to maximize absolute gains?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc533",
    q: "Which IR theory emphasizes that war results from human nature?",
    choices: ["Classical realism", "Neorealism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc534",
    q: "Which IR concept refers to wars fought by great powers to restructure the system?",
    choices: ["Hegemonic wars", "Proxy wars", "Limited wars", "Preventive wars"],
    answer: 0
  },
  {
    id: "mc535",
    q: "Which scholar is most associated with 'soft power'?",
    choices: ["Joseph Nye", "Robert Keohane", "Kenneth Waltz", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc536",
    q: "Which IR theory emphasizes class conflict as a driver of global politics?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc537",
    q: "Which IR concept suggests that weaker actors can exploit stronger ones through unconventional tactics?",
    choices: ["Asymmetric warfare", "Proxy war", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc538",
    q: "Which conflict best illustrates nuclear brinkmanship?",
    choices: ["Cuban Missile Crisis", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc539",
    q: "Which IR theory claims that norms explain why slavery and colonialism ended?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc540",
    q: "Which IR concept emphasizes that states act based on perceptions of others’ intentions?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc541",
    q: "Which conflict is an example of 'preventive war'?",
    choices: ["2003 U.S. invasion of Iraq", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc542",
    q: "Which IR concept refers to when states join together to punish aggressors collectively?",
    choices: ["Collective security", "Collective defense", "Balance of power", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc543",
    q: "Which IR theory emphasizes the moral dimension of international politics?",
    choices: ["English School", "Realism", "Neorealism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc544",
    q: "Which scholar is most associated with structural realism?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc545",
    q: "Which IR concept refers to states using diplomacy instead of force to balance power?",
    choices: ["Soft balancing", "Hard balancing", "Bandwagoning", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc546",
    q: "Which conflict illustrated the collapse of bipolarity?",
    choices: ["Cold War", "World War I", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc547",
    q: "Which IR concept suggests that states maximize power whenever possible?",
    choices: ["Offensive realism", "Defensive realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc548",
    q: "Which IR theory emphasizes cooperation through trade and institutions?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc549",
    q: "Which conflict is often cited as evidence for democratic peace theory?",
    choices: [
      "Absence of wars between mature democracies",
      "Vietnam War",
      "Korean War",
      "World War II"
    ],
    answer: 0
  },
  {
    id: "mc550",
    q: "Which IR concept refers to the difficulty of ensuring all states contribute to public goods?",
    choices: ["Collective goods dilemma", "Relative gains", "Balance of power", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc551",
    q: "Which IR concept refers to reliance on military threats to prevent conflict?",
    choices: ["Deterrence", "Compellence", "Soft power", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc552",
    q: "Which IR theory emphasizes survival as the main goal of states under anarchy?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc553",
    q: "Which conflict highlighted the U.S. attempt to prevent communist expansion in Asia?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc554",
    q: "Which IR concept refers to using norms and legitimacy rather than force?",
    choices: ["Soft power", "Hard power", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc555",
    q: "Which IR theory argues that power transitions are the most dangerous times in international politics?",
    choices: ["Power transition theory", "Democratic peace theory", "Balance of power", "World-systems theory"],
    answer: 0
  },
  {
    id: "mc556",
    q: "Which IR concept refers to rival states building military forces in response to each other?",
    choices: ["Arms race", "Deterrence", "Security dilemma", "Balancing"],
    answer: 0
  },
  {
    id: "mc557",
    q: "Which scholar is most associated with the 'balance of power' concept?",
    choices: ["Hans Morgenthau", "Alexander Wendt", "Joseph Nye", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc558",
    q: "Which conflict is often seen as a turning point in U.S. credibility in Cold War deterrence?",
    choices: ["Korean War", "World War II", "Gulf War", "Napoleonic Wars"],
    answer: 0
  },
  {
    id: "mc559",
    q: "Which IR concept emphasizes the diffusion of democratic norms across borders?",
    choices: ["Democratization", "Democratic peace theory", "Constructivism", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc560",
    q: "Which IR theory emphasizes that the international system is anarchic but institutions can mitigate conflict?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc561",
    q: "Which conflict highlighted NATO’s principle of collective defense after 9/11?",
    choices: ["Afghanistan War", "Vietnam War", "Korean War", "World War II"],
    answer: 0
  },
  {
    id: "mc562",
    q: "Which IR concept refers to the unintended consequences of states seeking security?",
    choices: ["Security dilemma", "Balance of power", "Relative gains", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc563",
    q: "Which IR theory highlights norms as a key explanation for state behavior?",
    choices: ["Constructivism", "Realism", "Neorealism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc564",
    q: "Which conflict highlighted the U.S. policy of 'rollback'?",
    choices: ["Korean War", "World War I", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc565",
    q: "Which IR concept refers to strategies used by weaker states against stronger states?",
    choices: ["Asymmetric warfare", "Bandwagoning", "Deterrence", "Relative gains"],
    answer: 0
  },
  {
    id: "mc566",
    q: "Which IR theory is associated with the idea of 'complex interdependence'?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc567",
    q: "Which scholar is most associated with 'hegemonic stability theory'?",
    choices: ["Charles Kindleberger", "Kenneth Waltz", "John Mearsheimer", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc568",
    q: "Which IR concept suggests that cooperation is difficult because states fear being cheated?",
    choices: ["Prisoner’s dilemma", "Relative gains", "Soft balancing", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc569",
    q: "Which conflict showed the weakness of collective security in the 1930s?",
    choices: ["Italian invasion of Ethiopia", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc570",
    q: "Which IR theory highlights capitalism as the foundation of international conflict?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc571",
    q: "Which IR concept refers to states seeking credibility in alliances and threats?",
    choices: ["Credibility", "Relative gains", "Soft power", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc572",
    q: "Which conflict marked the U.S. shift to unipolar dominance?",
    choices: ["Gulf War (1991)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc573",
    q: "Which IR theory emphasizes survival through limited power accumulation?",
    choices: ["Defensive realism", "Offensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc574",
    q: "Which IR concept refers to weaker states allying with stronger powers instead of opposing them?",
    choices: ["Bandwagoning", "Balancing", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc575",
    q: "Which scholar is most associated with the English School?",
    choices: ["Hedley Bull", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc576",
    q: "Which IR concept refers to the number of power centers in the international system?",
    choices: ["Polarity", "Anarchy", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc577",
    q: "Which conflict illustrated containment in Europe?",
    choices: ["Berlin Airlift", "Vietnam War", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc578",
    q: "Which IR theory argues that institutions are reflections of state power?",
    choices: ["Realism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc579",
    q: "Which IR concept refers to efforts to stop nuclear weapons spread?",
    choices: ["Nonproliferation", "Deterrence", "Arms race", "Mutually assured destruction"],
    answer: 0
  },
  {
    id: "mc580",
    q: "Which conflict symbolized U.S. credibility concerns in Asia?",
    choices: ["Vietnam War", "World War I", "World War II", "Korean War"],
    answer: 0
  },
  {
    id: "mc581",
    q: "Which IR theory emphasizes that material power is not the only determinant of behavior?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc582",
    q: "Which IR concept refers to deterrence applied to allies rather than oneself?",
    choices: ["Extended deterrence", "Second-strike capability", "Relative gains", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc583",
    q: "Which scholar is associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Joseph Nye", "Hans Morgenthau", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc584",
    q: "Which IR theory argues that norms explain the decline of practices like slavery?",
    choices: ["Constructivism", "Realism", "Liberalism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc585",
    q: "Which conflict is seen as a 'proxy war' in Africa during the Cold War?",
    choices: ["Angolan Civil War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc586",
    q: "Which IR concept refers to cooperation being undermined by mistrust and cheating?",
    choices: ["Prisoner’s dilemma", "Relative gains", "Balance of power", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc587",
    q: "Which conflict illustrated U.S. reliance on preemptive war post-9/11?",
    choices: ["Iraq War (2003)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc588",
    q: "Which IR theory emphasizes that states pursue absolute gains?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc589",
    q: "Which IR concept refers to using international institutions to constrain stronger states?",
    choices: ["Soft balancing", "Hard balancing", "Bandwagoning", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc590",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Kenneth Waltz", "Hans Morgenthau", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc591",
    q: "Which IR theory views world politics as a capitalist system of exploitation?",
    choices: ["World-systems theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc592",
    q: "Which conflict demonstrated the failure of appeasement?",
    choices: ["World War II", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc593",
    q: "Which IR concept refers to the spread of nuclear weapons capabilities?",
    choices: ["Proliferation", "Deterrence", "Nonproliferation", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc594",
    q: "Which IR theory emphasizes that state behavior is influenced by social interactions?",
    choices: ["Constructivism", "Realism", "Neorealism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc595",
    q: "Which conflict showed U.S. resolve to defend Western Europe?",
    choices: ["Berlin Airlift", "Vietnam War", "Korean War", "World War I"],
    answer: 0
  },
  {
    id: "mc596",
    q: "Which IR concept suggests states worry about distribution of benefits in cooperation?",
    choices: ["Relative gains", "Absolute gains", "Soft balancing", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc597",
    q: "Which IR theory emphasizes the anarchic structure of the system?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc598",
    q: "Which scholar is most associated with classical realism?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "John Mearsheimer", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc599",
    q: "Which IR concept refers to war intended to prevent an adversary’s rise?",
    choices: ["Preventive war", "Preemptive strike", "Proxy war", "Asymmetric warfare"],
    answer: 0
  },
  {
    id: "mc600",
    q: "Which conflict marked the beginning of the bipolar world order?",
    choices: ["Cold War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
    {
    id: "mc601",
    q: "Which IR theory argues that international institutions can reduce uncertainty and promote cooperation?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc602",
    q: "Which conflict symbolized the start of U.S. containment policy?",
    choices: ["Greek Civil War", "World War I", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc603",
    q: "Which IR concept refers to when states align against a perceived threat, not just power?",
    choices: ["Balance of threat", "Balance of power", "Bandwagoning", "Relative gains"],
    answer: 0
  },
  {
    id: "mc604",
    q: "Which IR theory suggests that norms and identities evolve over time?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc605",
    q: "Which IR concept describes when nuclear parity prevents war?",
    choices: ["Mutually assured destruction", "Extended deterrence", "Arms control", "Balance of power"],
    answer: 0
  },
  {
    id: "mc606",
    q: "Which scholar is associated with power transition theory?",
    choices: ["A.F.K. Organski", "Robert Keohane", "Kenneth Waltz", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc607",
    q: "Which IR theory argues that states maximize relative gains to avoid dependency?",
    choices: ["Realism", "Liberalism", "Constructivism", "World-systems theory"],
    answer: 0
  },
  {
    id: "mc608",
    q: "Which conflict revealed limits of collective security in the UN?",
    choices: ["Rwandan Genocide", "World War I", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc609",
    q: "Which IR concept emphasizes mutual vulnerability due to nuclear weapons?",
    choices: ["Mutual deterrence", "Balance of threat", "Soft balancing", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc610",
    q: "Which IR theory highlights the importance of shared ideas and social practices?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc611",
    q: "Which conflict marked the failure of appeasement strategies?",
    choices: ["World War II", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc612",
    q: "Which IR concept refers to policies intended to limit rival states’ influence?",
    choices: ["Containment", "Deterrence", "Rollback", "Balance of power"],
    answer: 0
  },
  {
    id: "mc613",
    q: "Which scholar is associated with the English School concept of international society?",
    choices: ["Hedley Bull", "Robert Keohane", "John Mearsheimer", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc614",
    q: "Which IR theory views the global economy as divided between core and periphery states?",
    choices: ["World-systems theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc615",
    q: "Which conflict illustrates humanitarian intervention in the 1990s?",
    choices: ["Kosovo (1999)", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc616",
    q: "Which IR concept refers to the ability of states to act independently?",
    choices: ["Sovereignty", "Anarchy", "Relative gains", "Polarity"],
    answer: 0
  },
  {
    id: "mc617",
    q: "Which IR theory emphasizes moral obligation and justice in world politics?",
    choices: ["English School", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc618",
    q: "Which conflict is often seen as a U.S. exercise of preventive war?",
    choices: ["Iraq War (2003)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc619",
    q: "Which IR concept describes when weaker states exploit vulnerabilities of stronger states?",
    choices: ["Asymmetric warfare", "Proxy war", "Balance of power", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc620",
    q: "Which IR theory argues that democracy spreads peace?",
    choices: ["Democratic peace theory", "Constructivism", "World-systems theory", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc621",
    q: "Which conflict marked NATO’s first major out-of-area intervention?",
    choices: ["Kosovo War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc622",
    q: "Which IR concept refers to states restraining stronger powers through institutions?",
    choices: ["Soft balancing", "Hard balancing", "Bandwagoning", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc623",
    q: "Which scholar is most associated with classical liberalism in IR?",
    choices: ["Immanuel Kant", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc624",
    q: "Which IR theory argues that global capitalism perpetuates dependency?",
    choices: ["Dependency theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc625",
    q: "Which conflict revealed the limitations of UN peacekeeping in the 1990s?",
    choices: ["Rwandan Genocide", "World War II", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc626",
    q: "Which IR concept refers to the ability of states to coerce others through military strength?",
    choices: ["Hard power", "Soft power", "Bandwagoning", "Deterrence"],
    answer: 0
  },
  {
    id: "mc627",
    q: "Which IR theory emphasizes the distribution of capabilities in the international system?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc628",
    q: "Which conflict highlighted the failure of the UN to stop aggression in the 1990s?",
    choices: ["Bosnian War", "Vietnam War", "Korean War", "World War I"],
    answer: 0
  },
  {
    id: "mc629",
    q: "Which IR concept refers to war fought with limited objectives?",
    choices: ["Limited war", "Total war", "Hegemonic war", "Proxy war"],
    answer: 0
  },
  {
    id: "mc630",
    q: "Which IR theory emphasizes that global norms shape state interests?",
    choices: ["Constructivism", "Realism", "Liberalism", "Neorealism"],
    answer: 0
  },
  {
    id: "mc631",
    q: "Which scholar is most associated with the concept of 'complex interdependence'?",
    choices: ["Keohane & Nye", "Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc632",
    q: "Which IR concept refers to preventing the spread of weapons of mass destruction?",
    choices: ["Nonproliferation", "Deterrence", "Relative gains", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc633",
    q: "Which conflict marked the first Gulf War?",
    choices: ["Iraq’s invasion of Kuwait", "Vietnam War", "Korean War", "Cold War"],
    answer: 0
  },
  {
    id: "mc634",
    q: "Which IR theory emphasizes that states pursue cooperation when benefits outweigh costs?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc635",
    q: "Which IR concept refers to states shifting responsibility for balancing to others?",
    choices: ["Buck-passing", "Bandwagoning", "Balancing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc636",
    q: "Which scholar is most associated with defensive realism?",
    choices: ["Kenneth Waltz", "John Mearsheimer", "Hans Morgenthau", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc637",
    q: "Which conflict marked U.S. reliance on NATO after 9/11?",
    choices: ["Afghanistan War", "Vietnam War", "Korean War", "World War II"],
    answer: 0
  },
  {
    id: "mc638",
    q: "Which IR concept refers to the spread of nuclear weapons to additional states?",
    choices: ["Nuclear proliferation", "Deterrence", "Balance of power", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc639",
    q: "Which IR theory highlights how economic structures shape state behavior?",
    choices: ["Marxism", "Realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc640",
    q: "Which conflict illustrated nuclear deterrence during the Cold War?",
    choices: ["Cuban Missile Crisis", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc641",
    q: "Which IR concept refers to influence through attraction and persuasion?",
    choices: ["Soft power", "Hard power", "Deterrence", "Relative gains"],
    answer: 0
  },
  {
    id: "mc642",
    q: "Which IR theory claims that states maximize security rather than power?",
    choices: ["Defensive realism", "Offensive realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc643",
    q: "Which scholar is most associated with the idea of 'anarchy as a permissive cause of war'?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc644",
    q: "Which conflict highlighted the risks of nuclear arms races?",
    choices: ["Cold War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc645",
    q: "Which IR concept refers to global cooperation to punish aggression?",
    choices: ["Collective security", "Balance of power", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc646",
    q: "Which IR theory emphasizes that system structure determines state behavior?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc647",
    q: "Which conflict is an example of proxy warfare in the Middle East?",
    choices: ["Syrian Civil War", "World War II", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc648",
    q: "Which IR concept refers to using international law and institutions to constrain great powers?",
    choices: ["Soft balancing", "Hard balancing", "Buck-passing", "Relative gains"],
    answer: 0
  },
  {
    id: "mc649",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Kenneth Waltz", "Robert Keohane", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc650",
    q: "Which IR theory argues that norms shape state identities and interests?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
    {
    id: "mc651",
    q: "Which IR concept refers to when states prepare for conflict by building up military capabilities?",
    choices: ["Arms race", "Balance of power", "Deterrence", "Relative gains"],
    answer: 0
  },
  {
    id: "mc652",
    q: "Which IR theory views international politics as shaped by capitalist exploitation?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc653",
    q: "Which conflict highlighted NATO’s role in collective security after the Cold War?",
    choices: ["Kosovo War", "World War II", "Korean War", "Vietnam War"],
    answer: 0
  },
  {
    id: "mc654",
    q: "Which IR concept refers to efforts to prevent nuclear proliferation?",
    choices: ["Nonproliferation", "Deterrence", "Extended deterrence", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc655",
    q: "Which scholar is most associated with classical realism?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc656",
    q: "Which IR theory emphasizes the importance of trade and economic interdependence?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc657",
    q: "Which conflict symbolized the dangers of entangling alliances?",
    choices: ["World War I", "Vietnam War", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc658",
    q: "Which IR concept refers to states joining stronger powers for security benefits?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc659",
    q: "Which IR theory emphasizes that the anarchic system compels states to seek power?",
    choices: ["Offensive realism", "Constructivism", "Liberalism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc660",
    q: "Which conflict illustrated nuclear brinkmanship between the U.S. and USSR?",
    choices: ["Cuban Missile Crisis", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc661",
    q: "Which IR concept refers to weaker actors exploiting stronger actors with unconventional tactics?",
    choices: ["Asymmetric warfare", "Proxy war", "Relative gains", "Balance of power"],
    answer: 0
  },
  {
    id: "mc662",
    q: "Which IR theory emphasizes that institutions matter for cooperation under anarchy?",
    choices: ["Neoliberal institutionalism", "Realism", "Marxism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc663",
    q: "Which scholar is most associated with the phrase 'anarchy is what states make of it'?",
    choices: ["Alexander Wendt", "Kenneth Waltz", "John Mearsheimer", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc664",
    q: "Which IR concept refers to wars fought to prevent adversaries from gaining strength?",
    choices: ["Preventive war", "Preemptive strike", "Limited war", "Proxy war"],
    answer: 0
  },
  {
    id: "mc665",
    q: "Which IR theory emphasizes the importance of democratic norms for peace?",
    choices: ["Democratic peace theory", "World-systems theory", "Dependency theory", "Realism"],
    answer: 0
  },
  {
    id: "mc666",
    q: "Which conflict highlighted the effectiveness of NATO’s collective defense clause?",
    choices: ["Afghanistan War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc667",
    q: "Which IR concept refers to the distribution of power centers in the international system?",
    choices: ["Polarity", "Anarchy", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc668",
    q: "Which IR theory emphasizes capitalism as the driver of inequality in the global system?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc669",
    q: "Which conflict symbolized U.S. resolve to defend West Berlin?",
    choices: ["Berlin Airlift", "Vietnam War", "Korean War", "World War I"],
    answer: 0
  },
  {
    id: "mc670",
    q: "Which IR concept refers to the credibility of threats in deterrence?",
    choices: ["Credibility", "Soft power", "Relative gains", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc671",
    q: "Which scholar is most associated with the concept of 'soft power'?",
    choices: ["Joseph Nye", "Robert Keohane", "Hans Morgenthau", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc672",
    q: "Which IR theory argues that system polarity affects stability?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc673",
    q: "Which conflict marked U.S. reliance on preemptive war post-9/11?",
    choices: ["Iraq War (2003)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc674",
    q: "Which IR concept refers to alliances formed to oppose the strongest state?",
    choices: ["Balancing", "Bandwagoning", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc675",
    q: "Which IR theory emphasizes that state behavior is influenced by social norms?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc676",
    q: "Which conflict marked the U.S. attempt to contain communism in Asia?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc677",
    q: "Which IR concept refers to states shifting burdens to others in balancing?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc678",
    q: "Which scholar is most associated with the English School?",
    choices: ["Hedley Bull", "Kenneth Waltz", "John Mearsheimer", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc679",
    q: "Which IR theory emphasizes international society as a middle ground between realism and idealism?",
    choices: ["English School", "Neorealism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc680",
    q: "Which conflict revealed the failure of the League of Nations?",
    choices: ["Italian invasion of Ethiopia", "Vietnam War", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc681",
    q: "Which IR concept refers to influence through culture and legitimacy?",
    choices: ["Soft power", "Hard power", "Deterrence", "Balance of power"],
    answer: 0
  },
  {
    id: "mc682",
    q: "Which IR theory emphasizes power maximization under anarchy?",
    choices: ["Offensive realism", "Defensive realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc683",
    q: "Which conflict is considered a proxy war during the Cold War?",
    choices: ["Vietnam War", "World War I", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc684",
    q: "Which IR concept refers to the challenge of providing public goods under anarchy?",
    choices: ["Collective goods problem", "Relative gains", "Security dilemma", "Polarity"],
    answer: 0
  },
  {
    id: "mc685",
    q: "Which scholar is associated with 'hegemonic stability theory'?",
    choices: ["Charles Kindleberger", "Kenneth Waltz", "Hans Morgenthau", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc686",
    q: "Which IR theory argues that democracy reduces the likelihood of conflict?",
    choices: ["Democratic peace theory", "World-systems theory", "Dependency theory", "Constructivism"],
    answer: 0
  },
  {
    id: "mc687",
    q: "Which conflict highlighted the dangers of nuclear proliferation?",
    choices: ["Cuban Missile Crisis", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc688",
    q: "Which IR concept refers to states allying with stronger states instead of opposing them?",
    choices: ["Bandwagoning", "Balancing", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc689",
    q: "Which IR theory emphasizes that institutions shape cooperation?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc690",
    q: "Which conflict marked the Cold War’s end?",
    choices: ["Fall of the Berlin Wall", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc691",
    q: "Which IR concept refers to states acting independently without external control?",
    choices: ["Sovereignty", "Anarchy", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc692",
    q: "Which scholar is most associated with structural realism?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc693",
    q: "Which IR theory emphasizes norms as central to state identity?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc694",
    q: "Which conflict showed the dangers of appeasement policies?",
    choices: ["World War II", "World War I", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc695",
    q: "Which IR concept refers to strategies weaker actors use against stronger ones?",
    choices: ["Asymmetric warfare", "Bandwagoning", "Deterrence", "Balance of power"],
    answer: 0
  },
  {
    id: "mc696",
    q: "Which IR theory emphasizes survival rather than power maximization?",
    choices: ["Defensive realism", "Offensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc697",
    q: "Which conflict revealed U.S. reliance on containment in Asia?",
    choices: ["Korean War", "Vietnam War", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc698",
    q: "Which IR concept refers to states’ concerns about unequal benefits in cooperation?",
    choices: ["Relative gains", "Absolute gains", "Soft balancing", "Prisoner’s dilemma"],
    answer: 0
  },
  {
    id: "mc699",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Kenneth Waltz", "Robert Keohane", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc700",
    q: "Which IR theory emphasizes that norms evolve and reshape state behavior?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
    {
    id: "mc701",
    q: "Which IR concept refers to military alliances formed to counter stronger states?",
    choices: ["Balancing", "Bandwagoning", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc702",
    q: "Which IR theory highlights how shared norms and identities shape international politics?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc703",
    q: "Which conflict symbolized the Cold War rivalry without direct war between superpowers?",
    choices: ["Cold War", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc704",
    q: "Which IR concept refers to the spread of nuclear weapons to new states?",
    choices: ["Nuclear proliferation", "Deterrence", "Balance of power", "Nonproliferation"],
    answer: 0
  },
  {
    id: "mc705",
    q: "Which scholar is most associated with classical liberalism and perpetual peace?",
    choices: ["Immanuel Kant", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc706",
    q: "Which IR theory emphasizes economic interdependence as a path to peace?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc707",
    q: "Which conflict illustrated U.S. imperial overstretch during the Cold War?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc708",
    q: "Which IR concept refers to weaker states aligning with stronger powers?",
    choices: ["Bandwagoning", "Balancing", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc709",
    q: "Which IR theory emphasizes power maximization as the key to survival?",
    choices: ["Offensive realism", "Defensive realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc710",
    q: "Which conflict marked a turning point in nuclear brinkmanship?",
    choices: ["Cuban Missile Crisis", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc711",
    q: "Which IR concept describes when weaker actors use unconventional methods against stronger states?",
    choices: ["Asymmetric warfare", "Proxy war", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc712",
    q: "Which IR theory emphasizes the role of international institutions in cooperation?",
    choices: ["Neoliberal institutionalism", "Realism", "Marxism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc713",
    q: "Which scholar is associated with structural realism?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc714",
    q: "Which IR concept refers to wars fought to prevent rivals from gaining future strength?",
    choices: ["Preventive war", "Preemptive strike", "Proxy war", "Limited war"],
    answer: 0
  },
  {
    id: "mc715",
    q: "Which IR theory suggests that democracies rarely fight one another?",
    choices: ["Democratic peace theory", "World-systems theory", "Dependency theory", "Realism"],
    answer: 0
  },
  {
    id: "mc716",
    q: "Which conflict illustrated NATO’s first major humanitarian intervention?",
    choices: ["Kosovo War", "Vietnam War", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc717",
    q: "Which IR concept refers to the number of major powers in the system?",
    choices: ["Polarity", "Anarchy", "Relative gains", "Balance of power"],
    answer: 0
  },
  {
    id: "mc718",
    q: "Which IR theory emphasizes class struggle as the foundation of world politics?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc719",
    q: "Which conflict revealed the limits of UN peacekeeping in the 1990s?",
    choices: ["Rwandan Genocide", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc720",
    q: "Which IR concept refers to the independent authority of states?",
    choices: ["Sovereignty", "Anarchy", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc721",
    q: "Which scholar is associated with the English School and 'international society'?",
    choices: ["Hedley Bull", "Hans Morgenthau", "Kenneth Waltz", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc722",
    q: "Which IR theory argues that capitalism perpetuates dependency in the global economy?",
    choices: ["Dependency theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc723",
    q: "Which conflict marked the beginning of the unipolar moment?",
    choices: ["Gulf War (1991)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc724",
    q: "Which IR concept refers to influence through military and economic coercion?",
    choices: ["Hard power", "Soft power", "Bandwagoning", "Deterrence"],
    answer: 0
  },
  {
    id: "mc725",
    q: "Which IR theory argues that system structure explains state behavior?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "English School"],
    answer: 0
  },
  {
    id: "mc726",
    q: "Which conflict symbolized the policy of containment in Europe?",
    choices: ["Berlin Airlift", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc727",
    q: "Which IR concept refers to states relying on others to bear defense burdens?",
    choices: ["Buck-passing", "Bandwagoning", "Balancing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc728",
    q: "Which IR theory emphasizes the socially constructed nature of anarchy?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc729",
    q: "Which scholar is associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Kenneth Waltz", "Hans Morgenthau", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc730",
    q: "Which IR concept refers to military buildup perceived as threatening by others?",
    choices: ["Security dilemma", "Balance of power", "Relative gains", "Deterrence"],
    answer: 0
  },
  {
    id: "mc731",
    q: "Which IR theory highlights the role of global capitalism in shaping state behavior?",
    choices: ["World-systems theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc732",
    q: "Which conflict is considered a Cold War proxy war in Africa?",
    choices: ["Angolan Civil War", "World War II", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc733",
    q: "Which IR concept refers to states allying against stronger adversaries?",
    choices: ["Balancing", "Bandwagoning", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc734",
    q: "Which IR theory emphasizes that norms evolve and shape state interests?",
    choices: ["Constructivism", "Realism", "Neorealism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc735",
    q: "Which conflict demonstrated the failure of collective security in the 1930s?",
    choices: ["Italian invasion of Ethiopia", "World War I", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc736",
    q: "Which IR concept refers to the global order created by a dominant power?",
    choices: ["Hegemony", "Balance of power", "Polarity", "Collective security"],
    answer: 0
  },
  {
    id: "mc737",
    q: "Which scholar is associated with offensive realism?",
    choices: ["John Mearsheimer", "Kenneth Waltz", "Hans Morgenthau", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc738",
    q: "Which IR theory emphasizes that institutions reflect underlying power relations?",
    choices: ["Realism", "Constructivism", "Liberalism", "English School"],
    answer: 0
  },
  {
    id: "mc739",
    q: "Which conflict highlighted humanitarian intervention in the 1990s?",
    choices: ["Kosovo War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc740",
    q: "Which IR concept refers to states’ concerns about distribution of benefits in cooperation?",
    choices: ["Relative gains", "Absolute gains", "Soft balancing", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc741",
    q: "Which IR theory argues that global politics is driven by capitalist exploitation?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc742",
    q: "Which conflict illustrated U.S. reliance on extended deterrence in Europe?",
    choices: ["Cold War", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc743",
    q: "Which IR concept refers to wars fought indirectly via third parties?",
    choices: ["Proxy wars", "Preventive wars", "Hegemonic wars", "Limited wars"],
    answer: 0
  },
  {
    id: "mc744",
    q: "Which IR theory suggests that democracy fosters peace between states?",
    choices: ["Democratic peace theory", "Neorealism", "Constructivism", "World-systems theory"],
    answer: 0
  },
  {
    id: "mc745",
    q: "Which scholar is associated with 'complex interdependence'?",
    choices: ["Keohane & Nye", "Hans Morgenthau", "Kenneth Waltz", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc746",
    q: "Which IR concept refers to reliance on others for balancing threats?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc747",
    q: "Which IR theory emphasizes that anarchy compels states to self-help?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc748",
    q: "Which conflict symbolized U.S. containment of communism in Asia?",
    choices: ["Korean War", "Vietnam War", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc749",
    q: "Which IR concept refers to alliances where an attack on one is treated as an attack on all?",
    choices: ["Collective defense", "Collective security", "Balance of power", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc750",
    q: "Which IR theory emphasizes that material and social structures both shape politics?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
    {
    id: "mc751",
    q: "Which IR concept refers to states prioritizing self-help in an anarchic system?",
    choices: ["Self-help", "Balance of power", "Relative gains", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc752",
    q: "Which IR theory emphasizes the influence of shared norms and values?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc753",
    q: "Which conflict illustrated proxy warfare in Latin America during the Cold War?",
    choices: ["Nicaraguan Contra War", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc754",
    q: "Which IR concept refers to the credibility of commitments in alliances?",
    choices: ["Credibility", "Relative gains", "Deterrence", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc755",
    q: "Which scholar is associated with the realist concept of the national interest?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc756",
    q: "Which IR theory emphasizes maximizing relative power to ensure survival?",
    choices: ["Offensive realism", "Defensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc757",
    q: "Which conflict symbolized the dangers of nuclear brinkmanship?",
    choices: ["Cuban Missile Crisis", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc758",
    q: "Which IR concept refers to states joining stronger powers for benefits?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc759",
    q: "Which IR theory emphasizes that norms change over time and shape interests?",
    choices: ["Constructivism", "Realism", "Neorealism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc760",
    q: "Which conflict illustrated U.S. imperial overstretch?",
    choices: ["Vietnam War", "World War I", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc761",
    q: "Which IR concept refers to states restraining powerful actors through institutions?",
    choices: ["Soft balancing", "Hard balancing", "Bandwagoning", "Relative gains"],
    answer: 0
  },
  {
    id: "mc762",
    q: "Which IR theory emphasizes the anarchic structure of the system?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc763",
    q: "Which scholar is most associated with defensive realism?",
    choices: ["Kenneth Waltz", "John Mearsheimer", "Hans Morgenthau", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc764",
    q: "Which IR concept refers to the challenges of cooperation under anarchy?",
    choices: ["Prisoner’s dilemma", "Relative gains", "Balance of power", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc765",
    q: "Which IR theory argues that democracy reduces conflict among states?",
    choices: ["Democratic peace theory", "Neorealism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc766",
    q: "Which conflict revealed UN limitations in the 1990s?",
    choices: ["Bosnian War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc767",
    q: "Which IR concept refers to states acting independently under anarchy?",
    choices: ["Sovereignty", "Polarity", "Relative gains", "Collective security"],
    answer: 0
  },
  {
    id: "mc768",
    q: "Which IR theory highlights capitalism as the root of inequality in world politics?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc769",
    q: "Which conflict symbolized U.S. containment in Europe?",
    choices: ["Berlin Airlift", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc770",
    q: "Which IR concept refers to influence through attraction and persuasion?",
    choices: ["Soft power", "Hard power", "Balance of power", "Deterrence"],
    answer: 0
  },
  {
    id: "mc771",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Kenneth Waltz", "Hans Morgenthau", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc772",
    q: "Which IR theory emphasizes state survival under anarchy?",
    choices: ["Defensive realism", "Offensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc773",
    q: "Which conflict illustrated proxy war in Southeast Asia?",
    choices: ["Vietnam War", "World War II", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc774",
    q: "Which IR concept refers to states shifting burdens of balancing to others?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc775",
    q: "Which IR theory emphasizes that norms shape state identity?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc776",
    q: "Which scholar is associated with the concept of 'hegemonic stability theory'?",
    choices: ["Charles Kindleberger", "Joseph Nye", "Kenneth Waltz", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc777",
    q: "Which IR concept refers to alliances where an attack on one is an attack on all?",
    choices: ["Collective defense", "Collective security", "Balance of power", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc778",
    q: "Which IR theory emphasizes the socially constructed nature of anarchy?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc779",
    q: "Which conflict revealed the dangers of nuclear proliferation?",
    choices: ["Cuban Missile Crisis", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc780",
    q: "Which IR concept refers to wars fought indirectly through third parties?",
    choices: ["Proxy wars", "Preventive wars", "Hegemonic wars", "Limited wars"],
    answer: 0
  },
  {
    id: "mc781",
    q: "Which IR theory argues that democracy fosters peaceful relations?",
    choices: ["Democratic peace theory", "World-systems theory", "Dependency theory", "Realism"],
    answer: 0
  },
  {
    id: "mc782",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Kenneth Waltz", "Hans Morgenthau", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc783",
    q: "Which IR concept refers to preventing adversaries from gaining power in the future?",
    choices: ["Preventive war", "Preemptive strike", "Balance of power", "Deterrence"],
    answer: 0
  },
  {
    id: "mc784",
    q: "Which conflict demonstrated NATO’s collective defense principle after 9/11?",
    choices: ["Afghanistan War", "World War II", "Korean War", "Vietnam War"],
    answer: 0
  },
  {
    id: "mc785",
    q: "Which IR theory emphasizes that institutions help overcome anarchy?",
    choices: ["Neoliberal institutionalism", "Realism", "Marxism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc786",
    q: "Which IR concept refers to the anarchic condition of the international system?",
    choices: ["Anarchy", "Sovereignty", "Polarity", "Balance of power"],
    answer: 0
  },
  {
    id: "mc787",
    q: "Which scholar is most associated with structural realism?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "Robert Keohane", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc788",
    q: "Which IR theory emphasizes global capitalism as the main driver of politics?",
    choices: ["World-systems theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc789",
    q: "Which conflict illustrated containment in Asia?",
    choices: ["Korean War", "World War I", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc790",
    q: "Which IR concept refers to credibility in deterrence?",
    choices: ["Credibility", "Relative gains", "Soft power", "Balance of power"],
    answer: 0
  },
  {
    id: "mc791",
    q: "Which IR theory argues that states maximize power whenever possible?",
    choices: ["Offensive realism", "Defensive realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc792",
    q: "Which scholar is associated with the phrase 'anarchy is what states make of it'?",
    choices: ["Alexander Wendt", "Kenneth Waltz", "John Mearsheimer", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc793",
    q: "Which IR concept refers to states shifting burdens to others?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc794",
    q: "Which conflict symbolized the end of the Cold War?",
    choices: ["Fall of the Berlin Wall", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc795",
    q: "Which IR theory emphasizes the influence of institutions and trade on cooperation?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc796",
    q: "Which IR concept refers to wars fought by great powers to reshape the system?",
    choices: ["Hegemonic wars", "Proxy wars", "Preventive wars", "Limited wars"],
    answer: 0
  },
  {
    id: "mc797",
    q: "Which scholar is most associated with the concept of 'soft power'?",
    choices: ["Joseph Nye", "Robert Keohane", "Kenneth Waltz", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc798",
    q: "Which IR theory emphasizes that norms evolve and reshape interests?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc799",
    q: "Which conflict revealed the failure of collective security in the UN?",
    choices: ["Rwandan Genocide", "World War II", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc800",
    q: "Which IR concept refers to preventing the spread of nuclear weapons?",
    choices: ["Nonproliferation", "Deterrence", "Proliferation", "Relative gains"],
    answer: 0
  },
    {
    id: "mc801",
    q: "Which IR theory highlights the anarchic structure as the main driver of state behavior?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc802",
    q: "Which IR concept refers to the use of military buildup that provokes insecurity in others?",
    choices: ["Security dilemma", "Balance of power", "Deterrence", "Relative gains"],
    answer: 0
  },
  {
    id: "mc803",
    q: "Which scholar is most associated with classical realism?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc804",
    q: "Which IR theory emphasizes the importance of international organizations in reducing conflict?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc805",
    q: "Which conflict illustrated the U.S. strategy of containment in Asia?",
    choices: ["Korean War", "World War II", "Gulf War", "Crimean War"],
    answer: 0
  },
  {
    id: "mc806",
    q: "Which IR concept refers to weaker states aligning with stronger states for security?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc807",
    q: "Which IR theory emphasizes maximizing relative power to ensure security?",
    choices: ["Offensive realism", "Defensive realism", "Neoliberal institutionalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc808",
    q: "Which conflict demonstrated nuclear brinkmanship between superpowers?",
    choices: ["Cuban Missile Crisis", "Vietnam War", "World War I", "Gulf War"],
    answer: 0
  },
  {
    id: "mc809",
    q: "Which IR concept refers to the influence of culture, values, and legitimacy?",
    choices: ["Soft power", "Hard power", "Balance of power", "Deterrence"],
    answer: 0
  },
  {
    id: "mc810",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc811",
    q: "Which IR theory emphasizes norms and identities as central to state behavior?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc812",
    q: "Which conflict revealed the failure of collective security during the interwar years?",
    choices: ["Italian invasion of Ethiopia", "World War II", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc813",
    q: "Which IR concept refers to wars launched to prevent adversaries’ future power?",
    choices: ["Preventive war", "Preemptive strike", "Limited war", "Proxy war"],
    answer: 0
  },
  {
    id: "mc814",
    q: "Which IR theory suggests democracies rarely fight one another?",
    choices: ["Democratic peace theory", "World-systems theory", "Dependency theory", "Realism"],
    answer: 0
  },
  {
    id: "mc815",
    q: "Which scholar is associated with the English School?",
    choices: ["Hedley Bull", "Kenneth Waltz", "Hans Morgenthau", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc816",
    q: "Which IR concept refers to the independent authority of states?",
    choices: ["Sovereignty", "Anarchy", "Relative gains", "Balance of power"],
    answer: 0
  },
  {
    id: "mc817",
    q: "Which IR theory highlights capitalism as the root of global inequality?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc818",
    q: "Which conflict revealed UN failures in humanitarian intervention?",
    choices: ["Rwandan Genocide", "World War II", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc819",
    q: "Which IR concept refers to the number of great powers in the system?",
    choices: ["Polarity", "Anarchy", "Relative gains", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc820",
    q: "Which scholar is most associated with soft power?",
    choices: ["Joseph Nye", "Kenneth Waltz", "Robert Keohane", "Hans Morgenthau"],
    answer: 0
  },
  {
    id: "mc821",
    q: "Which IR theory emphasizes survival through balancing rather than maximizing power?",
    choices: ["Defensive realism", "Offensive realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc822",
    q: "Which conflict marked the beginning of U.S. unipolar dominance?",
    choices: ["Gulf War (1991)", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc823",
    q: "Which IR concept refers to wars fought indirectly through third parties?",
    choices: ["Proxy wars", "Preventive wars", "Limited wars", "Hegemonic wars"],
    answer: 0
  },
  {
    id: "mc824",
    q: "Which IR theory argues that capitalism perpetuates dependency?",
    choices: ["Dependency theory", "Liberalism", "Neorealism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc825",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc826",
    q: "Which IR concept refers to alliances based on collective defense?",
    choices: ["Collective defense", "Collective security", "Balance of power", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc827",
    q: "Which IR theory emphasizes that norms are socially constructed?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc828",
    q: "Which conflict symbolized the policy of containment in Europe?",
    choices: ["Berlin Airlift", "Vietnam War", "Gulf War", "Korean War"],
    answer: 0
  },
  {
    id: "mc829",
    q: "Which IR concept refers to states cooperating to prevent aggression by any state?",
    choices: ["Collective security", "Balance of power", "Relative gains", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc830",
    q: "Which IR theory emphasizes institutions as tools for cooperation?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc831",
    q: "Which scholar is most associated with the balance of power theory?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc832",
    q: "Which IR concept refers to strategies weaker actors use against stronger states?",
    choices: ["Asymmetric warfare", "Balancing", "Bandwagoning", "Deterrence"],
    answer: 0
  },
  {
    id: "mc833",
    q: "Which conflict marked the limits of U.S. intervention in Somalia?",
    choices: ["Battle of Mogadishu", "Vietnam War", "Gulf War", "Korean War"],
    answer: 0
  },
  {
    id: "mc834",
    q: "Which IR concept refers to states joining stronger actors rather than resisting them?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc835",
    q: "Which IR theory emphasizes that system polarity shapes conflict likelihood?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc836",
    q: "Which scholar is most associated with 'complex interdependence'?",
    choices: ["Keohane & Nye", "Kenneth Waltz", "Hans Morgenthau", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc837",
    q: "Which IR concept refers to global order created by a dominant power?",
    choices: ["Hegemony", "Balance of power", "Polarity", "Deterrence"],
    answer: 0
  },
  {
    id: "mc838",
    q: "Which conflict symbolized U.S. reliance on preemptive war post-9/11?",
    choices: ["Iraq War (2003)", "Vietnam War", "World War I", "Gulf War"],
    answer: 0
  },
  {
    id: "mc839",
    q: "Which IR theory argues that democracy fosters peace among nations?",
    choices: ["Democratic peace theory", "Realism", "Dependency theory", "World-systems theory"],
    answer: 0
  },
  {
    id: "mc840",
    q: "Which IR concept refers to the difficulty of producing global public goods?",
    choices: ["Collective goods problem", "Security dilemma", "Relative gains", "Polarity"],
    answer: 0
  },
  {
    id: "mc841",
    q: "Which scholar is most associated with 'hegemonic stability theory'?",
    choices: ["Charles Kindleberger", "Joseph Nye", "Hans Morgenthau", "Kenneth Waltz"],
    answer: 0
  },
  {
    id: "mc842",
    q: "Which IR theory emphasizes both material and ideational structures?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc843",
    q: "Which conflict highlighted humanitarian intervention in the 1990s?",
    choices: ["Kosovo War", "Vietnam War", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc844",
    q: "Which IR concept refers to states allying against the strongest state?",
    choices: ["Balancing", "Bandwagoning", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc845",
    q: "Which IR theory highlights that institutions reflect underlying power?",
    choices: ["Realism", "Neorealism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc846",
    q: "Which scholar is associated with the English School’s 'international society'?",
    choices: ["Hedley Bull", "Hans Morgenthau", "Kenneth Waltz", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc847",
    q: "Which IR concept refers to preventing the spread of nuclear weapons?",
    choices: ["Nonproliferation", "Deterrence", "Proliferation", "Relative gains"],
    answer: 0
  },
  {
    id: "mc848",
    q: "Which conflict symbolized the limits of UN peacekeeping?",
    choices: ["Rwandan Genocide", "Vietnam War", "Korean War", "World War I"],
    answer: 0
  },
  {
    id: "mc849",
    q: "Which IR theory emphasizes that states act independently in an anarchic system?",
    choices: ["Realism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc850",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
    {
    id: "mc851",
    q: "Which IR concept refers to reliance on others to contain threats?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc852",
    q: "Which IR theory highlights that norms shape identities and interests?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc853",
    q: "Which conflict symbolized NATO’s intervention without UN approval?",
    choices: ["Kosovo War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc854",
    q: "Which IR concept refers to the credibility of threats in deterrence?",
    choices: ["Credibility", "Balance of power", "Soft power", "Bandwagoning"],
    answer: 0
  },
  {
    id: "mc855",
    q: "Which scholar is most associated with the concept of the national interest?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc856",
    q: "Which IR theory argues that states maximize security, not necessarily power?",
    choices: ["Defensive realism", "Offensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc857",
    q: "Which conflict marked the first Gulf War?",
    choices: ["Iraq’s invasion of Kuwait", "Vietnam War", "Korean War", "Crimean War"],
    answer: 0
  },
  {
    id: "mc858",
    q: "Which IR concept refers to influence through coercion and payments?",
    choices: ["Hard power", "Soft power", "Collective security", "Relative gains"],
    answer: 0
  },
  {
    id: "mc859",
    q: "Which IR theory emphasizes interdependence and international institutions?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc860",
    q: "Which scholar is most associated with structural realism?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "Robert Keohane", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc861",
    q: "Which IR concept refers to states cooperating to prevent aggression?",
    choices: ["Collective security", "Balance of power", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc862",
    q: "Which IR theory argues that system structure drives state behavior?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "Dependency theory"],
    answer: 0
  },
  {
    id: "mc863",
    q: "Which conflict revealed the U.S. doctrine of preemptive war?",
    choices: ["Iraq War (2003)", "World War II", "Korean War", "Vietnam War"],
    answer: 0
  },
  {
    id: "mc864",
    q: "Which IR concept refers to states aligning with stronger actors for protection?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc865",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc866",
    q: "Which IR theory emphasizes that norms and ideas matter in shaping outcomes?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc867",
    q: "Which conflict illustrated containment in Europe?",
    choices: ["Berlin Airlift", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc868",
    q: "Which IR concept refers to states’ concern about unequal gains?",
    choices: ["Relative gains", "Absolute gains", "Security dilemma", "Collective goods problem"],
    answer: 0
  },
  {
    id: "mc869",
    q: "Which scholar is associated with the English School?",
    choices: ["Hedley Bull", "Hans Morgenthau", "Kenneth Waltz", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc870",
    q: "Which IR theory emphasizes capitalism as the driver of inequality?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc871",
    q: "Which conflict highlighted the limitations of UN peacekeeping?",
    choices: ["Rwandan Genocide", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc872",
    q: "Which IR concept refers to the anarchic condition of the international system?",
    choices: ["Anarchy", "Sovereignty", "Balance of power", "Polarity"],
    answer: 0
  },
  {
    id: "mc873",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc874",
    q: "Which IR theory argues that democracy promotes peace among nations?",
    choices: ["Democratic peace theory", "Dependency theory", "World-systems theory", "Realism"],
    answer: 0
  },
  {
    id: "mc875",
    q: "Which conflict symbolized U.S. overstretch in the Cold War?",
    choices: ["Vietnam War", "World War I", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc876",
    q: "Which IR concept refers to states shifting defense burdens to others?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc877",
    q: "Which IR theory emphasizes system polarity in explaining stability?",
    choices: ["Neorealism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc878",
    q: "Which scholar is most associated with 'complex interdependence'?",
    choices: ["Keohane & Nye", "Kenneth Waltz", "Hans Morgenthau", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc879",
    q: "Which IR concept refers to global order established by a leading state?",
    choices: ["Hegemony", "Polarity", "Collective security", "Balance of power"],
    answer: 0
  },
  {
    id: "mc880",
    q: "Which conflict highlighted U.S. reliance on extended deterrence?",
    choices: ["Cold War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc881",
    q: "Which IR theory argues that institutions matter for cooperation?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc882",
    q: "Which IR concept refers to states acting independently under anarchy?",
    choices: ["Self-help", "Sovereignty", "Relative gains", "Collective goods problem"],
    answer: 0
  },
  {
    id: "mc883",
    q: "Which scholar is most associated with structural realism?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc884",
    q: "Which IR theory emphasizes norms as central to state identity?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc885",
    q: "Which conflict marked the fall of communism in Europe?",
    choices: ["Fall of the Berlin Wall", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc886",
    q: "Which IR concept refers to asymmetric use of power by weaker actors?",
    choices: ["Asymmetric warfare", "Bandwagoning", "Balancing", "Deterrence"],
    answer: 0
  },
  {
    id: "mc887",
    q: "Which IR theory argues that norms evolve and reshape politics?",
    choices: ["Constructivism", "Neorealism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc888",
    q: "Which scholar is most associated with 'hegemonic stability theory'?",
    choices: ["Charles Kindleberger", "Kenneth Waltz", "Hans Morgenthau", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc889",
    q: "Which IR concept refers to the difficulty of producing global public goods?",
    choices: ["Collective goods problem", "Relative gains", "Polarity", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc890",
    q: "Which conflict illustrated NATO’s first collective defense operation?",
    choices: ["Afghanistan War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc891",
    q: "Which IR theory emphasizes maximizing relative power under anarchy?",
    choices: ["Offensive realism", "Defensive realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc892",
    q: "Which IR concept refers to states balancing against powerful rivals?",
    choices: ["Balancing", "Bandwagoning", "Buck-passing", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc893",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Kenneth Waltz", "Hans Morgenthau", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc894",
    q: "Which IR theory emphasizes global capitalism as shaping inequality?",
    choices: ["World-systems theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc895",
    q: "Which conflict symbolized the dangers of appeasement?",
    choices: ["World War II", "World War I", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc896",
    q: "Which IR concept refers to credibility as key in deterrence?",
    choices: ["Credibility", "Soft power", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc897",
    q: "Which IR theory argues that democracy reduces conflict risk?",
    choices: ["Democratic peace theory", "Realism", "Dependency theory", "Constructivism"],
    answer: 0
  },
  {
    id: "mc898",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc899",
    q: "Which IR concept refers to wars fought by great powers reshaping the system?",
    choices: ["Hegemonic wars", "Proxy wars", "Preventive wars", "Limited wars"],
    answer: 0
  },
  {
    id: "mc900",
    q: "Which conflict highlighted the U.S. invasion of Iraq in 2003?",
    choices: ["Iraq War", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
    {
    id: "mc901",
    q: "Which IR concept refers to states joining stronger powers for survival benefits?",
    choices: ["Bandwagoning", "Balancing", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc902",
    q: "Which IR theory emphasizes the anarchic system compels states to seek security?",
    choices: ["Realism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc903",
    q: "Which conflict symbolized the U.S. Cold War policy of containment in Asia?",
    choices: ["Korean War", "Vietnam War", "World War II", "Gulf War"],
    answer: 0
  },
  {
    id: "mc904",
    q: "Which scholar is most associated with classical realism?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc905",
    q: "Which IR concept refers to the anarchic structure of the international system?",
    choices: ["Anarchy", "Sovereignty", "Balance of power", "Polarity"],
    answer: 0
  },
  {
    id: "mc906",
    q: "Which IR theory emphasizes institutions as critical for cooperation?",
    choices: ["Neoliberal institutionalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc907",
    q: "Which conflict illustrated NATO’s first combat mission?",
    choices: ["Kosovo War", "Vietnam War", "World War II", "Korean War"],
    answer: 0
  },
  {
    id: "mc908",
    q: "Which IR concept refers to asymmetric tactics used by weaker states?",
    choices: ["Asymmetric warfare", "Balancing", "Bandwagoning", "Deterrence"],
    answer: 0
  },
  {
    id: "mc909",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc910",
    q: "Which IR theory highlights the role of evolving norms?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc911",
    q: "Which conflict marked the first major U.S. intervention after 9/11?",
    choices: ["Afghanistan War", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc912",
    q: "Which IR concept refers to collective action to prevent aggression?",
    choices: ["Collective security", "Collective defense", "Balance of power", "Polarity"],
    answer: 0
  },
  {
    id: "mc913",
    q: "Which scholar is most associated with structural realism?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc914",
    q: "Which IR theory argues that capitalism creates dependency in world politics?",
    choices: ["Dependency theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc915",
    q: "Which conflict symbolized humanitarian failures in the 1990s?",
    choices: ["Rwandan Genocide", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc916",
    q: "Which IR concept refers to states allying against stronger powers?",
    choices: ["Balancing", "Bandwagoning", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc917",
    q: "Which scholar is associated with the concept of hegemonic stability theory?",
    choices: ["Charles Kindleberger", "Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc918",
    q: "Which IR theory emphasizes survival under anarchy without maximizing power?",
    choices: ["Defensive realism", "Offensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc919",
    q: "Which conflict revealed the collapse of the Soviet Union?",
    choices: ["End of the Cold War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc920",
    q: "Which IR concept refers to states acting without higher authority?",
    choices: ["Self-help", "Sovereignty", "Balance of power", "Polarity"],
    answer: 0
  },
  {
    id: "mc921",
    q: "Which scholar is associated with the English School?",
    choices: ["Hedley Bull", "Hans Morgenthau", "Kenneth Waltz", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc922",
    q: "Which IR theory emphasizes democracy as a condition for peace?",
    choices: ["Democratic peace theory", "Realism", "Dependency theory", "Constructivism"],
    answer: 0
  },
  {
    id: "mc923",
    q: "Which conflict symbolized containment in Europe?",
    choices: ["Berlin Airlift", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc924",
    q: "Which IR concept refers to influence through legitimacy and attraction?",
    choices: ["Soft power", "Hard power", "Balance of power", "Deterrence"],
    answer: 0
  },
  {
    id: "mc925",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc926",
    q: "Which IR theory emphasizes interdependence through institutions and trade?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc927",
    q: "Which conflict revealed NATO’s use of collective defense after 9/11?",
    choices: ["Afghanistan War", "Vietnam War", "World War II", "Korean War"],
    answer: 0
  },
  {
    id: "mc928",
    q: "Which IR concept refers to wars fought by great powers to reshape the order?",
    choices: ["Hegemonic wars", "Proxy wars", "Preventive wars", "Limited wars"],
    answer: 0
  },
  {
    id: "mc929",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Kenneth Waltz", "Hans Morgenthau", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc930",
    q: "Which IR theory emphasizes that norms evolve and reshape politics?",
    choices: ["Constructivism", "Neorealism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc931",
    q: "Which conflict symbolized U.S. overstretch in Asia?",
    choices: ["Vietnam War", "Korean War", "World War I", "Gulf War"],
    answer: 0
  },
  {
    id: "mc932",
    q: "Which IR concept refers to states cooperating for global public goods?",
    choices: ["Collective goods problem", "Balance of power", "Relative gains", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc933",
    q: "Which scholar is most associated with soft power?",
    choices: ["Joseph Nye", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc934",
    q: "Which IR theory highlights capitalism as the driver of exploitation?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc935",
    q: "Which conflict symbolized NATO intervention in the Balkans?",
    choices: ["Kosovo War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc936",
    q: "Which IR concept refers to states relying on others for defense burdens?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc937",
    q: "Which scholar is most associated with the English School’s concept of 'international society'?",
    choices: ["Hedley Bull", "Hans Morgenthau", "Kenneth Waltz", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc938",
    q: "Which IR theory suggests survival is the primary goal of states?",
    choices: ["Defensive realism", "Offensive realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc939",
    q: "Which conflict marked the collapse of Yugoslavia?",
    choices: ["Bosnian War", "Vietnam War", "World War II", "Korean War"],
    answer: 0
  },
  {
    id: "mc940",
    q: "Which IR concept refers to states allying against the strongest actors?",
    choices: ["Balancing", "Bandwagoning", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc941",
    q: "Which scholar is most associated with the phrase 'anarchy is what states make of it'?",
    choices: ["Alexander Wendt", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc942",
    q: "Which IR theory argues that democracy fosters peace?",
    choices: ["Democratic peace theory", "Realism", "Dependency theory", "World-systems theory"],
    answer: 0
  },
  {
    id: "mc943",
    q: "Which conflict revealed the failure of the League of Nations?",
    choices: ["Italian invasion of Ethiopia", "World War II", "Cold War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc944",
    q: "Which IR concept refers to asymmetric strategies against stronger powers?",
    choices: ["Asymmetric warfare", "Deterrence", "Bandwagoning", "Relative gains"],
    answer: 0
  },
  {
    id: "mc945",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc946",
    q: "Which IR theory emphasizes institutions and interdependence in peacebuilding?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc947",
    q: "Which conflict symbolized the dangers of nuclear proliferation?",
    choices: ["Cuban Missile Crisis", "Vietnam War", "World War I", "Gulf War"],
    answer: 0
  },
  {
    id: "mc948",
    q: "Which IR concept refers to states cooperating to prevent aggression by any member?",
    choices: ["Collective security", "Balance of power", "Polarity", "Relative gains"],
    answer: 0
  },
  {
    id: "mc949",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Kenneth Waltz", "Hans Morgenthau", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc950",
    q: "Which IR theory highlights the socially constructed nature of global politics?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
    {
    id: "mc951",
    q: "Which IR concept refers to wars fought to prevent adversaries’ future rise in power?",
    choices: ["Preventive war", "Preemptive strike", "Limited war", "Proxy war"],
    answer: 0
  },
  {
    id: "mc952",
    q: "Which IR theory emphasizes that states act in self-help due to anarchy?",
    choices: ["Realism", "Constructivism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc953",
    q: "Which conflict symbolized NATO’s post–Cold War expansion into Eastern Europe?",
    choices: ["Kosovo War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc954",
    q: "Which scholar is most associated with structural realism?",
    choices: ["Kenneth Waltz", "Hans Morgenthau", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc955",
    q: "Which IR concept refers to independent authority within recognized borders?",
    choices: ["Sovereignty", "Anarchy", "Balance of power", "Polarity"],
    answer: 0
  },
  {
    id: "mc956",
    q: "Which IR theory emphasizes global capitalism and inequality?",
    choices: ["Marxism", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc957",
    q: "Which conflict revealed the challenges of U.S. nation-building?",
    choices: ["Iraq War (2003)", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc958",
    q: "Which IR concept refers to states allying against stronger rivals?",
    choices: ["Balancing", "Bandwagoning", "Soft balancing", "Buck-passing"],
    answer: 0
  },
  {
    id: "mc959",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc960",
    q: "Which IR theory emphasizes the role of evolving norms in shaping state behavior?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  },
  {
    id: "mc961",
    q: "Which conflict marked the beginning of the War on Terror?",
    choices: ["Afghanistan War", "Vietnam War", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc962",
    q: "Which IR concept refers to influence through attraction and culture?",
    choices: ["Soft power", "Hard power", "Balance of power", "Deterrence"],
    answer: 0
  },
  {
    id: "mc963",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc964",
    q: "Which IR theory emphasizes system polarity as a determinant of stability?",
    choices: ["Neorealism", "Liberalism", "Constructivism", "World-systems theory"],
    answer: 0
  },
  {
    id: "mc965",
    q: "Which conflict revealed humanitarian intervention in Africa?",
    choices: ["Somalia Intervention", "Vietnam War", "World War I", "Korean War"],
    answer: 0
  },
  {
    id: "mc966",
    q: "Which IR concept refers to states shifting burdens of balancing to others?",
    choices: ["Buck-passing", "Balancing", "Bandwagoning", "Soft balancing"],
    answer: 0
  },
  {
    id: "mc967",
    q: "Which scholar is most associated with the concept of 'international society'?",
    choices: ["Hedley Bull", "Kenneth Waltz", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc968",
    q: "Which IR theory emphasizes democracy as a condition for peace?",
    choices: ["Democratic peace theory", "Realism", "Dependency theory", "Constructivism"],
    answer: 0
  },
  {
    id: "mc969",
    q: "Which conflict symbolized the dangers of appeasement?",
    choices: ["World War II", "World War I", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc970",
    q: "Which IR concept refers to states competing over unequal benefits?",
    choices: ["Relative gains", "Absolute gains", "Collective goods problem", "Security dilemma"],
    answer: 0
  },
  {
    id: "mc971",
    q: "Which scholar is most associated with hegemonic stability theory?",
    choices: ["Charles Kindleberger", "Hans Morgenthau", "Kenneth Waltz", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc972",
    q: "Which IR theory emphasizes material and ideational factors together?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc973",
    q: "Which conflict marked the collapse of communism in Eastern Europe?",
    choices: ["Fall of the Berlin Wall", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc974",
    q: "Which IR concept refers to preventing the spread of nuclear weapons?",
    choices: ["Nonproliferation", "Deterrence", "Proliferation", "Balance of power"],
    answer: 0
  },
  {
    id: "mc975",
    q: "Which scholar is most associated with the phrase 'anarchy is what states make of it'?",
    choices: ["Alexander Wendt", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc976",
    q: "Which IR theory emphasizes global capitalism as a driver of inequality?",
    choices: ["World-systems theory", "Realism", "Liberalism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc977",
    q: "Which conflict revealed NATO’s collective defense after 9/11?",
    choices: ["Afghanistan War", "Vietnam War", "World War I", "Gulf War"],
    answer: 0
  },
  {
    id: "mc978",
    q: "Which IR concept refers to alliances where an attack on one is an attack on all?",
    choices: ["Collective defense", "Collective security", "Soft balancing", "Polarity"],
    answer: 0
  },
  {
    id: "mc979",
    q: "Which scholar is most associated with soft power?",
    choices: ["Joseph Nye", "Hans Morgenthau", "Kenneth Waltz", "Robert Keohane"],
    answer: 0
  },
  {
    id: "mc980",
    q: "Which IR theory argues democracy reduces the risk of conflict?",
    choices: ["Democratic peace theory", "Realism", "Dependency theory", "Marxism"],
    answer: 0
  },
  {
    id: "mc981",
    q: "Which conflict symbolized U.S. containment strategy in Europe?",
    choices: ["Berlin Airlift", "Vietnam War", "World War I", "Korean War"],
    answer: 0
  },
  {
    id: "mc982",
    q: "Which IR concept refers to global order created by a dominant state?",
    choices: ["Hegemony", "Balance of power", "Polarity", "Deterrence"],
    answer: 0
  },
  {
    id: "mc983",
    q: "Which scholar is most associated with offensive realism?",
    choices: ["John Mearsheimer", "Hans Morgenthau", "Kenneth Waltz", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc984",
    q: "Which IR theory emphasizes survival rather than power maximization?",
    choices: ["Defensive realism", "Offensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc985",
    q: "Which conflict revealed humanitarian intervention limits in the 1990s?",
    choices: ["Bosnian War", "World War II", "Vietnam War", "Korean War"],
    answer: 0
  },
  {
    id: "mc986",
    q: "Which IR concept refers to states cooperating to provide public goods?",
    choices: ["Collective goods problem", "Security dilemma", "Balance of power", "Relative gains"],
    answer: 0
  },
  {
    id: "mc987",
    q: "Which scholar is most associated with the English School?",
    choices: ["Hedley Bull", "Hans Morgenthau", "Kenneth Waltz", "John Mearsheimer"],
    answer: 0
  },
  {
    id: "mc988",
    q: "Which IR theory argues that capitalism perpetuates dependency?",
    choices: ["Dependency theory", "Liberalism", "Neorealism", "Constructivism"],
    answer: 0
  },
  {
    id: "mc989",
    q: "Which conflict symbolized the dangers of nuclear brinkmanship?",
    choices: ["Cuban Missile Crisis", "World War I", "Vietnam War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc990",
    q: "Which IR concept refers to asymmetric warfare against stronger powers?",
    choices: ["Asymmetric warfare", "Bandwagoning", "Deterrence", "Relative gains"],
    answer: 0
  },
  {
    id: "mc991",
    q: "Which scholar is most associated with classical realism?",
    choices: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc992",
    q: "Which IR theory emphasizes both material and ideational structures?",
    choices: ["Constructivism", "Realism", "Liberalism", "Marxism"],
    answer: 0
  },
  {
    id: "mc993",
    q: "Which conflict marked the beginning of U.S. unipolar dominance?",
    choices: ["Gulf War (1991)", "Vietnam War", "World War II", "Korean War"],
    answer: 0
  },
  {
    id: "mc994",
    q: "Which IR concept refers to states maximizing power under anarchy?",
    choices: ["Offensive realism", "Defensive realism", "Constructivism", "Liberalism"],
    answer: 0
  },
  {
    id: "mc995",
    q: "Which scholar is most associated with neoliberal institutionalism?",
    choices: ["Robert Keohane", "Hans Morgenthau", "Kenneth Waltz", "Alexander Wendt"],
    answer: 0
  },
  {
    id: "mc996",
    q: "Which IR theory emphasizes the role of trade and institutions in peace?",
    choices: ["Liberalism", "Realism", "Constructivism", "Marxism"],
    answer: 0
  },
  {
    id: "mc997",
    q: "Which conflict symbolized U.S. failure in Southeast Asia?",
    choices: ["Vietnam War", "World War I", "Korean War", "Gulf War"],
    answer: 0
  },
  {
    id: "mc998",
    q: "Which IR concept refers to alliances formed to prevent aggression?",
    choices: ["Collective security", "Balance of power", "Relative gains", "Polarity"],
    answer: 0
  },
  {
    id: "mc999",
    q: "Which scholar is most associated with hegemonic stability theory?",
    choices: ["Charles Kindleberger", "Hans Morgenthau", "Kenneth Waltz", "Joseph Nye"],
    answer: 0
  },
  {
    id: "mc1000",
    q: "Which IR theory argues that anarchy is socially constructed?",
    choices: ["Constructivism", "Realism", "Neorealism", "Marxism"],
    answer: 0
  }
];

// === Essay Prompts (sample) ===
const essayBank = [
    {
    id: "essay1",
    q: "Critically evaluate realism and liberalism in explaining international cooperation."
  },
  {
    id: "essay2",
    q: "Discuss the relevance of the balance of power concept in the 21st century."
  },
  {
    id: "essay3",
    q: "Compare and contrast the approaches of classical realism and neorealism."
  },
  {
    id: "essay4",
    q: "Assess the strengths and weaknesses of democratic peace theory."
  },
  {
    id: "essay5",
    q: "Evaluate constructivism’s contribution to understanding international norms."
  },
  {
    id: "essay6",
    q: "How does neoliberal institutionalism explain international cooperation?"
  },
  {
    id: "essay7",
    q: "Examine the concept of the security dilemma with historical examples."
  },
  {
    id: "essay8",
    q: "Assess the role of international institutions in mitigating global conflict."
  },
  {
    id: "essay9",
    q: "Critically analyze the concept of soft power in U.S. foreign policy."
  },
  {
    id: "essay10",
    q: "Discuss the causes and consequences of nuclear proliferation."
  },
  {
    id: "essay11",
    q: "Evaluate the successes and failures of collective security arrangements."
  },
  {
    id: "essay12",
    q: "How does dependency theory explain global economic inequality?"
  },
  {
    id: "essay13",
    q: "Examine the concept of sovereignty in the age of globalization."
  },
  {
    id: "essay14",
    q: "Discuss the role of ideology in shaping Cold War international politics."
  },
  {
    id: "essay15",
    q: "Evaluate the effectiveness of deterrence theory in nuclear strategy."
  },
  {
    id: "essay16",
    q: "How has globalization challenged traditional notions of state power?"
  },
  {
    id: "essay17",
    q: "Assess the impact of the Iraq War (2003) on U.S. global leadership."
  },
  {
    id: "essay18",
    q: "Compare the liberal and realist explanations of international institutions."
  },
  {
    id: "essay19",
    q: "Discuss the role of norms and identity in shaping state behavior."
  },
  {
    id: "essay20",
    q: "Evaluate the role of international law in managing global conflicts."
  },
  {
    id: "essay21",
    q: "How does hegemonic stability theory explain the post–World War II order?"
  },
  {
    id: "essay22",
    q: "Assess the successes and failures of humanitarian interventions since the 1990s."
  },
  {
    id: "essay23",
    q: "Compare preventive war and preemptive war in international security."
  },
  {
    id: "essay24",
    q: "Discuss the impact of non-state actors on the international system."
  },
  {
    id: "essay25",
    q: "Evaluate the English School’s concept of international society."
  },
  {
    id: "essay26",
    q: "Examine the relationship between economic interdependence and peace."
  },
  {
    id: "essay27",
    q: "Critically analyze the legacy of colonialism in shaping the global South."
  },
  {
    id: "essay28",
    q: "Assess the role of NATO after the end of the Cold War."
  },
  {
    id: "essay29",
    q: "How does world-systems theory explain global inequality?"
  },
  {
    id: "essay30",
    q: "Discuss the impact of technological change on international security."
  },
  {
    id: "essay31",
    q: "Evaluate the concept of polarity in explaining global stability."
  },
  {
    id: "essay32",
    q: "Examine the role of great power competition in shaping world politics."
  },
  {
    id: "essay33",
    q: "Critically assess the use of proxy wars in international relations."
  },
  {
    id: "essay34",
    q: "Discuss the successes and failures of the United Nations Security Council."
  },
  {
    id: "essay35",
    q: "Evaluate the theory of offensive realism with examples from recent conflicts."
  },
  {
    id: "essay36",
    q: "How does defensive realism differ from offensive realism in practice?"
  },
  {
    id: "essay37",
    q: "Discuss the role of ideology in U.S.–China relations today."
  },
  {
    id: "essay38",
    q: "Assess the effectiveness of arms control agreements in reducing conflict."
  },
  {
    id: "essay39",
    q: "Evaluate the causes and consequences of the Cold War."
  },
  {
    id: "essay40",
    q: "Discuss the significance of identity politics in international conflict."
  },
  {
    id: "essay41",
    q: "Examine the impact of globalization on state sovereignty."
  },
  {
    id: "essay42",
    q: "Critically analyze the concept of legitimacy in international politics."
  },
  {
    id: "essay43",
    q: "Evaluate the relationship between international law and state sovereignty."
  },
  {
    id: "essay44",
    q: "Discuss the challenges of maintaining collective security in the 21st century."
  },
  {
    id: "essay45",
    q: "Examine the impact of terrorism on international relations theory and practice."
  },
  {
    id: "essay46",
    q: "Evaluate the argument that the international system is moving toward multipolarity."
  },
  {
    id: "essay47",
    q: "Discuss the relationship between human rights and foreign policy."
  },
  {
    id: "essay48",
    q: "Assess the impact of climate change on global security."
  },
  {
    id: "essay49",
    q: "Critically analyze the future of U.S. hegemony in world politics."
  },
  {
    id: "essay50",
    q: "Discuss the role of international organizations in addressing global inequality."
  }

];
