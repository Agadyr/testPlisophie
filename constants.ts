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

// Answer key data derived from the PDF
const ANSWER_KEY_RAW = `
1. The specificity of the mythological worldview:
Ответ: The unity of man and the world
2. Philosophical worldview has its own specifics:
Ответ: all answer are correct
3. The object of philosophy:
Ответ: the world and the man
4. The subject of philosophy is:
Ответ: the most general laws and patterns of development and functioning of human society, thinking and the universe
5. The main divisions of philosophy:
Ответ: Gnoseology, ontology, ethics, aesthetics
6. Which function doesn’t belong to philosophy:
Ответ: Scientific
7. The basic question of philosophy:
Ответ: What is primary: consciousness or matter?
8. The other side of the basic question of philosophy:
Ответ: Relation of thinking to being
9. Solution of the basic question of philosophy:
Ответ: Materialism and idealism
10. Solution of the other side of the basic question of philosophy:
Ответ: Gnosticism and agnosticism
11. Metaphysics in philosophy states:
Ответ: the world is static, unchanging
12. Dialectics in philosophy states:
Ответ: the world is flux
13. Consciousness is state of:
Ответ: thinking
14. The central problem of Consciousness:
Ответ: Mind and body
15. What does NOT belong to Sensory knowledge?
Ответ: reasoning
16. What does NOT belong to Rational knowledge?
Ответ: intuition
17. True being according to Plato:
Ответ: ideas
18. Being according to Aristotle:
Ответ: substance
19. Being according to Heidegger:
Ответ: existence
20. Human according to Social Darwinism is:
Ответ: organism
21. Human according to Marxism:
Ответ: social being
22. Human according to Descartes:
Ответ: rational being
23. Moral is an object of study of:
Ответ: ethics
24. «Things-in itself» by Kant is:
Ответ: Things we cannot cognize
25. «noumena» by Kant is:
Ответ: Unknowable world
26. «phenomena» by Kant is
Ответ: Sensual images of objects
27. Tengrism can be defined as:
Ответ: Monotheism
28. Shamanism is a form of:
Ответ: Religion
29. Combination of different Beliefs… is called:
Ответ: Syncretism
30. Levy-Bruhl meant:
Ответ: Magic
31. Essential cult for Kazakh worldview:
Ответ: Cult of ancestors
32. Philosophical system of Marxism:
Ответ: Dialectical materialism
33. Central category of Marx’s Historical materialism:
Ответ: Social-economic formation
34. Freedom according to Spinoza:
Ответ: Recognized necessity
35. Central problem in Kierkegaard’s philosophy:
Ответ: Human existence
36. Ethical ideal of Nietzsche:
Ответ: Superman
37. Main philosophical categories of Camus:
Ответ: Absurdity and rebellion
38. Why Existentialism is humanism (Sartre):
Ответ: Man himself determines his existence
39. Layer of psyche discovered by Freud:
Ответ: Unconscious
40. Believed the main task was self-knowledge:
Ответ: Socrates
41. Translation of “axiology”:
Ответ: Study of values
42. Dualism (thinking & extended substances) — philosophy of:
Ответ: R. Descartes
43. Theory of scientific knowledge:
Ответ: Epistemology
44. Object of philosophy:
Ответ: World in whole and the place of man in this world
45. Ethic is:
Ответ: A study of morality and moral behaviour
46. Aesthetics is:
Ответ: A study of beauty and art
47. First historical type of outlook:
Ответ: Mythology
48. Faith in the supernatural forces is:
Ответ: Religion
49. Socratic ethical rationalism:
Ответ: Virtue is knowledge
50. Outstanding French existentialist:
Ответ: Albert Camus
51. Subjective/Objective/Absolute spirit — whose?
Ответ: Hegel
52. Ancient Eastern philosophy developed in:
Ответ: India and China
53. “Act only on that maxim…” —
Ответ: the Kant’s Categorical imperative
54. “Cogito, ergo sum”:
Ответ: I think, therefore I exist
55. Universal law in Indian philosophy:
Ответ: Karma
56. First Baconian idol:
Ответ: Tribe
57. Second Baconian idol:
Ответ: Cave
58. Third Baconian idol:
Ответ: Marketplace
59. Fourth Baconian idol:
Ответ: Theatre
60. Knowledge based on experience:
Ответ: Empiricism
61. Kant’s categorical imperative is about:
Ответ: Moral problems
62. Translation of “philosophy”:
Ответ: Love of wisdom
63. Translation of “Sophist”:
Ответ: Wise man
64. “The first teacher”:
Ответ: Aristotle
65. Arche of Heraclitus:
Ответ: Logos (fire)
66. Arche of Pythagoras:
Ответ: Numbers
67. Teaching of Aristotle:
Ответ: Peripatetism
68. Renaissance view of human:
Ответ: Human is a creator, artist, enriched microcosm
69. “I know that I know nothing”:
Ответ: Socrates
70. 5 proofs of God’s existence — author:
Ответ: Thomas Aquinas
71. Myth of the Cave — author:
Ответ: Plato
72. Theocentrism — center is:
Ответ: God
73. Defining characteristic of religious outlook:
Ответ: Belief in the supernatural forces
74. Main characteristic of Renaissance:
Ответ: Anthropocentrism
75. Creationism:
Ответ: God
76. Searching human individuality — philosophy of:
Ответ: Existentialism
77. Destinies determined by God:
Ответ: Providentialism
78. Psychoanalytic theory — author:
Ответ: Sigmund Freud
79. “Thus Spoke Zarathustra” — author:
Ответ: Nietzsche
80. Branch studying historical knowledge:
Ответ: Philosophy of history
81. Social economic formation — developed by:
Ответ: Marx
82. “Either/Or”, “Fear and Trembling” — author:
Ответ: Kierkegaard
83. Conscious vs unconscious — indicated by:
Ответ: Freud
84. Aesthetic values:
Ответ: Beauty, art, harmony, style
85. “God is dead” — said:
Ответ: Nietzsche
86. Founders of existentialism:
Ответ: Camus, Sartre, Kierkegaard
87. “Man of absurd” (Camus):
Ответ: Meaningless of existence
88. “Man of rebellion” (Camus):
Ответ: I rebel, therefore I exist
89. “Borderline situations” — awareness of:
Ответ: His coming death
90. According to Sartre man is:
Ответ: A project of himself
91. “Neurotic” (Freud):
Ответ: A healthy person with neurotic symptoms
92. “The Unconscious” (Freud):
Ответ: Id
93. Archetypes (Jung):
Ответ: Symbols of Collective Unconscious
94. Human behaviour determined by (Jung):
Ответ: Collective unconsciousness
95. Behaviour determined by 3 authorities (Freud):
Ответ: Ego, Id, Super Ego
96. Main problem of philosophy (Kierkegaard):
Ответ: Human existence
97. Why man is in the world (Kierkegaard):
Ответ: Man was thrown into the world
98. How human manifests (Nietzsche):
Ответ: Will to power
99. Superman (Nietzsche) is one who:
Ответ: Does not believe in God
100. Typical Kazakh mythological forms:
Ответ: Tengrism and shamanism
101. Philosophy of Marxism is called:
Ответ: Dialectical materialism
102. Socio-political theory of Marxism is called:
Ответ: Historical materialism
103. Philosophical method of Marxism is called:
Ответ: Dialectics
104. Idea of Communism represents:
Ответ: Classless society
105. Historical type of societies in Marxism is called:
Ответ: Social economic formation
106. What is Consciousness?
Ответ: all of them
107. Elements of Consciousness (A. G. Spirkin):
Ответ: all of them
108. Property describing immaterial essence of consciousness:
Ответ: ideality
109. Who is Homo Sapiens?
Ответ: Man with thinking
110. Consciousness according to Dualism:
Ответ: immaterial substance
111. Consciousness according to Darwinism:
Ответ: highest property of brain
112. Consciousness in Logical behaviorism:
Ответ: acts
113. Self-consciousness describes:
Ответ: self-awareness
114. Language is:
Ответ: outer side of consciousness
115. Ontology:
Ответ: study of Being
116. “Metaphysics” means:
Ответ: what comes after physics
117. What is Being?
Ответ: category for existence
118. Problem of Being:
Ответ: what is the essence of the world
119. Substance:
Ответ: independent entity
120. “Being is, but there is not non-being” —
Ответ: Parmenides
121. “Being does not lie in something else” —
Ответ: Aristotle
122. “Being is One” —
Ответ: Parmenides
123. “Being is God” —
Ответ: Plotinus
124. “Being is Two” —
Ответ: Descartes
125. “Being is plural” —
Ответ: Leibniz
126. “Being is Absolute Idea” —
Ответ: Hegel
127. “Being is Man” —
Ответ: Heidegger
128. Forms of Being:
Ответ: All of them
129. Matter:
Ответ: material being
130. Attributes of Matter:
Ответ: All of them
131. Forms of Motion:
Ответ: all of them
132. Development is:
Ответ: motion from simple to complex
133. Two concepts of Development:
Ответ: methaphysical and dialectical
134. Types of space:
Ответ: Three-dimensional
135. Types of time:
Ответ: all of them
136. Visible & invisible sides of things:
Ответ: Essence and phenomenon
137. Inner & outer sides of things:
Ответ: Content and form
138. Determinism category:
Ответ: Necessity and contingency
139. Cognition:
Ответ: awareness of smth
140. Knowledge:
Ответ: information
141. Common between Knowledge & Cognition:
Ответ: knowledge is the result of cognitive process
142. Epistemology:
Ответ: Theory of knowledge
143. Gnoseology:
Ответ: Theory of knowledge
144. Gnosticism:
Ответ: cognitive optimism
145. Agnosticism:
Ответ: cognitive pessimism
146. Skepticism:
Ответ: cognitive doubts
147. True ideas according Descartes:
Ответ: innate ideas
148. Truth proved by socio-historical practice —
Ответ: Marx
149. We can cognize only phenomena —
Ответ: Kant
150. Conceptual cognitive type:
Ответ: scientific cognition
151. Levels of cognition:
Ответ: sensual and rational
152. Judgment:
Ответ: Statement reflecting the things and their properties
153. Concept:
Ответ: logical image that reproduces essential properties of objects
154. Inference:
Ответ: deduction from several interrelated judgments of a new judgment
155. Intuition:
Ответ: comprehend the truth by seeing it clear
156. Truth in classical sense:
Ответ: Truth is the correspondence of knowledge to reality
157. Fallacy:
Ответ: Is the fail of cognitive process
158. Axiology studies:
Ответ: values
159. Absolute values:
Ответ: truth, beauty, good
160. Classification of values by carrier:
Ответ: individual, supra individual
161. Classification of values by existence:
Ответ: material, spiritual
162. What is Ethics?
Ответ: theory of morality
163. What is Morality?
Ответ: social regulation form through good-bad
164. Why Ethics is practical?
Ответ: it is studied in order to become virtuous
165. Difference between Morality and Mores:
Ответ: norms and ideals
166. Main Christian values:
Ответ: faith, hope, love
167. Stoic principle:
Ответ: focus on what you control
168. Hedonistic principle:
Ответ: live for pleasure and well-being
169. Pragmatic principle:
Ответ: usefulness, practicability, benefit
170. Epicureanism principle:
Ответ: live for pleasure and well-being
171. Eudemonism principle:
Ответ: live a complete and fulfilling life
172. Essence of Art (classical):
Ответ: mimesis (representation of reality)
173. Essence of Art (Renaissance):
Ответ: Art is beauty, truth, good
174. Essence of Art (17–18 centuries):
Ответ: Art is expression of spiritual world of artist
175. Essence of Art (contemporary):
Ответ: Art is expression of spiritual world of artist
176. Essence of Art (traditional):
Ответ: Art is skill and mastery
177. Aesthetic categories of Nietzsche:
Ответ: Apollonian and Dionysian
178. Aesthetic categories of Freud:
Ответ: sublimation
179. Aesthetic categories of Existentialism:
Ответ: absurd
180. Aesthetic categories of Plato:
Ответ: mimesis
181. Aesthetic categories of Aristotle:
Ответ: catharsis
182. “People are born free or slaves” —
Ответ: Aristotle
183. “Freedom is human illusion” —
Ответ: Fromm
184. “Freedom is recognized necessity” —
Ответ: Spinoza
185. “Freedom is democracy and equality” —
Ответ: Rousseau
186. “Freedom from and freedom for” —
Ответ: Fromm
187. Inevitability / unavoidable:
Ответ: fatalism
188. Individual rights, free enterprise:
Ответ: liberalism
189. Due to objective laws:
Ответ: determinism
190. Everything by someone’s will:
Ответ: voluntarism
191. Everything due to God’s will:
Ответ: providentialism
192. Criteria of society:
Ответ: all of them
193. What is society?
Ответ: social relations
194. Social Darwinism definition:
Ответ: society is organism
195. Marxism definition:
Ответ: Society is social relations
196. Naturalism definition:
Ответ: Society is geographic adaptation
197. Utopian definition:
Ответ: Society is ideal place
198. Atomism definition:
Ответ: Society is summation of individuals
199. Concise definition of Culture:
Ответ: is material and spiritual environment created by man
200. Main characteristics of a Mass Man (Ortega y Gasset):
Ответ: consumerism
`;

export const parseQuestions = (): Question[] => {
  // 1. Parse Key Map
  const keyLines = ANSWER_KEY_RAW.split('\n');
  const answerKeyMap = new Map<number, string>();
  let currentKeyId = 0;

  for (const line of keyLines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    
    // Check for Question ID line in Key
    const qMatch = trimmed.match(/^(\d+)\./);
    if (qMatch) {
      currentKeyId = parseInt(qMatch[1], 10);
      continue;
    }

    // Check for Answer line
    if (trimmed.startsWith('Ответ:')) {
      const answerText = trimmed.replace('Ответ:', '').trim();
      if (currentKeyId > 0) {
        answerKeyMap.set(currentKeyId, answerText);
      }
    }
  }

  // 2. Parse Questions
  const lines = RAW_DATA.split('\n');
  const questions: Question[] = [];
  let currentQuestion: Partial<Question> | null = null;
  let currentOptions: string[] = [];

  const pushQuestion = () => {
    if (currentQuestion) {
      currentQuestion.options = currentOptions;
      
      // Match correct answer
      const correctAnswerText = answerKeyMap.get(currentQuestion.id || 0);
      if (correctAnswerText && currentOptions.length > 0) {
        // Simple fuzzy match: check if option includes answer or vice versa
        // Normalizing to lowercase and removing special chars helps
        const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
        const normAnswer = normalize(correctAnswerText);

        const bestMatchIndex = currentOptions.findIndex(opt => {
          const normOpt = normalize(opt);
          return normOpt.includes(normAnswer) || normAnswer.includes(normOpt);
        });

        if (bestMatchIndex !== -1) {
          currentQuestion.correctAnswerIndex = bestMatchIndex;
        } else {
             // Fallback: Sometimes "all of them" or "all answer are correct" matches poorly
             if (normAnswer.includes('allanswer') || normAnswer.includes('allofthem')) {
                const allIndex = currentOptions.findIndex(o => normalize(o).includes('all'));
                if (allIndex !== -1) currentQuestion.correctAnswerIndex = allIndex;
             }
        }
      }
      
      questions.push(currentQuestion as Question);
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Detect new question pattern like "1. <question>..." or "14.<question>..."
    const questionMatch = line.match(/^(\d+)\.\s*<question>\s*(.*)/);

    if (questionMatch) {
      pushQuestion();

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
  pushQuestion(); // Push last

  return questions;
};

export const QUESTIONS = parseQuestions();