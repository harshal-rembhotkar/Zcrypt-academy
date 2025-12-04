// src/pages/StoryDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const storyTexts = {
  // 1. Mina + Zcash: curves
  'mina-pasta-curves-journey': {
    title: 'Curves That Power Privacy (Mina and Zcash)',
    body: `
✨ A late night in the lab

Mira stared at her laptop in a small apartment that felt more like a server room. The city outside was loud, but inside she heard only the fans and the soft tap of keys.

Most blockchains had grown heavy. To verify them, you needed a big machine, a lot of storage and a good amount of patience. That was fine for data centers, but not for people who wanted to verify rules on a phone.

Mina offered a different dream. A chain that stayed tiny and still carried real value. The trick was to use recursive proofs, small mathematical certificates that prove all previous certificates were valid.

To make that work, the system needed the right elliptic curves.

📐 The Pasta family

Older curves were like tools built for a single job. They were good for signatures or simple proofs, but not for deep recursion.

Engineers from Mina and Zcash looked for a pair of curves that worked together. One curve would live in a field that made proving efficient. The other would live in a field that made verifying those proofs efficient.

That is how the Pasta family was chosen: Pallas and Vesta.

You can imagine them as two train lines that cross the same valley:

• One line carries raw proof data.  
• The other line carries proofs about those proofs.  
• Together they let information move back and forth without collisions.

Entire histories can be compressed into compact proofs that still check out on ordinary devices.

🔒 What this feels like for users

Most people will never say the names of the curves. They notice other things instead.

• Their Mina wallet syncs quickly.  
• Their Zcash wallet can use advanced proof systems.  
• They do not need to trust a few big servers to tell them the chain is valid.

Mira liked to use a story from her village. Long ago, the village kept a huge book of debts. It became so heavy that only one person could lift it.

One day the elder arrived with a folded note.

“This note proves that every page in the big book is consistent,” the elder said.  
“You do not need the whole book. You only need this proof.”

That note is like a recursive proof. The ink that makes it possible lives on curves such as Pallas and Vesta.

Most people never see the algebra. They simply feel that they can verify a global system and still keep their own life private.
`,
  },

  'day-the-explorer-went-dark': {
    title: 'The Day the Explorer Went Dark',
    body: `
When the first public blockchain reached Vale City, people loved watching the block explorer. You could see transactions flying by, blocks being added and balances changing. It felt like staring at the heartbeat of a new financial system.

Very quickly, companies built services on top of that data. Some made research tools. Others quietly built risk scores for citizens. A few created lists of “suspicious” addresses based only on patterns, not on any legal decision.

Years later a teacher lost a job offer after a hiring tool flagged their address. The tool had noticed an old donation to a controversial cause. The donation had been small and legal, but the model had assigned a label that no one could remove.

The story started a long public debate.

A coalition of engineers and community groups suggested a change. New transactions could move to a privacy layer that used zero knowledge proofs. The explorer would still show that blocks were valid and that the supply stayed correct, but it would stop exposing the full social graph of everyone in the city.

Some people worried that this would hide corruption. Others pointed out that corruption already hid in other ways, while ordinary people had no protection at all.

The transition took time. When it completed, the explorer looked quieter. You could still see that the system was healthy. You just could not reconstruct every personal story with a few clicks.

For many citizens, that silence felt like a return to something basic. The chain was still open where it needed to be, but their lives were no longer fully written on its surface.
`,
  },

  
   'cafe-that-forgot-names': {
    title: 'The Café That Forgot Names',
    body: `
There was a small café at the edge of the tech district that had very fast Wi‑Fi and a very unusual policy.

The owner, Priya, refused to use loyalty systems that tracked every visit. She ignored sales pitches for “smart” point of sale terminals that measured foot traffic and predicted customer behavior.

“I am here to sell coffee, not people,” she told every salesperson.

One day a group of developers asked if they could run a pilot in her shop. They were building a payment system that used zero knowledge proofs. The idea was that a customer could prove they had enough balance and that they were not double spending, while the café would only see that the payment was valid.

No name, no card number, no full transaction history.

They connected a simple tablet to Priya’s network and started testing. Regulars kept buying coffee. A few early adopters used the new method and smiled when they realized how little information was shared.

Word began to spread. Journalists came because they liked the story. Activists came because they needed the privacy. Some locals came just because they were tired of being profiled every time they bought a drink.

Priya’s café slowly turned into a place where people could exist as customers without feeling like products. The technology was advanced, but the experience felt very old and natural. You walked in, paid, talked and left, and nothing whispered about you behind your back.
`,
  },

  // 4. Aztec: mirror of choices
  'aztec-mirror-of-choices': {
    title: 'The Mirror of Choices',
    body: `
📱 Life in the super app

In Leo’s town, almost everyone used the same wallet app. It handled food, transport, shopping and donations. It showed friendly badges for “good citizens” and small warnings when someone fell behind on bills.

Over time, the app started to feel less like a tool and more like a quiet judge.

One day, Leo tried to donate to a small privacy group. The payment failed with a vague error. A week later, his “trust score” inside the app dropped. His credit offer changed. No one said it was because of that one attempted donation, but the timing was clear.

His financial history had turned into a mirror that others controlled.

🔍 Choosing a new reflection

Leo looked for another path and discovered Aztec.

Here, he could still use Ethereum security, but his actions could be private when he wanted them to be.

He began to move some activity:

• Private donations to groups he supported  
• Private recurring payments for services  
• Occasional private swaps

He still paid taxes where required and still followed the laws in his region. The difference was that his entire belief system was no longer written in public transaction histories.

To Leo, Aztec became a new kind of mirror.

The chain still reflected whether rules were followed, but the fine details were visible only to the people who needed to see them.

❤️ Why this matters

Leo was not trying to hide crimes. He was trying to protect simple human things.

The right to explore new ideas without being judged forever.  
The right to support a cause while it is still unpopular.  
The right to separate his identity from his transaction graph.

Aztec’s technology is complicated behind the scenes. For users like Leo, the result is clear.

Money stops being a tracking system and turns back into a tool that respects the person who holds it.
`,
  },

  // 5. Osmosis: river of hidden swaps
  'osmosis-river-of-hidden-swaps': {
    title: 'Osmosis and the River of Hidden Swaps',
    body: `
🏝️ Islands of value

Imagine a world of many chains, each like its own island. Tokens live on different shores. To move between them, people sail across visible bridges. Everyone can watch who leaves, who arrives and what they bring.

Nia loved cross chain trading, but she did not enjoy how exposed it felt. Any time she made an interesting move, bots followed. Some tried to front run her. Others simply copied her strategy.

She wanted markets that were efficient without turning every trade into a signal flare.

🌊 Meeting the river

She started using Osmosis.

It felt less like a static bridge and more like a moving river that connected zones. Liquidity pools allowed assets to flow, and routing logic decided how to move from one token to another.

As privacy features improved, parts of the path could become less obvious from the outside. Observers could still verify that trades were valid and pools were correctly updated, but they could not always see each small step a trader took.

For Nia, this felt like trading in a misty marketplace.

Prices were clear. Final balances were correct. Her exact route through the system was harder to trace.

📈 Why private swaps matter

For Nia, privacy in trading was not about hiding from the law. It was about keeping control of her own strategy and reducing how much information leaks into the hands of attackers and spammers.

She could:

• Avoid being targeted based on her holdings  
• Experiment with new pairs without becoming an instant signal  
• Contribute liquidity without exposing the rest of her financial life

Osmosis showed her that a market can be transparent at the level of rules and still respectful at the level of individuals.

In that river, value flows freely, but people do not need to walk with their names written above their heads.
`,
  },

  // 6. Zcash: right to breathe privately
  'zcash-right-to-breathe-privately': {
    title: 'The Right to Breathe Privately',
    body: `
🏙️ Life under quiet scoring

Sam lived in a city where almost every daily action ran through a single identity. Transport, banking, shopping and social features all shared data.

Nothing dramatic happened at first. Then a peaceful street protest was recorded and tagged. Months later, Sam noticed that a loan application failed with no clear reason. Insurance options changed. Support lines went silent.

Nobody said it was because of that protest, but the pattern felt familiar.

Their financial history had become another channel for control.

💜 Finding a different heartbeat

A friend sent Sam a small amount of Zcash with a note:

“This one is just between us.”

Sam opened a Zcash wallet and saw something very ordinary. Balances, addresses and an option to use a shielded pool.

The difference was not visual. It was in what would not be shared.

With shielded transactions, Sam could:

• Pay rent to a landlord who valued privacy  
• Support groups without creating a public tag  
• Keep daily activity outside the reach of data brokers

The chain still enforced rules. It still prevented double spending. It simply did not turn every payment into public content.

For Sam, that felt like breathing air that nobody else owned.

🌱 Making privacy normal

At first, some friends joked about it.

“What are you hiding?”  

Sam answered with simple questions.

Do you close the door when you visit a doctor?  
Do you put curtains on your windows?  
Do you want every purchase to follow you forever?

Zcash helped them see that private transactions do not need to feel extreme. They can feel as ordinary as paying cash at a small shop.

In a world where economic data is constantly harvested, the right to move money without building a public profile is not a luxury. It is part of staying human.
`,
  },

  // 7. Zcash: sovereign individual ledger
  'sovereign-individual-ledger': {
    title: 'The Ledger of the Sovereign Individual',
    body: `
📜 The invisible record

Every person carries an invisible record.

It tracks who paid them, who they paid, what they saved and which risks they took. When that record is fully public, it becomes a leash. When it is completely hidden, society cannot coordinate.

Real freedom lives somewhere in between.

🧭 Aria’s problem

Aria was a freelance researcher in a region where certain topics were not welcome. She received support from people around the world. Traditional banking systems flagged her payments. Some transfers were delayed. Others simply disappeared.

She turned to tools like Zcash, Mina and privacy layers that respected her situation.

Supporters could send shielded payments.  
Aria could keep her own books and even generate proofs that she had used funds correctly, without publishing every detail.

To some donors she showed full reports.  
To hostile observers there was almost nothing to see.

🔑 Choosing what to reveal

For Aria, sovereignty did not mean disappearing. It meant choosing who saw which part of her story.

Her tools let her:

• Prove that she paid collaborators fairly  
• Demonstrate compliance where it was truly required  
• Avoid becoming a permanent entry in a list of “problematic” citizens

The ledger still existed, but it was written in a language that she controlled.

In a future where more people work across borders and outside traditional institutions, this kind of selective visibility will matter even more. Zcash and similar systems make that possible in practice, not just in theory.
`,
  },

  // 8. Mina: library on one page
  'mina-library-of-one-page': {
    title: 'Mina and the Library on One Page',
    body: `
🏛️ From warehouse to postcard

Big blockchains often feel like huge warehouses full of boxes. To check what is inside, you are asked to walk every aisle.

Mina took another approach.

What if you turned the whole warehouse into a signed postcard?

Using recursive proofs, Mina reduces the chain state into a tiny snapshot that still confirms all past rules. That snapshot can be verified on an ordinary phone.

The result is a chain that behaves like a full system but fits in the space of a small message.

📲 Privacy on top of light verification

Once the chain is that small, everyone can be a verifier. You no longer have to depend completely on a small group of servers.

On top of this, Mina supports zkApps. These applications let people prove things about their data without putting the raw data on chain.

Someone can show that they are over a certain age, meet a credit score range or have paid a required amount of tax, while keeping private the exact numbers and documents.

For users, this feels like walking around with a small safe in your pocket.

People can ask questions.  
You answer with proofs, not with a full copy of your life.

The system stays verifiable. Your identity stays yours.
`,
  },

  // 9. Aztec: privacy puzzle
  'aztec-privacy-puzzle': {
    title: 'Aztec and the Privacy Puzzle',
    body: `
🧩 Pieces on the table

Developers already had many privacy pieces.

They had zk proofs, encrypted notes, rollups and strong mainnet security. What was missing was a way to fit those pieces together into something that felt natural for regular users.

Aztec tried to assemble that puzzle.

From the outside, you still anchor to Ethereum.  
Inside, actions can be private when they do not need to be public.

Nora, a student, used Aztec to pay back a friend and to move small amounts into DeFi positions.

On the public chain, nobody could easily link her loan repayment and her strategy. On her own screen, everything made sense.

🧠 A clear picture

When Nora explained Aztec to classmates, she did not talk about fields or group operations. She drew two scenes.

In one, people walked through a city with searchlights above them. Every purchase, donation and bet was broadcast.

In the other, people walked the same streets, but simple masks hid their identities while the streetlights only showed that traffic followed the rules.

“The puzzle is not whether privacy is possible,” she said.  
“The puzzle is whether we accept tools that do not offer it.”

Aztec’s existence answers the first question. Users answer the second.
`,
  },

  // 10. Rebellion of silent transfers
  'rebellion-of-silent-transfers': {
    title: 'The Rebellion of Silent Transfers',
    body: `
🌍 The age of loud ledgers

Public blockchains began as a reaction to closed banks. Everything was open and checkable. Over time, people noticed a new issue.

Every donation, remittance and salary payment was visible to anyone who cared to look. Data firms did not need leaks. They had block explorers.

The first rebellion had been against secrecy.  
The next one grew against forced exposure.

⚡ Three quiet allies

Zcash, Mina and Osmosis moved in different spaces, but they shared an idea.

• Zcash protected individual payments with strong privacy.  
• Mina allowed people to prove facts without revealing full histories.  
• Osmosis experimented with ways for swaps to stay efficient without revealing every path.

Together they made “silent transfers” possible.

Money still followed rules.  
Audits were still possible where needed.  
The difference was that not every transfer turned into a story for someone else to sell.

🌈 A new default

In this world, an NGO could protect its donors. Workers could protect their salary history. Traders could protect their strategies. Families could help each other across borders without painting bright arrows on the map.

The chains still produced blocks. Explorers still showed that systems were alive. The difference was that the most sensitive flows moved quietly.

Silence did not mean nothing was happening.  
It meant people finally had a choice in how much of their economic life became a public show.
`,
  },
  'secret-door-in-the-wallet': {
    title: 'The Secret Door in the Wallet',
    body: `
Lena liked simple tools. One banking app, one chat app, one photo app. Each of them looked friendly, but none of them showed how much data they collected about her.

One night her younger brother asked a question that stayed with her.

“If these apps know everything about us,” he said, “do we still choose who we are, or do their models choose it for us?”

Later that week a friend helped her install a wallet that supported privacy coins and zero knowledge proofs. At first it looked like any other wallet. Balance, history, send, receive.

Then she noticed a new button called “create private proof.”

When she tapped it, the wallet offered to create a proof that she had more than a certain amount of savings, without revealing the exact number. It was as if a secret door had appeared in the wall.

She imagined applying for an apartment and saying, “Here is evidence that I can afford the rent,” while keeping her real balance to herself. The landlord could trust the result without turning her into a visible line item in another database.

The more she used the wallet, the more that door mattered. Some parts of her financial life needed to be shared. Many parts did not. Zero knowledge proofs did not ask people to trust her word. They asked them to trust the math.

For the first time, her money felt like something she controlled rather than something that constantly described her to strangers.
`,
  },

  'aztec-market-of-quiet-voices': {
    title: 'Aztec and the Market of Quiet Voices',
    body: `
🌐 The loud bazaar

The open DeFi bazaar never slept.

Every swap and every borrow appeared on a public screen. Data companies drew graphs of who had interacted with whom. Advertisers guessed interests from token lists. Employers quietly checked explorer pages.

Hana was a digital artist selling animated prints. One of her early supporters was attacked online after someone traced their donation history. They were reduced to a label based on a single transaction.

After that, Hana could not look at a public transaction without feeling a little fear.

She wanted to stay on Ethereum, where her collectors already lived. She just did not want each sale to turn into more fuel for surveillance.

🔐 Finding the quiet market

A friend told her about Aztec.

“It is like a quieter layer on top of Ethereum,” the friend said.  
“You still get the mainnet security, but your activity does not shout.”

In Aztec, transactions are wrapped in proofs. The chain checks that rules are followed but does not need to show the full details in public.

Hana deployed a small private sale contract. Buyers could unlock her art, but explorers showed only commitments and proofs instead of clear amounts and addresses.

For the first time in a long time, her shop felt like a private gallery instead of a glass box.

🎨 Making privacy feel normal

Some buyers were unsure.

“Is this allowed?”  
“Why can other people not see exactly what I paid?”

Hana answered with everyday examples.

You do not publish your bank statement on a social network.  
You do not invite strangers to look over your shoulder at the checkout counter.

On chain, people had started to think this kind of exposure was normal. Aztec reminded them that it was not.

Over time, her community stopped treating privacy as something suspicious. It became just another basic feature of how money should move.

Aztec’s cryptography stayed in the background. What people felt was simple: a place where they could support art and projects without handing over a detailed map of their lives.
`,
  },

  'puzzle-of-the-red-door': {
    title: 'The Puzzle of the Red Door',
    body: `
When Amir heard the phrase “zero knowledge proof,” the words sounded interesting, but also confusing.

“How can you prove something without showing it?” he asked his friend Tara, who worked as a cryptographer.

Tara gave him a small story.

“Imagine a round cave with two paths,” she said. “At the far end there is a locked red door that connects the paths. You say you know the password, but I do not want you to tell it to me.”

Amir nodded.

“You walk into the cave and choose any path,” she continued. “I stay outside and do not see which way you went. Then I call out which side I want you to come out from. If you really know the password, you can always open the red door inside and appear on the side I choose.”

If he knew the secret, he could always satisfy her request. If he was bluffing, sooner or later he would be stuck on the wrong path.

“Now imagine we repeat this many times,” Tara said. “If you keep succeeding, I become very confident that you know the password, even though I never heard it.”

Amir finally understood. In real zero knowledge systems the cave, the door and the paths are replaced by equations and cryptographic tools. The secret can be a private key, a hidden amount or some piece of personal data. The verifier plays the role of Tara and only sees the proof steps, not the secret.

Zero knowledge proofs did not mean “trust me blindly.” They meant “trust the process, even if I keep the sensitive part to myself.” The red door stayed in Amir’s imagination every time he read about new privacy protocols.
`,
  },

  'passport-without-a-face': {
    title: 'The Passport Without a Face',
    body: `
Mara wanted to attend a conference that required proof of age and residency. The registration form asked for a full scan of her passport.

She hesitated. The passport contained far more than those two facts. It showed her full name, her place of birth, her document number and a photograph that face recognition systems could track.

A developer friend invited her to test a different flow.

Instead of uploading the passport, she opened a small app on her phone. The app read the passport chip locally and checked that it was genuine. Then it created a zero knowledge proof that said:

“This person is over 18 and lives in this country.”

The proof did not contain her name, her number or her photo. It only encoded the statement and the evidence that the statement followed the rules.

The conference website received the proof, verified it and marked her as cleared.

Mara had followed the law, and the organizers had met their requirement, but she had not created yet another copy of her identity for someone else to store or lose.

She imagined other doors working the same way. Online platforms could check what they needed and nothing more. Governments and companies would still get the information that truly mattered, but her core identity would not be scattered in a hundred different databases.
`,
  },

  'teacher-and-transparent-class': {
    title: 'The Teacher and the Transparent Class',
    body: `
Ishan taught an introductory course on cryptography. His students were excited by blockchains, but many believed that “total transparency” was the only way to keep them honest.

One morning he walked into class carrying two jars.

The first jar was clear glass and full of coins. The second jar was dark glass with a small digital counter on its lid.

“With this jar,” he said, holding up the clear one, “everyone can see exactly how many coins each person adds or removes. It is easy to audit, but there is no privacy at all.”

He put it down and picked up the dark jar.

“With this jar you do not see individual actions,” he explained. “You only see that the total always follows the rules.”

He dropped in a coin, and the counter went up by one. He took a coin out, and the counter went down.

He then related the two jars to blockchains. Public chains that record every detail are like the clear jar. Systems that use zero knowledge proofs can behave more like the dark jar. The rules and totals stay visible. The personal actions remain hidden.

Throughout the semester the class explored examples. Private payments. Private voting. Private credentials that still passed checks.

By the end, many students no longer saw privacy and transparency as enemies. They saw that it was possible to design systems that were transparent about rules and soundness, while still respecting the private lives that existed inside them.
`,
  },

  'whisper-network': {
    title: 'The Whisper Network',
    body: `
In a small town, a group of friends shared an informal safety net. When someone lost work or had an unexpected bill, the others sent money to help.

At first they used regular bank transfers. After a few months they noticed something strange.

Some of them began to receive targeted loan offers that referenced very specific amounts and timings. One friend was contacted by a payday lender at work, who somehow knew about a recent transfer from the group.

It felt as if their quiet generosity had been turned into a data source.

They switched their mutual aid fund to a crypto network that supported private transfers and zero knowledge accounting. Inside the group, a shared app tracked who had given and who had received. Outside the group, observers saw only that the fund never went negative and never broke its own simple rules.

If a regulator ever needed to check that the fund was legal, the group could share a proof built from the internal ledger. The proof would confirm that all flows were between verified members and that they stayed under agreed limits, without exposing each friend’s personal situation.

They began to call it the whisper network. Not because anything illegal happened, but because it finally felt as confidential as the kindness behind it.
`,
  },

   'verifiable-privacy-zcash-mina-city': {
    title: 'Verifiable Privacy in New Harbor',
    body: `
🏙️ A city obsessed with data

New Harbor loved dashboards.

Every street had cameras. Every store had analytics. Every citizen had a “risk score” they never asked for. Governments called it safety. Companies called it personalization. Most people just called it tiring.

Lila tried to move through the city quietly. Her phone stayed in low data mode. She preferred cash. She did not enjoy the feeling that every purchase became part of someone else’s profile.

One afternoon she noticed a small sign in a side alley:

  “We accept private payments here.  
   Zcash only.”

The letters were hand painted. A small purple heart sat in the corner. 💜

Inside, the shop was simple. Wooden shelves. A slow ceiling fan. A tablet on the counter that looked repaired many times. The owner, Arjun, tapped a terminal he had built himself. No “sign in with big platform.” No ad banners. Only a shielded Zcash address.

Lila scanned and confirmed the payment.

On the chain, one fact appeared: a valid transaction happened.  
No name. No item list. No pattern to mine.

For the first time in months, paying for something did not feel like undressing in public.

---

⚖️ The regulator’s dilemma

Regulators in New Harbor were not cartoon villains. They worried about taxes, fraud and hidden money.

Their usual answer was simple: more logs, more identity checks, more data connections.

On paper this looked effective. In reality it turned every honest person into a data source.

A small civic tech group asked a different question.

“What if people can prove they follow the rules  
without sending every detail to a database?”

They began combining Mina and Zcash.

The flow looked like this:

1. A person uses Zcash for shielded payments.  
2. Their wallet privately calculates statements such as  
   “I earned at least this amount and paid at least this percentage in taxes.”  
3. The wallet creates a zero knowledge proof of that statement.  
4. Mina stores and verifies this proof on its compact chain.  
5. A city system sees only that the statement is true. ✅  

No raw history. No full list of counterparties.

---

🧪 A demo in the plaza

The group organized a public demo.

On a big screen, they showed two versions of the city.

Old world

• Every transaction logged in detail  
• Silent behavior profiles  
• Activists and dissidents flagged by pattern 🔴  

New world with Zcash and Mina

• Payments private by default  
• Taxes provably paid  
• No giant dossier on each person

They used Arjun’s shop as an example. The shop paid local taxes from shielded funds using a Mina proof. The tax office received only confirmation that the numbers were correct.

Journalists wrote about it as “the store that pays taxes without exposing its customers.”

People saw that privacy and accountability did not have to fight. They could help each other.

---

🌐 Honest without being exposed

Developers explained it with a simple picture.

• Zcash was the cloak that protected personal transactions.  
• Mina was the certificate that said, “Inside this cloak is someone who follows the rules.”

For everyday life, the meaning was direct.

You can breathe, spend, donate and build,  
without turning your entire story into analytics for someone else.

New Harbor did not become perfect overnight. Dashboards still existed. Some offices still preferred raw logs. But conversations changed.

When someone said “I want privacy,” people no longer replied, “What are you hiding?”

More often they said, “Of course you do. You also want a way to prove what matters.”

That was the point when verifiable privacy started to feel normal.
`,
  },
};

const StoryDetail = () => {
  const { slug } = useParams();
  const story = storyTexts[slug];

  if (!story) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-gray-700 mb-4">Story not found.</p>
        <Link to="/stories" className="text-blue-500 underline">
          ← Back to all stories
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/stories" className="text-blue-500 underline text-sm">
        ← Back to all stories
      </Link>
      <h1 className="text-4xl font-extrabold mt-4 mb-8">{story.title}</h1>
      <div className="prose max-w-none whitespace-pre-line text-gray-800 leading-relaxed">
        {story.body}
      </div>
    </div>
  );
};

export default StoryDetail;