import { Question } from './types';

// Storing the raw text to parse it programmatically. 
// This ensures all 200 questions are captured without manual JSON formatting errors.
const RAW_DATA = `
1.	<question>The specificity of the mythological worldview:
The unity of man and the world
Logical representation of the world
Believing in one God
Reasoning and proving
Expressing inner side of the man

2.	<question>Philosophical worldview has its own specifics: 
based on the logical method of cognition
based on the rational level of knowledge
has its own set of concepts, categories, special terms.
is a system of knowledge
all answer are correct

3.	<question>The object of philosophy:
the man and society
the nature and the god
the being and reality
the world and the man
mind and thinking  

4.	<question>The subject of philosophy is: 
the most general laws and patterns of development and functioning of human society, thinking and  the universe
the fundamental principles of being
the Arche  
the man in the world
space and time 

5.	<question>The main divisions of philosophy: 
Sociology, culture, myth, religion
Physics, psychology, chemistry 
Science, art, moral, politics
Gnoseology, ontology, ethics, aesthetics 
Worldview, religion, mythology 

6.	<question>Which function doesn’t belong to philosophy:
Worldview
Scientific 
Ideological 
Critical 
Methodological 

7.	<question>The basic question of philosophy:
What is primary: consciousness or matter?
What is primary: egg or hen?
What is primary: man or nature?
To be or not to be?
What is the essence of life?

8.	<question>The other side of the basic question of philosophy:
Relation of thinking to being
Is there the God?
What is the meaning of life?
Who created the man?
What is reality?

9.	<question>Solution of the basic question of philosophy:
Gnosticism and agnosticism
Dualism and monism
Materialism and idealism
Naturalism and sociologism
Theism and atheism  

10.	<question>Solution of the other side of the basic question of philosophy:
Gnosticism and agnosticism
Dualism and monism
Materialism and idealism
Naturalism and sociologism
Theism and atheism  

11.	<question>Metaphysics in philosophy states:
the world is unreal 
the world is flux
the world is static, unchanging
the world is real
the world is complex

12.	<question>Dialectics in philosophy states:
the world is unreal 
the world is flux
the world is static, unchanging
the world is real
the world is complex  

13.	<question>Consciousness is state of:
mental 
perception 
sensation 
thinking 
feeling 

14.	<question>The central problem of Consciousness:
Ideality 
Reality 
Mind and body
Truth 
Qualia 

15.	<question>What does NOT belong to Sensory knowledge?          
sensations 
perceptions 
representations
reasoning
imagination

16.	<question>What does NOT belong to Rational knowledge?
concepts 
judgments 
conclusions 
intuition 
theories

17.	<question>True being according to Plato:
atoms
ideas
things
souls 
god  

18.	<question>Being according to Aristotle:
substance
predicate
quality
quantity
idea 

19.	<question>Being according to Heidegger:
essence
substance
existence
reality
ideality 

20.	<question>Human according to Social Darwinism is:
symbolic animal
organism
sentient being
moral being
social being 

21.	<question>Human according to Marxism:
symbolic animal
organism
sentient being
moral being
social being

22.	<question>Human according to Descartes:
symbolic animal
organism
rational being
moral being
social being

23.	<question>Moral is an object of study of:
axiology
epistemology
aesthetics 
ethics 
logics 

24.	<question> «Things-in itself» by Kant is
Thins we can cognize
Things we cannot cognize 
Things existing 
Things non-existing
Ideal things  

25.	<question> «noumena» by Kant is
Unknowable world 
Knowable world
Reality  
Sensual images of objects 
Existence 

26.	<question> «phenomena» by Kant is
World
Reality  
Sensual images of objects 
Essence 
Existence

27.	<question>Tengrism can be defined as:
Monotheism 
Deism   
System of beliefs 
Philosophy  
Theism 

28.	<question>Shamanism is a form of:
Spiritualism 
Totemism 
Magic   
Mythology   
Religion 

29.	<question>Combination of different Beliefs, Faiths, Thoughts in one Unique Thinking System is called:
Syncretism 
Natural philosophy 
Science    
Mythology   
Religion 

30.	<question>Levy-Bruhl explained this quality by saying that the primitive mentality obeys something he called ‘the law of participation’, which means that thoughts can be joined by connections which having nothing in common with those of our logic. What did he mean?:
Animism 
Totemism    
Mythology 
Magic
Spiritualism 

31.	<question>Kazakh nomads had various cults and rites. Which one was essential for Kazakh worldview?:
Cult of ancestors 
Cult of the Sun 
Cult of the fire    
Cult of the earth 
Cult of the sky 

32.	<question>What is the name of philosophical system of Marxism?
Objective idealism 
Subjective idealism    
Mechanical materialism 
Dialectical materialism
Metaphysical materialism

33.	<question>The central category of Marx’s Historical materialism:
Politics 
Economics    
Forms of social consciousness
Social-economic formation
Industrial relations 

34.	<question>Freedom in accordance with the teachings of Baruch Spinoza is: 
Human will
God’s will
Human action  
Recognized necessity
Natural law 

35.	<question>In the irrational philosophy of Soren Kierkegaard, the central problem is:
The essence of man
Rational thinking 
The problem of truth
Human existence
Knowledge of God

36.	<question>The ethical ideal of Nietzsche's philosophy is:
Hedonist
Christian
Muslim
Stoick
Superman

37.	<question>The main philosophical categories of Albert Camus:
Being and thinking
Absurdity and rebellion
Existence and non-existence
Essence and existence
Life and death

38.	<question>Why does Jean Paul Sartre believe that Existentialism is humanism?
Man is a free creature
Man himself determines his existence
Man loves
Man is a god-like creature
Man creates 

39.	<question>What layer of the human psyche was discovered by Sigmund Freud?
Thinking
Unconscious
Archetypes
Imagination
Memory

40.	<question>What ancient Greek philosopher believed that the main task was self-knowledge:
Plato
Socrates
Aristotle
Thales 
Plotinus 

41.	<question>Translation of word “axiology”:
Study of values.
Cosmo centrism.
Love Theo 
Pantheism
Love Humanity.

42.	<question> “There are only two substances in the beginning of the world – thinking and extended substances (dualism) is from philosophy of…
E.Kant
D.Hume
R.Descartes
J.-P.Sartre
Protagoras

43.	<question>Theory of scientific knowledge is called as…
Cognition
Epistemology 
Social philosophy 
Feeling
Axiology 

44.	<question>The object of philosophy is:
Cognition process and the place of man in this world
World in whole and the place of man in this world.
Human being.
Truth, unconcealment.
Mind at whole

45.	<question>Ethic is:
A study of nature, origin and limits of human cognition
A study of wisdom
A study of morality and moral behaviour
Branch of physics
World religion

46.	<question>Aesthetics is:
A study of nature, origin and limits of human cognition
A philosophical study of principles, moral and human behaviour
A study of beauty and art
One of the directions of Buddhism 
Philosophy as a system

47.	<question>The first historical type of outlook that is considered as is a system of ancient legends.
Philosophy 
Science 
Ethics 
Mythology 
Theology

48.	<question>Faith in the supernatural force(-s), which is based on a strong system of moral norms and the special organization of people, is…
Religion  
Ontology
Physics
Epicureanism
Substantialism

49.	<question>The Socratic ethical rationalism was formulated as
Virtue is religion
Virtue is arts
Virtue is knowledge
Virtue is war
Virtue is interests

50.	<question>One of the outstanding French existentialist:
David Hume
Georg Hegel
Albert Camus
Francis Bacon
Martin Heidegger

51.	<question>Division to Subjective spirit, Objective spirit, Absolute spirit comes from philosophy of…?
Fichte
Hegel
Kant
Shelling
Marx

52.	<question>Ancient eastern philosophy developed mainly in…
India and China
India and Japan
Persia and China
Egypt and China
India and Korea

53.	<question> “Act only on that maxim through which you can at the same time will that become a universal law” is...
the Hegel’s Categorical imperative
the Kant’s Categorical imperative
the Kant’s Hypothetical imperative
the Fichte’s Hypothetical imperative
the Hegel’s Hypothetical imperative

54.	<question>The famous Descartes’s formula “Cogito, ergo sum” is translated from Latin as
I think, therefore, I have truth
I think, therefore, I have power
I think, therefore, I have faith
I think, therefore, I exist
I think, therefore, I have values

55.	<question>Universal law in Indian philosophy, which operates in the past, present and future, is called…
Thinking
Experience
Analysis
Induction
Karma 

56.	<question>The first Fr.Baconian idol of all human mind is
Cave
Marketplace
Tribe
Theatre
Mind

57.	<question>The second Fr.Baconian idol of personal mind is
Cave
Marketplace
Tribe
Theatre
Mind

58.	<question>The third Fr.Baconian idol of mind referred to using terms and words is
Cave
Marketplace
Tribe
Theatre
Mind

59.	<question>The fourth Fr. Baconian idol of mind referred to authorities is
Cave
Marketplace
Tribe
Theatre
Mind

60.	<question>The doctrine about that knowledge is based on experience is:
Empiricism 
Rationalism 
Agnosticism 
Abstract general ideas
Complexity

61.	<question>E.Kant’s categorical imperative is about…
There’s no place like home.
The world is round.
Moral problems.
Everybody everywhere is pretty much the same.
Physical problems.

62.	<question>The translation of the word “philosophy”:
Pantheism
Love of wisdom.
Cosmo centrism.
Love Theo
Love Human

63.	<question>The word “Sophist” is translated from Greek as:
Wise man
Warrior
Judge
Man
Thinker

64.	<question>He was called «the first teacher»:
Socrates
Aristotle
Plato
Diogenes
Heraclitus

65.	<question>What beginning (Arche) did Heraclitus recognize? 
Logos (fire)
Virtue
Intelligence
Honor
Pleasure

66.	<question>What beginning did Pythagoras recognize?
Numbers
Dialectical argument
Rational instruction 
Learning from our mistakes
Breathing 

67.	<question>A teaching of Aristotle is called as…
Academicism
Peripatetism
Buddhism
Atheism
Pantheism

68.	<question>Under the Renaissance human was considered to be as
Man is a political creature.
Man is a thinking being.
Man is a religious being.
Human is a creator, artist, enriched microcosm.
Man is a sinner.

69.	<question> “I know that I know nothing” was proclaimed by…
Thales
Pythagoras
Democritus
Seneka
Socrates

70.	<question>A thinker who formulated 5 proofs of existence of God:
Augustine
Erasmus of Rotterdam.
Thomas Aquinas.
Machiavelli
Abelyar

71.	<question>Myth of the Cave was developed by:
Augustine
Erasmus of Rotterdam
Plato 
Machiavelli
Abelyar

72.	<question>Theo centrism provides that in the center of the universe is…
God 
Something mystical
Poetics
Human 
Science 

73.	<question>Defining characteristic of the religious outlook is:
Belief in art of superstitions 
Belief in contemptuous attitude to science, the denial of their validity
Belief in wisdom
Belief in the supernatural, otherworldly forces, having the opportunity to influence the course of world events
Belief in denial of human freedom, the belief that all actions originally defined by God

74.	<question> One of the main characteristics of the Renaissance is:
Atheism
Theology
Sociocentrism
Cosmocentrism
Anthropocentrism

75.	<question>Creationism is the idea that the world and mankind created by…
God 
Something mystical
Poetics
Human 
Science

76.	<question> Searching human individuality is the specific feature of Philosophy of...
Conventionalism
Life
Existentialism
Rationalism
Conformism

77.	<question>The idea that destinies of the world and people are determined by God is…
Freedom
Desire 
Canon
Providentialism
Emotions

78.	<question>Who offered psychoanalytic theory in human nature?
Leonardo da Vinci
Nikolas of Cusa
Loranzo Valla
Tomaso Campanella
Sigmund Freud

79.	<question> “Thus Spoke Zarathustra” is a work of …
R.Descartes
Nietzsche
Albert Camus
Karl Marx
Martin Heidegger

80.	<question>Branch of philosophy that studies historical knowledge and interpretation of historical process:
Philosophy of history
Logics
Ontology
History of philosophy 
Epistemology

81.	<question>The definition of social economic formation in materialism was first developed by...
Engels
Stalin 
Marx
Rousseau
Lenin

82.	<question>Who is the author of the books “Either/or”, “Fear and Trembling”?
Rousseau
Lenin
Kierkegaard
Marx
Sartre 

83.	<question>Who indicated the difference between conscious and unconscious in human mind?
Plato
Freud
Hume
Marx
Sartre

84.	<question>Aesthetical values are:
Love, friendship
Beauty, art, harmony, style
Civil rights
Freedom of word and personality
Social justice

85.	<question> “God is dead” said...
Nietzsche
Heraclitus
Plato
E.Kant
F.Hegel

86.	<question>What are the main founders of philosophy of existentialism:
Camus, Freud, Florensky
Camus, Sartre, Kierkegaard
Sartre, Spengler, Schelling B.Russel.
I.Kant, Freud, Florensky
Russel, Popper, Adler

87.	<question> «The man of absurd» according to Albert Camus is one who understands:
Essence of life
Meaning of life
Meaningless of existence
Philosophy 
Others 

88.	  <question>  «The man of rebellion» according to Albert Camus is one who states:
I think, therefore I exist
I rebel, therefore I exist
I doubt, therefore I exist
I agree, therefore I exist
I argue, therefore I exist

89.	<question>  «Borderline situations» according to Sartre is the situation when a man becomes aware of:
Purpose of his life
Problems 
Conflicts 
The meaning of his life
His coming death

90.	<question> According to Sartre: man is: 
A project of himself
A social animal
Microcosmos
Symbolic animal
God’s project
 
91.	<question> According to Sigmund Freud «Neurotic» is:
A crazy man
A healthy person with neurotic symptoms
A schizophrenic person
An anxious man 
A sick person 

92.	<question> According to Sigmund Freud «The Unconscious» is:
Ego
Super Ego 
Id 
Other Ego
Animus 
 
93.	<question> According to Carl Gustav Jung «Archetypes» are:
Symbols of Individual Unconscious 
Dreams 
Symbols of Collective Unconscious
Myths 
Spirits 
  
94.	<question>  According to Carl Gustav Jung human behaviour is determined by:
Individual unconsciousness 
Environment 
Education 
Parents 
Collective unconsciousness 

95.	<question> According to Sigmund Freud human behaviour is determined by three authorities:
Mind, will, desire
Ego, Id, Super Ego
Body, mind, soul
Father, mother, teacher
Nanny, teacher, boss
 
96.	<question> According to S. Kierkegaard the main problem of philosophy is:
Human essence
Human existence
Human origin  
Human mind 
Human body

97.	<question>  S. Kierkegaard wanted to understand why:
Man  is an animal
Man is social 
Man was thrown into the world
Man is evil
Man is kind

98.	<question>  According to F. Nietzsche human manifests themselves in: 
Will to die
Will to live
Will to power
Will to kill
Will to know

99.	<question>  According to F. Nietzsche, Superman is a person who:
Does not like people
Does not suffer
Does not like moral
Does not die
Does not believe in God
 
100.	<question>  Which ones are the typical Kazakh mythological forms?
Totemism and animism
Tengrism and shamanism
Magic and spiritualism
Polytheism and paganism
Pantheism and fetishism

101.	<question>  Philosophy of Marxism is called:
Metaphysical materialism
Dialectical materialism
Historical materialism
Objective idealism
Subjective materialism

102.	<question> Socio-political theory of Marxism is called:
Metaphysical materialism
Dialectical materialism
Historical materialism
Objective idealism
Subjective materialism

103.	<question> Philosophical method of Marxism is called:
Metaphysics
Dialectics
Deduction
Induction
Analogy

104.	<question> The idea of Communism in Marxism represents:
Class society
Classless society
Perfect society
Free society
Rich society

105.	<question> Historical type of societies in Marxism is called:
Basis and superstructure
Social economic formation
Class society
Classless society
Ideal society

106.	<question> What is Consciousness?
function of brain
reflection of reality
self-awareness
ideality
all of them

107.	<question> Elements of Consciousness according to A. G. Spirkin:
sensual
rational
value
motivation
all of them

108.	<question> Which property of consciousness describes the immaterial essence of consciousness?
ideality
intentionality
ideationality
reflection
self-awareness

109.	<question> who is Homo Sapiens?
Man with thinking
Man with feelings
Man with hands
Man with eyes
Man with soul 

110.	<question> consciousness according to theory of Dualism:
material substance
ideationality
immaterial substance
reflection
self-awareness

111.	<question> consciousness according to theory of Darwinism
property of man
ideal property
reflection of man
self-awareness
highest property of brain

112.	<question> consciousness according to theory of Logical behaviorism
thoughts
speech
acts
instincts
awareness

113.	<question> Self-consciousness is the characteristic of consciousness which describes:
intentionality
ideationality
reflection
ideality
self-awareness

114.	<question> Language is:
outer side of consciousness
inner side of consciousness
all ideas 
reflective organ 
self-awareness

115.	<question> What is Ontology? 
study of mind
study of Being
study of nature
study of god
study of man

116.	<question> What the term «metaphysics» means?
Something real
what comes after physics
something unreal
unknowable
knowable

117.	<question> What is Being?
real
category for existence
spiritual 
mental
related to humans

118.	<question>What is the problem of Being?
What is world
what is the essence of the world
what is reality
what is the god
what is the mind

119.	<question>What is Substance?
matter
independent entity
spirit
predicates of things
essence of things

120.	<question> Who said: «Being is, but there is not non-being»
Socrates 
Parmenides 
Aristotle 
Plato
Plotinus 

121.	<question> Who said: «If something denotes the essence of a thing, then it makes sense that being for it does not lie in something else»
Socrates 
Parmenides 
Aristotle 
Plato
Plotinus 

122.	<question> Who said: «Being is One»
Socrates 
Parmenides 
Aristotle 
Plato
Plotinus 

123.	<question> Who said: «Being is God»
Socrates 
Christianity 
Aristotle 
Plato
Plotinus 

124.	<question> Who said: «Being is Two»
Socrates 
Descartes 
Aristotle 
Plato
Plotinus 

125.	<question> Who said: «Being is plural»
Socrates 
Leibniz 
Aristotle 
Plato
Plotinus 

126.	<question> Who said: «Being is Absolute Idea»
Socrates 
Hegel 
Aristotle 
Plato
Plotinus 

127.	<question> Who said: «Being is Man»
Socrates 
Heidegger 
Aristotle 
Plato
Plotinus 

128.	<question> Forms of Being
Natural
All of them
Spiritual
Human
Social

129.	<question> what is Matter?
Ideal being
material being
spiritual being
divine being
social being

130.	<question>Attributes of Matter:
movement
All of them
time
space
reflection

131.	<question> Forms of Motion:
physical
all of them
chemical
biological
social

132.	<question> What is Development?
Motion from down to up
motion from simple to complex
motion  from low to high
motion from left to right
motion from up to down

133.	<question> Two concepts of Development:
Regress and progress
methaphysical and dialectical
cyclic and linear
eternal return
stagnation and change

134.	<question> types of space:
wide
Three-dimensional
narrow
virtual 
cosmos

135.	<question>types of time:
physical
all of them
psychological
biological
social

136.	<question> Philosophical category which describes visible and invisible sides of things:
Content and form
Essence and phenomenon
Cause and effect
Necessity and contingency
Possibility and reality

137.	<question> Philosophical category which describes inner and outer side of things:
Content and form
Essence and phenomenon
Cause and effect
Necessity and contingency
Possibility and reality

138.	<question> Philosophical category which describes determinism:
Content and form
Essence and phenomenon
Cause and effect
Necessity and contingency
Possibility and reality

139.	<question> What is cognition?
Thinking abt smth
mastering knowledge
working on book
imagining of smth
awareness of smth

140.	<question> What is knowledge?
books
information 
traditions
customs
opinion

141.	<question> What is common between Knowledge and Cognition?
They are the same
knowledge is the result of cognitive process
they are different
both are process
cognition needs prior knowledge

142.	<question> What is Epistemology?
Theory of knowledge
theory scientific knowledge
theory of technology
theory of methods
theory of philosophical knowledge

143.	<question> What is Gnoseology? 
Theory of knowledge
theory scientific knowledge
theory of technology
theory of methods
theory of philosophical knowledge

144.	<question> What is Gnosticism?
Cognitive pessimism
cognitive optimism
cognitive disbelief
cognitive doubts 
cognitive negation

145.	<question> What is Agnosticism?
Cognitive pessimism
cognitive optimism
cognitive disbelief
cognitive doubts 
cognitive negation

146.	<question> What is Skepticism?
Cognitive pessimism
cognitive optimism
cognitive disbelief
cognitive doubts 
cognitive negation

147.	<question> Which ideas are TRUE according to Descartes «Theory of Ideas»?
Mind ideas
innate ideas
sensory ideas
authorities’ ideas
common sense

148.	<question> Who believed that TRUTH can be proved in the process of socio-historical practice?
Hegel 
Marx 
Kant 
Bacon
Lock

149.	<question> Who believed that we can cognize only Phenomena?
Hegel 
Marx 
Kant 
Bacon
Lock

150.	<question> Type of Cognition based on Conceptual understanding the reality:
ordinary cogniton
scientific cognition
practical cognition
artistic cognition
moral cognition

151.	<question> Levels of Cognition:
Ordinary and theoretical
sensual and rational
basic and complex
lower and higher
everyday and scentisfic

152.	<question> What is Judgment?
Statement reflecting the things and their properties
logical image that reproduces the essential properties of objects
deduction from several interrelated judgments of a new judgment 
comprehend the truth by seeing it clear
integral image of an object in the unity reflected through sensations.

153.	<question> What is Concept?
Statement reflecting the things and their properties
logical image that reproduces the essential properties of objects
deduction from several interrelated judgments of a new judgment 
comprehend the truth by seeing it clear
integral image of an object in the unity reflected through sensations.

154.	<question> What is Inference?
Statement reflecting the things and their properties
logical image that reproduces the essential properties of objects
deduction from several interrelated judgments of a new judgment 
comprehend the truth by seeing it clear
integral image of an object in the unity reflected through sensations.

155.	<question> What is Intuition?
Statement reflecting the things and their properties
logical image that reproduces the essential properties of objects
deduction from several interrelated judgments of a new judgment 
comprehend the truth by seeing it clear
integral image of an object in the unity reflected through sensations.

156.	<question> What is Truth in Classical sense?
Truth is the correspondence of knowledge to reality; 
this is what is confirmed by experience;
is a kind of agreement – a convention;
usefulness of the knowledge gained; 
effectiveness of its use in practice.

157.	<question> What is correct about Fallacy?
Deliberate distortion of truth
is the essential part of the cognitive process
Lie 
Is the fail of cognitive process
Ideological essence of cognition

158.	<question> Axiology studies:
notions
values
norms
taboos
laws

159.	<question> Absolute values: 
yin - yang
truth, beauty, good
justice, injustice
God 
Human health

160.	<question>Classification of values by carrier:
material, spiritual
individual, supra individual
economical, political
social, family
absolute, specific

161.	<question> Classification of values by existence:
material, spiritual
individual, supra individual
economical, political
social, family
absolute, specific

162.	<question> What is Ethics?
theory of art
theory of morality
theory of society
theory of religion
theory of nature

163.	<question> What is Morality?
social regulation form through beauty-ugly
social regulation form through good-bad
social regulation form through justice-injustice
social regulation form through useful-useless
social regulation form through faith-denial

164.	<question>  Why is Ethics practical science?
It is studied to know what is good
it is studied in order to become virtuous
It is studied to learn what is evil
It is studied to know more
It is studied to get wisdom

165.	<question> Difference between Morality and Mores?
No difference
difference between what is Due and what is Real
norms and ideals
good and bad
week and strong

166.	<question> Main Christian values:
Pride and humility
faith, hope, love
cupidity and generosity
lust and chastity
true and lie

167.	<question> Which one is Stoic principle?
live for pleasure and well-being
focus on what you control
live a complete and fulfilling life
usefulness, practicability, benefit
prudence, courage, justice

168.	<question> Which one is Hedonistic principle?
live for pleasure and well-being
focus on what you control
live a complete and fulfilling life
usefulness, practicability, benefit
prudence, courage, justice

169.	<question> Which one is Pragmatic principle?
live for pleasure and well-being
focus on what you control
live a complete and fulfilling life
usefulness, practicability, benefit
prudence, courage, justice

170.	<question> What is Epicureanism principle?
live for pleasure and well-being
focus on what you control
live a complete and fulfilling life
usefulness, practicability, benefit
prudence, courage, justice

171.	<question> What is Eudemonism principle?
live for pleasure and well-being
focus on what you control
live a complete and fulfilling life
usefulness, practicability, benefit
prudence, courage, justice

172.	<question> Essence of Art in classical sense:
Art is representation of reality
Art is beauty, truth, good
Art is expression of spiritual world of artist
Art is only fine art
Art is skill and mastery

173.	<question> Essence of Art in Renaissance sense
Art is representation of reality
Art is beauty, truth, good
Art is expression of spiritual world of artist
Art is only fine art
Art is skill and mastery

174.	<question> Essence of Art in 17-18 centuries:
Art is representation of reality
Art is beauty, truth, good
Art is expression of spiritual world of artist
Art is only fine art
Art is skill and mastery

175.	<question> Essence of Art in contemporary sense:
Art is representation of reality
Art is beauty, truth, good
Art is expression of spiritual world of artist
Art is only fine art
Art is skill and mastery

176.	<question> Essence of Art in traditional sense:
Art is representation of reality
Art is beauty, truth, good
Art is expression of spiritual world of artist
Art is only fine art
Art is skill and mastery

177.	<question> Aesthetic categories of Nietzsche:
sublimation
Apollonian and Dionysian
absurd
mimesis 
catharsis

178.	<question> Aesthetic categories of Freud:
sublimation
Apollonian and Dionysian
absurd
mimesis 
catharsis

179.	<question> Aesthetic categories of Existentialism:
sublimation
Apollonian and Dionysian
absurd
mimesis 
catharsis

180.	<question> Aesthetic categories of Plato
sublimation
Apollonian and Dionysian
absurd
mimesis 
catharsis

181.	<question> Aesthetic categories of Aristotle
sublimation
Apollonian and Dionysian
absurd
mimesis 
catharsis

182.	<question> Whose statement is this? – People are born free or slaves.
Erasmus 
Aristotle
Spinoza 
Rousseau
Fromm

183.	<question> Whose statement is this? – Freedom is human illusion.
Erasmus 
Aristotle
Spinoza 
Rousseau
Fromm

184.	<question> Whose statement is this? – Freedom is realized necessity.
Erasmus 
Aristotle
Spinoza 
Rousseau
Fromm

185.	<question> Whose statement is this? – Freedom is democracy and equality.
Erasmus 
Aristotle
Spinoza 
Rousseau
Fromm

186.	<question> Whose statement is this? – There is freedom from and freedom for.
Erasmus 
Aristotle
Spinoza 
Rousseau
Fromm

187.	<question> Which one describes inevitable course of things which are unavoidable:
liberalism
fatalism
determinism
voluntarism
providentialism

188.	<question> Which one describes individual, civil rights, free enterprise
liberalism
fatalism
determinism
voluntarism
providentialism

189.	<question> Which one describes that everything happens due to the objective laws
liberalism
fatalism
determinism
voluntarism
providentialism

190.	<question> Which one describes that everything happens due to somebody’s will
liberalism
fatalism
determinism
voluntarism
providentialism

191.	<question> Which one describes the everything happens due to God’s will
liberalism
fatalism
determinism
voluntarism
providentialism

192.	<question> Tick the criteria of society:
territory
all of them
self-regulation
self-control
integrity

193.	<question> What is society?
Aggregate of individuals
Social system
community
social relations
social groups

194.	<question> Which definition of society is of Social Darwinism?
Society is social relations
society is organism
Society is geographic adaptation
Society is ideal place
Society is summation of individuals

195.	<question> Which definition of society is of Marxism?
Society is social relations
society is organism
Society is geographic adaptation
Society is ideal place
Society is summation of individuals

196.	<question> Which definition of society is of Naturalism?
Society is social relations
society is organism
Society is geographic adaptation
Society is ideal place
Society is summation of individuals

197.	<question> Which definition of society is of Utopian?
Society is social relations
society is organism
Society is geographic adaptation
Society is ideal place
Society is summation of individuals

198.	<question> Which definition of society is of Atomism?
Society is social relations
society is organism
Society is geographic adaptation
Society is ideal place
Society is summation of individuals

199.	<question> Which one is concise definition of Culture?
Scope of arts
is material and spiritual environment created by man
life style
fine manners
customs and traditions

200.	<question> What are the main characteristics of a Mass Man according to Ortega y Gasset?
responsibility
consumerism
education
high standards
hard work
`;

export const parseQuestions = (): Question[] => {
  const lines = RAW_DATA.split('\n');
  const questions: Question[] = [];
  let currentQuestion: Partial<Question> | null = null;
  let currentOptions: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Detect new question pattern like "1. <question>..." or "14.<question>..."
    // Added \s* to handle cases where space is missing after dot
    const questionMatch = line.match(/^(\d+)\.\s*<question>\s*(.*)/);

    if (questionMatch) {
      // Save previous
      if (currentQuestion) {
        currentQuestion.options = currentOptions;
        questions.push(currentQuestion as Question);
      }

      // Start new
      currentQuestion = {
        id: parseInt(questionMatch[1], 10),
        text: questionMatch[2].trim(),
      };
      currentOptions = [];
    } else if (currentQuestion) {
      // It's an option
      currentOptions.push(line);
    }
  }

  // Push last one
  if (currentQuestion) {
    currentQuestion.options = currentOptions;
    questions.push(currentQuestion as Question);
  }

  return questions;
};

export const QUESTIONS = parseQuestions();