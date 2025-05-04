'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PageLayout from '../../components/layout/PageLayout';

// Define types for our mecha data
interface Mecha {
  id: string;
  catid: string;
  title: string;
  style?: string;
  thumb?: string;
  keywords?: string;
  description?: string;
  url?: string;
  listorder?: string;
  islink?: string;
  inputtime?: string;
  updatetime?: string;
  driver_born?: string;
  driver_name?: string;
  driver_cn_name?: string;
  driver_introduction?: string;
  key?: string;
  features?: string[];
  abilities?: string[];
  pilot?: string;
  pilotBorn?: string;
  pilotIntroduction?: string;
  image?: string;
  // Additional fields from API response
  content?: string;
  driver_basic?: string;
  driver_basic_processed?: string[];
  driver_history?: string;
  mecha_basic?: string;
  mecha_basic_processed?: string[];
  mecha_history?: string;
  weapon_1_desc?: string;
  weapon_1_content?: string;
  weapon_2_desc?: string;
  weapon_2_content?: string;
  weapon_3_desc?: string;
  weapon_3_content?: string;
  weapon_4_desc?: string;
  weapon_4_content?: string;
  weapon_5_desc?: string;
  weapon_5_content?: string;
  driver_introduction_?: string;
}

// Mecha data from JSON - English names only version
const mechaData: Mecha[] = [
  {
    id: "122",
    catid: "1039",
    title: "PINAKA",
    key: "PINAKA",
    image: "/images/mechas/pinaka.jpg",
    thumb: "/images/mechas/thumbs/pinaka-thumb.jpg",
    description: "Pinaka is a formidable mecha known for its powerful artillery capabilities and long-range attacks.",
    mecha_basic: "Model Number: MHI-XT31\nManufacturer: Maha Industries\nHeight: 16 meters\nTare Weight: 21.7 tons\nGross Weight: 29.8 tons",
    mecha_history: "PINAKA is a support Striker developed by Gutindra for combat engineer troops, often regarded as one of the mass-production versions of the special model, SERENITH. Designed for easy mass production, it uses traditional multi-axis mechanical arms for maintenance and heavy steel composite armor for protection, striking a balance between cost and performance.\nDespite its affordability raising initial doubts about its combat capabilities, PINAKA quickly demonstrated its effectiveness in battle. It not only handles maintenance and cover deployment with ease but also engages enemy units with its multi-tube heavy ion cannons. This has allowed several Gutindran engineers to achieve impressive kill counts, turning them into ace pilots.",
    weapon_1_desc: "Rushes toward and continuously repairs a friendly target.",
    weapon_1_content: "The Bandha Quick Repair Kit is a traditional mechanical arm repair device that requires direct contact between PINAKA and the target. Both must remain stationary during the repair process. Despite this, the kit's repair efficiency significantly surpasses that of modern repair drones, quickly restoring friendly units' combat capabilities during brief pauses in battle.",
    weapon_2_desc: "Fires plasma buckshots, dealing Energy damage.",
    weapon_2_content: "The Moksha Splitter, mounted on the large unmanned drone Samsara, is technically not a true split beam cannon. Instead, it uses multiple heavy ion cannons firing simultaneously to mimic a shotgun-like effect. Added later in development to the drone's repair arms, these cannons have limited stability and require close-range operation to hit targets effectively.",
    weapon_3_desc: "Deploys stationary drones to continuously repair friendly units within range.",
    weapon_3_content: "The Vetala Repair Drone, developed by Maha Industries and Lunar-mare, is a fully automated system that deploys on-site to autonomously locate and repair nearby friendly units without operator input. This drone greatly lightens the pilot's workload, especially since other armaments of PINAKA demand meticulous manual control.",
    weapon_4_desc: "Drops giant shelter that defends against ranged attacks and impedes enemy movement. Direct hits bypass Fluid Armor and Force Fields, dealing high damage and staggering target.",
    weapon_4_content: "The Shishpar Cover Airdrop Kit drops heavy armored covers like warhammers, designed to crush foes. Originally intended to quickly establish cover for engineer troops, PINAKA pilots soon realized that using it to directly smash enemies into the ground was often more effective.",
    weapon_5_desc: "Deploys a tracking drone that continuously repairs friendly targets, generates a Stasis Field to block all attacks, and provides protection against staggering and immobilization.",
    weapon_5_content: "The distinctive Samsara Emergency Support Drone, designed by a renowned engineer at Maha Industries, features a ring-shaped airframe equipped with six multi-axis mechanical arms. Each arm is fitted with a field coupling drive, a composite repair claw, and a small heavy ion cannon. Together, they can deploy a defensive force field and carry out emergency repairs on heavily damaged allies while launching a barrage to thwart enemy pursuit."
  },
  {
    id: "97",
    catid: "1039",
    title: "AQUINA",
    key: "AQUINA",
    image: "/images/mechas/aquina.jpg",
    thumb: "/images/mechas/aquina.jpg",
    description: "Aquina is a versatile mecha designed for underwater operations and amphibious combat.",
    mecha_basic: "Model Number: NGS-X237A\nManufacturer: NG System Company\nHeight: 14.9 meters\nTare Weight: 25.3 tons\nGross Weight: 33.3 tons",
    mecha_history: "AQUILA is a high-mobility sniper-type Striker with hover capabilities, gaining prominence on the military export market as a rival to the renowned NARUKAMI. Originally designed by the Thalassic Federation, its prototype left no development or operational records. PyroGenesis acquired it through unknown channels, extensively modifying it into its current form. However, final mass production was handled by Federation manufacturers, suggesting undisclosed interests at play.\nRebuilt by PyroGenesis, AQUILA boasts a powerful propulsion system, enabling continuous patrols and hovering over combat zones to deliver sustained fire support. Its superior range and mobility allow it to evade most anti-aircraft fire, easily overpowering enemies without strong anti-air defenses.",
    weapon_1_desc: "Fires plasma beams, inflicting direct Energy damage",
    weapon_1_content: "The Red Sparrow Mobile Beam Cannon is a cutting-edge sniper weapon of the Thalassic Federation, designed to suppress recoil and deliver outstanding accuracy for dynamic sniper engagements. Upholding the philosophy of \"less is more,\" Luther Marble created this lightweight, reliable, powerful, and cost-effective masterpiece for the federation's airborne Strikers.",
    weapon_2_desc: "Fires supercharged plasma beams, inflicting direct Energy Damage.",
    weapon_2_content: "The Red Sparrow Mobile Beam Cannon not only allows for precise long-range sniping under the guidance of its own targeting system but also supports rapid firing by directly accessing the Striker's fire control data. This mode utilizes independent superconductive magnetic mirrors to store heavy ions, offering excellent consecutive firing performance and locking speed, making it suitable for leveraging accuracy and range advantages when engaging nearby enemy units.",
    weapon_3_desc: "Releases tracking drones that lock onto a target, immobilizing it and halting Energy Regen. Immobilization duration shortens against heavier enemies, but interference lingers after the effect ends. Can fire up to three times if missed; if all miss, cooldo",
    weapon_3_content: "The Hound Pulse Claw is a new type of jamming device developed for targeting third-generation Strikers. When it hits a target, it opens its massive claws to activate the field-coupling drive, immobilizing the unit. Reports suggest that these giant claws were salvaged by PyroGenesis from the Camellia exoskeleton. It appears that, before being damaged, they could use the exoskeleton's abundant energy supply to trap specific Strikers for an extended period.",
    weapon_4_desc: "Grants hovering ability, enhancing Air Mobility. Operates on independent Energy gauge.",
    weapon_4_content: "The Seahawk Airborne Kit is equipped with independent propulsion engines, which not only greatly enhance the aerial maneuverability of the Striker but also allow it to maintain a hovering state automatically. After PyroGenesis salvaged the Camellia exoskeleton from AQUILA's wreckage, they repaired several lightly damaged high-performance engines. These engines were then integrated in pairs and encased in sturdy armor to create this pair of large additional thrusters.",
    weapon_5_desc: "Boosts Reload Speed for Main Weapon, locks onto six enemy units with increased lock-on range and area.",
    weapon_5_content: "The Raven Multilock Radar enables AQUILA to track and lock onto multiple targets simultaneously, executing precise sequential sniping to eliminate them efficiently. Showcasing the full potential of the Striker's BREAK system, developers at PyroGenesis believe it could target dozens of enemies at once—its true power likely unlocked when paired with a large-scale weapon system."
  },
  {
    id: "96",
    catid: "1039",
    title: "STEGOSAUR",
    key: "STEGOSAUR",
    image: "/images/mechas/stegosaur.jpg",
    thumb: "/images/mechas/thumbs/stegosaur-thumb.jpg",
    description: "Stegosaur is a heavily armored mecha with distinctive back plates that function as both defense and offensive capabilities.",
    mecha_basic: "Model Number: SLM-M334F\nManufacturer: Salem Electric Company\nHeight: 15.3 meters\nTare Weight: 41.5 tons\nGross Weight: 51.6 tons",
    mecha_history: "The \"Armored Beast\" STEGO, a recent addition to the Thalassic Federation's Dino series, is a third-generation Striker upgraded to mainstream specs while retaining the series' durability and ease of production. It is currently replacing second-generation models in the federal army, alongside Bronto and Tyranno.\nSTEGO serves as a long-range fire support unit, armed with a comprehensive arsenal of missiles and rockets. Drawing inspiration from TRICERA's upgrades, Salem Electric has equipped STEGO with quick-deploying large stabilizers. These stabilizers absorb impacts and automatically adjust fire control settings to enhance targeting range, maximizing its long-range firepower.",
    weapon_1_desc: "Rapid-fires heavy rockets, causing Blast damage.",
    weapon_1_content: "The Boxer Rocket Pod is a new weapon designed for heavy Strikers, optimized for precision, range, and sustained firepower. It can quickly destroy most enemy units from beyond their range. According to the Union Army's official records, a pilot once used this weapon to shoot down a small reconnaissance device disguised as a bird, demonstrating its exceptional performance.",
    weapon_2_desc: "Rapid-fires heavy rockets, inflicting Blast damage.",
    weapon_2_content: "The Choir Rocket Pod, a classic model favored by the Thalassic Federation Army for its simplicity and reliability, remains in widespread use. Although this model predates the Catastrophe and is considered outdated, it effectively counters the most advanced Strikers with its powerful warheads.",
    weapon_3_desc: "Deploys smoke screen to reduce Energy damage and disrupt enemy units. Enhances Fluid Armor for friendly units within range, while making them untargetable by enemies.",
    weapon_3_content: "The Gatekeeper Haze Diffuser is an electronic warfare weapon developed by Rexeon for STEGO. It employs the unique interaction between Corite and electromagnetic waves to release high-concentration Corite haze, effectively shielding against common reconnaissance methods to ensure survival. Despite its capabilities, the known potential risks of Corite have made this weapon a focal point of intense criticism from various anti-Corite groups.",
    weapon_4_desc: "The unit becomes stationary but greatly boosts Lock-on Range and Reticle Size. Deploys a Stasis Field Drone to block frontal attacks and slow enemies. The field becomes immune to damage after reaching its damage absorption limit within a set time",
    weapon_4_content: "The Turret Form Module, when activated, locks specific joints and deploys two pairs of stabilizing struts to anchor the Striker. This mode enhances the fire control system's efficiency, fortifies the frame to withstand vibrations from simultaneous weapon discharges, and unlocks normally restricted armaments. This transformation turns the Striker into a formidable steel fortress, raining fire on its foes.",
    weapon_5_desc: "Fires micro missiles, targeting to up to six units, inflicting Blast damage.",
    weapon_5_content: "The Fencer Micro Missiles, a preferred suppression weapon of the Thalassic Federation, is deployed in war zones worldwide. Despite its compact size, it compensates for the limited power of each missile with remarkably high rates of fire in saturation attacks, effortlessly overcoming the defensive thresholds of various missile interception systems."
  },
  {
    id: "95",
    catid: "1039",
    title: "HELLFIRE",
    key: "HELLFIRE",
    image: "/images/mechas/hellfire.jpg",
    thumb: "/images/mechas/thumbs/hellfire-thumb.jpg",
    description: "Hellfire is a pyrotechnic mecha specialized in creating and controlling fire-based attacks.",
    mecha_basic: "Model Number: SLM-M143\nManufacturer: Salem Electric\nHeight: 15.1 meters\nTare Weight: 36.6 tons\nGross Weight: 46.1 tons",
    mecha_history: "INFERNO and its sister model, HURRICANE, originated from a highly secretive development program within the Thalassic Federation. Their prototype, equipped with an advanced cascading engine, was specifically engineered to enhance the mech's power generation capabilities. This prototype was pivotal in testing the performance of advanced energy weapons and tactical applications in several conflicts, leaving no eyewitness records but haunting the few survivors.\nRecognizing the prototype's superior combat effectiveness, the Thalassic Federation initiated mass production with two main models based on the most effective weaponry configurations of the prototype. Named INFERNO, this model is equipped with four high-power heavy ion cannons, focusing on offensive firepower. It is capable of incinerating robust defenses and clearing multiple lightly armored targets with its multi-target locking splitter cannons, making INFERNO the ultimate embodiment of firepower supremacy.",
    weapon_1_desc: "Scatters plasma beams, causing direct Energy damage.",
    weapon_1_content: "The Orthrus Charged Splitter, developed by Salem Electric, is a formidable heavy weapon typically dual-wielded by the Thalassic Federation's heavy and ultra-heavy third-generation Strikers. This armament features two firing modes: a scatter mode for engaging targets at various distances and a charged mode for precise, high-energy blasts. Its powerful energy beams are capable of penetrating fluid armor and force field to some extent.",
    weapon_2_desc: "Fires plasma beams, delivering continuous Energy damage. Targets up to 12 units and can intercept enemy missiles.",
    weapon_2_content: "The invention of the Ladon Split Emitter originated from a beam containment failure. During an experiment, the electric neutralization device of a new type of emitter malfunctioned, causing the beam to disperse due to charge repulsion. This unexpected event led the designers to create a sophisticated muzzle beam splitter, enabling the beam to simultaneously lock onto and attack multiple targets. As a result, it became an efficient method for area suppression and missile interception.",
    weapon_3_desc: "Fires supercharged plasma from drone, inflicting significant continuous Energy damage. Damage increases with prolonged emission time.",
    weapon_3_content: "The Cacus Converger Drone is often viewed as a complementary system to the Ladon Splitter, but few are aware that it is actually a direct offshoot of a highly classified tactical weapon development project. This drone type prioritizes optimizing formation coordination accuracy. Its precise electromagnetic reflectors can converge and compress the multiple beams of the Ladon Splitter, creating an almost unstoppable, ultra-high-density plasma beam capable of penetrating almost any defense.",
    weapon_4_desc: "Boosts Energy and Fluid Armor regeneration while granting immunity to Stagger.",
    weapon_4_content: "The Nessus Booster Kit can recycle the fragmented Corixium fuel emitted by the cascade engine to initiate a secondary cascade reaction, explosively enhancing the Striker's overall performance. However, its sustained usage is limited by heat dissipation constraints. It is said that this system was originally designed to increase the instantaneous power supply of a carrier and drive a certain unknown giant tactical weapon..."
  },
  {
    id: "75",
    catid: "1039",
    title: "SKYRAIDER",
    key: "SKYRAIDER",
    image: "/images/mechas/skyraider.jpg",
    thumb: "/images/mechas/thumbs/skyraider-thumb.jpg",
    description: "Skyraider is an aerial combat specialist with superior mobility and air-to-ground capabilities.",
    mecha_basic: "Model Number: NGS-Y244E\nManufacturer: NG System Company\nHeight: 15.2 meters\nTare Weight: 21.0 tons\nGross Weight: 27.2 tons",
    mecha_history: "SKYRAIDER is the Thalassic Federation's latest transformable Striker, inspired by the renowned Valravn from the Cygnia Union. Featuring a transformation system, SKYRAIDER is capable of switching to aircraft mode for enhanced aerial mobility. SKYRAIDER excels in air-to-ground attacks, boasting a large payload for sustained ground target suppression.\nOriginally developed by the Federation Air Force as a bomber, the Federation Army, seeing its advanced performance, contended for ownership, arguing that bipedal machines belong to the Army. This dispute delayed its deployment, pushing it into the export market first. As a result, the Striker is known in the arms market by its nickname SKYRAIDER, rather than by an official military designation.",
    weapon_1_desc: "Fires two consecutive plasma shots, dealing Energy damage.",
    weapon_1_content: "The high-performance Cuchaviva Energy Autocannon, developed by Luther Marble Company, is designed specifically for light to medium Strikers. It utilizes a firing mode called \"pulse irradiation,\" a technology that strikes a fine balance between typically opposing traits: lightweight design, low power consumption, high firepower, and extended range. The only trade-off is a slight reduction in rapid-fire capability.",
    weapon_2_desc: "Launches plasma missiles at targets. The explosions deal continuous Area damage (can also harm friendly units).",
    weapon_2_content: "The Sua Energy Missile stands out as one of the most powerful light missiles within the Thalassic Federation's arsenal. Although it has not been widely deployed, it has already garnered high praise. Unlike similar missiles, Sua forgoes rapid-fire capability in favor of a larger warhead payload. This design choice enables it to be equipped with an advanced plasma blast warhead, giving it explosive power that rivals traditional heavy missiles.",
    weapon_3_desc: "Fires Jamming Missiles at nearby enemies. The explosion creates a smoke screen that blocks Energy damage and greatly reduces direct Energy damage. Can lock onto up to six targets, once per unit.",
    weapon_3_content: "The Chia Jamming Missile, manufactured by the renowned arms dealer Rexeon, features advanced multi-target locking capabilities, allowing it to jam multiple targets simultaneously. This missile is the primary self-defense tool for SKYRAIDER, designed to deploy a jamming cloud upon detonation. This cloud not only disrupts enemy systems but also effectively intercepts and weakens heavy ion weapons, enhancing SKYRAIDER's survivability in combat.",
    weapon_4_desc: "Switches to flight mode. Greatly increases Mobility. Releases escort drones to automatically intercept missiles.",
    weapon_4_content: "The Aerial Assault Module: Huitaca allows the unit to switch to a high-speed flight mode suitable for rapid bombing missions as a tactical bomber. However, the fact that SKYRAIDER possesses both biped mode and aerial assault mode has led to disputes between the Federal Army and the Federal Air Force over ownership, resulting in the delayed service of the Striker.",
    weapon_5_desc: "Deploys a missile dispenser to a target location, releasing micro-missiles that inflict Blast damage on nearby enemies. Can target up to twelve units for twelve dispersals.",
    weapon_5_content: "The Bochica Missile Dispenser is one of the iconic heavy aerial ammunitions of the Thalassic Federation. After hitting the designated coordinates, it releases a large number of micro-missiles to attack all enemy units within range, making it particularly suitable for suppressing clustered targets. The dispenser has ample internal space and is also commonly used for airdropping supplies to ground forces in emergencies. Its nickname \"Ice Cream Truck\" is widely circulated among the Federation soldiers."
  },
  {
    id: "74",
    catid: "1039",
    title: "HURRICANE",
    key: "HURRICANE",
    image: "/images/mechas/hurricane.jpg",
    thumb: "/images/mechas/hurricane.jpg",
    description: "Hurricane is a heavy defense mecha designed for front-line combat.",
    mecha_basic: "Model Number: SLM-M144\nManufacturer: Salem Electric Company\nHeight: 15.3 meters\nTare Weight: 36.6 tons\nGross Weight: 46.7 tons",
    mecha_history: "HURRICANE is a robotic weapon system developed and deployed in secret by a covert-ops organization within the Union Armed Forces. It serves as a protective vanguard, providing exceptional cover for friendly units. Equipment design focuses on heavy defensive armaments, utilizing the unique BREAK System to enhance allied protection during the limited activation window. Integration of HURRICANE Strikers into various squadrons has significantly improved overall combat performance.",
    weapon_1_desc: "Fires armor-piercing shells that damage and penetrate enemy armor.",
    weapon_1_content: "The Hammer Armor Piercing Cannon is a heavy multi-barrel autocannon that rapidly fires armor-piercing projectiles from a high-caliber drum magazine. Its robust design ensures reliable operation in harsh conditions. When paired with advanced fire control systems, it can deliver devastating firepower at considerable ranges. Standard Union-made weaponry for heavy Strikers, revered for its balanced performance across key metrics of firepower, range, and accuracy.",
    weapon_2_desc: "Fires high-explosive shells that damage enemies and the surrounding area.",
    weapon_2_content: "The Sledge High Explosive Cannon fires modified high-explosive shells from the same robust weapon system as the Hammer AP Cannon. These specialized projectiles sacrifice penetration power for larger explosive radius, making them ideal for anti-personnel and area denial operations. The shell's custom warhead ensures maximum devastation upon impact, overwhelming light armor and infantry positions alike. First responders frequently report total destruction in the engagement zone following HURRICANE's deployment.",
    weapon_3_desc: "Projects a defensive barrier forward, creating an energy shield that absorbs damage.",
    weapon_3_content: "The Aegis Shield Projector generates a forward-facing energy barrier capable of absorbing significant damage before requiring recharge. This advanced defensive matrix employs quantum field stabilization technology to convert incoming kinetic and energy attacks into harmless residual heat. Alliance scientists made remarkable progress in developing the system, reducing power consumption while maximizing protection. The technology has undergone substantial testing under extreme combat conditions, proving its reliability in saving countless allied lives.",
    weapon_4_desc: "Creates a shimmering energy field around the mecha, absorbing incoming fire.",
    weapon_4_content: "The Barrier Field Generator produces an omni-directional energy field that envelops the entire Striker unit, absorbing incoming attacks regardless of direction. Unlike the focused Aegis Shield, this system provides comprehensive protection at the cost of increased energy consumption and reduced absorption capacity. The field's characteristic shimmering effect results from high-frequency energy oscillations that disperse incoming damage across the entire barrier surface.",
    weapon_5_desc: "Fires a powerful nuclear-tipped rocket, causing massive damage in a large area.",
    weapon_5_content: "The Thanatos Nuclear Missile System represents the pinnacle of Union battlefield nuclear technology, delivering a tactical nuclear warhead with devastating precision. The warhead's two-stage design maximizes destruction while minimizing fallout, making it suitable for battlefield deployment. Advanced targeting systems ensure the missile reaches its destination with remarkable accuracy. Delivery range exceeds that of conventional artillery, allowing HURRICANE to eliminate threats from positions of relative safety."
  },
  {
    id: "11",
    catid: "1039",
    title: "WELKIN",
    key: "WELKIN",
    image: "/images/mechas/welkin.jpg",
    thumb: "/images/mechas/welkin.jpg",
    description: "Welkin is a high-altitude specialist with advanced aerial maneuverability and ranged attacks.",
    pilot: "Rui",
    mecha_basic: "Model Number: VLT-SK15\nManufacturer: Vulturian Aerospace Industries\nHeight: 15.6 meters\nTare Weight: 18.4 tons\nGross Weight: 23.8 tons",
    mecha_history: "WELKIN originated as an experimental aerial dominance platform developed by the Vulturia Alliance's elite Skyrider Division. Its revolutionary atmospheric flight system outperformed conventional aircraft and established a new paradigm for airborne combat operations. Unlike conventional Strikers with limited aerial capabilities, WELKIN was designed from the outset for sustained atmospheric flight, spending more time airborne than grounded.\n\nDuring the Boundary Conflict, the prototype demonstrated unprecedented air superiority, neutralizing multiple targets while evading all counter-measures deployed against it. This success led to accelerated production and deployment of WELKIN units across strategic defense zones. The distinctive silhouette of a WELKIN unit diving from high altitude has become an iconic image in modern warfare, often representing the technological prowess of the Vulturia Alliance.",
    weapon_1_desc: "Fires rapid plasma shots from twin cannons mounted on the mecha's wings.",
    weapon_1_content: "The Azure Wings Energy Autocannons represent cutting-edge kinetic energy weapon technology. These twin-mounted wing cannons fire superheated plasma particles that maintain coherence over extended ranges while achieving extraordinary muzzle velocities. The weapon system's cooling matrix allows for sustained fire without performance degradation, making it ideal for prolonged aerial engagements. The distinctive blue energy signature of these weapons in action gave rise to the system's poetic designation.",
    weapon_2_desc: "Launches guided missiles that track targets with advanced predictive targeting.",
    weapon_2_content: "The Cirrus Seeker Missiles incorporate highly sophisticated tracking algorithms that allow them to predict target movement patterns rather than simply following current trajectories. This predictive capability makes them exceptionally difficult to evade, even for targets employing standard anti-missile countermeasures. The missiles feature variable yield warheads that can be configured for different mission parameters, from precision strikes against hardened targets to wider area effect for engaging multiple clustered enemies.",
    weapon_3_desc: "Creates a propulsion field that dramatically increases the mecha's aerial maneuverability and speed for a limited time.",
    weapon_3_content: "The Stratos Booster System generates a specialized propulsion field that envelops the entire mecha, reducing effective atmospheric drag to near-zero levels. This technology, derived from experimental research into non-Newtonian flight dynamics, allows WELKIN to achieve velocities and perform maneuvers that would be impossible for conventional aerial platforms. The system's primary limitation is its substantial energy consumption, restricting activation to critical combat scenarios and requiring careful management of the mecha's power reserves.",
    weapon_4_desc: "Deploys autonomous combat drones that assist in combat by targeting and harassing enemies.",
    weapon_4_content: "The Nimbus Support Drones represent a significant advancement in autonomous combat systems. Each drone is equipped with a miniaturized version of WELKIN's targeting computer and a scaled-down energy weapon. Operating as a networked swarm, these drones can independently engage secondary targets or concentrate fire on a primary threat, dramatically extending WELKIN's effective combat radius. Their small size and high maneuverability make them difficult targets, allowing them to persistently harass enemy units and disrupt formation integrity.",
    weapon_5_desc: "Charges and releases a massive energy beam that sweeps across the battlefield, dealing heavy damage to all targets in its path.",
    weapon_5_content: "The Empyrean Wave Cannon represents the pinnacle of Vulturian energy weapon technology. When activated, the system draws power from throughout WELKIN's frame, temporarily redirecting energy from non-critical systems to charge the primary emitter. The resulting concentrated energy discharge can be swept across the battlefield, affecting multiple targets simultaneously. The weapon's distinctive atmospheric ionization effect creates a visible rippling wave that distorts light, giving observers the impression of the sky itself being torn open—a phenomenon that inspired the weapon's mythological designation."
  },
  {
    id: "10",
    catid: "1039",
    title: "LUMINAE",
    key: "LUMINAE",
    image: "/images/mechas/luminae.jpg",
    thumb: "/images/mechas/thumbs/luminae-thumb.jpg",
    description: "Luminae is a light-based mecha that uses photon technology to create blinding attacks and light barriers.",
    pilot: "Shally Lee",
    mecha_basic: "Model Number: NGL-XR30\nManufacturer: NG Luna Company\nHeight: 15.4 meters\nTare Weight: 14.1 tons\nGross Weight: 16.4 tons",
    mecha_history: "LUMINAE is extensively deployed across all branches of the Commonwealth of Lunar-mare's Independent Guard as a support-type Striker, known for its dual role in maintaining and defending both the Earth Orbit Elevator: Startower and the Lunar Orbit Elevator: Moonlink.\n\nInherited from SERENITH, LUMINAE features the BREAK and MindBridge Systems along with high-performance Corixium sensors. This enables LUMINAE to instantly assess damage states of targets without their self-diagnostic data. On the battlefield, LUMINAE not only swiftly repairs allies but also probes and dismantles enemy units from their weakest points, rendering them into scrap. Typically deployed as a frontline command unit, LUMINAE leverages its extensive repair and support capabilities to enhance ally effectiveness.",
    weapon_1_desc: "Repair Mode: Releases tracking drones to repair allies. | Attack Mode: Deploys tracking drones on the locked target, dealing damage over time.",
    weapon_1_content: "The advanced Fogbow repair drone, in conjunction with its carrier, forms a high-performance computing network. This network allows for simultaneous repairs of multiple targets or collaborative repairs on a single unit. Supported by the Field-Detection System, Fogbow can not only repair allies but also overload its repair tools to continuously damage the structural integrity of enemy units. Adapting flexibly to the dynamics of the battlefield, Fogbow can switch between supporting teammates and neutralizing enemies as the situation demands.",
    weapon_2_desc: "Repair Mode: Continuously repairs friendly units within the effective range. | Attack Mode: Deals damage over time to the enemy targets within range.",
    weapon_2_content: "Developed by PyroGenesis, the Airglow Haze Diffuser is a device that enables the efficient dispersal of ultra-fine Levitation Units, expediting the transportation and processing of repair materials. This advanced equipment offers maintenance capabilities on par with large drones and includes the capacity to overload itself to damage enemy units. The only potential drawback is its higher cost; however, this poses no concern for PyroGenesis.",
    weapon_3_desc: "Increases allies' Mobility and Energy Regen within range.",
    weapon_3_content: "The Easterlies Supportive Jetwing is an exclusive expansion support armament developed specifically for LUMINAE. Upon activation, it unfolds wing-like thrusters that enhance the unit's maneuverability. Simultaneously, it disperses propulsion gas carrying ultra-fine computing units, optimizing the efficiency of allied units' cascading engines and imposing strong interference on enemy systems.",
    weapon_4_desc: "Transforms the Striker into Corruption Form and switches all repair modules to attack mode, enabling continuous damage to be inflicted on enemy targets.",
    weapon_4_content: "The Foehn Transformation System changes LUMINAE's fire control algorithms, allowing it to manipulate all onboard weaponry for attack and disruption. This system renders LUMINAE exceptionally versatile, adept at both maintaining orbital elevators and neutralizing threats. Since the elevators' inception, LUMINAE has effectively dismantled vast amounts of space debris and neutralized numerous threats using the Foehn System.",
    driver_name: "Shally Lee",
    driver_basic: "Shally Lee\nSex: Female\nBirthplace: Ji'an, Vulturia Alliance (Ji'anian and Avalonian mix) \nStriker: LUMINAE",
    driver_history: "Shally remains active even during downtime, lending her expertise to weapon repairs, assisting fellow pilots with equipment adjustments, and collaborating with her sister to create electronic pets. As a highly skilled mechanic and former member of Misra Matrix's Rescue Team, she brings invaluable knowledge to Moonbow. \n\nDespite relying on prosthetic limbs following a tragic accident during the war, Shally resolutely rejects pity and embraces an independent life. \n\nInitially declared missing, she was eventually located and returned to Misra Matrix. Although her memory sustained damage during her time at the Albert Research Institute, she finds solace in rediscovering her true self and being reunited with her genuine family.",
    driver_introduction: "Outside the Striker's cockpit, Shally embodies an optimistic, cheerful girl next door with a playful nature. But as she takes command of LUMINAE, she undergoes a remarkable transformation, becoming a determined pilot with unwavering composure. Despite her disability from an accident, she maintains a positive attitude, resolutely pursuing her journey."
  },
  {
    id: "9",
    catid: "1039",
    title: "NARUKAMI",
    key: "NARUKAMI",
    image: "/images/mechas/narukami.jpg",
    thumb: "/images/mechas/narukami.jpg",
    description: "Narukami is an electricity-based mecha capable of generating devastating lightning attacks.",
    pilot: "Kanon",
    mecha_basic: "Model Number: KMA-D201\nManufacturer: Kamiya Heavy Industries\nHeight: 14.8 meters\nTare Weight: 16.9 tons\nGross Weight: 20.4 tons",
    mecha_history: "During the Catastrophe, Ushu survived the sinking of land and Corite disasters with the help of the Isle-Vessel Kanzawa. However, they lost contact with the outside world for many years, missing the opportunity to develop bipedal machines after the disaster. In the competition to create third-generation Strikers following the Misra War, Ushu lacked the necessary technology, resulting in several failed projects. Despite this, with assistance from Lunar-mare, NARUKAMI was finally completed after overcoming numerous challenges.\nNARUKAMI was originally designed with a conservative approach, armed only with the long-range beam cannon Jinrai. While effective for Isle-Vessel Kanzawa's defense, its functionality was far too limited. After Kamiya Heavy Industries partnered with PyroGenesis, they refined the design using shared combat data and technical expertise. The upgrades added a close-range mode for the Jinrai beam cannon and various interference weapons, giving NARUKAMI the versatility to handle complex battlefields with ease.",
    weapon_1_desc: "Fires supercharged plasma beams, inflicting direct Energy Damage. This mode immobilizes the shooter but charges automatically, increasing damage with charge levels.",
    weapon_1_content: "The Type-08 Long-range Beam Cannon: Jinrai, was independently developed by Kamiya Heavy Industries. This tactical-level particle cannon can neutralize invaders across the sea surrounding the Isle-Vessel Kanzawa. Even in the harshest conditions, the cannon's integrated sensor can lock onto targets. The high-heat heavy ion beam, collimated by the condenser, rips through the air like thunder, earning the Striker the well-deserved name, NARUKAMI.",
    weapon_2_desc: "Fires plasma beams, inflicting direct Energy damage.",
    weapon_2_content: "After departing Isle-Vessel Kanzawa, NARUKAMI faced missions far more complex than routine defense duties. To handle unexpected close-to-mid-range engagements, PyroGenesis upgraded Jinrai with an autocannon mode. By retracting the extended barrel of the beam cannon, this mode can be activated, making it perfect for quickly clearing large numbers of lightly armored targets. This modification caught the attention of Kamiya Heavy Industries, who adopted it to upgrade similar weapons widely deployed across Isle-Vessel Kanzawa.",
    weapon_3_desc: "Deploys a stationary drone to generate a mass projection decoy that coordinates with the Striker, inflicting minor damage on enemies and putting the Striker into stealth when within range. Stealth disabled during attack.",
    weapon_3_content: "The drones are attached to the Striker, resembling the faulds on a suit of armor. These drones carry the advanced Mass Projection technology developed by PyroGenesis. Among them is the Type-02 Decoy Drone: Suigetsu, which utilizes an interference trap to incorporate the Micro-Pixel Unit - Stardust as a holographic display array. This configuration enables the projection of illusions of the Striker while also providing Optical Camouflage. The device's ability to project different holographic image formats has made it a popular feature among the crew.",
    weapon_4_desc: "Fires the Grappler, then swiftly pulls the Striker towards the target location while entering stealth mode. Firing the Grappler at a locked target pulls the Striker to leap over and stagger it.",
    weapon_4_content: "The grappling claw, known as the Type-16 Mobile Grappler: Shippu, allows NARUKAMI to swiftly alter its position, granting exceptional maneuverability while traversing between buildings. Recently, PyroGenesis enhanced the capabilities of the grappling hook by incorporating Stardust, which activates Optical Camouflage for the Striker when the grappling hook is deployed. This functionality serves as an emergency measure.",
    weapon_5_desc: "Deploys stationary drones to put all allies within range into stealth mode. Stealth disabled during attack.",
    weapon_5_content: "PyroGenesis has developed an advanced experimental technology called the Type-07 Full-Spectrum Optical Camouflage: Kyouka. When activated, Kyouka generates a large-scale Defensive Field and activates Stardust within its range. When applied to an object's surface, Stardust forms a dynamic imaging membrane, providing Optical Camouflage effects reminiscent of a chameleon.",
    driver_name: "Kanon",
    driver_basic: "Name: Kanon Kamiya\nSex: Female\nBirthplace: Kamizawa, Ushu\nStriker: NARUKAMI",
    driver_history: "\"The stories of the past hold little importance for those who have forsaken their family name.\"\nThe pilot's records are currently not publicly accessible as per their request.",
    driver_introduction: "\"The stories of the past hold little importance for those who have forsaken their family name.\"\nThe pilot's records are currently not publicly accessible as per their request."
  },
  {
    id: "8",
    catid: "1039",
    title: "TRICERA",
    key: "TRICERA",
    image: "/images/mechas/tricera.jpg",
    thumb: "/images/mechas/tricera.jpg",
    description: "Tricera is modeled after the prehistoric triceratops, featuring powerful charging attacks and strong defensive capabilities.",
    pilot: "Charles Bell",
    mecha_basic: "Model Number: SLM-TD94\nManufacturer: Salem Electric Company\nHeight: 15.5 meters\nTare Weight: 38.2 tons\nGross Weight: 48.7 tons",
    mecha_history: "TRICERA is part of the Thalassic Federation's iconic \"Dino\" series, which represents the Federation's third-generation production-type Strikers. These machines have been deployed extensively across Federation-controlled zones and exported to allied nations. The series is characterized by exceptional durability and ease of operation, making them ideal for mass production.\nTRICERA specializes in close combat and features a unique modular transformation system that enables rapid mode changes from bipedal to quadrupedal configurations. This system, combined with its distinctive three-pronged horn array, inspired its name. The mecha excels at defensive operations and breaking through enemy formations, serving as a vanguard unit that can absorb significant damage while creating openings for allied forces.",
    weapon_1_desc: "Transforms the Striker into a quadrupedal beast, greatly enhancing mobility and ramming power but sacrificing ranged attack capabilities.",
    weapon_1_content: "The Assault Form Module represents a radical departure from conventional Striker design philosophies. By transitioning from a bipedal to quadrupedal configuration, TRICERA gains extraordinary mobility and ramming power at the cost of ranged attack capabilities. The transformation locks specific joints and rearranges the frame's weight distribution, optimizing it for charging maneuvers. The system includes impact-absorbing mechanisms that convert kinetic energy from collisions into usable power for the Striker's systems, effectively turning the entire mecha into a weapon.",
    weapon_2_desc: "Rapid-fires explosive shells that deal blast damage in a wide area.",
    weapon_2_content: "The Thunder Shell Cannon is a high-caliber, multi-barrel weapon system that delivers devastating area-of-effect firepower. Loaded with specialized explosive shells containing a proprietary mixture developed by Salem Electric's advanced munitions division, this weapon excels at suppressing enemy formations and securing territorial control. The shell's delayed detonation mechanism ensures optimal fragmentation patterns, maximizing damage to lightly armored targets across a wide area.",
    weapon_3_desc: "Deploys an energy shield that absorbs incoming damage while allowing the mecha to counter-attack.",
    weapon_3_content: "The Tri-Barrier Defense System projects a three-layered energy field that can absorb substantial incoming damage. Unlike conventional shields that merely block attacks, this advanced system captures and temporarily stores energy from enemy weapons, redirecting it to power TRICERA's counter-attack mechanisms. The shield's distinctive triangular configuration optimizes coverage while minimizing energy consumption, representing a significant advancement in defensive field technology.",
    weapon_4_desc: "Fires electrified net projectiles that temporarily immobilize enemy units and disrupt their electronic systems.",
    weapon_4_content: "The Net Launcher is an unconventional weapon designed to temporarily neutralize enemy mobility rather than cause direct damage. Each net contains microfilament conductors carrying a powerful electric charge capable of interfering with an enemy Striker's neural interface and movement systems. Developed initially for capturing and retrieving damaged Strikers from battlefield environments, these nets proved equally effective as tactical weapons against hostile units, prompting their integration into TRICERA's standard loadout.",
    weapon_5_desc: "Charges forward with tremendous force, dealing massive physical damage to any targets in its path.",
    weapon_5_content: "The Juggernaut Charge System is the crown jewel of TRICERA's arsenal, representing the pinnacle of Salem Electric's impact weaponry research. When activated, specialized capacitors throughout the mecha's frame discharge simultaneously, providing an explosive burst of acceleration. Combined with the three reinforced horns that give TRICERA its name, this charge can penetrate even heavily armored targets. Thermal dissipation systems integrated into the frame convert excess heat generated during impact into additional power, allowing for sustained offensive operations."
  },
  {
    id: "7",
    catid: "1039",
    title: "HARLEQUIN",
    key: "HARLEQUIN",
    image: "/images/mechas/harlequin.jpg",
    thumb: "/images/mechas/harlequin.jpg",
    description: "Harlequin is a versatile mecha that specializes in deception and fast-paced hit-and-run attacks.",
    mecha_basic: "Model Number: DCL-H7\nManufacturer: Draco-Liaison Defense Industries\nHeight: 14.8 meters\nTare Weight: 31.2 tons\nGross Weight: 39.4 tons",
    mecha_history: "HARLEQUIN was initially designed as an experimental mecha model focusing on speed and agility. Its unique systems incorporate advanced holographic technology and stealth capabilities that make it exceptional at infiltration and reconnaissance missions. When piloted by Protagonist, the mecha's capabilities were pushed to new limits, allowing for complex tactical maneuvers that confounded enemy forces. The mecha's distinct appearance and fighting style have made it a symbol of rebellion against conventional warfare tactics.",
    weapon_1_desc: "Creates holographic duplicates that confuse enemies and draw their fire.",
    weapon_1_content: "The Mirage System is HARLEQUIN's signature technology, capable of projecting up to six fully animated holographic duplicates that mimic the mecha's movements with near-perfect synchronization. These projections are enhanced with minor mass-emitters that allow them to trigger basic proximity sensors and appear solid on standard scanning equipment. Though they cannot cause damage, they effectively redirect enemy fire and create openings for strategic strikes. The system requires significant power and can only operate at full capacity for three minutes before requiring cooldown.",
    weapon_2_desc: "A pair of energy blades that can be combined into a dual-edged staff.",
    weapon_2_content: "The Twilight Blades are twin high-frequency energy weapons that serve as HARLEQUIN's primary close-combat armament. Each blade generates a focused plasma edge capable of cutting through reinforced armor plating. When combined into staff configuration, they create a devastating spinning attack pattern that few defense systems can withstand. The weapon's energy signature can be modulated to match environmental conditions, making them equally effective in space, atmospheric, or underwater combat scenarios.",
    weapon_3_desc: "Shoulder-mounted missile launchers that fire tracking projectiles.",
    weapon_3_content: "The Trickster Missile System consists of shoulder-mounted launchers containing sixteen miniaturized smart missiles. Unlike conventional ordinance, these missiles incorporate randomized flight patterns and can execute mid-air direction changes that make them extremely difficult to intercept. Each missile contains a small but potent explosive charge designed to target critical system junctions rather than cause widespread damage. The unpredictable nature of their attack vectors has earned them the nickname 'Joker's Deck' among veteran pilots.",
    weapon_4_desc: "Releases a cloud of reflective particles that obscure vision and disrupt targeting systems.",
    weapon_4_content: "The Masquerade Smoke Screen deploys a dense cloud of nanofabricated particles with reflective and signal-jamming properties. These particles not only obscure visual confirmation but actively interfere with radar, lidar, and infrared targeting systems. The screen can be programmed to form specific patterns or spread in predetermined directions based on environmental wind patterns. Advanced versions of this system incorporate hallucinogenic compounds that can affect enemy pilots who rely on direct visual contact through open cockpit designs.",
    weapon_5_desc: "A rapid-fire energy weapon that delivers quick, precise shots.",
    weapon_5_content: "The Jester's Pistol is a wrist-mounted energy weapon that sacrifices raw power for exceptional firing rate and precision. Capable of delivering up to seventy shots per second with pinpoint accuracy, it excels at targeting exposed joints, sensors, and weapon systems on enemy mechas. Though each individual shot causes minimal damage, their cumulative effect can systematically disable an opponent's capabilities. The weapon draws power directly from HARLEQUIN's main reactor, allowing for near-continuous operation without separate ammunition concerns."
  },
  {
    id: "6",
    catid: "1039",
    title: "PANTHER",
    key: "PANTHER",
    image: "/images/mechas/panther.jpg",
    thumb: "/images/mechas/panther.jpg",
    description: "Panther is a stealth-focused mecha with high mobility and deadly close-range attacks.",
    pilot: "Werner Ernst",
    mecha_basic: "Model Number: CUF-P75\nManufacturer: Cygnia Union Military Factory\nHeight: 14.3 meters\nTare Weight: 17.8 tons\nGross Weight: 21.5 tons",
    mecha_history: "PANTHER was developed by the Cygnia Union's Special Operations Division as an answer to the increasing dominance of heavy assault mechas on the modern battlefield. Rather than competing in terms of firepower or armor, Union engineers prioritized stealth, agility, and precision strike capabilities. The result was a revolutionary infiltration-type Striker that could penetrate enemy lines undetected and neutralize high-value targets before disappearing back into the shadows.\n\nPANTHER's development was shrouded in secrecy, with numerous field tests conducted against the Union's own defense systems to verify its stealth capabilities. Its first combat deployment during Operation Silent Thunder resulted in the elimination of seven enemy command posts with zero PANTHER casualties, cementing its reputation as the preeminent special operations mecha. The psychological impact of PANTHER units has proven almost as valuable as their tactical contributions, with enemy forces frequently reporting paranoia and deteriorating morale when facing the possibility of PANTHER deployment.",
    weapon_1_desc: "Twin high-frequency vibration blades that can cut through even reinforced armor plating.",
    weapon_1_content: "The Shadow Talon Blades represent the pinnacle of Union close-quarters combat technology. Constructed from a proprietary composite alloy developed exclusively for the PANTHER program, these twin blades oscillate at ultrahigh frequencies, creating a molecular disruption effect at the point of contact. This allows them to slice through even reinforced armor plating with minimal resistance. The blades feature programmable vibration patterns that can be adjusted for different target materials, optimizing cutting efficiency regardless of the enemy's defensive specifications.",
    weapon_2_desc: "Fires silent armor-piercing projectiles that leave minimal trace of their origin.",
    weapon_2_content: "The Whisper Reaper Rifle is a marvel of stealth weapons engineering, utilizing electromagnetic acceleration rather than conventional propellants to launch specialized penetrator rounds. The weapon's unique design suppresses the typical acoustic and visual signatures associated with firearms, allowing PANTHER to maintain stealth even while engaging targets at medium range. The specialized ammunition incorporates self-destructing components that leave minimal forensic evidence, making it nearly impossible to trace attacks back to their origin point.",
    weapon_3_desc: "Generates an active camouflage field that renders the mecha nearly invisible to both visual and sensor detection.",
    weapon_3_content: "The Phantom Shroud System represents a quantum leap in stealth technology. Unlike passive stealth systems that merely reduce detection signatures, this active camouflage field bends light around the mecha while simultaneously generating counter-signals that confuse enemy targeting systems. The technology draws from both military research and natural camouflage mechanisms observed in certain deep-sea creatures, creating an adaptive concealment effect that responds dynamically to the surrounding environment. When fully activated, PANTHER becomes nearly impossible to detect through conventional means, registering as little more than environmental noise on enemy sensors.",
    weapon_4_desc: "Deploys sensor-jamming mines that disrupt enemy electronics and create false signatures to confuse targeting systems.",
    weapon_4_content: "The Mirage Disruptor Mines are sophisticated electronic warfare devices that serve both defensive and tactical purposes. When deployed, these compact mines emit specialized jamming frequencies calibrated to interfere with enemy sensor suites and communication systems. Additionally, they project false heat and motion signatures that mimic Striker movements, creating convincing decoys that draw enemy fire away from PANTHER's actual position. The mines can be deployed individually or in preset patterns to establish denial zones that enemy forces cannot safely traverse without compromising their sensor reliability.",
    weapon_5_desc: "Executes a rapid-strike attack sequence that deals massive damage to a single target through multiple precision hits.",
    weapon_5_content: "The Predator Strike Protocol is less a weapon than a comprehensive attack algorithm that temporarily overrides PANTHER's standard operation parameters. When activated, the mecha's neural interface enters an accelerated processing state, allowing the pilot to perceive combat at reduced speeds while actually moving faster than normal human reaction times would permit. This creates a synchronized hunter-prey relationship between pilot and machine that culminates in a devastating series of precision strikes against critical system junctions on the target. The protocol concludes with an automatic withdrawal sequence to ensure PANTHER can disengage before enemy forces can mount an effective counter-attack."
  },
  {
    id: "5",
    catid: "1039",
    title: "FALCON",
    key: "FALCON",
    image: "/images/mechas/falcon.jpg",
    thumb: "/images/mechas/falcon.jpg",
    description: "Falcon is a high-speed mecha designed for rapid strikes and hit-and-run tactics.",
    pilot: "Leonie Fevre",
    mecha_basic: "Model Number: CEL-F127\nManufacturer: Celestial Dynamics Ltd.\nHeight: 14.0 meters\nTare Weight: 15.4 tons\nGross Weight: 18.9 tons",
    mecha_history: "FALCON was born from the Celestial Dynamics 'Swift Response' initiative, commissioned by the Cygnia Union's Rapid Intervention Corps. The original design brief called for a lightweight Striker capable of reaching engagement zones faster than any existing model without sacrificing combat effectiveness. The development team, led by renowned engineer Mathis Fevre, pushed the boundaries of propulsion technology and aerodynamic design to create what would become the fastest ground-based mecha in active service.\n\nFALCON units first demonstrated their exceptional capabilities during the Border Skirmish of 2081, when a small detachment arrived at a besieged outpost within minutes of the distress call, successfully neutralizing enemy forces before conventional reinforcements could even be mobilized. This dramatic debut established FALCON as the premiere rapid-response platform, particularly valuable in theaters where air support might be compromised or unavailable. The distinctive sonic boom that precedes a FALCON unit's arrival has become known informally as the 'Angel's Thunder' among allied ground forces.",
    weapon_1_desc: "High-velocity railgun that fires specialized penetrator rounds with devastating accuracy.",
    weapon_1_content: "The Peregrine Railgun represents a revolutionary advancement in electromagnetic weapon technology. By utilizing a system of superconducting rails and capacitive power storage, this weapon achieves projectile velocities that conventional firearms cannot match. The specialized tungsten-carbide penetrator rounds maintain their trajectory even in adverse weather conditions and can pierce standard armor plating with minimal velocity loss. The weapon's precision targeting system compensates for FALCON's high-speed movement, allowing for accurate fire even during rapid maneuvers that would render conventional targeting systems ineffective.",
    weapon_2_desc: "Deploys a system of micro-thrusters that allow for mid-air direction changes and extended jumps.",
    weapon_2_content: "The Slipstream Mobility System integrates a network of micro-thrusters throughout FALCON's frame, allowing for unprecedented aerial maneuverability and control. Unlike conventional jump jets that merely provide vertical thrust, this system enables complex three-dimensional movement, including mid-air direction changes and controlled descent patterns. The thrusters work in concert with FALCON's gyroscopic stabilization system to maintain precise orientation regardless of velocity or atmospheric conditions. This technology has proven particularly effective for navigating dense urban environments where traditional movement patterns would be restricted.",
    weapon_3_desc: "Launches a swarm of autonomous micro-missiles that track and eliminate multiple targets simultaneously.",
    weapon_3_content: "The Kestrel Swarm System represents a paradigm shift in multi-target engagement capability. When deployed, this weapon releases a cloud of miniaturized autonomous missiles, each equipped with independent targeting systems and proximity detonation mechanisms. The swarm operates as a coordinated network, distributing targets among individual units to maximize coverage while minimizing redundant attacks. The missiles are programmed to prioritize vulnerable system components and can adjust their attack patterns based on real-time damage assessment data. The psychological impact of seeing dozens of projectiles simultaneously homing in on multiple targets has proven almost as effective as the physical damage they inflict.",
    weapon_4_desc: "Creates a temporary speed boost that allows the mecha to move at almost imperceptible speeds for short bursts.",
    weapon_4_content: "The Afterburner Overdrive temporarily bypasses the safety limiters on FALCON's propulsion system, channeling emergency power reserves directly into the main engines. This results in a brief but dramatic acceleration that pushes the mecha to velocities approaching the threshold of human perceptual tracking. The system includes advanced inertial dampening to protect the pilot from the extreme g-forces generated during activation, though extended use can still result in significant physiological strain. The technology was initially deemed too dangerous for field deployment, but combat necessities eventually overrode these concerns, with pilots receiving specialized training to manage the system's intense demands.",
    weapon_5_desc: "Performs a series of high-speed attacks that strike multiple points on a target almost simultaneously.",
    weapon_5_content: "The Talon Strike Protocol represents the ultimate expression of FALCON's speed-based combat philosophy. When activated, the system plots an optimal attack sequence targeting critical vulnerability points on the enemy unit. The mecha then executes this sequence at maximum velocity, striking multiple locations within fractions of a second—so quickly that the impacts appear almost simultaneous to observers. The precision and timing required for this maneuver demand perfect synchronization between pilot and machine, achievable only through extensive neural interface training. Successful execution creates a cascading failure effect in enemy systems, often resulting in catastrophic shutdown even when individual strikes might not be lethal in isolation."
  }
];

export default function Strikers() {
  const [selectedMecha, setSelectedMecha] = useState<Mecha | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Add responsive detection
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // 处理机甲选择
  const handleMechaSelect = (mecha: Mecha) => {
    // 处理数据字段
    const mecha_basic_processed = mecha.mecha_basic ? mecha.mecha_basic.split('\n') : [];
    const driver_basic_processed = mecha.driver_basic ? mecha.driver_basic.split('\n') : [];
    
    // 创建增强的机甲对象
    const enhancedMecha = {
      ...mecha,
      mecha_basic_processed: mecha_basic_processed,
      driver_basic_processed: driver_basic_processed,
      // 确保保留基本显示字段
      image: mecha.image || '',
    };
    
    setSelectedMecha(enhancedMecha);
    setModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setModalOpen(false);
    // Give time for close animation
    setTimeout(() => {
      setSelectedMecha(null);
    }, 300);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [modalOpen]);

  return (
    <PageLayout title="Mecha Break - Strikers Guide" description="Explore the powerful mechas of Mecha Break, from Panther to Pinaka. Learn about their abilities, features, and the pilots who control these formidable machines.">
      <section className="container-section bg-slate-900 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title">Strikers Guide</h1>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              The mechas of Mecha Break are advanced combat machines, each with unique capabilities, strengths, and specialized roles on the battlefield.
            </p>
            <p>
              Explore our comprehensive guide to learn about each mecha's abilities, features, and the skilled pilots who control these formidable machines.
            </p>
          </div>
          
          {/* Mecha Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mechaData.map((mecha) => (
              <div 
                key={mecha.id}
                className="striker-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                onClick={() => handleMechaSelect(mecha)}
              >
                <div className="relative overflow-hidden rounded-t-lg bg-slate-800" style={{ height: '400px', width: '180px', margin: '0 auto' }}>
                  <Image
                    src={mecha.image || ''}
                    alt={mecha.title}
                    width={180}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/images/mecha_bg.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                </div>
                <div className="p-4 bg-slate-800 rounded-b-lg" style={{ width: '180px', margin: '0 auto' }}>
                  <h3 className="striker-name">{mecha.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{mecha.key}</p>
                  
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                      {mecha.pilot !== "Unknown" && mecha.pilot ? mecha.pilot : mecha.driver_name || "No Pilot Data"}
                    </span>
                    <button 
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMechaSelect(mecha);
                      }}
                    >
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mecha Details Modal */}
          {modalOpen && selectedMecha && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto animate-fade-in"
              onClick={closeModal}
            >
              <div 
                className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-slide-up"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button 
                    onClick={closeModal}
                    className="absolute right-4 top-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full z-10 transition-colors"
                    aria-label="Close details"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={selectedMecha.image || ''}
                      alt={selectedMecha.title}
                      fill
                      priority
                      quality={90}
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedMecha.title}</h2>
                      <p className="text-gray-300 text-sm md:text-base">{selectedMecha.key}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Display all available data from API response */}
                    <div className="space-y-8">
                      {/* Description */}
                      {selectedMecha.description && (
                        <div className="mb-6">
                          <h3 className="text-xl font-bold mb-3">Description</h3>
                          <p className="text-lg">{selectedMecha.description}</p>
                        </div>
                      )}
                      
                      {/* Mecha Basic Information */}
                      {selectedMecha.mecha_basic && (
                        <div className="bg-slate-700 p-6 rounded-lg transition-transform hover:scale-[1.02]">
                          <h3 className="text-xl font-bold mb-4">Mecha Specifications</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedMecha.mecha_basic_processed?.map((spec, index) => {
                              const [label, value] = spec.split(': ');
                              return (
                                <div key={index} className="flex flex-col">
                                  <span className="font-semibold text-gray-300">{label}</span>
                                  <span className="text-lg">{value}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      
                      {/* Mecha History */}
                      {selectedMecha.mecha_history && (
                        <div className="bg-slate-700 p-6 rounded-lg transition-transform hover:scale-[1.02]">
                          <h3 className="text-xl font-bold mb-4">Mecha History</h3>
                          <p className="text-lg whitespace-pre-line">{selectedMecha.mecha_history}</p>
                        </div>
                      )}
                    
                      {/* Weapons and Abilities */}
                      {(selectedMecha.weapon_1_desc || selectedMecha.weapon_2_desc || selectedMecha.weapon_3_desc || 
                        selectedMecha.weapon_4_desc || selectedMecha.weapon_5_desc) && (
                        <div className="bg-slate-700 p-6 rounded-lg transition-transform hover:scale-[1.02]">
                          <h3 className="text-xl font-bold mb-4">Weapons & Abilities</h3>
                          <div className="space-y-4">
                            {selectedMecha.weapon_1_desc && (
                              <div>
                                <h4 className="text-lg font-semibold text-blue-400">Primary Weapon</h4>
                                <p className="mb-2">{selectedMecha.weapon_1_desc}</p>
                                {selectedMecha.weapon_1_content && (
                                  <p className="text-sm text-gray-300 italic">{selectedMecha.weapon_1_content}</p>
                                )}
                              </div>
                            )}
                            
                            {selectedMecha.weapon_2_desc && (
                              <div>
                                <h4 className="text-lg font-semibold text-blue-400">Secondary Weapon</h4>
                                <p className="mb-2">{selectedMecha.weapon_2_desc}</p>
                                {selectedMecha.weapon_2_content && (
                                  <p className="text-sm text-gray-300 italic">{selectedMecha.weapon_2_content}</p>
                                )}
                              </div>
                            )}
                            
                            {selectedMecha.weapon_3_desc && (
                              <div>
                                <h4 className="text-lg font-semibold text-blue-400">Tactical System</h4>
                                <p className="mb-2">{selectedMecha.weapon_3_desc}</p>
                                {selectedMecha.weapon_3_content && (
                                  <p className="text-sm text-gray-300 italic">{selectedMecha.weapon_3_content}</p>
                                )}
                              </div>
                            )}
                            
                            {selectedMecha.weapon_4_desc && (
                              <div>
                                <h4 className="text-lg font-semibold text-blue-400">Special Ability</h4>
                                <p className="mb-2">{selectedMecha.weapon_4_desc}</p>
                                {selectedMecha.weapon_4_content && (
                                  <p className="text-sm text-gray-300 italic">{selectedMecha.weapon_4_content}</p>
                                )}
                              </div>
                            )}
                            
                            {selectedMecha.weapon_5_desc && (
                              <div>
                                <h4 className="text-lg font-semibold text-blue-400">Ultimate Weapon</h4>
                                <p className="mb-2">{selectedMecha.weapon_5_desc}</p>
                                {selectedMecha.weapon_5_content && (
                                  <p className="text-sm text-gray-300 italic">{selectedMecha.weapon_5_content}</p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Pilot Information */}
                      {(selectedMecha.driver_name || selectedMecha.driver_basic || selectedMecha.driver_history) && (
                        <div className="bg-slate-700 p-6 rounded-lg transition-transform hover:scale-[1.02]">
                          <h3 className="text-xl font-bold mb-4">Pilot Information</h3>
                          
                          {/* Pilot Basic Info */}
                          {selectedMecha.driver_basic && (
                            <div className="mb-4">
                              <h4 className="text-lg font-semibold text-yellow-400 mb-2">Profile</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {selectedMecha.driver_basic_processed?.map((info, index) => {
                                  const [label, value] = info.split(': ');
                                  return (
                                    <div key={index}>
                                      <span className="font-semibold">{label}:</span> {value}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                          
                          {/* Pilot History */}
                          {selectedMecha.driver_history && (
                            <div>
                              <h4 className="text-lg font-semibold text-yellow-400 mb-2">Background</h4>
                              <p className="text-base whitespace-pre-line">{selectedMecha.driver_history}</p>
                            </div>
                          )}
                          
                          {/* Pilot Introduction */}
                          {selectedMecha.driver_introduction && (
                            <div className="mt-4">
                              <h4 className="text-lg font-semibold text-yellow-400 mb-2">Introduction</h4>
                              <p className="text-base whitespace-pre-line">{selectedMecha.driver_introduction}</p>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Combat Strategy */}
                      <div className="bg-slate-700 p-6 rounded-lg transition-transform hover:scale-[1.02]">
                        <h3 className="text-xl font-bold mb-4">Combat Strategy</h3>
                        <p className="text-lg">
                          {selectedMecha.title.includes("FALCON") ? 
                            "FALCON excels in reconnaissance and aerial combat. Use its advanced flight capabilities and sensor systems to detect enemies from a safe distance, then engage with precision strikes. Its transformation ability allows for quick repositioning and escape when needed." :
                            selectedMecha.title.includes("PANTHER") ? 
                            "Panther excels at flanking maneuvers and ambush tactics. Use its stealth capabilities to sneak behind enemy lines and target vulnerable opponents. Avoid direct confrontations with heavily armored mechas." :
                            selectedMecha.title.includes("ALYSNES") ?
                            "ALYSNES is a versatile mecha with balanced capabilities. It excels in adapting to different combat situations with its range of weapons. Use the Yunhuo Energy Cannon for mid-range combat, the Qingya Complex Shield to parry melee attacks, and the Yulong Battle Halberd for bypassing enemy defenses. The Jiaoshi Gauss Cannon provides crowd control, while the Baizhan Airdrop Kit allows for mid-battle resupply. Its balanced approach makes it effective against most enemy types." :
                            selectedMecha.title.includes("PINAKA") ?
                            "PINAKA is a support-type Striker that excels in battlefield control and ally maintenance. Position yourself to maximize support coverage for allies, using repair drones to keep your team at full strength. Use the Samsara Emergency Support Drone to both repair critical allies and provide a defensive stasis field. The Shishpar Cover Airdrop provides both defensive cover and offensive capabilities - don't hesitate to drop it directly on enemies when the opportunity arises." :
                            selectedMecha.title.includes("STEGOSAUR") ?
                            "STEGOSAUR's strength lies in overwhelming firepower and area control. Deploy the Turret Form to maximize your targeting range and stability, using the Stasis Field Drone for extra protection. Utilize the Boxer and Choir Rocket Pods to maintain pressure on enemy positions, and deploy the Gatekeeper Haze to protect your team from energy-based attacks. When facing multiple targets, the Fencer Micro Missiles allow you to engage up to six enemies simultaneously." :
                            selectedMecha.title.includes("HELLFIRE") ?
                            "HELLFIRE is pure offensive firepower. Utilize the Orthrus Charged Splitter for focused damage, and the Ladon Split Emitter for multi-target engagements or missile interception. The Cacus Converger Drone can help penetrate heavily armored targets when maximum damage is needed. Use the Nessus Booster to enhance your performance in critical moments, but be aware of its limited duration. Maintain optimal range to maximize damage output while avoiding direct confrontations with melee specialists." :
                            selectedMecha.title.includes("SKYRAIDER") ?
                            "SKYRAIDER excels at aerial bombing runs and hit-and-run tactics. Use its transformation ability to shift to flight mode for rapid repositioning and to engage multiple targets quickly. Deploy Jamming Missiles when facing energy-based attackers, and use the Bochica Missile Dispenser for area suppression against grouped enemies. The Aerial Assault Module not only enhances mobility but provides drone-based missile protection, making SKYRAIDER highly survivable despite its lighter armor." :
                            selectedMecha.title.includes("LUMINAE") ?
                            "LUMINAE is primarily a support Striker with surprising offensive capabilities. In team battles, prioritize repairing and boosting allies using the Fogbow repair drones and Airglow Haze Diffuser. The Easterlies Supportive Jetwing provides crucial mobility and energy regeneration buffs to nearby allies. When offensive action is needed, switch to Corruption Form to transform your repair modules into damage dealers. This dual-role capability makes LUMINAE unpredictable and dangerous on the battlefield." :
                            `${selectedMecha.title} is most effective when played to its strengths. Focus on utilizing its unique abilities to support your team's strategy and counter enemy mechas.`
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-4 mt-8">
                      {selectedMecha.url && (
                        <a 
                          href={selectedMecha.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg transition-colors"
                        >
                          Full Details
                        </a>
                      )}
                      <button 
                        onClick={closeModal}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Mecha Combat Roles Section */}
      <section className="container-section bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Mecha Combat Roles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Assault</h3>
              <p className="mb-4">
                Assault mechas are frontline fighters designed for direct engagement with enemy forces. They typically feature balanced offensive and defensive capabilities.
              </p>
              <p>
                Mechas like Panther and Hellfire excel at closing in on enemies and dealing devastating damage in close to medium range.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p className="mb-4">
                Support mechas provide tactical advantages through area control, ally buffs, or enemy debuffs. They can turn the tide of battle with their utility abilities.
              </p>
              <p>
                Mechas like Luminae and Narukami can control the battlefield with their specialized abilities.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Artillery</h3>
              <p className="mb-4">
                Artillery mechas specialize in long-range combat, bombarding enemies from a safe distance with devastating firepower.
              </p>
              <p>
                Mechas like Pinaka can deliver powerful attacks while staying safely behind the frontlines.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Scout</h3>
              <p className="mb-4">
                Scout mechas focus on mobility and reconnaissance, using speed and stealth to gather information and strike vulnerable targets.
              </p>
              <p>
                Mechas like Falcon and Skyraider can quickly traverse the battlefield and perform hit-and-run tactics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 