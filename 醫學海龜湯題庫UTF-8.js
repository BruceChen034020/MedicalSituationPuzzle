var QuestionsAnswers = [];

function QuestionsAnswers_initialization(){
    for(var i = 0; i<4800; i++){
        QuestionsAnswers[i] = [];
    }

    QuestionsAnswers[0][0] = "Fever, constipation, relative bradycardia ";

    QuestionsAnswers[0][1] = " Typhoid {微生物}{Inf}";

    QuestionsAnswers[1][0] = "Fever (3wk then 10 days free), arthralgia, lymphadenopathy, history of contact with milk ";

    QuestionsAnswers[1][1] = " Brucellosis {微生物}{Inf}";

    QuestionsAnswers[2][0] = "Fever, tender hepatomegally, GI upset ";

    QuestionsAnswers[2][1] = " Amebic liver abcess {寄蟲}{Inf}";

    QuestionsAnswers[3][0] = "Fever, arthritis, UTI ";

    QuestionsAnswers[3][1] = " gonococcal or chlamydia infection {微生物}{Inf}";

    QuestionsAnswers[4][0] = "Fever, cardiac murmur, vegetation on echo ";

    QuestionsAnswers[4][1] = " infective endocarditis {CV}{Inf}";

    QuestionsAnswers[5][0] = "Fever, high ESR > 100, renal impairment, hypercalcemia in old age, backache ";

    QuestionsAnswers[5][1] = " Multiple myeloma {Hema}{Onco}";

    QuestionsAnswers[6][0] = "Fever, low platelet, headache ";

    QuestionsAnswers[6][1] = " Dengue fever {微生物}{Inf}";

    QuestionsAnswers[7][0] = "Periumbilical edema and bruising ";

    QuestionsAnswers[7][1] = " intra-peritoneal hemorrhage (Cullen's sign), r/o ruptured ectopic pregnancy or acute pancreatitis {GI}";

    QuestionsAnswers[8][0] = "Bluish discoloration of flanks ";

    QuestionsAnswers[8][1] = " retroperitoneal hemorrhage (Grey Turner's sign), r/o pancreatitis {GI}";

    QuestionsAnswers[9][0] = "Pain reffered to McBurney's point on palpation of lower abdomen ";

    QuestionsAnswers[9][1] = " peritoneal irritation in appendicitis {GI}";

    QuestionsAnswers[10][0] = "Ecchymosis of perineum, scrotum and labia ";

    QuestionsAnswers[10][1] = " fracture of pelvis (Coopernail's sign) {Ortho}";

    QuestionsAnswers[11][0] = "Sensorineural deafness, progressive renal failure, ocular anomalies ";

    QuestionsAnswers[11][1] = " Alports syndrome {Gene}";

    QuestionsAnswers[12][0] = "Recurrent oral ucers, genital ulcers, iridocyclitis ";

    QuestionsAnswers[12][1] = " Behcet's syndrome [mnemonic: can't see, can't pee, can't eat spicy curry] {病理}{AIR}{免疫}";

    QuestionsAnswers[13][0] = "Muffled heart sound, distended neck veins, hypotension ";

    QuestionsAnswers[13][1] = " Acute cardiac tamponade (Beck's triad) {CV}";

    QuestionsAnswers[14][0] = "Sixth cranial n. palsy, persistent ear discharge, deep seated retro orbital pain ";

    QuestionsAnswers[14][1] = " complication of otitis media and mastoiditis involving the apex of the petrous temporal bone (Gradenigo's syndrome) {ENT}";

    QuestionsAnswers[15][0] = "Pain, fever, jaundice ";

    QuestionsAnswers[15][1] = " ascending cholangitis (Charchot's triad) {GI}";

    QuestionsAnswers[16][0] = "Pain, hematuria, renal mass ";

    QuestionsAnswers[16][1] = " hypernephroma / renal cell carcinoma {Onco}";

    QuestionsAnswers[17][0] = "Malformed teeth, interstitial keratitis, nerve deafness ";

    QuestionsAnswers[17][1] = " congenital syphilis (Hutchinson's triad) {Inf}";

    QuestionsAnswers[18][0] = "Growth retardation, mental changes, edema ";

    QuestionsAnswers[18][1] = " severe protein malnutrition (Kwashiorkor) {小兒}";

    QuestionsAnswers[19][0] = "Gall stones, diverticulosis, hiatus hernia ";

    QuestionsAnswers[19][1] = " Saint's triad {GI}";

    QuestionsAnswers[20][0] = "Conductive deafness, immobility of homolateral soft palate, trigeminal neuralgia ";

    QuestionsAnswers[20][1] = " advanced nasopharyngeal carcinoma (Trotter's syndrome) {微生物}{Onco}";

    QuestionsAnswers[21][0] = "Stasis, hypercoagulability, vessel injury ";

    QuestionsAnswers[21][1] = " Virchow's triad (thrombosis) {CV}{內科}{CM}";

    QuestionsAnswers[22][0] = "_";

    QuestionsAnswers[22][1] = "_";

    QuestionsAnswers[23][0] = "Gout, intellectual disability, self-mutilating behavior in a boy ";

    QuestionsAnswers[23][1] = " Lesch-Nyhan syndrome (HGPRT deficiency, X-linked recessive) {生化}{Meta}";

    QuestionsAnswers[24][0] = "Situs inversus, chronic sinusitis, bronchiectasis, infertility ";

    QuestionsAnswers[24][1] = " Kartagener syndrome (dynein arm defect affecting cilia) / Primary ciliary dyskinesia {生化}{CM}";

    QuestionsAnswers[25][0] = "Blue sclera ";

    QuestionsAnswers[25][1] = " Osteogenesis imperfecta (type I collagen defect) {生化}{小兒}{Gene}{Ortho}";

    QuestionsAnswers[26][0] = "Elastic skin, hypermobility of joints,  bleeding tendency ";

    QuestionsAnswers[26][1] = " Ehlers-Danlos syndrome (type V collagen defect, type III collagen defect seen in vascular subtype of ED) {生化}{Gene}{AIR}";

    QuestionsAnswers[27][0] = "Arachnodactyly, lens dislocation (upward and temporal), aortic dissection, hyperflexible joints ";

    QuestionsAnswers[27][1] = " Marfan syndrome (fibrillin defect) {生化}{Gene}";

    QuestionsAnswers[28][0] = "Cafe-au-lait spots (unilateral), polyostotic fibrous dysplasia, precocious puberty, multiple endocrine abnormalities ";

    QuestionsAnswers[28][1] = " McCune-Albright syndrome (G_s-protein activating mutation) {Gene}";

    QuestionsAnswers[29][0] = "Calf pseudohypertrophy ";

    QuestionsAnswers[29][1] = " Muscular dystrophy (most commonly Duchenne, due to X-linked recessive frameshift mutation of dystrophin gene) {Gene}{組織}{Neuro}";

    QuestionsAnswers[30][0] = "Child uses arms to stand up from squat ";

    QuestionsAnswers[30][1] = " Duchenne muscular dystrophy (Gowers sign) {組織}{Neuro}{小兒}{Gene}";

    QuestionsAnswers[31][0] = "Slow, progressive muscle weakness in boys ";

    QuestionsAnswers[31][1] = " Becker muscular dystrophy (X-linked non-frameshift deletions in dystrophin; less severe than Duchenne) {Gene}{Neuro}";

    QuestionsAnswers[32][0] = "Infant with cleft lip/palate, microcephaly or holoprosencephaly, polydactyly, cutis aplasia ";

    QuestionsAnswers[32][1] = " Patau syndrome (trisomy 13) {Gene}";

    QuestionsAnswers[33][0] = "Infant with microcephaly, rocker-bottom feet, clenched hands, and structural heart defect ";

    QuestionsAnswers[33][1] = " Edwards syndrome (trisomy 18) {Gene}{小兒}";

    QuestionsAnswers[34][0] = "Single palmar crease ";

    QuestionsAnswers[34][1] = " Down syndrome {普生}{Gene}{小兒}";

    QuestionsAnswers[35][0] = "Dilated cardiomyopathy, edema, alcoholism or malnutrition ";

    QuestionsAnswers[35][1] = " Wet beriberi (thiamine [vitamin B1] deficiency) {生化}{Neuro}{CV}{小兒}";

    QuestionsAnswers[36][0] = "Dermatitis, dementia, diarrhea ";

    QuestionsAnswers[36][1] = " Pellagra (niacin [vitamin B3] deficiency) {生化}{Integ}";

    QuestionsAnswers[37][0] = "Swollen gums, mucosal bleeding, poor wound healing, petechiae ";

    QuestionsAnswers[37][1] = " Scurvy (vitamin C deficiency: can’t hydroxylate proline/lysine for collagen synthesis) {生化}{Meta}";

    QuestionsAnswers[38][0] = "Chronic exercise intolerance with myalgia, fatigue, painful cramps, myoglobinuria ";

    QuestionsAnswers[38][1] = " McArdle disease (skeletal muscle glycogen phosphorylase deficiency) / Glycogen storage disease type V {生化}{Meta}";

    QuestionsAnswers[39][0] = "Infant with hypoglycemia, hepatomegaly ";

    QuestionsAnswers[39][1] = " Cori disease (debranching enzyme deficiency) or Von Gierke disease (glucose-6-phosphatase deficiency, more severe) {生化}{Meta}{Gene}{Hema}{免疫}";

    QuestionsAnswers[40][0] = "Myopathy (infantile hypertrophic cardiomyopathy), exercise intolerance ";

    QuestionsAnswers[40][1] = " Pompe disease (lysosomal α-1,4-glucosidase deficiency) / Glycogen storage disease type II {生化}{Meta}";

    QuestionsAnswers[41][0] = "“Cherry-red spots” on macula ";

    QuestionsAnswers[41][1] = " Tay-Sachs (ganglioside accumulation) or Niemann-Pick (sphingomyelin accumulation), central retinal artery occlusion {生化}{Gene}";

    QuestionsAnswers[42][0] = "Hepatosplenomegaly, pancytopenia, osteoporosis, avascular necrosis of femoral head, bone crises ";

    QuestionsAnswers[42][1] = " Gaucher disease (glucocerebrosidase [β-glucosidase] deficiency) {生化}{Meta}{Neuro}";

    QuestionsAnswers[43][0] = "Achilles tendon xanthoma ";

    QuestionsAnswers[43][1] = " Familial hypercholesterolemia ( LDL receptor signaling) {生化}{Meta}{藥理}";

    QuestionsAnswers[44][0] = "Anaphylaxis following blood transfusion ";

    QuestionsAnswers[44][1] = " IgA deficiency {免疫}";

    QuestionsAnswers[45][0] = "Male child, recurrent infections, no mature B cells ";

    QuestionsAnswers[45][1] = " Bruton disease (X-linked agammaglobulinemia) {免疫}";

    QuestionsAnswers[46][0] = "Recurrent cold (noninflamed) abscesses, eczema, high serum IgE,  eosinophils ";

    QuestionsAnswers[46][1] = " Hyper-IgE syndrome (Job syndrome: neutrophil chemotaxis abnormality) {免疫}";

    QuestionsAnswers[47][0] = "“Strawberry tongue” ";

    QuestionsAnswers[47][1] = " Scarlet fever ; Kawasaki disease {微生物}{Inf} ; {病理}{CV}{小兒}{AIR}{免疫}";

    QuestionsAnswers[48][0] = "Abdominal pain, diarrhea, leukocytosis, recent antibiotic use ";

    QuestionsAnswers[48][1] = " Clostridium difficile infection {微生物}{Inf}";

    QuestionsAnswers[49][0] = "Back pain, fever, night sweats ";

    QuestionsAnswers[49][1] = " Pott disease (vertebral TB) {微生物}{AIR}";

    QuestionsAnswers[50][0] = "Adrenal hemorrhage, hypotension, DIC ";

    QuestionsAnswers[50][1] = " Waterhouse-Friderichsen syndrome (meningococcemia) {微生物}{Meta}";

    QuestionsAnswers[51][0] = "Red “currant jelly” sputum in alcoholic or diabetic patients ";

    QuestionsAnswers[51][1] = " Klebsiella pneumoniae pneumonia {微生物}{CM}{Inf}";

    QuestionsAnswers[52][0] = "Large rash with bull’s-eye appearance ";

    QuestionsAnswers[52][1] = " Erythema migrans from Ixodes tick bite (Lyme disease: Borrelia) {微生物}{寄蟲}{Inf}";

    QuestionsAnswers[53][0] = "Ulcerated genital lesion ; Nonpainful, indurated ";

    QuestionsAnswers[53][1] = " chancre (1° syphilis, Treponema pallidum) {微生物}{Integ}{Inf}";

    QuestionsAnswers[54][0] = "Ulcerated genital lesion ; Painful, with exudate ";

    QuestionsAnswers[54][1] = " chancroid (Haemophilus ducreyi) {微生物}{Inf}{Integ}";

    QuestionsAnswers[55][0] = "Pupil accommodates but doesn’t react ";

    QuestionsAnswers[55][1] = " Neurosyphilis (Argyll Robertson pupil) {微生物}{Neuro}{Inf}";

    QuestionsAnswers[56][0] = "Smooth, moist, painless, wart-like white lesions on genitals ";

    QuestionsAnswers[56][1] = " Condylomata lata (2° syphilis) {微生物}{Integ}";

    QuestionsAnswers[57][0] = "Fever, chills, headache, myalgia following antibiotic treatment for syphilis ";

    QuestionsAnswers[57][1] = " Jarisch-Herxheimer reaction (rapid lysis of spirochetes results in endotoxin-like release) {微生物}{Inf}";

    QuestionsAnswers[58][0] = "Dog or cat bite resulting in infection ";

    QuestionsAnswers[58][1] = " Pasteurella multocida (cellulitis at inoculation site) {微生物}{Ortho}{Inf}{Integ}";

    QuestionsAnswers[59][0] = "Rash on palms and soles ";

    QuestionsAnswers[59][1] = " Coxsackie A, 2° syphilis, Rocky Mountain spotted fever {微生物}{Inf}";

    QuestionsAnswers[60][0] = "Black eschar on face of patient with diabetic ketoacidosis ";

    QuestionsAnswers[60][1] = " Mucor or Rhizopus fungal infection {微生物}{口外}{Inf}{急診}";

    QuestionsAnswers[61][0] = "Chorioretinitis, hydrocephalus, intracranial calcifications ";

    QuestionsAnswers[61][1] = " Congenital toxoplasmosis {寄蟲}{Inf}";

    QuestionsAnswers[62][0] = "Child with fever later develops red rash on face that spreads to body ";

    QuestionsAnswers[62][1] = " Erythema infectiosum/fifth disease (“slapped cheeks” appearance, caused by parvovirus B19) {微生物}{Inf}";

    QuestionsAnswers[63][0] = "Fever, cough, conjunctivitis, coryza, diffuse rash ";

    QuestionsAnswers[63][1] = " Measles {微生物}{Inf}";

    QuestionsAnswers[64][0] = "Small, irregular red spots on buccal/lingual mucosa with blue-white centers ";

    QuestionsAnswers[64][1] = " Koplik spots (measles [rubeola] virus) {微生物}{Inf}";

    QuestionsAnswers[65][0] = "Bounding pulses, wide pulse pressure, diastolic heart murmur, head bobbing ";

    QuestionsAnswers[65][1] = " Aortic regurgitation {CV}";

    QuestionsAnswers[66][0] = "Systolic ejection murmur (crescendo-decrescendo) ";

    QuestionsAnswers[66][1] = " Aortic stenosis {CV}";

    QuestionsAnswers[67][0] = "Continuous “machine-like” heart murmur ";

    QuestionsAnswers[67][1] = " PDA (close with indomethacin; keep open with PGE analogs) {CV}{藥理}";

    QuestionsAnswers[68][0] = "Chest pain on exertion ";

    QuestionsAnswers[68][1] = " Angina (stable: with moderate exertion; unstable: with minimal exertion or at rest) {CV}";

    QuestionsAnswers[69][0] = "Chest pain with ST depressions on ECG ";

    QuestionsAnswers[69][1] = " Angina (⊝ troponins) or NSTEMI (⊕ troponins)";

    QuestionsAnswers[70][0] = "Chest pain, pericardial effusion/friction rub, persistent fever following MI ";

    QuestionsAnswers[70][1] = " Dressler syndrome (autoimmune-mediated post-MI fibrinous pericarditis, 2 weeks to several months after acute episode) {CV}";

    QuestionsAnswers[71][0] = "Painful, raised red lesions on pads of fingers/toes ";

    QuestionsAnswers[71][1] = " Osler nodes (infective endocarditis, immune complex deposition) {CV}";

    QuestionsAnswers[72][0] = "Painless erythematous lesions on palms and soles ";

    QuestionsAnswers[72][1] = " Janeway lesions (infective endocarditis, septic emboli/microabscesses) {CV}{Integ}";

    QuestionsAnswers[73][0] = "Splinter hemorrhages in fingernails ";

    QuestionsAnswers[73][1] = " Bacterial endocarditis {CV}{Inf}";

    QuestionsAnswers[74][0] = "Retinal hemorrhages with pale centers ";

    QuestionsAnswers[74][1] = " Roth spots (bacterial endocarditis) {CV}{Inf}{眼科}";

    QuestionsAnswers[75][0] = "Distant heart sounds, distended neck veins, hypotension ";

    QuestionsAnswers[75][1] = " Beck triad of cardiac tamponade {CV}";

    QuestionsAnswers[76][0] = "Cervical lymphadenopathy, desquamating rash, coronary aneurysms, red conjunctivae and tongue, hand-foot changes ";

    QuestionsAnswers[76][1] = " Kawasaki disease (mucocutaneous lymph node syndrome, treat with IVIG and aspirin) {病理}{CV}{小兒}{AIR}{免疫}";

    QuestionsAnswers[77][0] = "Palpable purpura on buttocks/legs, joint pain, abdominal pain (child), hematuria ";

    QuestionsAnswers[77][1] = " Immunoglobulin A vasculitis (Henoch-Schönlein purpura, affects skin and kidneys) {病理}{CV}{Nephro}";

    QuestionsAnswers[78][0] = "Telangiectasias, recurrent epistaxis, skin discoloration, arteriovenous malformations, GI bleeding, hematuria ";

    QuestionsAnswers[78][1] = " Hereditary hemorrhagic telangiectasia (Osler-WeberRendu syndrome) {CV}{Gene}{GI}";

    QuestionsAnswers[79][0] = "Skin hyperpigmentation, hypotension, fatigue ";

    QuestionsAnswers[79][1] = " 1° adrenocortical insufficiency   ACTH,  α-MSH (eg, Addison disease) {Meta}";

    QuestionsAnswers[80][0] = "Cutaneous flushing, diarrhea, bronchospasm ";

    QuestionsAnswers[80][1] = " Carcinoid syndrome (right-sided cardiac valvular lesions,  5-HIAA) {Meta}{Onco}";

    QuestionsAnswers[81][0] = "Cold intolerance, weight gain, brittle hair ";

    QuestionsAnswers[81][1] = " Hypothyroidism {普生}{Meta}";

    QuestionsAnswers[82][0] = "Cutaneous/dermal edema due to deposition of mucopolysaccharides in connective tissue ";

    QuestionsAnswers[82][1] = " Myxedema (caused by hypothyroidism, Graves disease [pretibial]) {Meta}";

    QuestionsAnswers[83][0] = "Facial muscle spasm upon tapping ";

    QuestionsAnswers[83][1] = " Chvostek sign (hypocalcemia) {Meta}";

    QuestionsAnswers[84][0] = "No lactation postpartum, absent menstruation, cold intolerance ";

    QuestionsAnswers[84][1] = " Sheehan syndrome (postpartum hemorrhage leading to pituitary infarction) {Meta}{O&G}";

    QuestionsAnswers[85][0] = "Deep, labored breathing/hyperventilation ";

    QuestionsAnswers[85][1] = " Diabetic ketoacidosis (Kussmaul respirations) {Meta}";

    QuestionsAnswers[86][0] = "Pancreatic, pituitary, parathyroid tumors ";

    QuestionsAnswers[86][1] = " MEN 1 (autosomal dominant) {Meta}{Onco}";

    QuestionsAnswers[87][0] = "Thyroid tumors, pheochromocytoma, ganglioneuromatosis, Marfanoid habitus ";

    QuestionsAnswers[87][1] = " MEN 2B (autosomal dominant RET mutation) {Meta}";

    QuestionsAnswers[88][0] = "Thyroid and parathyroid tumors, pheochromocytoma ";

    QuestionsAnswers[88][1] = " MEN 2A (autosomal dominant RET mutation) {Meta}{Onco}";

    QuestionsAnswers[89][0] = "Jaundice, palpable distended non-tender gallbladder ";

    QuestionsAnswers[89][1] = " Courvoisier sign (distal malignant obstruction of biliary tree) {GI}";

    QuestionsAnswers[90][0] = "Vomiting blood following gastroesophageal lacerations ";

    QuestionsAnswers[90][1] = " Mallory-Weiss syndrome (alcoholic and bulimic patients) {GI}{Psy}";

    QuestionsAnswers[91][0] = "Dysphagia (esophageal webs), glossitis, iron deficiency anemia ";

    QuestionsAnswers[91][1] = " Plummer-Vinson syndrome (may progress to esophageal squamous cell carcinoma) {GI}";

    QuestionsAnswers[92][0] = "Enlarged, hard left supraclavicular node ";

    QuestionsAnswers[92][1] = " Virchow node (abdominal metastasis) {GI}";

    QuestionsAnswers[93][0] = "Arthralgias, adenopathy, cardiac and neurological symptoms, diarrhea ";

    QuestionsAnswers[93][1] = " Whipple disease (Tropheryma whipplei) {GI}";

    QuestionsAnswers[94][0] = "Severe RLQ pain with palpation of LLQ ";

    QuestionsAnswers[94][1] = " Rovsing sign (acute appendicitis) {GI}";

    QuestionsAnswers[95][0] = "Severe RLQ pain with deep tenderness ";

    QuestionsAnswers[95][1] = " McBurney sign (acute appendicitis) {GI}";

    QuestionsAnswers[96][0] = "Hamartomatous GI polyps, hyperpigmented macules on mouth, feet, hands, genitalia ";

    QuestionsAnswers[96][1] = " Peutz-Jeghers syndrome (inherited, benign polyposis can cause bowel obstruction;  cancer risk, mainly GI) {GI}{病理}{Gene}";

    QuestionsAnswers[97][0] = "Multiple colon polyps, osteomas/soft tissue tumors, impacted/supernumerary teeth ";

    QuestionsAnswers[97][1] = " Gardner syndrome (subtype of FAP) {病理}{GI}{Onco}{Gene}{ENT}";

    QuestionsAnswers[98][0] = "Abdominal pain, ascites, hepatomegaly ";

    QuestionsAnswers[98][1] = " Budd-Chiari syndrome (posthepatic venous thrombosis) {GI}";

    QuestionsAnswers[99][0] = "Severe jaundice in neonate ";

    QuestionsAnswers[99][1] = " Crigler-Najjar syndrome (congenital unconjugated hyperbilirubinemia) {生化}{GI}{小兒}";

    QuestionsAnswers[100][0] = "Golden brown rings around peripheral cornea ";

    QuestionsAnswers[100][1] = " Wilson disease (Kayser-Fleischer rings due to copper accumulation) {GI}";

    QuestionsAnswers[101][0] = "Fat, female, forty, fertile ";

    QuestionsAnswers[101][1] = " Cholelithiasis (gallstones) {GI}";

    QuestionsAnswers[102][0] = "Painless jaundice ";

    QuestionsAnswers[102][1] = " Cancer of the pancreatic head obstructing bile duct {GI}";

    QuestionsAnswers[103][0] = "Bluish line on gingiva ";

    QuestionsAnswers[103][1] = " Burton line (lead poisoning) {藥理}{Hema}";

    QuestionsAnswers[104][0] = "Short stature, café-au-lait spots, thumb/radial defects,  incidence of tumors/leukemia, aplastic anemia ";

    QuestionsAnswers[104][1] = " Fanconi anemia (genetic loss of DNA crosslink repair; often progresses to AML) {Hema}";

    QuestionsAnswers[105][0] = "Red/pink urine, fragile RBCs ";

    QuestionsAnswers[105][1] = " Paroxysmal nocturnal hemoglobinuria {免疫}{Hema}";

    QuestionsAnswers[106][0] = "Painful blue fingers/toes, hemolytic anemia ";

    QuestionsAnswers[106][1] = " Cold agglutinin disease (autoimmune hemolytic anemia caused by Mycoplasma pneumoniae, infectious mononucleosis, CLL) {Hema}";

    QuestionsAnswers[107][0] = "Petechiae, mucosal bleeding, prolonged bleeding time ";

    QuestionsAnswers[107][1] = " Platelet disorders (eg, Glanzmann thrombasthenia, Bernard Soulier, HUS, TTP, ITP) {Hema}";

    QuestionsAnswers[108][0] = "Fever, night sweats, weight loss ";

    QuestionsAnswers[108][1] = " B symptoms of malignancy {Hema}{Onco}";

    QuestionsAnswers[109][0] = "Skin patches/plaques, Pautrier microabscesses, atypical T cells ";

    QuestionsAnswers[109][1] = " Mycosis fungoides (cutaneous T-cell lymphoma) or Sézary syndrome (mycosis fungoides + malignant T cells in blood) {Integ}{Hema}{Onco}";

    QuestionsAnswers[110][0] = "WBCs that look “smudged” ";

    QuestionsAnswers[110][1] = " CLL {Hema}{Onco}";

    QuestionsAnswers[111][0] = "Neonate with arm paralysis following difficult birth, arm in “waiter’s tip” position ";

    QuestionsAnswers[111][1] = " Erb-Duchenne palsy (superior trunk [C5–C6] brachial plexus injury) {Musc}{小兒}";

    QuestionsAnswers[112][0] = "Anterior drawer sign ⊕ ";

    QuestionsAnswers[112][1] = " Anterior cruciate ligament injury {Ortho}";

    QuestionsAnswers[113][0] = "Bone pain, bone enlargement, arthritis ";

    QuestionsAnswers[113][1] = " Osteitis deformans (Paget disease of bone,  osteoblastic and osteoclastic activity) {AIR}";

    QuestionsAnswers[114][0] = "Swollen, hard, painful finger joints in an elderly individual, pain worse with activity ";

    QuestionsAnswers[114][1] = " Osteoarthritis (osteophytes on PIP [Bouchard nodes], DIP [Heberden nodes]) {AIR}{Ortho}";

    QuestionsAnswers[115][0] = "Sudden swollen/painful big toe joint, tophi ";

    QuestionsAnswers[115][1] = " Gout/podagra (hyperuricemia) {生化}{AIR}";

    QuestionsAnswers[116][0] = "Dry eyes, dry mouth, arthritis ";

    QuestionsAnswers[116][1] = " Sjögren syndrome (autoimmune destruction of exocrine glands) {免疫}{AIR}";

    QuestionsAnswers[117][0] = "Urethritis, conjunctivitis, arthritis in a male ";

    QuestionsAnswers[117][1] = " Reactive arthritis associated with HLA-B27 {AIR}";

    QuestionsAnswers[118][0] = "“Butterfly” facial rash and Raynaud phenomenon in a young female ";

    QuestionsAnswers[118][1] = " Systemic lupus erythematosus {普生}{免疫}{AIR}";

    QuestionsAnswers[119][0] = "Painful fingers/toes changing color from white to blue to red with cold or stress ";

    QuestionsAnswers[119][1] = " Raynaud phenomenon (vasospasm in extremities) {AIR}";

    QuestionsAnswers[120][0] = "Anticentromere antibodies ";

    QuestionsAnswers[120][1] = " Scleroderma (CREST) {AIR}";

    QuestionsAnswers[121][0] = "Dark purple skin/mouth nodules in a patient with AIDS ";

    QuestionsAnswers[121][1] = " Kaposi sarcoma, associated with HHV-8 {微生物}{Integ}{Onco}";

    QuestionsAnswers[122][0] = "Anti-desmoglein (anti-desmosome) antibodies ";

    QuestionsAnswers[122][1] = " Pemphigus vulgaris (blistering) {Integ}";

    QuestionsAnswers[123][0] = "Pruritic, purple, polygonal planar papules and plaques (6 P’s) ";

    QuestionsAnswers[123][1] = " Lichen planus {Integ}";

    QuestionsAnswers[124][0] = "↑ AFP in amniotic fluid/maternal serum ";

    QuestionsAnswers[124][1] = " Dating error, anencephaly, spina bifida (open neural tube defects) {胚胎}{BB}{Gene}{小兒}";

    QuestionsAnswers[125][0] = "Ataxia, nystagmus, vertigo, dysarthria ";

    QuestionsAnswers[125][1] = " Cerebellar lesion {BB}{Neuro}";

    QuestionsAnswers[126][0] = "Toe extension/fanning upon plantar scrape ";

    QuestionsAnswers[126][1] = " Babinski sign (UMN lesion) {BB}";

    QuestionsAnswers[127][0] = "Hyperphagia, hypersexuality, hyperorality ";

    QuestionsAnswers[127][1] = " Klüver-Bucy syndrome (bilateral amygdala lesion) {BB}{Psy}{Neuro}";

    QuestionsAnswers[128][0] = "Resting tremor, athetosis, chorea ";

    QuestionsAnswers[128][1] = " Basal ganglia lesion {BB}{Neuro}";

    QuestionsAnswers[129][0] = "Lucid interval after traumatic brain injury ";

    QuestionsAnswers[129][1] = " Epidural hematoma (middle meningeal artery rupture) {BB}{Neuro}";

    QuestionsAnswers[130][0] = "“Worst headache of my life” ";

    QuestionsAnswers[130][1] = " Subarachnoid hemorrhage {BB}{Neuro}";

    QuestionsAnswers[131][0] = "Resting tremor, rigidity, akinesia, postural instability, shuffling gait ";

    QuestionsAnswers[131][1] = " Parkinson disease (loss of dopaminergic neurons in substantia nigra pars compacta) {BB}{Neuro}";

    QuestionsAnswers[132][0] = "Chorea, dementia, caudate degeneration ";

    QuestionsAnswers[132][1] = " Huntington disease (autosomal dominant CAG repeat expansion) {Gene}{BB}{Neuro}";

    QuestionsAnswers[133][0] = "Nystagmus, intention tremor, scanning speech, bilateral internuclear ophthalmoplegia ";

    QuestionsAnswers[133][1] = " Multiple sclerosis {免疫}{BB}{Neuro}";

    QuestionsAnswers[134][0] = "Rapidly progressive limb weakness that ascends following GI/upper respiratory infection ";

    QuestionsAnswers[134][1] = " Guillain-Barré syndrome (acute inflammatory demyelinating polyradiculopathy subtype) {Neuro}";

    QuestionsAnswers[135][0] = "Café-au-lait spots, Lisch nodules (iris hamartoma), cutaneous neurofibromas, pheochromocytomas, optic gliomas ";

    QuestionsAnswers[135][1] = " Neurofibromatosis type I {Neuro}{Integ}";

    QuestionsAnswers[136][0] = "Vascular birthmark (port-wine stain) of the face ";

    QuestionsAnswers[136][1] = " Nevus flammeus (benign, but associated with SturgeWeber syndrome) {Neuro}{Gene}";

    QuestionsAnswers[137][0] = "Renal cell carcinoma (bilateral), hemangioblastomas, angiomatosis, pheochromocytoma ";

    QuestionsAnswers[137][1] = " von Hippel-Lindau disease (dominant tumor suppressor gene mutation) {Neuro}{Gene}";

    QuestionsAnswers[138][0] = "Bilateral vestibular schwannomas ";

    QuestionsAnswers[138][1] = " Neurofibromatosis type 2 {Neuro}{Gene}{ENT}";

    QuestionsAnswers[139][0] = "Hyperreflexia, hypertonia, Babinski sign present ";

    QuestionsAnswers[139][1] = " UMN damage {BB}{Neuro}";

    QuestionsAnswers[140][0] = "Hyporeflexia, hypotonia, atrophy, fasciculations ";

    QuestionsAnswers[140][1] = " LMN damage {BB}{Neuro}";

    QuestionsAnswers[141][0] = "Spastic weakness, sensory loss, bowel/bladder dysfunction ";

    QuestionsAnswers[141][1] = " Spinal cord lesion {BB}{Neuro}";

    QuestionsAnswers[142][0] = "Unilateral facial drooping involving forehead ";

    QuestionsAnswers[142][1] = " LMN facial nerve (CN VII) palsy; UMN lesions spare the forehead {BB}{Neuro}";

    QuestionsAnswers[143][0] = "Episodic vertigo, tinnitus, hearing loss ";

    QuestionsAnswers[143][1] = " Ménière disease {BB}{ENT}";

    QuestionsAnswers[144][0] = "Ptosis, miosis, anhidrosis ";

    QuestionsAnswers[144][1] = " Horner syndrome (sympathetic chain lesion) {BB}{眼科}{Neuro}";

    QuestionsAnswers[145][0] = "Conjugate horizontal gaze palsy, horizontal diplopia ";

    QuestionsAnswers[145][1] = " Internuclear ophthalmoplegia (damage to MLF; may be unilateral or bilateral) {BB}{眼科}";

    QuestionsAnswers[146][0] = "Polyuria, renal tubular acidosis type II, growth failure, electrolyte imbalances, hypophosphatemic rickets ";

    QuestionsAnswers[146][1] = " Fanconi syndrome (multiple combined dysfunction of the proximal convoluted tubule) {Nephro}{Meta}";

    QuestionsAnswers[147][0] = "Athlete with polycythemia ";

    QuestionsAnswers[147][1] = " 2° to erythropoietin injection {普生}{FERGU}{藥理}";

    QuestionsAnswers[148][0] = "Periorbital and/or peripheral edema, proteinuria (> 3.5g/day), hypoalbuminemia, hypercholesterolemia ";

    QuestionsAnswers[148][1] = " Nephrotic syndrome {Nephro}";

    QuestionsAnswers[149][0] = "Hereditary nephritis, sensorineural hearing loss, retinopathy, lens dislocation ";

    QuestionsAnswers[149][1] = " Alport syndrome (mutation in collagen IV) {FERGU}{Gene}";

    QuestionsAnswers[150][0] = "Streak ovaries, congenital heart disease, horseshoe kidney, cystic hygroma at birth, short stature, webbed neck, lymphedema ";

    QuestionsAnswers[150][1] = " Turner syndrome (45,XO) {普生}{Repro}{小兒}{Gene}";

    QuestionsAnswers[151][0] = "Red, itchy, swollen rash of nipple/areola ";

    QuestionsAnswers[151][1] = " Paget disease of the breast (sign of underlying neoplasm) {病理}{Repro}{Onco}";

    QuestionsAnswers[152][0] = "Fibrous plaques in tunica albuginea of penis with abnormal curvature ";

    QuestionsAnswers[152][1] = " Peyronie disease (connective tissue disorder) {Uro}";

    QuestionsAnswers[153][0] = "Hypoxemia, polycythemia, hypercapnia ";

    QuestionsAnswers[153][1] = " Chronic bronchitis (hyperplasia of mucous cells, “blue bloater”) {Inf}{CM}";

    QuestionsAnswers[154][0] = "Pink complexion, dyspnea, hyperventilation ";

    QuestionsAnswers[154][1] = " Emphysema (“pink puffer,” centriacinar [smoking] or panacinar [α1-antitrypsin deficiency]) {CM}";

    QuestionsAnswers[155][0] = "Bilateral hilar adenopathy, uveitis ";

    QuestionsAnswers[155][1] = " Sarcoidosis (noncaseating granulomas) {病理}{Pulm}{AIR}{免疫}";

    QuestionsAnswers[156][0] = "_";

    QuestionsAnswers[156][1] = "_";

    QuestionsAnswers[157][0] = "↓ AFP in amniotic fluid/maternal serum ";

    QuestionsAnswers[157][1] = " Down syndrome, Edwards syndrome {普生}{Gene}{小兒}";

    QuestionsAnswers[158][0] = "Large granules in phagocytes, immunodeficiency ";

    QuestionsAnswers[158][1] = " Chédiak-Higashi disease (congenital failure of phagolysosome formation) {免疫}{Meta}";

    QuestionsAnswers[159][0] = "Recurrent infections, eczema, thrombocytopenia ";

    QuestionsAnswers[159][1] = " Wiskott-Aldrich syndrome {免疫}";

    QuestionsAnswers[160][0] = "Optochin sensitivity ";

    QuestionsAnswers[160][1] = " Sensitive: S pneumoniae; resistant: viridans streptococci (S mutans, S sanguis) {微生物}";

    QuestionsAnswers[161][0] = "Novobiocin response ";

    QuestionsAnswers[161][1] = " Sensitive: S epidermidis; resistant: S saprophyticus {微生物}";

    QuestionsAnswers[162][0] = "Bacitracin response ";

    QuestionsAnswers[162][1] = " Sensitive: S pyogenes (group A); resistant: S agalactiae(group B) {微生物}";

    QuestionsAnswers[163][0] = "Streptococcus bovis bacteremia ";

    QuestionsAnswers[163][1] = " Colon cancer {微生物}{GI}{Onco}";

    QuestionsAnswers[164][0] = "Branching gram ⊕ rods with sulfur granules ";

    QuestionsAnswers[164][1] = " Actinomyces israelii {微生物}";

    QuestionsAnswers[165][0] = "Hilar lymphadenopathy, peripheral granulomatous lesion in middle or lower lung lobes (can calcify) ";

    QuestionsAnswers[165][1] = " Ghon complex (1° TB: Mycobacterium bacilli) {病理}{微生物}{Inf}{CM}";

    QuestionsAnswers[166][0] = "“Thumb sign” on lateral neck x-ray ";

    QuestionsAnswers[166][1] = " Epiglottitis (Haemophilus influenzae) {微生物}{病理}{CM}";

    QuestionsAnswers[167][0] = "Bacteria-covered vaginal epithelial cells ";

    QuestionsAnswers[167][1] = " “Clue cells” (Gardnerella vaginalis) {微生物}{O&G}{Inf}";

    QuestionsAnswers[168][0] = "Cardiomegaly with apical atrophy ";

    QuestionsAnswers[168][1] = " Chagas disease (Trypanosoma cruzi) {寄蟲}{Inf}";

    QuestionsAnswers[169][0] = "Atypical lymphocytes ";

    QuestionsAnswers[169][1] = " EBV {微生物}{Inf}";

    QuestionsAnswers[170][0] = "Enlarged cells with intranuclear inclusion bodies ";

    QuestionsAnswers[170][1] = " “Owl eye” appearance of CMV {微生物}{Inf}{CM}";

    QuestionsAnswers[171][0] = "Heterophile antibodies ";

    QuestionsAnswers[171][1] = " Infectious mononucleosis (EBV) {微生物}{Inf}";

    QuestionsAnswers[172][0] = "Intranuclear eosinophilic droplet-like bodies ";

    QuestionsAnswers[172][1] = " Cowdry type A bodies (HSV or VZV) {微生物}";

    QuestionsAnswers[173][0] = "Eosinophilic globule in liver ";

    QuestionsAnswers[173][1] = " Councilman body (viral hepatitis, yellow fever), represents hepatocyte undergoing apoptosis {微生物}{Inf}{病理}";

    QuestionsAnswers[174][0] = "“Steeple” sign on frontal CXR ";

    QuestionsAnswers[174][1] = " Croup (parainfluenza virus) {病理}{微生物}{小兒}";

    QuestionsAnswers[175][0] = "Eosinophilic inclusion bodies in cytoplasm of hippocampal and cerebellar neurons ";

    QuestionsAnswers[175][1] = " Negri bodies of rabies {微生物}{Inf}";

    QuestionsAnswers[176][0] = "Ring-enhancing brain lesion on CT/MRI in AIDS ";

    QuestionsAnswers[176][1] = " Toxoplasma gondii, CNS lymphoma {寄蟲}{微生物}";

    QuestionsAnswers[177][0] = "Psammoma bodies ";

    QuestionsAnswers[177][1] = " Meningiomas, papillary thyroid carcinoma, mesothelioma, papillary serous carcinoma of the endometrium and ovary {病理}{Neuro}";

    QuestionsAnswers[178][0] = "“Delta wave” on ECG, short PR interval, supraventricular tachycardia ";

    QuestionsAnswers[178][1] = " Wolff-Parkinson-White syndrome (Bundle of Kent bypasses AV node) {CV}";

    QuestionsAnswers[179][0] = "“Boot-shaped” heart on x-ray ";

    QuestionsAnswers[179][1] = " Tetralogy of Fallot (due to RVH) {CV}{小兒}";

    QuestionsAnswers[180][0] = "Rib notching (inferior surface, on x-ray) ";

    QuestionsAnswers[180][1] = " Coarctation of the aorta {CV}";

    QuestionsAnswers[181][0] = "Heart nodules (granulomatous) ";

    QuestionsAnswers[181][1] = " Aschoff bodies (rheumatic fever) {病理}{CV}";

    QuestionsAnswers[182][0] = "Electrical alternans (alternating amplitude on ECG) ";

    QuestionsAnswers[182][1] = " Cardiac tamponade {CV}";

    QuestionsAnswers[183][0] = "Antineutrophil cytoplasmic antibodies (ANCAs) ";

    QuestionsAnswers[183][1] = "  Microscopic polyangiitis and eosinophilic granulomatosis with polyangiitis (MPO-ANCA/p-ANCA); granulomatosis with polyangiitis (Wegener; PR3-ANCA/c-ANCA); primary sclerosing cholangitis (MPOANCA/p-ANCA) {病理}{CV}{免疫}{AIR}";

    QuestionsAnswers[184][0] = "Hypertension, hypokalemia, metabolic alkalosis ";

    QuestionsAnswers[184][1] = " 1° hyperaldosteronism (Conn syndrome) {Meta}";

    QuestionsAnswers[185][0] = "Enlarged thyroid cells with ground-glass nuclei with central clearing ";

    QuestionsAnswers[185][1] = " “Orphan Annie” eyes nuclei (papillary carcinoma of the thyroid) {病理}{Meta}{ENT}";

    QuestionsAnswers[186][0] = "Mucin-filled cell with peripheral nucleus ";

    QuestionsAnswers[186][1] = " “Signet ring” (gastric carcinoma) {病理}{GI}{Onco}";

    QuestionsAnswers[187][0] = "Anti-transglutaminase/anti-gliadin/anti-endomysial antibodies ";

    QuestionsAnswers[187][1] = " Celiac disease (diarrhea, weight loss) {免疫}{GI}{內科}";

    QuestionsAnswers[188][0] = "Narrowing of bowel lumen on barium x-ray ";

    QuestionsAnswers[188][1] = " “String sign” (Crohn disease) {GI}";

    QuestionsAnswers[189][0] = "“Lead pipe” appearance of colon on abdominal imaging ";

    QuestionsAnswers[189][1] = " Ulcerative colitis (loss of haustra) {GI}";

    QuestionsAnswers[190][0] = "Thousands of polyps on colonoscopy ";

    QuestionsAnswers[190][1] = " Familial adenomatous polyposis (autosomal dominant, mutation of APC gene) {病理}{GI}{Onco}";

    QuestionsAnswers[191][0] = "“Apple core” lesion on barium enema x-ray ";

    QuestionsAnswers[191][1] = " Colorectal cancer (usually left-sided) {GI}{Onco}";

    QuestionsAnswers[192][0] = "Eosinophilic cytoplasmic inclusion in liver cell ";

    QuestionsAnswers[192][1] = " Mallory body (alcoholic liver disease) {病理}{GI}";

    QuestionsAnswers[193][0] = "Triglyceride accumulation in liver cell vacuoles ";

    QuestionsAnswers[193][1] = " Fatty liver disease (alcoholic or metabolic syndrome) {營養}{GI}";

    QuestionsAnswers[194][0] = "“Nutmeg” appearance of liver ";

    QuestionsAnswers[194][1] = " Chronic passive congestion of liver due to right heart failure or Budd-Chiari syndrome {GI}";

    QuestionsAnswers[195][0] = "Antimitochondrial antibodies (AMAs) ";

    QuestionsAnswers[195][1] = " 1° biliary cholangitis (female, cholestasis, portal hypertension) {GI}";

    QuestionsAnswers[196][0] = "Low serum ceruloplasmin ";

    QuestionsAnswers[196][1] = " Wilson disease (hepatolenticular degeneration; KayserFleischer rings due to copper accumulation) {GI}";

    QuestionsAnswers[197][0] = "Migratory thrombophlebitis (leading to migrating DVTs and vasculitis) ";

    QuestionsAnswers[197][1] = " Trousseau syndrome (adenocarcinoma of pancreas or lung) {GI}{Onco}{病理}";

    QuestionsAnswers[198][0] = "Basophilic nuclear remnants in RBCs ";

    QuestionsAnswers[198][1] = " Howell-Jolly bodies (due to splenectomy or nonfunctional spleen) {Hema}";

    QuestionsAnswers[199][0] = "Basophilic stippling of RBCs ";

    QuestionsAnswers[199][1] = " Lead poisoning or sideroblastic anemia {藥理}{Hema}";

    QuestionsAnswers[200][0] = "Hypochromic, microcytic anemia ";

    QuestionsAnswers[200][1] = " Iron deficiency anemia, lead poisoning, thalassemia (fetal hemoglobin sometimes present) {藥理}{Hema}";

    QuestionsAnswers[201][0] = "“Hair on end” (“Crew-cut”) appearance on x-ray ";

    QuestionsAnswers[201][1] = " β-thalassemia, sickle cell disease (marrow expansion) {生化}{組織}{Gene}{Hema}";

    QuestionsAnswers[202][0] = "Hypersegmented neutrophils ";

    QuestionsAnswers[202][1] = " Megaloblastic anemia (B12 deficiency: neurologic symptoms; folate deficiency: no neurologic symptoms) {藥理}{Hema}";

    QuestionsAnswers[203][0] = "Antiplatelet antibodies ";

    QuestionsAnswers[203][1] = " Idiopathic thrombocytopenic purpura {Hema}{GI}";

    QuestionsAnswers[204][0] = "High level of d-dimers ";

    QuestionsAnswers[204][1] = " DVT, PE, DIC {家醫}{內科}{Hema}{CV}";

    QuestionsAnswers[205][0] = "Giant B cells with bilobed nuclei with prominent inclusions (“owl’s eye”) ";

    QuestionsAnswers[205][1] = " Reed-Sternberg cells (Hodgkin lymphoma) {Hema}{Onco}";

    QuestionsAnswers[206][0] = "Sheets of medium-sized lymphoid cells with scattered pale, tingible body–laden macrophages (“starry sky” histology) ";

    QuestionsAnswers[206][1] = " Burkitt lymphoma (t[8:14] c-myc activation, associated with EBV; “starry sky” made up of malignant cells) {Hema}{Onco}";

    QuestionsAnswers[207][0] = "Lytic (“punched-out”) bone lesions on x-ray ";

    QuestionsAnswers[207][1] = " Multiple myeloma {影診}{Ortho}{Hema}{Onco}";

    QuestionsAnswers[208][0] = "Monoclonal antibody spike ";

    QuestionsAnswers[208][1] = " <br>     Multiple myeloma (usually IgG or IgA)<br>     Monoclonal gammopathy of undetermined significance (MGUS consequence of aging)<br>     Waldenström (M protein = IgM) macroglobulinemia<br>     Primary amyloidosis<br>    {影診}{Ortho}{Hema}{Onco}";

    QuestionsAnswers[209][0] = "Stacks of RBCs ";

    QuestionsAnswers[209][1] = " Rouleaux formation (high ESR, multiple myeloma) {Inf}{影診}{Ortho}{Hema}{Onco}";

    QuestionsAnswers[210][0] = "Azurophilic peroxidase ⊕ granular inclusions in granulocytes and myeloblasts ";

    QuestionsAnswers[210][1] = " Auer rods (AML, especially the promyelocytic [M3] type) {Hema}{Onco}";

    QuestionsAnswers[211][0] = "WBCs that look “smudged” ";

    QuestionsAnswers[211][1] = " CLL (almost always B cell) {Hema}{Onco}";

    QuestionsAnswers[212][0] = "“Tennis racket”-shaped cytoplasmic organelles (EM) in Langerhans cells ";

    QuestionsAnswers[212][1] = " Birbeck granules (Langerhans cell histiocytosis) {Hema}";

    QuestionsAnswers[213][0] = "“Brown” tumor of bone ";

    QuestionsAnswers[213][1] = " Hyperparathyroidism or osteitis fibrosa cystica (deposited hemosiderin from hemorrhage gives brown color) {Ortho}{Meta}";

    QuestionsAnswers[214][0] = "“Soap bubble” in femur or tibia on x-ray ";

    QuestionsAnswers[214][1] = " Giant cell tumor of bone (generally benign) {Ortho}{Onco}";

    QuestionsAnswers[215][0] = "Raised periosteum (creating a “Codman triangle”) ";

    QuestionsAnswers[215][1] = " Aggressive bone lesion (eg, osteosarcoma, Ewing sarcoma, osteomyelitis) {Ortho}{Onco}";

    QuestionsAnswers[216][0] = "“Onion skin” periosteal reaction ";

    QuestionsAnswers[216][1] = " Ewing sarcoma (malignant small blue cell tumor) {Ortho}{Onco}";

    QuestionsAnswers[217][0] = "Anti-IgG antibodies ";

    QuestionsAnswers[217][1] = " Rheumatoid arthritis (systemic inflammation, joint pannus, boutonniere and swan neck deformities) {普生}{免疫}{AIR}";

    QuestionsAnswers[218][0] = "Rhomboid crystals, ⊕ birefringent ";

    QuestionsAnswers[218][1] = " Pseudogout (calcium pyrophosphate dihydrate crystals) {AIR}";

    QuestionsAnswers[219][0] = "Needle-shaped, ⊝ birefringent crystals ";

    QuestionsAnswers[219][1] = " Gout (monosodium urate crystals) {生化}{AIR}";

    QuestionsAnswers[220][0] = "↑ uric acid levels ";

    QuestionsAnswers[220][1] = " Gout, Lesch-Nyhan syndrome, tumor lysis syndrome, loop and thiazide diuretics {生化}{AIR}{藥理}";

    QuestionsAnswers[221][0] = "“Bamboo spine” on x-ray ";

    QuestionsAnswers[221][1] = " Ankylosing spondylitis (chronic inflammatory arthritis: HLA-B27) {免疫}{AIR}";

    QuestionsAnswers[222][0] = "Antinuclear antibodies (ANAs: anti-Smith and antidsDNA) ";

    QuestionsAnswers[222][1] = " SLE (type III hypersensitivity) {普生}{免疫}{AIR}";

    QuestionsAnswers[223][0] = "Anti-histone antibodies ";

    QuestionsAnswers[223][1] = " Drug-induced SLE (eg, hydralazine, isoniazid, phenytoin, procainamide) {藥理}{AIR}";

    QuestionsAnswers[224][0] = "Anti-topoisomerase antibodies ";

    QuestionsAnswers[224][1] = " Diffuse scleroderma {AIR}";

    QuestionsAnswers[225][0] = "Keratin pearls on a skin biopsy ";

    QuestionsAnswers[225][1] = " Squamous cell carcinoma {Integ}{整外}{ENT}{病理}";

    QuestionsAnswers[226][0] = "Bloody or yellow tap on lumbar puncture ";

    QuestionsAnswers[226][1] = " Xanthochromia (due to subarachnoid hemorrhage) {Neuro}";

    QuestionsAnswers[227][0] = "Eosinophilic cytoplasmic inclusion in neuron ";

    QuestionsAnswers[227][1] = " Lewy body (Parkinson disease and Lewy body dementia) {BB}{Neuro}";

    QuestionsAnswers[228][0] = "Extracellular amyloid deposition in gray matter of brain ";

    QuestionsAnswers[228][1] = " Senile plaques (Alzheimer disease) {Neuro}";

    QuestionsAnswers[229][0] = "Depigmentation of neurons in substantia nigra ";

    QuestionsAnswers[229][1] = " Parkinson disease (basal ganglia disorder: rigidity, resting tremor, bradykinesia) {BB}{Neuro}";

    QuestionsAnswers[230][0] = "Protein aggregates in neurons from hyperphosphorylation of tau protein ";

    QuestionsAnswers[230][1] = " Neurofibrillary tangles (Alzheimer disease) and Pick bodies (Pick disease) {BB}{Neuro}";

    QuestionsAnswers[231][0] = "Silver-staining spherical aggregation of tau proteins in neurons ";

    QuestionsAnswers[231][1] = " Pick bodies (Pick disease: progressive dementia, changes in personality) {病理}{Neuro}";

    QuestionsAnswers[232][0] = "Pseudopalisading tumor cells on brain biopsy ";

    QuestionsAnswers[232][1] = " Glioblastoma multiforme {病理}{Neuro}";

    QuestionsAnswers[233][0] = "Circular grouping of dark tumor cells surrounding pale neurofibrils ";

    QuestionsAnswers[233][1] = " Homer-Wright rosettes (neuroblastoma, medulloblastoma) {病理}{Neuro}";

    QuestionsAnswers[234][0] = "“Waxy” casts with very low urine flow ";

    QuestionsAnswers[234][1] = " Chronic end-stage renal disease {FERGU}{Nephro}";

    QuestionsAnswers[235][0] = "Nodular hyaline deposits in glomeruli ";

    QuestionsAnswers[235][1] = " Kimmelstiel-Wilson nodules (diabetic nephropathy) {Nephro}{Meta}";

    QuestionsAnswers[236][0] = "Podocyte fusion or “effacement” on electron microscopy ";

    QuestionsAnswers[236][1] = " Minimal change disease (child with nephrotic syndrome) {Nephro}";

    QuestionsAnswers[237][0] = "“Spikes” on basement membrane, “dome-like” subepithelial deposits ";

    QuestionsAnswers[237][1] = " Membranous nephropathy (nephrotic syndrome) {Nephro}";

    QuestionsAnswers[238][0] = "RBC casts in urine ";

    QuestionsAnswers[238][1] = " Glomerulonephritis {Nephro}";

    QuestionsAnswers[239][0] = "“Tram-track” appearance of capillary loops of glomerular basement membranes on light microscopy ";

    QuestionsAnswers[239][1] = " Membranoproliferative glomerulonephritis {Nephro}";

    QuestionsAnswers[240][0] = "Anti–glomerular basement membrane antibodies ";

    QuestionsAnswers[240][1] = " Goodpasture syndrome (glomerulonephritis and hemoptysis) {免疫}{Nephro}{CM}";

    QuestionsAnswers[241][0] = "Cellular crescents in Bowman capsule ";

    QuestionsAnswers[241][1] = " Rapidly progressive (crescentic) glomerulonephritis {Nephro}";

    QuestionsAnswers[242][0] = "Wire loop” glomerular capillary appearance on light microscopy ";

    QuestionsAnswers[242][1] = " Diffuse proliferative glomerulonephritis (usually seen with lupus) {Nephro}";

    QuestionsAnswers[243][0] = "Linear appearance of IgG deposition on glomerular and alveolar basement membranes ";

    QuestionsAnswers[243][1] = " Goodpasture syndrome {免疫}{Nephro}{CM}";

    QuestionsAnswers[244][0] = "“Lumpy bumpy” appearance of glomeruli on immunofluorescence ";

    QuestionsAnswers[244][1] = " Poststreptococcal glomerulonephritis (due to deposition of IgG, IgM, and C3) {Nephro}";

    QuestionsAnswers[245][0] = "Necrotizing vasculitis (lungs) and necrotizing glomerulonephritis ";

    QuestionsAnswers[245][1] = " Granulomatosis with polyangiitis (Wegener; PR3-ANCA/c-ANCA) and Goodpasture syndrome (anti–basement membrane antibodies) {病理}{CV}{Nephro}{免疫}{AIR}{CM}";

    QuestionsAnswers[246][0] = "Thyroid-like appearance of kidney ";

    QuestionsAnswers[246][1] = " Chronic pyelonephritis (usually due to recurrent infections) {微生物}{Inf}{Uro}{Nephro}";

    QuestionsAnswers[247][0] = "WBC casts in urine ";

    QuestionsAnswers[247][1] = " Acute pyelonephritis {微生物}{Inf}{Uro}{Nephro}";

    QuestionsAnswers[248][0] = "Renal epithelial casts in urine ";

    QuestionsAnswers[248][1] = " Intrinsic renal failure (eg, ischemia or toxic injury) {FERGU}{Nephro}";

    QuestionsAnswers[249][0] = "hCG elevated ";

    QuestionsAnswers[249][1] = " Choriocarcinoma, hydatidiform mole (occurs with and without embryo, and multiple pregnancy) {病理}{Repro}{Onco}";

    QuestionsAnswers[250][0] = "Dysplastic squamous cervical cells with “raisinoid” nuclei and hyperchromasia ";

    QuestionsAnswers[250][1] = " Koilocytes (HPV: predisposes to cervical cancer) {病理}{Inf}{O&G}{Onco}";

    QuestionsAnswers[251][0] = "Disarrayed granulosa cells arranged around collections of eosinophilic fluid ";

    QuestionsAnswers[251][1] = " Call-Exner bodies (granulosa cell tumor of the ovary) {病理}{O&G}{Onco}{Meta}";

    QuestionsAnswers[252][0] = "“Chocolate cyst” of ovary ";

    QuestionsAnswers[252][1] = " Endometriosis (frequently involves both ovaries) {病理}{O&G}";

    QuestionsAnswers[253][0] = "Mammary gland (“blue domed”) cyst ";

    QuestionsAnswers[253][1] = " Fibrocystic change of the breast {病理}{O&G}";

    QuestionsAnswers[254][0] = "Glomerulus-like structure surrounding vessel in germ cells ";

    QuestionsAnswers[254][1] = " Schiller-Duval bodies (yolk sac tumor) {病理}{Repro}{Onco}";

    QuestionsAnswers[255][0] = "Rectangular, crystal-like, cytoplasmic inclusions in Leydig cells ";

    QuestionsAnswers[255][1] = " Reinke crystals (Leydig cell tumor) {Repro}{Onco}{Meta}";

    QuestionsAnswers[256][0] = "Thrombi made of white/red layers ";

    QuestionsAnswers[256][1] = " Lines of Zahn (arterial thrombus, layers of platelets/RBCs) {病理}{CV}{CM}";

    QuestionsAnswers[257][0] = "Hexagonal, double-pointed, needle-like crystals in bronchial secretions ";

    QuestionsAnswers[257][1] = " Bronchial asthma (Charcot-Leyden crystals: eosinophilic granules) {普生}{免疫}{Pulm}{CM}";

    QuestionsAnswers[258][0] = "Desquamated epithelium casts in sputum ";

    QuestionsAnswers[258][1] = " Curschmann spirals (bronchial asthma; can result in whorled mucous plugs) {病理}{CM}";

    QuestionsAnswers[259][0] = "“Honeycomb lung” on x-ray or CT ";

    QuestionsAnswers[259][1] = " Idiopathic pulmonary fibrosis {CM}";

    QuestionsAnswers[260][0] = "Colonies of mucoid Pseudomonas in lungs ";

    QuestionsAnswers[260][1] = " Cystic fibrosis (autosomal recessive mutation in CFTR gene  fat-soluble vitamin deficiency and mucous plugs) {普生}{生化}{免疫}{Gene}{CM}";

    QuestionsAnswers[261][0] = "Iron-containing nodules in alveolar septum ";

    QuestionsAnswers[261][1] = " Ferruginous bodies (asbestosis:  chance of lung cancer) {公衛}{CM}";

    QuestionsAnswers[262][0] = "Bronchogenic apical lung tumor on imaging ";

    QuestionsAnswers[262][1] = " Pancoast tumor (can compress cervical sympathetic chain and cause Horner syndrome) {Pulm}{Onco}";

    QuestionsAnswers[263][0] = "_";

    QuestionsAnswers[263][1] = "_";

    QuestionsAnswers[264][0] = "dyspnea, fatigue, leg edema ";

    QuestionsAnswers[264][1] = " CVD {CV}";

    QuestionsAnswers[265][0] = "V5、V6 的 voltage 很大 ";

    QuestionsAnswers[265][1] = " 心肌肥大 {CV}";

    QuestionsAnswers[266][0] = "Multidetector computed tomography（MDCT） ";

    QuestionsAnswers[266][1] = " 冠狀動脈疾病 {CV}";

    QuestionsAnswers[267][0] = "90 歲老翁容易累和喘, 活動時會胸悶和呼吸困難, 雙腳無水腫、四肢溫暖、中央靜脈壓只有 7cmH2O, Hepatojugular reflux(+), 拿尺量心尖搏動點的直徑為 4cm, 用手掌摸心尖，感受到持續LV heave, 扣診敲出心臟左緣（向外偏移）, 聽診主動脈瓣區，聽到一個明顯的收縮期射出性雜音，雜音可傳到右頸部、三尖瓣區和心尖, 再聽胸骨旁左緣第三肋間，發現一個高頻的舒張期雜音，也聽到 to-and-fro 雜音 ";

    QuestionsAnswers[267][1] = " 嚴重的主動脈瓣狹窄+中等程度的主動脈瓣閉鎖不全 {CV}";

    QuestionsAnswers[268][0] = "眼白多，上下的眼白都看的到 ";

    QuestionsAnswers[268][1] = " Grave ophthalmology {CV}";

    QuestionsAnswers[269][0] = "Chest pain, Dyspnea, Palpitation, Fainting, Edema ";

    QuestionsAnswers[269][1] = " Cardiovascular system {CV}";

    QuestionsAnswers[270][0] = "異常血壓, 異常脈搏, jugular venous pulsation ";

    QuestionsAnswers[270][1] = " 心血管系統 {CV}";

    QuestionsAnswers[271][0] = "Water-hammer Pulse ";

    QuestionsAnswers[271][1] = " 主動脈瓣逆流(AR) {CV}";

    QuestionsAnswers[272][0] = "聽診收縮期心雜音, 站起來時逆流時間提早, 蹲下來，逆流時間後延 ";

    QuestionsAnswers[272][1] = " mitral valve prolapse, MVP {CV}";

    QuestionsAnswers[273][0] = "頸動脈狹窄, 冠狀動脈疾病(CAD), 周邊動脈阻塞(PAOD) ";

    QuestionsAnswers[273][1] = " Atherosclerosis {CV}";

    QuestionsAnswers[274][0] = "胸悶、胸痛, 猝死 ";

    QuestionsAnswers[274][1] = " Ischemic Heart Diseases (IHD) {CV}";

    QuestionsAnswers[275][0] = "angina pectoris Grade 4, Cardiomegaly, ST elevation, Q 波>40ms ";

    QuestionsAnswers[275][1] = " Ischemic Heart Diseases (IHD) {CV}";

    QuestionsAnswers[276][0] = "Ambulatory BP Night-time mean SBP≥120, DBP≥70 ";

    QuestionsAnswers[276][1] = " 高血壓 (確診) {CV}";

    QuestionsAnswers[277][0] = "History of CAD, BNP ≥35 pg/mL, Regional wall abnormality ";

    QuestionsAnswers[277][1] = " HF (確診) (冠狀動脈 ischemia) {CV}";

    QuestionsAnswers[278][0] = "病人捂著胸口表示胸悶不適 ";

    QuestionsAnswers[278][1] = " 急性冠心症 {CV}";

    QuestionsAnswers[279][0] = "病人捂著胸口表示胸悶不適, ST elevation ";

    QuestionsAnswers[279][1] = " STEMI (確診) {CV}";

    QuestionsAnswers[280][0] = "喘, 運動後頭暈, 心軸右偏(RAD)、右心房偏大(RAE)、右心室肥大(RVH)、右心阻力上升(RV strain), 心臟變大(上端角度變大)且心尖微微上翹, 肺動脈變粗 ";

    QuestionsAnswers[280][1] = " Pulmonary artery hypertension (PAH) (確診) {CV}";

    QuestionsAnswers[281][0] = "右心衰竭徵象, 下肢水腫, 腹水, Kussmaul’s sign ";

    QuestionsAnswers[281][1] = " Constrictive Pericarditis {CV}";

    QuestionsAnswers[282][0] = "septal bouncing 、four chamber equalization 和Square root sign ";

    QuestionsAnswers[282][1] = " Constrictive pericarditis (Constrictive pericarditis vs. restrictive cardiomyopathy) {CV}";

    QuestionsAnswers[283][0] = "心絞痛、暈厥、心衰竭 ";

    QuestionsAnswers[283][1] = " Aortic Valve Stenosis {CV}";

    QuestionsAnswers[284][0] = "主動脈瓣膜開口＜1cm2, 左心室與主動脈之間的壓力差超過 40mmHg ";

    QuestionsAnswers[284][1] = " Aortic Valve Stenosis (確診) {CV}";

    QuestionsAnswers[285][0] = "Polyarthritis, Carditis, Nodules ";

    QuestionsAnswers[285][1] = " Rheumatic fever {CV}";

    QuestionsAnswers[286][0] = "兩套血液培養皆為陽性（抽血時間不同，做 2 次或以上，間隔12 小時以上）, ECHO 看到內膜問題 ";

    QuestionsAnswers[286][1] = " Infective Endocarditis, IE (確診) (Modified Duke Criteria) {CV}";

    QuestionsAnswers[287][0] = "Fever, Roth’s spots, Osler’s nodes ";

    QuestionsAnswers[287][1] = " Infective Endocarditis, IE {CV}";

    QuestionsAnswers[288][0] = "Dyspnea on exertion, Chest pain, Palpitation, 無 cough, 無 pale skin, 脈搏呈現 Pulsus bisferiens (Bifid systolic pulse), Low pitch murmur ";

    QuestionsAnswers[288][1] = " Hypertrophic cardiomyopathy (HCM) {CV}";

    QuestionsAnswers[289][0] = "腔室擴大，心肌變薄, 心輸出量(CO)下降 ";

    QuestionsAnswers[289][1] = " Dilated cardiomyopathy (DCM) {CV}";

    QuestionsAnswers[290][0] = "喘, Jugular vein distention, 水腫, 無 Chest pain, 很多 Q wave, 很厚的心肌，但沒有很大的 R wave ";

    QuestionsAnswers[290][1] = " Restrictive/ Infiltrative Cardiomyopathy (RCM) {CV}";

    QuestionsAnswers[291][0] = "upper respiratory febrile illness, 急性鬱血性心臟衰竭, ACS, acute coronary syndrome ";

    QuestionsAnswers[291][1] = " Myocarditis {CV}";

    QuestionsAnswers[292][0] = "diffuse T wave inversion, CRP、CK/CK-MB 和 Troponin 均升高, 切片可見許多淋巴球浸潤其中 ";

    QuestionsAnswers[292][1] = " Myocarditis (確診) {CV}";

    QuestionsAnswers[293][0] = "皮膚濕、感覺冷, 意識狀態改變, SBP<90mmHg ";

    QuestionsAnswers[293][1] = " Shock {CV}";

    QuestionsAnswers[294][0] = "撕裂性疼痛，轉移至肩膀、手臂、脖子、背, 急性心衰竭, 心包膜填塞 ";

    QuestionsAnswers[294][1] = " Aortic Dissection {CV}";

    QuestionsAnswers[295][0] = "Significant SOB, rapid breathing, Tachycardia, Orthopnea ";

    QuestionsAnswers[295][1] = " Acute Cardiac Tamponade {CV}";

    QuestionsAnswers[296][0] = "D-dimer 濃度高, left pulmonary artery 阻塞，right pulmonary artery 阻塞 ";

    QuestionsAnswers[296][1] = " Pulmonary Embolism (確診) {CV}";

    QuestionsAnswers[297][0] = "竇性速率<60 次/min ";

    QuestionsAnswers[297][1] = " Sinus Bradycardia {CV}";

    QuestionsAnswers[298][0] = "心房速率 100~250 次/min, P 波形狀或軸不符合 NSR 的樣子, QRS規律 ";

    QuestionsAnswers[298][1] = " Atrial Tachycardia, AT {CV}";

    QuestionsAnswers[299][0] = "規律性的 QRS，每分鐘>100 次, QRS <0.12 秒, 沒有明顯的 P 波 ";

    QuestionsAnswers[299][1] = " Supraventricular tachycardia, SVT {CV}";

    QuestionsAnswers[300][0] = "每個 P 波都有接著 QRS 波, PR interval 大於 0.2 秒 ";

    QuestionsAnswers[300][1] = " 1° AV block {CV}";

    QuestionsAnswers[301][0] = "P 波在 II、III、aVF 高度大於 2.5mm ";

    QuestionsAnswers[301][1] = " 右心房擴大(RAE) {CV}";

    QuestionsAnswers[302][0] = "V1, V2 的 QRS 波呈現 RSR’, V5, V6, lead I 有遲緩、較深的 S 波, QRS 寬度大於 0.12 秒 ";

    QuestionsAnswers[302][1] = " Right bundle branch block, RBBB （常稱兔子耳朵） {CV}";

    QuestionsAnswers[303][0] = "Fever和 Chill, Anorexia、體重減輕、全身疲累、呼吸困難、胸痛、腹痛、意識改變 ";

    QuestionsAnswers[303][1] = " IE {CV}";

    QuestionsAnswers[304][0] = "發燒, 新的瓣膜損傷, 在菌塊的組織學切片中發現感染源 ";

    QuestionsAnswers[304][1] = " IE (確診) (Modified Duke Criteria) {CV}";

    QuestionsAnswers[305][0] = "年輕、胸痛、背痛、troponin 不高 ";

    QuestionsAnswers[305][1] = " Acute aortic syndrome(AAS) {CV}";

    QuestionsAnswers[306][0] = "人嘴唇或四肢發紫發黑 ";

    QuestionsAnswers[306][1] = " Cyanosis {CV}";

    QuestionsAnswers[307][0] = "Syncope After sudden unexpected pain, unpleasant sight, sound, or smell ";

    QuestionsAnswers[307][1] = " Vasovagal syncope {CV}";

    QuestionsAnswers[308][0] = "Otherwise unexplained dyspnea, Chest pain, either pleuritic or \"atypical\", Anxiety ";

    QuestionsAnswers[308][1] = " PE {CV}";

    QuestionsAnswers[309][0] = "HR ≧ 100 次/min, 過去四周內手術或久不運動, 咳血, 癌症, 下肢水腫, High probability V/Q scan ";

    QuestionsAnswers[309][1] = " 肺栓塞 (確診) {CV}";

    QuestionsAnswers[310][0] = "Oropharyngeal mucus ";

    QuestionsAnswers[310][1] = " postnasal drip {CM}";

    QuestionsAnswers[311][0] = "Cobblestone appearance ";

    QuestionsAnswers[311][1] = " Postnasal drip（PND） {CM}";

    QuestionsAnswers[312][0] = "methacholine provocation test, Diurnal variation in peak expiratory flow（PEF） ";

    QuestionsAnswers[312][1] = " Asthma (診斷) {CM}";

    QuestionsAnswers[313][0] = "Nasal flaring ";

    QuestionsAnswers[313][1] = " 呼吸費力，在嬰幼兒常見屬正常 {CM}";

    QuestionsAnswers[314][0] = "Tactile fremitus 震動增加 ";

    QuestionsAnswers[314][1] = " Consolidated lung {CM}";

    QuestionsAnswers[315][0] = "胸 敲診聲音 Tympany ";

    QuestionsAnswers[315][1] = " tension pneumothorax {CM}";

    QuestionsAnswers[316][0] = "Rhonchi ";

    QuestionsAnswers[316][1] = " 有分泌物在大的氣道內 {CM}";

    QuestionsAnswers[317][0] = "chest ultrasound ";

    QuestionsAnswers[317][1] = " 積水 {CM}";

    QuestionsAnswers[318][0] = "FDG-PET activity 不高，但餵 SSTR 就看得到 ";

    QuestionsAnswers[318][1] = " Carcinoid tumor {CM}";

    QuestionsAnswers[319][0] = "Spirometry 凹進去 ";

    QuestionsAnswers[319][1] = " 肺阻塞 {CM}";

    QuestionsAnswers[320][0] = "cough, Chest tightness, Wheezing ";

    QuestionsAnswers[320][1] = " Asthma {CM}";

    QuestionsAnswers[321][0] = "患有過敏性鼻炎, cough, bronchoprovocation test 輕微刺激變化就很大 ";

    QuestionsAnswers[321][1] = " Asthma {CM}";

    QuestionsAnswers[322][0] = "left mid-lung上面的血管可以走很遠，下面的少了一大塊, 可以看到在 right side 的 apex 處沒有 perfusion, 休克 ";

    QuestionsAnswers[322][1] = " PE {CM}";

    QuestionsAnswers[323][0] = "haemodynamic instability, RV dysfunction, CTPA not immediately available ";

    QuestionsAnswers[323][1] = " PE (確診)(Treatment indicated) {CM}";

    QuestionsAnswers[324][0] = "exertional dyspnea, fatigue, 胸痛, 第二心音的生理性 S2 splitting 中，肺動脈關閉的聲音(P2)更明顯 ";

    QuestionsAnswers[324][1] = " 肺高壓 {CM}";

    QuestionsAnswers[325][0] = "ECG：看到右心肥大, CXR：看到右心肥大，以及Dilated main pulmonary arteries但Pruning of peripheral vascular markings, arterial blood gas, ABG：exertion 用力時可發現hypoxemia, 肺功能測試(pulmonary function test)：DLCO(Diffusing capacity of the lung for carbon monoxide)下降 ";

    QuestionsAnswers[325][1] = " 肺高壓 (確診) {CM}";

    QuestionsAnswers[326][0] = "Platypnea-orthodeoxia, clubbing finger, polycythemia ";

    QuestionsAnswers[326][1] = " Pulmonary Arteriovenous Malformation {CM}";

    QuestionsAnswers[327][0] = "Agitated saline Echocardiography看到左心裡有小氣泡。 ";

    QuestionsAnswers[327][1] = " Pulmonary Arteriovenous Malformation {CM}";

    QuestionsAnswers[328][0] = "ILD, 排除LAM,PAP,遺傳疾病,自體免疫疾病,Drug induced lung dissease,GIP,Granulomatous disease,Opportunistic infection ";

    QuestionsAnswers[328][1] = " IIP {CM}";

    QuestionsAnswers[329][0] = "ILD, 排除所有其他可能的 ILD 原因, HRCT 看到 UIP 特徵, 肺活檢有UIP ";

    QuestionsAnswers[329][1] = " IPF (確診) {CM}";

    QuestionsAnswers[330][0] = "DOE、久咳不癒, 異常症狀只侷限在肺部, 無 COPD ";

    QuestionsAnswers[330][1] = " IPF {CM}";

    QuestionsAnswers[331][0] = "胸部外傷, 局部疼痛、crepitus ";

    QuestionsAnswers[331][1] = " Ribs fracture {CM}";

    QuestionsAnswers[332][0] = "氣胸合併低血壓 ";

    QuestionsAnswers[332][1] = " Tension pneumothorax (確診) {CM}";

    QuestionsAnswers[333][0] = "widened mediastinum, Aortic knob 與 AP window obliteration, deviation of the trachea & esophagus ";

    QuestionsAnswers[333][1] = " aortic rupture {CM}";

    QuestionsAnswers[334][0] = "impairment of mental performance, visual acuity impairment, mild hyperventilation ";

    QuestionsAnswers[334][1] = " hypoxemia {CM}";

    QuestionsAnswers[335][0] = "Hypercapnia, a/A PO2 Normal, P_I max Normal ";

    QuestionsAnswers[335][1] = " CENTRAL HYPOVENTILATION (Hypercapnia鑑別診斷) {CM}";

    QuestionsAnswers[336][0] = "hypoxemia, a/A PO2 decreased<0.8, PvO2 Normal ";

    QuestionsAnswers[336][1] = " V/Q ABNORMALITY (hypoxemia鑑別診斷) {CM}";

    QuestionsAnswers[337][0] = "咳嗽、咳痰, 發燒、午後熱, 夜間盜汗、疲倦 ";

    QuestionsAnswers[337][1] = " TB {CM}";

    QuestionsAnswers[338][0] = "發燒、胸痛、體重減輕、乾咳、頭痛、流汗、顫抖、虛弱無力、咳血、夜晚盜汗, Halo sign ";

    QuestionsAnswers[338][1] = " Fungal Infections of The Lung {CM}";

    QuestionsAnswers[339][0] = "肺 Intracellular yeast organisms ";

    QuestionsAnswers[339][1] = " Candida species {CM}";

    QuestionsAnswers[340][0] = "咳嗽、咳痰；發燒、午後熱；夜間盜汗、疲倦；體重減輕；胸痛、咳血, 石灰狀的病灶 ";

    QuestionsAnswers[340][1] = " TB {CM}";

    QuestionsAnswers[341][0] = "age＞40y, Dyspnea, Chronic cough, Chronic sputum production ";

    QuestionsAnswers[341][1] = " COPD {CM}";

    QuestionsAnswers[342][0] = "Ptosis, 複視, 講話會有鼻音，容易嗆到, 無 brain lesion ";

    QuestionsAnswers[342][1] = " Myasthenia gravis {CM}";

    QuestionsAnswers[343][0] = "Single-fiber EMG 續刺激下的反應減少, 偵測 AchR Ab ";

    QuestionsAnswers[343][1] = " Myasthenia gravis (確診) {CM}";

    QuestionsAnswers[344][0] = "喘、悶，偶爾會咳但無痰 ";

    QuestionsAnswers[344][1] = " Hypersensitivity pneumonia (HP)，又名 Extrinsic allergic alveolitis, EAA {CM}";

    QuestionsAnswers[345][0] = "Snoring, Nocturnal choking, Nocturia ";

    QuestionsAnswers[345][1] = " Obstructive sleep apnea, OSA {CM}";

    QuestionsAnswers[346][0] = "Barium study ：在胸腔看見顯影, 食道完整 ";

    QuestionsAnswers[346][1] = " Congenital diaphragmatic hernia {CM}";

    QuestionsAnswers[347][0] = "Lower chest discomfort/heaviness, Radiation to shoulder, Compression of adjacent organs ";

    QuestionsAnswers[347][1] = " Tumors of the Diaphragm {CM}";

    QuestionsAnswers[348][0] = "與GERD、esophagitis相關症狀, Heartburn、逆流, 咳嗽、氣喘、喉炎、牙齒流血 ";

    QuestionsAnswers[348][1] = " sliding hiatal hernia {CM}";

    QuestionsAnswers[349][0] = "diffuse goiter, thyrotoxicosis, ophthalmopathy ";

    QuestionsAnswers[349][1] = " Grave’s Disease {Meta}";

    QuestionsAnswers[350][0] = "tiredness, weakness, dry skin, feeling cold ";

    QuestionsAnswers[350][1] = " Hypothyroidism {Meta}";

    QuestionsAnswers[351][0] = "TSH↑↑, T3, T4↓, I131 uptake ↓, aTPO↑, ATA↑ ";

    QuestionsAnswers[351][1] = " Hypothyroidism (確診) {Meta}";

    QuestionsAnswers[352][0] = "分泌的 cortisol 過多，但早上測的時候和正常人差不多，晚上則會比正常人高。 ";

    QuestionsAnswers[352][1] = " Cushing’s syndrome {Meta}";

    QuestionsAnswers[353][0] = "血鈣高時，PTH 也高 ";

    QuestionsAnswers[353][1] = " primary hyperparathyroidism {Meta}";

    QuestionsAnswers[354][0] = "General and central adiposity, 運動能力減弱, 情緒低落 ";

    QuestionsAnswers[354][1] = " GH Deficiency (GHD) {Meta}";

    QuestionsAnswers[355][0] = "Provocative test：用藥刺激 GH 分泌，上升的幅度未達預期 ";

    QuestionsAnswers[355][1] = " GH Deficiency (GHD) (確診) {Meta}";

    QuestionsAnswers[356][0] = "噁心、吐、腹痛、全身痠痛、無力、昏厥、意識不清 ";

    QuestionsAnswers[356][1] = " Adrenal crisis {Meta}";

    QuestionsAnswers[357][0] = "cortisol 早上 8AM <3𝛃g/dl ";

    QuestionsAnswers[357][1] = " Adrenal insufficiency (確診) {Meta}";

    QuestionsAnswers[358][0] = "Fatigue and weakness, Dry skin, Decreased hearing ";

    QuestionsAnswers[358][1] = " Hypothyroidism {Meta}";

    QuestionsAnswers[359][0] = "Prepubertal Onset: High-pitched voice, Absent terminal facial hair, Decreased or absent body hair ";

    QuestionsAnswers[359][1] = " Kallmann Syndrome (hypoganadism) {Meta}";

    QuestionsAnswers[360][0] = "Hypogonadism, Hypothyroidism, Growth failure, Hypoadrenalism, Loss of red perception, Bitemporal hemianopia, Temperature dysregulation, Appetite and thirst disorders, Obesity, Diabetes insipidus, Sleep disorders, Behavioral dysfunction, Autonomic dysfunction ";

    QuestionsAnswers[360][1] = " Sellar mass lesions {Meta}";

    QuestionsAnswers[361][0] = "腦下垂體前葉的賀爾蒙分泌亢進, 頭痛, bitemporal hemianopsia ";

    QuestionsAnswers[361][1] = " Pituitary adenoma {Meta}";

    QuestionsAnswers[362][0] = "polyuria、nocturia、enuresis, polydipsia, hypotonic urine ";

    QuestionsAnswers[362][1] = " 尿崩症 {Meta}";

    QuestionsAnswers[363][0] = "AVP 分泌量減少 75%以上, 24-h urine 總量>50 mL/kg body weight, 血漿 Osmolarity<300 mosmol/L ";

    QuestionsAnswers[363][1] = " 尿崩症 (確診) {Meta}";

    QuestionsAnswers[364][0] = "hypertonic dehydration, 心跳快、姿勢性低血壓、azotemia、hyperuricemia、低血鉀 ";

    QuestionsAnswers[364][1] = " 高血鈉 (hypovolemia) {Meta}";

    QuestionsAnswers[365][0] = "輕微頭痛, 意識錯亂, 噁心、嘔吐 ";

    QuestionsAnswers[365][1] = " hyponatremia {Meta}";

    QuestionsAnswers[366][0] = "甲狀腺癌細胞核: 比較大、不規則, 有grooving, 有 inclusion body ";

    QuestionsAnswers[366][1] = " Papillary carcinoma (確診) {Meta}";

    QuestionsAnswers[367][0] = "DEXA T score < -2.5 ";

    QuestionsAnswers[367][1] = " 骨質疏鬆 (確診) {Meta}";

    QuestionsAnswers[368][0] = "同一個樣本: FPG ≥	126mg/dL, A1C ≥ 6.5% ";

    QuestionsAnswers[368][1] = " 糖尿病(DM) (確診) {Meta}";

    QuestionsAnswers[369][0] = "anti-islet autoAb ";

    QuestionsAnswers[369][1] = " type 1 DM Type1A {Meta}";

    QuestionsAnswers[370][0] = "糖尿病 Latent onset， 25 或 30 歲以內, 有 DM associated autoAb, 6 個月內沒有用胰島素治療也沒發生酮酸中毒(DKA) ";

    QuestionsAnswers[370][1] = " Slowly evolving immune-mediated diabetes (LADA) (確診)(丹麥糖尿病協會) {Meta}";

    QuestionsAnswers[371][0] = "Monogenic diabetes, 18-25 歲發病，僅有 mild hyperglycemia ";

    QuestionsAnswers[371][1] = " MODY2 (Glucokinase (GCK), Glucose sensor) {Meta}";

    QuestionsAnswers[372][0] = "lethargy、 stupor, band keratopathy, weakness、proximal myopathy ";

    QuestionsAnswers[372][1] = " Hypercalcemia {Meta}";

    QuestionsAnswers[373][0] = "Parathyroid hyperplasia, Pancreatic cancer, Pituitary adenoma ";

    QuestionsAnswers[373][1] = " MEN1 {Meta}";

    QuestionsAnswers[374][0] = "Hypercalcemia, 尿鈣< 50 mg/24hr, Cca / Ccr< 0.01 ";

    QuestionsAnswers[374][1] = " Familial Benign Hypocalciuric Hypercalcemia (FBHH) (確診) {Meta}";

    QuestionsAnswers[375][0] = "seizure, 抽筋, prolong QT ";

    QuestionsAnswers[375][1] = " Hypocalcemia {Meta}";

    QuestionsAnswers[376][0] = "Weight gain, thin and brittle skin, Osteoporosis ";

    QuestionsAnswers[376][1] = " Cushing’s syndrome {Meta}";

    QuestionsAnswers[377][0] = "2-day low-dose dexamethasone suppression test, cortisol level >2 ug/dl ";

    QuestionsAnswers[377][1] = " Cushing’s syndrome (確診) {Meta}";

    QuestionsAnswers[378][0] = "Weight loss、anorexia, loss of inhibition of TSH release, Hypotension ";

    QuestionsAnswers[378][1] = " Adrenal insufficiency {Meta}";

    QuestionsAnswers[379][0] = "打入 0.25mg ACTH還不能使 cortisol 上升 ";

    QuestionsAnswers[379][1] = " adrenal crisis (確診) {Meta}";

    QuestionsAnswers[380][0] = "Hypertension and hypokalemia, Morning blood sample in seated ambulant patient PAC >= 15 ng/dL, Intravenous Saline Infusion Test：血清 aldosterone 濃度> 10 ng/dL ";

    QuestionsAnswers[380][1] = " Primary hyperaldosteronism (確診) {Meta}";

    QuestionsAnswers[381][0] = "Persisted high BP with paroxysmal superimposed, Chest discomfort, Throbbing ";

    QuestionsAnswers[381][1] = " Pheochromocytoma {Meta}";

    QuestionsAnswers[382][0] = "Resistant hypertension, >2-fold elevation above upper limit of nl in urine catecholamines ";

    QuestionsAnswers[382][1] = " Pheochromocytoma {Meta}";

    QuestionsAnswers[383][0] = "Hunger, Paresthesias, Tachycardia ";

    QuestionsAnswers[383][1] = " 低血糖 (Autonomic) {Meta}";

    QuestionsAnswers[384][0] = "神智改變、嗜睡、倦怠無力、口渴, 脫水、尿多、喝多、皮膚乾燥, Kussmaul's respiration ";

    QuestionsAnswers[384][1] = " Diabetic ketoacidosis, DKA {Meta}";

    QuestionsAnswers[385][0] = "血糖>250mg/dl, PH 值<7.3 and HCO3-≤15mEq/L ";

    QuestionsAnswers[385][1] = " Diabetic ketoacidosis, DKA {Meta}";

    QuestionsAnswers[386][0] = "kidney damage, Albuminuria達三個月以上, GFR<60 mL/min per 1.73m2超過三個月 ";

    QuestionsAnswers[386][1] = " CKD (確診) {Meta}";

    QuestionsAnswers[387][0] = "Pericyte dropout ";

    QuestionsAnswers[387][1] = " Retinopathy {Meta}";

    QuestionsAnswers[388][0] = "持續性的burning pain, paroxysmal stabbing pain, painful dysesthesias/paresthesias ";

    QuestionsAnswers[388][1] = " Neuropathy {Meta}";

    QuestionsAnswers[389][0] = "multiple glandular副甲狀腺增生, hypercalcemia, PTH升高 ";

    QuestionsAnswers[389][1] = " Parathyroid adenoma {Meta}";

    QuestionsAnswers[390][0] = "Parathyroid tumor, Gastrinoma ";

    QuestionsAnswers[390][1] = " MEN1 (Wermer’s syndrome) (確診)(Clinical) {Meta}";

    QuestionsAnswers[391][0] = "multicentric thyroid nodules, Calcitonin 濃度上升 ";

    QuestionsAnswers[391][1] = " Medullary thyroid carcinoma (MTC) {Meta}";

    QuestionsAnswers[392][0] = "Mucocutaneous candidiasis, Addison’s disease ";

    QuestionsAnswers[392][1] = " APS-1 (確診)";

    QuestionsAnswers[393][0] = "anti-interferon antibody, 器官衰竭 ";

    QuestionsAnswers[393][1] = " APS-1 {Meta}";

    QuestionsAnswers[394][0] = "Type 1 DM, 自體免疫的甲狀腺疾病 ";

    QuestionsAnswers[394][1] = " APS-2 (確診) {Meta}";

    QuestionsAnswers[395][0] = "出生時體重正常、身高略矮，但之後severe growth failure, 骨齡、青春期皆延遲，不過成年後生殖系統及生育功能正常, 低血糖 ";

    QuestionsAnswers[395][1] = " GH insensitivity {Meta}";

    QuestionsAnswers[396][0] = "neonate, hypoglycemia, prolonged jaundice, hepatitis ";

    QuestionsAnswers[396][1] = " GH deficiency {Meta}";

    QuestionsAnswers[397][0] = "abdominal pain，bloating，diarrhea，gas，nausea, calprotectin 低 ";

    QuestionsAnswers[397][1] = " Lactase Deficiency {GI}";

    QuestionsAnswers[398][0] = "在進食或使用抗酸劑可緩解 ";

    QuestionsAnswers[398][1] = " 潰瘍 {GI}";

    QuestionsAnswers[399][0] = "有阻塞症狀且過去有開過手術 ";

    QuestionsAnswers[399][1] = " 結痂造成的沾黏 {GI}";

    QuestionsAnswers[400][0] = "Leukopenia ";

    QuestionsAnswers[400][1] = " viral infection {GI}";

    QuestionsAnswers[401][0] = "Fatigue, Jaundice, Tea-colored urine ";

    QuestionsAnswers[401][1] = " 肝臟疾病 {GI}";

    QuestionsAnswers[402][0] = "Dysphagia, Weight loss, Hemoptysis ";

    QuestionsAnswers[402][1] = " Esophageal Cancer {GI}";

    QuestionsAnswers[403][0] = "半夜肚子餓時疼痛 ";

    QuestionsAnswers[403][1] = " Peptic ulcer {GI}";

    QuestionsAnswers[404][0] = "Urea breath test (UBT)：吐出來的 CO2 含有碳 13 ";

    QuestionsAnswers[404][1] = " H. pylori {GI}";

    QuestionsAnswers[405][0] = "胃酸分泌過多、嚴重消化性潰瘍、胰臟非β細胞性腫瘤 ";

    QuestionsAnswers[405][1] = " Zollinger-Ellison syndrome (gastrinoma) {GI}";

    QuestionsAnswers[406][0] = "固體食物吞嚥困難, Nocturnal regurgitation, Postprandial chest pain ";

    QuestionsAnswers[406][1] = " Achalasia {GI}";

    QuestionsAnswers[407][0] = "Bird beak appearance in LES ";

    QuestionsAnswers[407][1] = " Achalasia (確診) {GI}";

    QuestionsAnswers[408][0] = "Heartburn, Acid regurgitation, Asthma/ cough ";

    QuestionsAnswers[408][1] = " 胃食道逆流 GERD (確診)(Symptom-based diagnosis) {GI}";

    QuestionsAnswers[409][0] = "胃食道逆流, Intestinal metaplasia ";

    QuestionsAnswers[409][1] = " Barrett’s (GERD 診斷的分流：GERD/ NERD/ Erosive esophagitis/Barrett’s) {GI}";

    QuestionsAnswers[410][0] = "吞嚥困難/疼痛, 食道可見很多白白的 patch ";

    QuestionsAnswers[410][1] = " Candida	esophagitis {GI}";

    QuestionsAnswers[411][0] = "Biliary colic, 發燒、冷顫 ";

    QuestionsAnswers[411][1] = " 膽結石 {GI}";

    QuestionsAnswers[412][0] = "右上腹的 Rebounding tenderness，且 Murphy’s sign 為 positive, 膽囊長>10cm；寬>4cm；厚度>4mm ";

    QuestionsAnswers[412][1] = " Acute Cholecystitis (確診) {GI}";

    QuestionsAnswers[413][0] = "Total bilirubin > 4mg/dL, Dilated CBD、Ascending cholangitis ";

    QuestionsAnswers[413][1] = " Choledocholithiasis (High-risk) {GI}";

    QuestionsAnswers[414][0] = "上腹疼痛、身體彎曲會改善, amylase three times the upper limit of normal ";

    QuestionsAnswers[414][1] = " 急性胰臟炎 (確診) {GI}";

    QuestionsAnswers[415][0] = "急性上腹疼痛、坐著或是彎曲身體會改善, 嘔吐、發燒、心跳加速、Leukocytosis、血中 amylase 與lipase 增加, 多重器官衰竭 ";

    QuestionsAnswers[415][1] = " 急性胰臟炎 {GI}";

    QuestionsAnswers[416][0] = "腹痛, 糖尿病, malabsorption、體重減輕 ";

    QuestionsAnswers[416][1] = " 慢性胰臟炎 {GI}";

    QuestionsAnswers[417][0] = "阻塞性黃疸、輕微疼痛、新發生的糖尿病、體重減輕 ";

    QuestionsAnswers[417][1] = " 自體免疫胰臟炎 {GI}";

    QuestionsAnswers[418][0] = "影像學上看見胰臟廣泛性腫大，就像臘腸一樣，伴隨主胰管(MPD) 不正常的狹窄。, Serum IgG4>140 ";

    QuestionsAnswers[418][1] = " 自體免疫胰臟炎 (確診) {GI}";

    QuestionsAnswers[419][0] = "Diarrhea (>4 week) ";

    QuestionsAnswers[419][1] = " malabsorption, IBD, IBS, Infections {GI}";

    QuestionsAnswers[420][0] = "Fecal osmolality – 2 x (fecal Na + fecal K concentration) > 50 ";

    QuestionsAnswers[420][1] = " Osmotic diarrhea (確診)(治療) {GI}";

    QuestionsAnswers[421][0] = "近端小腸較嚴重發炎(proximal > distal intestine) ";

    QuestionsAnswers[421][1] = " Celiac disease {GI}";

    QuestionsAnswers[422][0] = "小腸的 villi 不見ㄌ! (effacement of villi) ";

    QuestionsAnswers[422][1] = " Celiac disease (確診) {GI}";

    QuestionsAnswers[423][0] = "Diarrhea、黏液、腹部痙攣痛, 症狀持續數周至數月, 帶血的腹瀉 ";

    QuestionsAnswers[423][1] = " Ulcerative Colitis {GI}";

    QuestionsAnswers[424][0] = "Ileocolitis, Jejunoileitis, Colitis 及 perianal disease ";

    QuestionsAnswers[424][1] = " Crohn’s disease (CD) {GI}";

    QuestionsAnswers[425][0] = "血便, 黏液, 無系統性症狀, 無疼痛, 無腹部腫塊, 無明顯的腹膜疾病, 無Fistula, 無小腸阻塞, 無大腸阻塞, 對抗生素無反應, 無手術後復發 ";

    QuestionsAnswers[425][1] = " UC (UC vs CD) {GI}";

    QuestionsAnswers[426][0] = "肚子痛＋大便習慣改變 ";

    QuestionsAnswers[426][1] = " IBS; Irritable bowel syndrome {GI}";

    QuestionsAnswers[427][0] = "過去三個月內，每周至少一次腹痛, 排便時會更痛, 排便頻率改變 < 3 bowel movements/ week, 年紀<=40, 無Abdominal mass, 無血便, 無體重減輕 ";

    QuestionsAnswers[427][1] = " IBS 功能性腸躁疾病 (確診)(Rome IV Diagnostic Criteria) {GI}";

    QuestionsAnswers[428][0] = "鼓出來，又縮回去, 請病人站著並且用力→會鼓出來（咳嗽會鼓的更大一包）, 請病人躺下→會縮回去 ";

    QuestionsAnswers[428][1] = " Inguinal hernia {GI}";

    QuestionsAnswers[429][0] = "Rebound tenderness ";

    QuestionsAnswers[429][1] = " 腹膜刺激 {GI}";

    QuestionsAnswers[430][0] = "一開始肚臍或上腹部不舒服（合併疲累、想吐、拉肚子又拉不太出來），之後變成右下腹痛。 ";

    QuestionsAnswers[430][1] = " Acute appendicitis {GI}";

    QuestionsAnswers[431][0] = "抽血：白血球、發炎指數高, 影像： CT 糞石 ";

    QuestionsAnswers[431][1] = " Acute appendicitis {GI}";

    QuestionsAnswers[432][0] = "腹部絞痛，嘔吐，並且腹脹與便秘, 吐出膽汁 ";

    QuestionsAnswers[432][1] = " Small bowel obstruction (小腸近端阻塞) {GI}";

    QuestionsAnswers[433][0] = "腹部劇痛 ";

    QuestionsAnswers[433][1] = " Perforated peptic ulcer disease, PPU {GI}";

    QuestionsAnswers[434][0] = "飽餐或油膩飲食過後，右上腹、上腹疼痛，痛到肩膀。疼痛為持續性的，痛到冒冷汗、發燒、畏寒。 ";

    QuestionsAnswers[434][1] = " Acute Cholecystiti {GI}";

    QuestionsAnswers[435][0] = "超音波，膽囊有結石、腫脹，膽囊壁發炎、變厚，膽囊周圍積液 ";

    QuestionsAnswers[435][1] = " Acute Cholecystiti (確診) {GI}";

    QuestionsAnswers[436][0] = "⾎中gastrin濃度很高 ";

    QuestionsAnswers[436][1] = " Zollinger-Ellison syndrome (gastrinoma) {GI}";

    QuestionsAnswers[437][0] = "flu-like symptom, Dark urine, jaundice ";

    QuestionsAnswers[437][1] = " 肝炎 {GI}";

    QuestionsAnswers[438][0] = "右上腹痛(RUQ pain),  發燒, Murphy′s sign ";

    QuestionsAnswers[438][1] = " acute cholecystitis (Murphy′s sign = pathognomonic sign) {GI}";

    QuestionsAnswers[439][0] = "右上腹絞痛(RUQ colicky pain)，右肩輻射痛, bilirubin, Alk-P, G-GT上升, 膽道擴張 ";

    QuestionsAnswers[439][1] = " (choledocholithiasis)(CBD stones) {GI}";

    QuestionsAnswers[440][0] = "Epigastric pain、peritonitis、sepsis, serum amylase 和 lipase 升高 ";

    QuestionsAnswers[440][1] = " Acute Pancreatitis {GI}";

    QuestionsAnswers[441][0] = "上胃疼痛、fullness、anorexia、nausea、嘔吐、dysphagia、體重減輕、缺鐵、糞便潛血, 男，50~70 歲, 限制在 mucosa 及 submucosa ";

    QuestionsAnswers[441][1] = " 胃癌 (Early) {GI}";

    QuestionsAnswers[442][0] = "painless jaundice、pruritus、acholic stool ";

    QuestionsAnswers[442][1] = " Carcinoma of the ampulla of Vater {GI}";

    QuestionsAnswers[443][0] = "腹痛、腫塊、黃疸 ";

    QuestionsAnswers[443][1] = " Pancreatic Cancer {GI}";

    QuestionsAnswers[444][0] = "潰瘍、腹瀉, MEN 1 ";

    QuestionsAnswers[444][1] = " Gastrinoma (Zollinger-Ellison syndrome) {GI}";

    QuestionsAnswers[445][0] = "elevated VIP level ";

    QuestionsAnswers[445][1] = " VIPoma (確診) {GI}";

    QuestionsAnswers[446][0] = "ANA、 ASMA 陽性, IgG 升高, interface hepatitis、plasma cell infiltration, negative hepatitis markers, 排除ALD、DILI, Steroid treatment 有效 ";

    QuestionsAnswers[446][1] = " Autoimmune hepatitis (AIH) (確診) (type 1) {GI}";

    QuestionsAnswers[447][0] = "pruritus, hyperpigmentation of skin, 黃疸、hepatomegaly、splenomegaly、ascites、水腫 ";

    QuestionsAnswers[447][1] = " Primary biliary cholangitis (PBC)";

    QuestionsAnswers[448][0] = "肝腫大、黃疸、腹水, hand tremor、發燒、Hepatic encephalopathy、splenomegaly ";

    QuestionsAnswers[448][1] = " Alcoholic liver disease, ALD {GI}";

    QuestionsAnswers[449][0] = "肝細胞裡有>5%的steatosis, Alcohol < 20g/d(M) ";

    QuestionsAnswers[449][1] = " Non-alcoholic fatty liver disease (NAFLD) (確診)(Gold standard) {GI}";

    QuestionsAnswers[450][0] = "ALT/ ALK-P / Bilirubin >2X, 吃完藥的 5~90 天, 排除病毒性肝炎(A、B、C、E、EBV、CMV、HSV),AIH、PBC,ALD、NAFLD、Wilson’s disease、hemochromatosis ";

    QuestionsAnswers[450][1] = " Drug-induced liver injury (DILI) {GI}";

    QuestionsAnswers[451][0] = "病人有肝硬化加上腹水, 血液 creatinine 濃度> 1.5 mg/dL, 沒有使用有腎毒性的藥物, 沒有休克的跡象, 沒有 proteinuria > 500 mg/D,血尿(microhematuria>50 RBC/HPF),或不正常之腎臟超音波, 停止使用利尿劑兩天以上，並補充 albumin 之後，creatinine 沒有下降至<1.5mg/dL ";

    QuestionsAnswers[451][1] = " Hepatorenal Syndrome, HPS (確診) {GI}";

    QuestionsAnswers[452][0] = "hemiplegia, aphasia ";

    QuestionsAnswers[452][1] = " supra-tentorial region的問題 {Neuro}";

    QuestionsAnswers[453][0] = "神經疾病的發作與進程 Chronic ";

    QuestionsAnswers[453][1] = " Degenerative {Neuro}";

    QuestionsAnswers[454][0] = "Nerve conduction studies (NCS) 震幅下降 ";

    QuestionsAnswers[454][1] = " axonal 的問題 {Neuro}";

    QuestionsAnswers[455][0] = "可以理解問題，但無法清楚表達，會結巴、句子破碎，聽不太懂。 ";

    QuestionsAnswers[455][1] = " Broca’s Area 問題 {Neuro}";

    QuestionsAnswers[456][0] = "對側下半部臉癱瘓 ";

    QuestionsAnswers[456][1] = " UMN 出問題（central 壞了） {Neuro}";

    QuestionsAnswers[457][0] = "走路有一邊手不自然擺動, 呈佝僂的姿態，重心向前, 邁出第一步很難，步伐小，但越走越快 ";

    QuestionsAnswers[457][1] = " Parkinsonian gait {Neuro}";

    QuestionsAnswers[458][0] = "Pronator drip:手臂 tremor ";

    QuestionsAnswers[458][1] = " 同側的 proximal muscle weakness {Neuro}";

    QuestionsAnswers[459][0] = "身體前傾、重心往前、駝背 ";

    QuestionsAnswers[459][1] = " Parkinson’s disease {Neuro}";

    QuestionsAnswers[460][0] = "先扶著患者請患者閉眼睛、雙腳併攏站住，病人one step out ";

    QuestionsAnswers[460][1] = " Romberg sign + (Posterior Column Medial Lemniscus 的 Proprioception) {Neuro}";

    QuestionsAnswers[461][0] = "Finger-nose-finger (FNF) test 移動路徑歪七扭八 ";

    QuestionsAnswers[461][1] = " dysmetria (同側小腦有問題) {Neuro}";

    QuestionsAnswers[462][0] = "肌肉不自主地抽動，不一整塊同時收縮，只是一小部分的肌束一直跳 ";

    QuestionsAnswers[462][1] = " Fasciculation (LMN lesion 的 early symptom) {Neuro}";

    QuestionsAnswers[463][0] = "Weakness, 無 Wasting, 無 Fasciculation, DTR Increase, Babinski’s sign, Spasticity ";

    QuestionsAnswers[463][1] = " UMN lesion (Upper vs. Lower motor neuron syndrome) {Neuro}";

    QuestionsAnswers[464][0] = "異常位置 = Triceps, 神經控制 = ? ";

    QuestionsAnswers[464][1] = " C7 {Neuro}";

    QuestionsAnswers[465][0] = "29 歲女性，未婚, amenorrhea 8 個月, galactorrhea 2 周 ";

    QuestionsAnswers[465][1] = " pituitary adenoma {Neuro}";

    QuestionsAnswers[466][0] = "一歲小女嬰, 頭越來越大, 嗜睡、易吐、看東西眼睛會往下 ";

    QuestionsAnswers[466][1] = " hydrocephalus {Neuro}";

    QuestionsAnswers[467][0] = "70 歲男性、退休郵差, Bilateral hands numbness and clumsiness, Fell down from stairs this morning ";

    QuestionsAnswers[467][1] = " 中央脊髓症候群 {Neuro}";

    QuestionsAnswers[468][0] = "61 year old male, office worker, Right buccal region shooting pain for 2 years ";

    QuestionsAnswers[468][1] = " 三叉神經痛 {Neuro}";

    QuestionsAnswers[469][0] = "暈眩不會太強烈，但是幾個月到幾年反反復復出現, Tinnitus, Subjective fullness of the ear ";

    QuestionsAnswers[469][1] = " Meniere’s disease {Neuro}";

    QuestionsAnswers[470][0] = "gait ataxia, central nystagmus ";

    QuestionsAnswers[470][1] = " 小腦相關的眩暈 {Neuro}";

    QuestionsAnswers[471][0] = "頭暈持續時間(單次而言) < 1 min ";

    QuestionsAnswers[471][1] = " BPPV {Neuro}";

    QuestionsAnswers[472][0] = "vacant stare、言語/動作反應延遲、容易發呆失神、disorientation、speech alternation、incoordination、情緒誇張、記憶損傷 ";

    QuestionsAnswers[472][1] = " cerebral concussion {Neuro}";

    QuestionsAnswers[473][0] = "五次頭痛發作, 持續 4-72 小時, Pulsatile, Unilateral, 噁⼼ ";

    QuestionsAnswers[473][1] = " 偏頭痛 (確診) {Neuro}";

    QuestionsAnswers[474][0] = "Yauning,Fatigue,Poor concentration 數小時至數天 ";

    QuestionsAnswers[474][1] = " 偏頭痛 Prodrome {Neuro}";

    QuestionsAnswers[475][0] = "頭痛 至少10次, 30 min-7天, 雙側, 壓迫性, 輕到中度, 活動不影響, 無噁心或嘔吐, 怕光不怕吵 ";

    QuestionsAnswers[475][1] = " Tension-type headache (緊縮性頭痛 vs 偏頭痛) {Neuro}";

    QuestionsAnswers[476][0] = "姿勢性頭痛，平躺立即緩解, 腦脊髓液壓力< 60 mmH2O ";

    QuestionsAnswers[476][1] = " Low-pressure headache (確診) {Neuro}";

    QuestionsAnswers[477][0] = "類似電擊或刺戳性的劇烈神經痛, 說話、吞嚥、刮鬍子、刷牙可誘發, 老年人，女 ";

    QuestionsAnswers[477][1] = " Trigeminal neuralgia {Neuro}";

    QuestionsAnswers[478][0] = "心臟超音波：心內血栓形成, 心電圖（24 小時）：陣發性AF ";

    QuestionsAnswers[478][1] = " Cardioembolism，CE (確診) {Neuro}";

    QuestionsAnswers[479][0] = "thunderclap headache, subarachnoid space hemorrhage, 嘔吐、頸部疼痛僵硬 ";

    QuestionsAnswers[479][1] = " aneurysm (破裂) {Neuro}";

    QuestionsAnswers[480][0] = "cistern內變白了 ";

    QuestionsAnswers[480][1] = " 急性出血 {Neuro}";

    QuestionsAnswers[481][0] = "出血, 癲癬 ";

    QuestionsAnswers[481][1] = " Cavernous Malformations (或AVM) {Neuro}";

    QuestionsAnswers[482][0] = "neurofibrillary tangle, neuritic plaque ";

    QuestionsAnswers[482][1] = " AD (確診)(Definite diagnosis) {Neuro}";

    QuestionsAnswers[483][0] = "情緒、人格、社交改變, 語意問題, 語言表達困難 ";

    QuestionsAnswers[483][1] = " Frontotemporal lobar degeneration (FTLD) {Neuro}";

    QuestionsAnswers[484][0] = "Rapid progressive dementia, Myoclonus, Visual sign, EEG出現週期性 wave complex ";

    QuestionsAnswers[484][1] = " sporadic CJD (確診)(WHO criteria) {Neuro}";

    QuestionsAnswers[485][0] = "Cogwheel rigidity, Rest tremor, Shuffling gait ";

    QuestionsAnswers[485][1] = " Parkinson's Disease {Neuro}";

    QuestionsAnswers[486][0] = "Bradykinesia, TRODAT-1 Scan 不對稱, 不太亮 ";

    QuestionsAnswers[486][1] = " Parkinsonism {Neuro}";

    QuestionsAnswers[487][0] = "Headache, Seizure, 視力模糊 ";

    QuestionsAnswers[487][1] = " Brain tumors (pituitary adenoma 壓到 optic chiasm) {Neuro}";

    QuestionsAnswers[488][0] = "頭痛、噁心嘔吐、癲癇、顱神經病變、神經賀爾蒙症狀 ";

    QuestionsAnswers[488][1] = " 腦瘤 {Neuro}";

    QuestionsAnswers[489][0] = "Severe myoclonic epilepsy of infancy (SMEI), Prolonged, febrile and afebrile, focal and generalized tonic-clonic seizures, myoclonic and atypical absence seizures appear between the age of 1 and 4 years ";

    QuestionsAnswers[489][1] = " Dravet Syndrome {Neuro}";

    QuestionsAnswers[490][0] = "要同時有 UMN 與 LMN signs ";

    QuestionsAnswers[490][1] = " Amyotrophic lateral sclerosis (ALS) {Neuro}";

    QuestionsAnswers[491][0] = "找不到其他原因的漸進性退化, 1 個區域出現 UMN+LMN sign ";

    QuestionsAnswers[491][1] = " Amyotrophic lateral sclerosis (ALS) (確診) {Neuro}";

    QuestionsAnswers[492][0] = "沒有感覺異常的對稱性肌無力, 近端肌肉無力, atrophy與 hyporeflexia ";

    QuestionsAnswers[492][1] = " Myopathy {Neuro}";

    QuestionsAnswers[493][0] = "lumbar lordosis, calf pseudohypertrophy, 對稱性的近端肌無力，且下肢較嚴重 ";

    QuestionsAnswers[493][1] = " Duchenne muscular dystrophy（DMD）{Neuro}";

    QuestionsAnswers[494][0] = "CK 上升 10 倍正常值 ";

    QuestionsAnswers[494][1] = " Duchenne muscular dystrophy（DMD）(診斷)(非gold standard) {Neuro}";

    QuestionsAnswers[495][0] = "Heliotrope rash, Gottron΄s papules, Dilated nailbed capillaries ";

    QuestionsAnswers[495][1] = " Dermatomyositis {Neuro}";

    QuestionsAnswers[496][0] = "myocarditis, interstitial lung disease, malignancy ";

    QuestionsAnswers[496][1] = " Dermatomyositis (看到皮肌炎要想到其他地方可能也有問題) {Neuro}";

    QuestionsAnswers[497][0] = "五歲 跑得慢，賽跑都是最後一名, 十七歲 雙腳無力，穿脫鞋會掉, 二十歲 慢慢爬樓梯都吃力 走路不穩容易跌倒 常不知不覺手腳受傷，傷口難癒合 ";

    QuestionsAnswers[497][1] = " Charcot-Marie-Tooth Disease（CMT），亦稱 Hereditary Motor Sensory Neuropathy （HMSN）";

    QuestionsAnswers[498][0] = "Kayser Fleischer rings, Severe Neurologic synptoms ";

    QuestionsAnswers[498][1] = " Wilson’s disease (確診)（Leipzig scoring system） {Neuro}";

    QuestionsAnswers[499][0] = "一個女病人，單純 focal seizure，吃藥控制得不錯，brain MRI 也正常。, 妹妹有，兄弟、兒子也有，且男生症狀較嚴重。, 兒子在小兒科治療，而且 brain MRI 發現 pachygyria， ";

    QuestionsAnswers[499][1] = " Lissencephaly {Neuro}";

    QuestionsAnswers[500][0] = "41 歲男性，自成年起，反覆癲癇發作。, 33 歲 突發性左側視野缺損，被診斷為右側枕葉中風, 41 歲 記憶及認知功能逐漸退步 ";

    QuestionsAnswers[500][1] = " Mitochondrial myopathy, Encephalopathy, LActic acidosis, and Stroke like episodes, MELAS {Neuro}";

    QuestionsAnswers[501][0] = "Myelopathy, Radiculopathy, Gait disturbance ";

    QuestionsAnswers[501][1] = " C-Spine degeneration {Neuro}";

    QuestionsAnswers[502][0] = "Non-infectious, acute, monophasic, polyfocal, inflammatory demyelinating events of CNS, in children. ";

    QuestionsAnswers[502][1] = " Acute Disseminated Encephalomyelitis（ADEM） {Neuro}";

    QuestionsAnswers[503][0] = "T2WI 上，多個、高訊號、不對稱、patchy且界線模糊的病灶，兩個大腦半球都有。, subcortical 及 cortical gray-white matter junction, cyto-albuminologic dissociation, oligoclonal band 陰性 ";

    QuestionsAnswers[503][1] = " Acute Disseminated Encephalomyelitis（ADEM） (確診) {Neuro}";

    QuestionsAnswers[504][0] = "Non-infectious, Chronic, Relapsing & Remitting, inflammatory demyelinating events of CNS. ";

    QuestionsAnswers[504][1] = " Multiple Sclerosis （MS） {Neuro}";

    QuestionsAnswers[505][0] = "一次發作 + MRI 有 DIS & DIT ";

    QuestionsAnswers[505][1] = " Multiple Sclerosis （MS） (確診)(McDonald) {Neuro}";

    QuestionsAnswers[506][0] = "發病年齡 39, 女, Brain MRI 正常, Spinal MRI LETM, longitudinally extensive, central lesions, CSF WBC>50, PMN和mononuclear cells為主, CSF oligoclonal band negative ";

    QuestionsAnswers[506][1] = " NMO (NMO vs. MS★) {Neuro}";

    QuestionsAnswers[507][0] = "AQP4 Ab 陽性, Area postrema syndrome ";

    QuestionsAnswers[507][1] = " NMOSD (確診) {Neuro}";

    QuestionsAnswers[508][0] = "快速惡化的行為異常, dyskinesia、memory deficit, 自律神經系統異常 ";

    QuestionsAnswers[508][1] = " Autoimmune Encephalitis（AE）：Prototype 是 Anti-NMDA receptor {Neuro}";

    QuestionsAnswers[509][0] = "onset <3 months, New focal CNS findings, 排除其他可能 ";

    QuestionsAnswers[509][1] = " Autoimmune Encephalitis（自體免疫腦炎，AE）：Prototype 是 Anti-NMDA receptor (確診) {Neuro}";

    QuestionsAnswers[510][0] = "DTR 下降, paresthesia、燒灼感、疼痛, orthostatic hypotension ";

    QuestionsAnswers[510][1] = " 周邊神經異常 {Neuro}";

    QuestionsAnswers[511][0] = "Tinel’s sign, Phalen test：手掌三指半區域產生麻木、刺痛感 ";

    QuestionsAnswers[511][1] = " Median Nerve Lesion (確診) {Neuro}";

    QuestionsAnswers[512][0] = "Ape hand/Claw hand ";

    QuestionsAnswers[512][1] = " Ulnar Nerve Lesion {Neuro}";

    QuestionsAnswers[513][0] = "separate , noncontiguous神經病變, Random、multifocal，且病程進展迅速 ";

    QuestionsAnswers[513][1] = " Multiple Mononeuropathy {Neuro}";

    QuestionsAnswers[514][0] = "長度相關性周邊神經病變, 對稱出現, 輕至中度 ";

    QuestionsAnswers[514][1] = " Polyneuropathy {Neuro}";

    QuestionsAnswers[515][0] = "Polyneuropathy, Vascular ";

    QuestionsAnswers[515][1] = " Mononeuropathy multiplex (PN DDx) {Neuro}";

    QuestionsAnswers[516][0] = "遠端腳麻感覺 -> 近端肌肉開始無力 -> Areflexia -> 度過急性期就幾乎完全恢復，病程約 3 個月 ";

    QuestionsAnswers[516][1] = " Guillain-Barre Syndrome {Neuro}";

    QuestionsAnswers[517][0] = "CSF (cerebrospinal fluid): 高 protein 含量,稍微上升的白血球數量, 電生理異常(NCV/ EMG) ";

    QuestionsAnswers[517][1] = " Guillain-Barre Syndrome (確診) {Neuro}";

    QuestionsAnswers[518][0] = "Excessive fatigability, 單側Ptosis, 使用Anti-cholinesterase／Cholinesterase inhibitor時，症狀得到緩解。 ";

    QuestionsAnswers[518][1] = " Myasthenia Gravis {Neuro}";

    QuestionsAnswers[519][0] = "AchR 抗體 陽性 ";

    QuestionsAnswers[519][1] = " Myasthenia Gravis {Neuro}";

    QuestionsAnswers[520][0] = "對稱性雙側近端肌肉無力，特別是上臂、肩胛肌、大腿。 ";

    QuestionsAnswers[520][1] = " Polymyositis {Neuro}";

    QuestionsAnswers[521][0] = "無力症狀大於 4 週, Creatine Kinase(CK)大於正常值 8 倍, 神經傳導(NCV)/肌電圖(EMG)：EKG 波形的振幅比正常人小很多。 ";

    QuestionsAnswers[521][1] = " Idiopathic Inflammatory Myopathy {Neuro}";

    QuestionsAnswers[522][0] = "Brief symptom rating scale-5, BSRS-5 前五題總分小於 3 分 ";

    QuestionsAnswers[522][1] = " 排除自殺危險 {Psy}";

    QuestionsAnswers[523][0] = "妄想, 幻覺, 出現一個月以上, 社會/職業功能障礙, 連續有病徵至少六個月以上, 排除分裂性情感疾患及情感性疾患, 無 其他發展性疾患病史 ";

    QuestionsAnswers[523][1] = " Schizophrenia (確診)(DSM 5 Criteria) {Psy}";

    QuestionsAnswers[524][0] = "Euphoric and hyperactivity ≥ 1 week, Grandiosity, need less sleep, spending, sexuality, misjudgment, Marked social/occupational impact, hospitalization, psychosis, Not 2°to medical disorder, substance abuse ";

    QuestionsAnswers[524][1] = " Manic episode (確診) {Psy}";

    QuestionsAnswers[525][0] = "情緒：elevated, 不太需要睡覺, 穿著inappropriate ";

    QuestionsAnswers[525][1] = " Manic {Psy}";

    QuestionsAnswers[526][0] = "思考變化, thought blocking, 聽幻覺 ";

    QuestionsAnswers[526][1] = " 思覺失調症 {Psy}";

    QuestionsAnswers[527][0] = "一個月內顯著出現 妄想,幻覺, 發作的徵狀持續六個月以上, 發作後大部分時間，功能顯著比未發作前降低, 沒有同時出現鬱症或躁症發作, 非為藥物使用或其他疾病引起 ";

    QuestionsAnswers[527][1] = " 思覺失調症 (確診)(DSM-V) {Psy}";

    QuestionsAnswers[528][0] = "對生活中各種大小事感到過度焦慮並且無法控制、至少持續六個月！, 病人不知道自己在怕什麼！ ";

    QuestionsAnswers[528][1] = " Generalized anxiety disorder (GAD) (確診) {Psy}";

    QuestionsAnswers[529][0] = "A persistent fear of social situations in which the person is exposed to unfamiliar people., Exposure to the feared situation almost invariably provokes anxiety, The person regognizes that this fear is unreasonable. ";

    QuestionsAnswers[529][1] = " Social anxiety disorder {Psy}";

    QuestionsAnswers[530][0] = "反覆地忘東忘西, 動作很多，停不下來, 動作很慢 ";

    QuestionsAnswers[530][1] = " ADHD {Psy}";

    QuestionsAnswers[531][0] = "粗心大意, 無法遵守指示, 組織工作困難, 逃避需要持續用腦力的工作, 遺漏需要的東西, 容易被外界轉移注意力, 手腳亂動, 坐著也扭來扭去, 無法安靜坐著或常離座, 無法安靜遊戲, 話未問完，就搶著回答, 缺乏耐心等待, 常打擾別人, 症狀持續 6 個月以上, 在 12 歲以前出現, 在 2 個或以上的情境下呈現, 造成社會功能障礙, 無法由其他精神疾病解釋 ";

    QuestionsAnswers[531][1] = " ADHD 注意力不足過動症 (確診)(DSM-5 診斷標準) {Psy}";

    QuestionsAnswers[532][0] = "在社交‐情緒相互性有缺損, 侷限、重複的行為, 在發展早期就存在 ";

    QuestionsAnswers[532][1] = " ASD {Psy}";

    QuestionsAnswers[533][0] = "情緒低落, 提不起勁, 沒有興趣 ";

    QuestionsAnswers[533][1] = " 憂鬱症 {Psy}";

    QuestionsAnswers[534][0] = "情緒低落, appetite change, sleep disturbances, 激躁不安, fatigue, 同時存在並持續>2 weeks, 社交dysfunction, 無法以其他內外科疾病、物質濫用來解釋, 從未有躁期或輕躁期發作 ";

    QuestionsAnswers[534][1] = " MDD (確診) {Psy}";

    QuestionsAnswers[535][0] = "Hazardous use, Social/interpersonal problems related to use ";

    QuestionsAnswers[535][1] = " Addiction (確診)(DSM-5 Substance Use Disorders) {Psy}";

    QuestionsAnswers[536][0] = "口齒不清、運動不協調、步態不穩 ";

    QuestionsAnswers[536][1] = " 酒精中毒 {Psy}";

    QuestionsAnswers[537][0] = "憂鬱心情 (持續二周以上), 活動顯著減少, 明顯的體重下降 ";

    QuestionsAnswers[537][1] = " 老年憂鬱症 {Psy}";

    QuestionsAnswers[538][0] = "表情愁苦、易流淚、時常搖頭嘆息、說話聲音細小、低頭不語, 對生活失去興趣, 睡眠障礙 ";

    QuestionsAnswers[538][1] = " 老年憂鬱症 (重度憂鬱症) {Psy}";

    QuestionsAnswers[539][0] = "胃口變好, 體重上升, Hypersomnia ";

    QuestionsAnswers[539][1] = " 女性憂鬱症 {Psy}";

    QuestionsAnswers[540][0] = "腹脹、乳房脹痛、關節或肌肉疼痛、頭痛, 憂鬱、焦慮、心情不定、易怒, 食慾增加、嘴饞、失眠、hypersomnia ";

    QuestionsAnswers[540][1] = " Premenstrual syndrome (PMS) {Psy}";

    QuestionsAnswers[541][0] = "排除其他內分泌疾病, 情緒沮喪, 腹部水腫, 胸部緊繃, 四肢浮腫, 體重上升, 關節疼痛 ";

    QuestionsAnswers[541][1] = " Premenstrual Dysphoric Disorder (PMDD) (確診) {Psy}";

    QuestionsAnswers[542][0] = "夜間盜汗, 睡眠障礙, 關節疼痛 ";

    QuestionsAnswers[542][1] = " Menopause {Psy}";

    QuestionsAnswers[543][0] = "Fluctuated consciousness + unable to keep attention appropriately ";

    QuestionsAnswers[543][1] = " Delirium (確診) {Psy}";

    QuestionsAnswers[544][0] = "腫瘤, Dysphoria, Anhedonia, Hopelessness; worthlessness ";

    QuestionsAnswers[544][1] = " 需要被治療的憂鬱症 (憂鬱症與腫瘤) {Psy}";

    QuestionsAnswers[545][0] = "中風, Manic symptoms, Anxiety symptoms, Apathy ";

    QuestionsAnswers[545][1] = " 中風後常出現的精神症狀 {Psy}";

    QuestionsAnswers[546][0] = "Snoring ";

    QuestionsAnswers[546][1] = " Obstructive Sleep Apnea Syndrome (OSAS) {Psy}";

    QuestionsAnswers[547][0] = "Urge to move the legs dysesthesias, Rest induced, Gets better with activity ";

    QuestionsAnswers[547][1] = " Restless Leg syndrome,RLS，也叫做 Wilis-Ekbom Disease {Psy}";

    QuestionsAnswers[548][0] = "Excessive daytime sleepiness, Cataplexy, Hypnagogic hallucination, Sleep Paralysis ";

    QuestionsAnswers[548][1] = " Narcolepsy (Tetrad) {Psy}";

    QuestionsAnswers[549][0] = "Multiple Sleep Latency Test(MSLT)：五次測試平均入睡時間＜８分鐘且有≧２次進入 REM ";

    QuestionsAnswers[549][1] = " 猝睡症 (診斷最後步驟) {Psy}";

    QuestionsAnswers[550][0] = "suspicious, 冷漠、疏離，且無法建立正常人際關係。不易相信別人，將他人行為是為威脅或意圖不軌。過度警覺、懷疑 ";

    QuestionsAnswers[550][1] = " Paranoid {Psy}";

    QuestionsAnswers[551][0] = "擔心、害怕、顫抖、肌肉緊繃、坐立不安、戰戰兢兢、易受驚嚇、煩躁、心悸、胸悶、冒冷汗、口乾、頭暈、吸不到空氣 ";

    QuestionsAnswers[551][1] = " Anxiety disorders {Psy}";

    QuestionsAnswers[552][0] = "在兩個星期內同時有 情緒沮喪,對本來有興趣的事物失去興趣,有明顯的體重增加,失眠,肢體上的變好動, 不符合其他混合性的心理失常, 已足夠造成日常生活的機能失常, 不是因為受到毒品或醫藥副作用的影響, 不能夠用個人的不幸遭遇引起的暫時性悲傷所能解釋 ";

    QuestionsAnswers[552][1] = " Depression (確診) {Psy}";

    QuestionsAnswers[553][0] = "情緒亢奮、愉悅、自信滿滿、過度樂觀、興趣增加、好管閒事、計畫一堆、慷慨大方、花錢如流水、突然熱衷於政治、睡眠減少、體力旺盛、急躁、易怒、攻擊、破壞行為、做出魯莽的事 ";

    QuestionsAnswers[553][1] = " Mania, Bipolar disorder {Psy}";

    QuestionsAnswers[554][0] = "無法專注於細節的部份, 無法好好坐著，會任意離開座位, 無法聽進別人對他說話的內容 ";

    QuestionsAnswers[554][1] = " ADHD {Psy}";

    QuestionsAnswers[555][0] = "對於剛發生的事情全部不記得, 忘了自己把東西放在那裡，忘了關水龍頭、瓦斯。, 可自己處理生活起居 ";

    QuestionsAnswers[555][1] = " 失智症 {Psy}";

    QuestionsAnswers[556][0] = "小孩, 發燒+Diffuse erythema, 經過半天開始Generalized desquamation ";

    QuestionsAnswers[556][1] = " Staphylococcal Scalded Skin Syndrome (SSSS， 4S) {Integ}";

    QuestionsAnswers[557][0] = "皮膚皺摺的地方 會癢的疹子, 晚上會更癢, Barrow ";

    QuestionsAnswers[557][1] = " Scabies {Integ}";

    QuestionsAnswers[558][0] = "KOH smear：見到蟲體 ";

    QuestionsAnswers[558][1] = " Scabies (確診)（最常用） {Integ}";

    QuestionsAnswers[559][0] = "Tzanck smear：看到Multinucleated giant cell ";

    QuestionsAnswers[559][1] = " Herpes Simplex Virus（HSV） (確診) {Integ}";

    QuestionsAnswers[560][0] = "疹子由頭臉往軀幹長, Lesions of all stages, 水泡周圍有一圈紅暈，書上稱它叫做 Dew drop on a rose petal ";

    QuestionsAnswers[560][1] = " Varicella/Chickenpox {Integ}";

    QuestionsAnswers[561][0] = "erythematous nodule（painless）, regional lymphadenopathy（non-tender） ";

    QuestionsAnswers[561][1] = " Primary Syphilis： chancre {Integ}";

    QuestionsAnswers[562][0] = "TPHA (+) ";

    QuestionsAnswers[562][1] = " Syphilis (確診)(Treponemal test) {Integ}";

    QuestionsAnswers[563][0] = "Painful ulcer和Painful lymphadenopathy ";

    QuestionsAnswers[563][1] = " Chancroid {Integ}";

    QuestionsAnswers[564][0] = "排成一列的細胞，長得像一排魚，稱為 school of fish ";

    QuestionsAnswers[564][1] = " Chancroid (確診) {Integ}";

    QuestionsAnswers[565][0] = "painless的 erosion/ulcer，幾天後自己癒合, tender的lymphadenopathy，走路會一拐一拐, 直腸會痛、Bloody discharge ";

    QuestionsAnswers[565][1] = " Lymphogranuloma venereum {Integ}";

    QuestionsAnswers[566][0] = "painless的 ulcer, 無淋巴腫大 ";

    QuestionsAnswers[566][1] = " Granuloma Inguinale {Integ}";

    QuestionsAnswers[567][0] = "safety-pin的 Donovan body ";

    QuestionsAnswers[567][1] = " Granuloma Inguinale (確診) {Integ}";

    QuestionsAnswers[568][0] = "painful ulcer, Grouped vesicles ";

    QuestionsAnswers[568][1] = " Herpes simplex Virus（HSV） {Integ}";

    QuestionsAnswers[569][0] = "Tzanck smear 可看到 multinucleated giant cell ";

    QuestionsAnswers[569][1] = " Herpes simplex Virus（HSV） (確診) {Integ}";

    QuestionsAnswers[570][0] = "Kaposi sarcoma, xerosis, pruritus ";

    QuestionsAnswers[570][1] = " AIDS (AIDS 的皮膚黏膜表徵) {Integ}";

    QuestionsAnswers[571][0] = "Erythema multiforme ";

    QuestionsAnswers[571][1] = " Drug eruption {Integ}";

    QuestionsAnswers[572][0] = "STD, Painful ucer, Tzanck smear 沒看到 multinucleated giant cell ";

    QuestionsAnswers[572][1] = " Chancroid (看到Genital ulcer的診斷流程) {Integ}";

    QuestionsAnswers[573][0] = "Auspitz sign, Nail pits, peripheral and axial arthritis，且一旦變形之後很難回復 ";

    QuestionsAnswers[573][1] = " psoriasis（發音：p 不發音） {Integ}";

    QuestionsAnswers[574][0] = "inflammatory articular disease, Negative test result for RF, Dactylitis, Radiological evedence of juxta-articular new bone formation ";

    QuestionsAnswers[574][1] = " Psoriatic arthritis (PsA) (確診) (CASPAR classification criteria) {Integ}";

    QuestionsAnswers[575][0] = "atrophy, telangiectasia, hyperpigmentaion, 惡性的cutaneous T-cell lymphoma (CTCL) ";

    QuestionsAnswers[575][1] = " LPP (retiform parapsoriasis→幾乎100%發展成mycosis fungoides)(LPP vs. SPP) {Integ} ";

    QuestionsAnswers[576][0] = "多發性erythematous papule，伴有vesiculation、pustules，甚至hemorrhagic necrosis, 痊癒後有類似水痘疤的varioliform scars, 頭痛、全身乏力、關節痛、廣泛性淋巴結腫大、發燒和菌血症 ";

    QuestionsAnswers[576][1] = " PLEVA {Integ}";

    QuestionsAnswers[577][0] = "Purple, Polygonal, Pruritic, Papules ";

    QuestionsAnswers[577][1] = " Lichen planus(LP) (4P) {Integ}";

    QuestionsAnswers[578][0] = "atrophy, telangiectasia6. -Hyper/hypo-pigmentation ";

    QuestionsAnswers[578][1] = " Large plaque parapsoriasis(LPP) (Triad) {Integ}";

    QuestionsAnswers[579][0] = "對稱, 侷限, 邊緣明確, 沒有潰瘍, 纖維堆疊得較compact, 種類、大小較uniform, 聚集的細胞smooth border ";

    QuestionsAnswers[579][1] = " 良性 (從結構上區分良性惡性) {Integ}";

    QuestionsAnswers[580][0] = "長超過傷口，造成癢、痛、緊，無法忍受 ";

    QuestionsAnswers[580][1] = " Keloids / hypertrophic scars {Integ}";

    QuestionsAnswers[581][0] = "出生數週後開始成長 8～18 個月左右, 之後 5～8 年會慢慢消退，直至normal ";

    QuestionsAnswers[581][1] = " Hemangioma of infancy (HOI) ——屬於 Vascular tumor {Integ}";

    QuestionsAnswers[582][0] = "一開始為紅斑，發展成 hypertrophic lesion ";

    QuestionsAnswers[582][1] = " Actinic keratosis（AK） {Integ}";

    QuestionsAnswers[583][0] = "pink, pearly-white papule, prominent telaniectasis, rodent ucler ";

    QuestionsAnswers[583][1] = " Basal cell carcinoma（BCC） (Nodular) {Integ}";

    QuestionsAnswers[584][0] = "Non palpable, <1 cm ";

    QuestionsAnswers[584][1] = " Macule (Primary Morphology) {Integ}";

    QuestionsAnswers[585][0] = "由增厚及角化不正常的角質層脫落而成 ";

    QuestionsAnswers[585][1] = " scale (Secondary lesion) {Integ}";

    QuestionsAnswers[586][0] = "itching、 redness、papulovesicles和scaling ";

    QuestionsAnswers[586][1] = " Eczema {Integ}";

    QuestionsAnswers[587][0] = "Pruritus, 嬰兒facial、extensor, IgE 升高 ";

    QuestionsAnswers[587][1] = " Atopic Dermatitis {Integ}";

    QuestionsAnswers[588][0] = "erythema、scaling、pruritus、prominent follicular opening, 頭皮(會癢)、眉毛處(glabella)、nasolabial fold、retroauricular area、胸腔處 ";

    QuestionsAnswers[588][1] = " Seborrheic dermatitis {Integ}";

    QuestionsAnswers[589][0] = "seborrhea, acne、amenorrhoea, hirsutism, rapid progressive pattern hair loss ";

    QuestionsAnswers[589][1] = " hyperandrogenism (SAHA syndrome) {Integ}";

    QuestionsAnswers[590][0] = "discoid with follicular plugging and adherent scale, Erythema、scale,and pigmentary changes are seen in the center of discoid lesions ";

    QuestionsAnswers[590][1] = " Discoid lupus erythematosus {Integ}";

    QuestionsAnswers[591][0] = "Superficial, subcorneal,noninflammatory vesicles, 溫暖環境的嬰兒 ";

    QuestionsAnswers[591][1] = " Miliaria crystallina {Integ}";

    QuestionsAnswers[592][0] = "很難聞的體味 ";

    QuestionsAnswers[592][1] = " Apocrine Bromhidrosis {Integ}";

    QuestionsAnswers[593][0] = "小孩, 嘴唇與 buccal 出現黑斑 ";

    QuestionsAnswers[593][1] = " Congenital Hypermelanosis with Lentiginosis：Peutz–Jeghers Syndrome {Integ}";

    QuestionsAnswers[594][0] = "褐色斑點，邊緣不規則(花花的)，色素不均勻 ";

    QuestionsAnswers[594][1] = " Melasma {Integ}";

    QuestionsAnswers[595][0] = "皮膚一塊黑黑的長出毛，scapula region ";

    QuestionsAnswers[595][1] = " Becker's Nevus (Becker Hamartoma, Becker Melanosis) {Integ}";

    QuestionsAnswers[596][0] = "annular lesion、active border, 界線清楚，特別紅、隆起，皮屑多, central clearing ";

    QuestionsAnswers[596][1] = " Tinea corporis {Integ}";

    QuestionsAnswers[597][0] = "皮膚免疫反應(小水泡)為一遠端原發性黴菌感染, 在 id reaction 處未能發現 hyphae 菌絲, 在原發性黴菌感染治好後，id reaction 也隨之消失 ";

    QuestionsAnswers[597][1] = " Dermatophytid reaction (確診) {Integ}";

    QuestionsAnswers[598][0] = "嘴角 erythema, fissuring, maceration 與soreness ";

    QuestionsAnswers[598][1] = " Oral candidiasis {Integ}";

    QuestionsAnswers[599][0] = "在皮膚與黏膜出現flaccid blister,大面積,易破, Positive Nikolsky's sign, secondary infection、伺機感染、脫水 ";

    QuestionsAnswers[599][1] = " Pemphigus vulgaris, PV {Integ}";

    QuestionsAnswers[600][0] = "可觀察到表皮層 intercellular 有 IgG auto-Ab 和 antigen 沉積，像蕾絲狀, No complement involvement, Desmogleins 為主(Dsg3、Dsg1) ";

    QuestionsAnswers[600][1] = " Pemphigus vulgaris, PV {Integ}";

    QuestionsAnswers[601][0] = "難以治療、intractable painful mucosal erosions, 水泡沒那麼多、polymorphous skin lesions ";

    QuestionsAnswers[601][1] = " Paraneoplastic pemphigus 或 Steven-Johnson syndrome {Integ}";

    QuestionsAnswers[602][0] = "intraepidermal acantholysis, interface dermatitis, intercellular有 IgG 和補體沈積，多一層在 basement membrane zone ";

    QuestionsAnswers[602][1] = " Paraneoplastic pemphigus （從切片就可跟 SJS 進行鑑別！） {Integ}";

    QuestionsAnswers[603][0] = "看得到、裂解在深處的large tense blisters on erythematous skin, intertriginous regions, Negative Nikolsky’s sign ";

    QuestionsAnswers[603][1] = " Bullous pemphigoid (BP) {Integ}";

    QuestionsAnswers[604][0] = "裂解在 lamina lucida, 發炎細胞多，dermis 跟 blisters 都 busy, DIF：linear complement 3 (C3) and IgG deposition ";

    QuestionsAnswers[604][1] = " Pemphigoid (確診) {Integ}";

    QuestionsAnswers[605][0] = "孕婦, 很癢很癢的 papulovesicles, 主要分佈在肚臍周圍，蔓延到軀幹、四肢 ";

    QuestionsAnswers[605][1] = " Pemphigoid (herpes) gestationis {Integ}";

    QuestionsAnswers[606][0] = "皮膚增厚變粗、關節活動受限、eruptive xanthomas、acanthosis nigricans, 下肢潰瘍, necrobiosis lipoidica, granuloma annulare, acquired perforating dermatosis ";

    QuestionsAnswers[606][1] = " Cutaneous change of DM {Integ}";

    QuestionsAnswers[607][0] = "Well demarcated atrophic yellow-brown plaques & Glazed-porcelain appearance, Ulcer : 傷口下有 granulomatous inflammation 和 collagen degeneration ";

    QuestionsAnswers[607][1] = " Necrobiosis lipoidica {Integ}";

    QuestionsAnswers[608][0] = "嘴巴跟舌頭出現hyperkeratosis ";

    QuestionsAnswers[608][1] = " Acanthosis Nigricans (AN) {Integ}";

    QuestionsAnswers[609][0] = "Photosensitivity, Hyper/Hypo pigmentation, Scerodermoid change ";

    QuestionsAnswers[609][1] = " Porphyria cutanea tarda（PCT） {Integ}";

    QuestionsAnswers[610][0] = "Easy bruising 眼部, Macroglossia ";

    QuestionsAnswers[610][1] = " AL amyloidosis (AL：amyloid light-chain) {Integ}";

    QuestionsAnswers[611][0] = "Crystal violet，被染成深紫色 ";

    QuestionsAnswers[611][1] = " Amyloidosis (確診) {Integ}";

    QuestionsAnswers[612][0] = "Bilateral painless non-pitting nodules and plaques, 摸起來 waxy and indurated，很難壓下去, pretibial，延伸到腳背 ";

    QuestionsAnswers[612][1] = " Pretibial myxedema (現今大部分都改稱 thyroid dermatopathy) {Integ}";

    QuestionsAnswers[613][0] = "butterfly rash, nasolabial fold sparing, 全身性的症狀 ";

    QuestionsAnswers[613][1] = " Acute cutaneous LE (ACLE) {Integ}";

    QuestionsAnswers[614][0] = "Antinuclear antibodies (ANA) at a titer of ≥ 1:80 on HEp-2 cells, Non-scarring alopecia, Acute pericarditis, Joint involvement ";

    QuestionsAnswers[614][1] = " SLE (確診) {Integ}";

    QuestionsAnswers[615][0] = "對稱近端肌肉無力, 肌肉切片有發炎細胞, 血液檢查中骨骼肌酵素濃度上升, 典型的皮肌炎皮膚表現 ";

    QuestionsAnswers[615][1] = " Dermatomyositis (確診) {Integ}";

    QuestionsAnswers[616][0] = "Heliotropic eyelids, Gottron sign, V sign ";

    QuestionsAnswers[616][1] = " Dermatomyositis {Integ}";

    QuestionsAnswers[617][0] = "疼痛 going down the leg from the lower back、神經功能異常(感覺、運動等) ";

    QuestionsAnswers[617][1] = " Sciatica {Ortho}";

    QuestionsAnswers[618][0] = "局部下背痛, 動作會造成疼痛, 神經理學檢查正常 ";

    QuestionsAnswers[618][1] = " 脊椎的退化性疾病 Dysfunction (退化三期) {Ortho}";

    QuestionsAnswers[619][0] = "漸漸發展的疼痛，包含下背部、臀部、下肢等, 雙側, 神經性跛⾏ ";

    QuestionsAnswers[619][1] = " 腰椎退化性疾病 {Ortho}";

    QuestionsAnswers[620][0] = "跛⾏距離 每次不⼀樣, 停⽌動作後緩解 慢, 疼痛緩解⽅法 flexion、坐下, 爬坡 不痛, 騎腳踏⾞ 不痛, 症狀發⽣ 由近端往遠端, 肌⾁無萎縮, 背痛, ⽪膚表現 ";

    QuestionsAnswers[620][1] = " 神經性 (vs 血管性跛行) {Ortho}";

    QuestionsAnswers[621][0] = "按壓 A1 pulley會痛，且⼿指無法正常伸直 ";

    QuestionsAnswers[621][1] = " trigger finger/stenosing tenosynovitis {Ortho}";

    QuestionsAnswers[622][0] = "快速腫脹、疼痛, 外觀改變、功能喪失, Snuff box 處感到壓痛與異聲產⽣ ";

    QuestionsAnswers[622][1] = " Scaphoid fracture {Ortho}";

    QuestionsAnswers[623][0] = "患者的的第四指在放鬆的情況下無法與其他三指⼀樣彎曲 ";

    QuestionsAnswers[623][1] = " Flexor tendon injuries {Ortho}";

    QuestionsAnswers[624][0] = "橈側三指半會酸⿇及刺痛感，⼿掌不會。, ⼿腕在晚上特別⿇痛, ⼤⿂際肌群萎縮，⼿腕無⼒ ";

    QuestionsAnswers[624][1] = " Carpal Tunnel Syndrome {Ortho}";

    QuestionsAnswers[625][0] = "Dark amber urine, Hypovolemia, Metabolic acidosis ";

    QuestionsAnswers[625][1] = " Crush syndrome=Traumatic rhabdomyolysis {Ortho}";

    QuestionsAnswers[626][0] = "Blue sclera, Hearing loss, Dentinofenesis ";

    QuestionsAnswers[626][1] = " Osteogenesis Imperfecta {Ortho}";

    QuestionsAnswers[627][0] = "Impingement Sign（此測試名稱為 Neer test） ";

    QuestionsAnswers[627][1] = " 旋轉肌群受傷 {Ortho}";

    QuestionsAnswers[628][0] = "Tinel Sign ";

    QuestionsAnswers[628][1] = " cubital tunnel syndrome或carpal tunnel syndrome {Ortho}";

    QuestionsAnswers[629][0] = "Phalen’s. test ";

    QuestionsAnswers[629][1] = " Carpal tunnel syndrome {Ortho}";

    QuestionsAnswers[630][0] = "Patrick’s test ";

    QuestionsAnswers[630][1] = " 問題在於髖關節 {Ortho}";

    QuestionsAnswers[631][0] = "Anterior drawer test ";

    QuestionsAnswers[631][1] = " 前十字韌帶損傷或斷裂 {Ortho}";

    QuestionsAnswers[632][0] = "Thompson test ";

    QuestionsAnswers[632][1] = " 阿基里斯腱斷裂 {Ortho}";

    QuestionsAnswers[633][0] = "Patellar tendon reflex ";

    QuestionsAnswers[633][1] = " 檢查 L4 是否有 lesion {Ortho}";

    QuestionsAnswers[634][0] = "Forward-bending test (Adam's test) ";

    QuestionsAnswers[634][1] = " Scoliosis {Ortho}";

    QuestionsAnswers[635][0] = "Night pain, 10-20 歲, 膝關節 ";

    QuestionsAnswers[635][1] = " 骨腫瘤 (原發性) {Ortho}";

    QuestionsAnswers[636][0] = "13 歲男性, 生長板未癒合, 長在 epiphysis ";

    QuestionsAnswers[636][1] = " Chondroblastoma (診斷思路) {Ortho}";

    QuestionsAnswers[637][0] = "5-35y/o, Night pain, 小小的 nidus ";

    QuestionsAnswers[637][1] = " Osteoid Osteoma (OO) {Ortho}";

    QuestionsAnswers[638][0] = "疼痛(尤其夜晚), 可摸到腫塊, 動作受限 ";

    QuestionsAnswers[638][1] = " Classic osteosarcoma {Ortho}";

    QuestionsAnswers[639][0] = "疼痛(尤其夜晚), Sunburst, Codman′s triangle ";

    QuestionsAnswers[639][1] = " Classic osteosarcoma {Ortho}";

    QuestionsAnswers[640][0] = "疼痛、發燒、倦怠、厭食, 體重減輕, CRP 與 ESR 升高 ";

    QuestionsAnswers[640][1] = " Ewing′s Sarcoma {Ortho}";

    QuestionsAnswers[641][0] = "疼痛、腫脹、ecchymosis, Painful ROM：肩膀不太能動, Displacement ";

    QuestionsAnswers[641][1] = " Clavicle Fracture {Ortho}";

    QuestionsAnswers[642][0] = "< 1y old fracture, 營養不良、體重過輕、全身健康狀況不佳。, 社經階層較低，生長環境擁擠。 ";

    QuestionsAnswers[642][1] = " 兒虐 (依兒童福利法，要通報) {Ortho}";

    QuestionsAnswers[643][0] = "Raccoon eye sign, 內臟受傷, 顱骨骨折、肋骨骨折 ";

    QuestionsAnswers[643][1] = " 兒虐 {Ortho}";

    QuestionsAnswers[644][0] = "三歲以下, Trendelenburg gait, metatarsus adduction ";

    QuestionsAnswers[644][1] = " Developmental Dysplasia of Hip , DDH {Ortho}";

    QuestionsAnswers[645][0] = "股骨頭缺血性壞死：3-8歲, 髖部疼痛、大腿及膝蓋內側疼痛跛行 ";

    QuestionsAnswers[645][1] = " Legg-Calve-Perthe disease(LCPD) {Ortho}";

    QuestionsAnswers[646][0] = "9-14 歲，肥胖男孩，髖部疼痛、大腿及膝蓋內側疼痛、跛行、患腿外轉 ";

    QuestionsAnswers[646][1] = " Slipped capital femoral epiphysis (SCFE) {Ortho}";

    QuestionsAnswers[647][0] = "身高 <3rd percentile line ";

    QuestionsAnswers[647][1] = " Short stature {Ortho}";

    QuestionsAnswers[648][0] = "有人要拿球棒打你，你手舉起來要防衛然後你的 ulna 就被打斷了 ( QQ ...痛呀... ";

    QuestionsAnswers[648][1] = " Monteggia fracture {Ortho}";

    QuestionsAnswers[649][0] = "外型呈現如 dinner fork，骨質疏鬆，另外從 X 光看到 Radial inclination 及 Radial height 減少 ";

    QuestionsAnswers[649][1] = " Colles’ fracture {Ortho}";

    QuestionsAnswers[650][0] = "最常見的腕骨骨折處 ";

    QuestionsAnswers[650][1] = " Scaphoid骨折 {Ortho}";

    QuestionsAnswers[651][0] = "Syndesmosis先受傷→ Fibula →Posterior malleolus→ 最後是內側韌帶受傷/Medial malleolus fracture。 ";

    QuestionsAnswers[651][1] = " Sup-ER（Supination-external rotation） {Ortho}";

    QuestionsAnswers[652][0] = "Bohler angle：Anterior process、posterior facet、tuberosity 三者的位置翻轉，tuberosity 跑到上面去了 ";

    QuestionsAnswers[652][1] = " Calcaneal Fractures {Ortho}";

    QuestionsAnswers[653][0] = "骨頭Shortening, Varus, Internal rotation ";

    QuestionsAnswers[653][1] = " Malunion (Intertrochanteric fracture) {Ortho}";

    QuestionsAnswers[654][0] = "輕微的局部骨頭痛&腫脹, 已出現症狀>2 周, “wall-off” abscess cavity ";

    QuestionsAnswers[654][1] = " Subacute osteomyelitis (Brodie abscess) {Ortho}";

    QuestionsAnswers[655][0] = "Sequestrum ";

    QuestionsAnswers[655][1] = " 骨髓炎 {Ortho}";

    QuestionsAnswers[656][0] = "小孩子發燒, refuse to bear weight、antalgic limp、髖關節腫熱。, 呈現 30~60° flexion、10~15° lateral rotation、10° abduction ";

    QuestionsAnswers[656][1] = " Septic arthritis {Ortho}";

    QuestionsAnswers[657][0] = "關節腫脹，骨頭間被撐開，關節腔空間變大 ";

    QuestionsAnswers[657][1] = " Septic arthritis {Ortho}";

    QuestionsAnswers[658][0] = "Anterior apprehensive test ";

    QuestionsAnswers[658][1] = " 肩關節前位脫臼 {Ortho}";

    QuestionsAnswers[659][0] = "medial elbow pain, flexion contracture, locking and catching ";

    QuestionsAnswers[659][1] = " Painful throwing elbow (Medial instability) {Ortho}";

    QuestionsAnswers[660][0] = "Neer test ";

    QuestionsAnswers[660][1] = " Subacromial impingement {Ortho}";

    QuestionsAnswers[661][0] = "Moving valgus stress test ";

    QuestionsAnswers[661][1] = " Painful throwing elbow (Medial instability) {Ortho}";

    QuestionsAnswers[662][0] = "Pop sound heard, swelling, loss of full range of motion ";

    QuestionsAnswers[662][1] = " ACL tear {Ortho}";

    QuestionsAnswers[663][0] = "posterior drawer test ";

    QuestionsAnswers[663][1] = " PCL 損傷 (確診)(最準確) {Ortho}";

    QuestionsAnswers[664][0] = "pain, instability to actively extend the knee, palpable gap ";

    QuestionsAnswers[664][1] = " Extensor Mechanism (Triad) {Ortho}";

    QuestionsAnswers[665][0] = "pain, >40 歲, patella baja ";

    QuestionsAnswers[665][1] = " Extensor Mechanism {Ortho}";

    QuestionsAnswers[666][0] = "非發炎性, 膝關節的內側, 股骨膝蓋 varus, 軟骨下sclerosis, 形成spur ";

    QuestionsAnswers[666][1] = " OA (OA 與 RA 的鑑別) {Ortho}";

    QuestionsAnswers[667][0] = "Simple fracture ";

    QuestionsAnswers[667][1] = " Low energy trauma*** {Ortho}";

    QuestionsAnswers[668][0] = "T 值<-2.5，且發生骨折 ";

    QuestionsAnswers[668][1] = " Severe Osteoporosis (確診) {Ortho}";

    QuestionsAnswers[669][0] = "關節疼痛, 疼痛起始年齡 30-60, 男生 ";

    QuestionsAnswers[669][1] = " Gout {AIR}";

    QuestionsAnswers[670][0] = "Synovial Fluid: Appearance Transparent, Viscosity High, Cells per mm3 200-2000, % PMNs <10%, Crystals calcium pyrophosphate, Culture Negative ";

    QuestionsAnswers[670][1] = " Osteoarthritis {AIR}";

    QuestionsAnswers[671][0] = "Raynaud's phenomenon ";

    QuestionsAnswers[671][1] = " 血管擴張有問題 {AIR}";

    QuestionsAnswers[672][0] = "dsDNA ";

    QuestionsAnswers[672][1] = " 紅斑性狼瘡（SLE） {AIR}";

    QuestionsAnswers[673][0] = "swan neck deformities, Boutonnière Sign，在第 5 指 ";

    QuestionsAnswers[673][1] = " Rheumatoid Arthritis (RA) {AIR}";

    QuestionsAnswers[674][0] = "機械力傷害, Enthesitis ";

    QuestionsAnswers[674][1] = " seronegative spondyloarthropathy {AIR}";

    QuestionsAnswers[675][0] = "按下去會消退，放開手後又會供起來 ";

    QuestionsAnswers[675][1] = " Wheal {AIR}";

    QuestionsAnswers[676][0] = "針狀的負性偏折光 ";

    QuestionsAnswers[676][1] = " 痛風 {AIR}";

    QuestionsAnswers[677][0] = "ANA (>1:80), Acute pericarditis, Joint involvement ";

    QuestionsAnswers[677][1] = " Systemic Lupus Erythematosus (確診)(EULAR/ACR) {AIR}";

    QuestionsAnswers[678][0] = "Malar rash, Jaccoud′s arthropathy, Pericarditis and pleural effusion ";

    QuestionsAnswers[678][1] = " Systemic Lupus Erythematosus {AIR}";

    QuestionsAnswers[679][0] = "1 個以上關節腫脹, 無法以其他疾病來解釋的滑膜炎, 10 個以上關節侵犯(內含至少一個小關節), 高濃度類風濕因子陽性 ";

    QuestionsAnswers[679][1] = " Rheumatoid Arthritis (RA) (確診)(2010 EULAR/ACR) {AIR}";

    QuestionsAnswers[680][0] = "PIP 和 MCP 變化, 巨噬細胞、肉芽組織包圍壞死纖維形成的結節, 手腕和 MCP 明顯有被吃掉 ";

    QuestionsAnswers[680][1] = " Rheumatoid Arthritis (RA) {AIR}";

    QuestionsAnswers[681][0] = "Skin thickening of the fingers of both hands extending proximal to the metacarpophalangeal joints ";

    QuestionsAnswers[681][1] = " Scleroderma (確診)(2013 ACR / EULAR) {AIR}";

    QuestionsAnswers[682][0] = "Taut skin, Raynaud′s phenomenon, Sclerodactyly ";

    QuestionsAnswers[682][1] = " Scleroderma {AIR}";

    QuestionsAnswers[683][0] = "肌肉無力病變, EMG檢查結果 肌肉病變形式, muscle enzyme ↑(～50 倍), 肌肉切片結果 初級發炎反應CD8/MHC-I 複合體,沒有 vacuoles, 無皮疹鈣化沉積 ";

    QuestionsAnswers[683][1] = " polymyositis(PM) (Inflammatory Myopathies (IM) 診斷分類) {AIR}";

    QuestionsAnswers[684][0] = "Göttron papules, Heliotrope Sign, 淋巴球浸潤 ";

    QuestionsAnswers[684][1] = " Inflammatory Myopathies (IM) (多發性肌炎) {AIR}";

    QuestionsAnswers[685][0] = "Labial salivary gland with focal lymphocytic sialadenitis and focus score of ≥ 1 foci/4mm2, Anti-SS-A/Ro positive ";

    QuestionsAnswers[685][1] = " Sjögren′s Syndrome (確診)(2016) {AIR}";

    QuestionsAnswers[686][0] = "使用 Rose Bengal 染色 缺乏淚液而受損的角膜和結膜上皮細胞, 肺部纖維化 ";

    QuestionsAnswers[686][1] = " Sjögren′s Syndrome {AIR}";

    QuestionsAnswers[687][0] = "pulmonary-renal syndrome, purpura, neuropathy, ANCA associated, Granulomatous, Asthma/eosinophilia ";

    QuestionsAnswers[687][1] = " EGPA (Diagnostic Approach to Small Vessel Vasculitis) {AIR}";

    QuestionsAnswers[688][0] = "≥ 3 months back pain and age of onset < 45 years, Sacroiliitis on imaging, inflammatory pack pain ";

    QuestionsAnswers[688][1] = " Seronegative spondyloarthropathy (確診) {AIR}";

    QuestionsAnswers[689][0] = "逐漸有駝背狀況，同時也有骨質疏鬆, Sacroiliac joint很白, 脖子部分也僵硬 ";

    QuestionsAnswers[689][1] = " Ankylosing spondylitis {AIR}";

    QuestionsAnswers[690][0] = "Hip pain, ESR <20 mm/hour, Radiographic femoral osteophytes ";

    QuestionsAnswers[690][1] = " Osteoarthritis (OA) (確診) {AIR}";

    QuestionsAnswers[691][0] = "osteophyte, reduced joint space, sclerosis ";

    QuestionsAnswers[691][1] = " Advanced Osteoarthritis (Grade III) {AIR}";

    QuestionsAnswers[692][0] = "6 週以上, Inflammatory, Symmetric, Peripheral ";

    QuestionsAnswers[692][1] = " Rheumatoid Arthritis {AIR}";

    QuestionsAnswers[693][0] = "swollen joint 排除 DIP、1st carpometacarpal joint 與 1st metatarsophalangeal joint >10 關節（至少一個小關節）, RF (high+) ";

    QuestionsAnswers[693][1] = " Rheumatoid Arthritis (確診)(ACE/EULAR criteria) {AIR}";

    QuestionsAnswers[694][0] = "Chronic symmetrical peripheral polyarthritis, Insidious, not acute and definite, 關節腫脹、tender、活動範圍受限 ";

    QuestionsAnswers[694][1] = " RA {AIR}";

    QuestionsAnswers[695][0] = "Soft tissue swelling, Juxta-articular osteoporosis, Marginal erosion ";

    QuestionsAnswers[695][1] = " RA {AIR}";

    QuestionsAnswers[696][0] = "Uric acid 組成, 偏振光 陰性, 1st MTP, 針狀, Rat-bite erosions ";

    QuestionsAnswers[696][1] = " Gout (鑑別診斷 Inflammatory 中的 Gout 和 Pseudogout) {AIR}";

    QuestionsAnswers[697][0] = "表現出thromboembolism events，在年輕的時候, Recurrent abortion, hemolytic anemia、thrombocytopenia ";

    QuestionsAnswers[697][1] = " Antiphospholipid Syndrome {AIR}";

    QuestionsAnswers[698][0] = "Anti Jo-1 antibody ";

    QuestionsAnswers[698][1] = " myositis 侵犯到 lung 導致 cryptogenic fibrosing alveolitis {AIR}";

    QuestionsAnswers[699][0] = "ACPA/anti-CCP ";

    QuestionsAnswers[699][1] = " RA {AIR}";

    QuestionsAnswers[700][0] = "Malar rash, Livedo reticularis, 腎炎 ";

    QuestionsAnswers[700][1] = " SLE {AIR}";

    QuestionsAnswers[701][0] = "ANA ≧ 1:80, Synovitis in at least two joints, and at least 30 min of morning stiffness, Acute pericarditis ";

    QuestionsAnswers[701][1] = " SLE (確診) {AIR}";

    QuestionsAnswers[702][0] = "Rheumatoid factor陰性, sacroiliitis、脊椎發炎, peripheral arthritis、enthesitis ";

    QuestionsAnswers[702][1] = " Seronegative Spondyloarthritis (SpA) {AIR}";

    QuestionsAnswers[703][0] = "病人小於45歲&有3個月以上的背痛, 影像學看出sacroiliitis, Inflammatory back pain ";

    QuestionsAnswers[703][1] = " Axial Spondyloarthritis (SpA) (確診)(ASAS) {AIR}";

    QuestionsAnswers[704][0] = "1947: 正常, 1957: 膝蓋微彎，小駝背, 1967: 明顯deformative，需要拿拐仗 ";

    QuestionsAnswers[704][1] = " Ankylosing Spondylitis (AS) {AIR}";

    QuestionsAnswers[705][0] = "sacroiliitis 雙側 grade>= 2, 超過三個月的下背痛與僵硬，透過運動可改善、休息無法緩解疼痛 ";

    QuestionsAnswers[705][1] = " AS (確診) {AIR}";

    QuestionsAnswers[706][0] = "DIP joint、指甲侵犯, Dactylitis, Pencil in cup ";

    QuestionsAnswers[706][1] = " Psoriatic Arthritis {AIR}";

    QuestionsAnswers[707][0] = "在急性痢疾發作後出現 urethritis、conjunctivitis 和arthritis ";

    QuestionsAnswers[707][1] = " Reiter’syndrome (triad) {AIR}";

    QuestionsAnswers[708][0] = "Heliotrope rash, Gottron’s sign, 鏡檢發現指甲基部微血管變少 ";

    QuestionsAnswers[708][1] = " Dermatomyositis (DM) {AIR}";

    QuestionsAnswers[709][0] = "50~60歲, 對稱性近端肌肉無力, CK 發病時50 倍,治療後10 倍, 發炎細胞 CD8+, 發炎細胞攻擊 肌纖維本身, 無補體, anti-ARS ";

    QuestionsAnswers[709][1] = " PM (DM vs PM) {AIR}";

    QuestionsAnswers[710][0] = "近端和遠端都無力, Creatine kinase level：大約是正常值的十倍, Autophagic vacuoles ";

    QuestionsAnswers[710][1] = " Inclusion-Body myositis（IBM） {AIR}";

    QuestionsAnswers[711][0] = "Finger flexor weakness, No treatment response, Age at first symptoms > 40, Neck flexors are relatively weaker than neck extensors, 無 Heliotrope rash, 無 Gottron's papules, 無 Gottron's sign, Anti-Jo-1 autoantibody present ";

    QuestionsAnswers[711][1] = " IBM (確診)(2017criteria)(http://www.imm.ki.se/biostatistics/calculators/iim) {AIR}";

    QuestionsAnswers[712][0] = "Age at first symptom < 18, Heliotrope rash, Gottron's sign, Anti-Jo1 autoantibody present ";

    QuestionsAnswers[712][1] = " JDM (確診)(2017criteria)(http://www.imm.ki.se/biostatistics/calculators/iim) {AIR}";

    QuestionsAnswers[713][0] = "未知來源的慢性廣泛性骨骼肌肉疼痛, fatigue, sleep disturbances, 思考記憶等認知功能障礙，又稱 fibro fog ";

    QuestionsAnswers[713][1] = " Fibromyalgia, FM {AIR}";

    QuestionsAnswers[714][0] = "WPI ≧ 7 且 SS ≧ 5, 症狀持續至少 3 個月, 沒有其他疾病可解釋疼痛 ";

    QuestionsAnswers[714][1] = " Fibromyalgia, FM (確診)(2010 ACR criteria) {AIR}";

    QuestionsAnswers[715][0] = "燒灼感，刺痛，撕裂痛, Hyperalgesia、Allodynia、Hyperesthesia, 皮膚溫度比較高(1 度左右)，比較紅腫後慢慢變萎縮 ";

    QuestionsAnswers[715][1] = " Complex regional pain syndrome {AIR}";

    QuestionsAnswers[716][0] = "Thermography 溫度比較高, Sweat testing 留超多, Radiographic testing 可以看到一點點骨質流失 ";

    QuestionsAnswers[716][1] = " Complex Regional pain syndrome {AIR}";

    QuestionsAnswers[717][0] = "一個 86 歲老先生左膝紅腫熱痛一周，急診抽取 45cc 關節液，結果如下：, WBC：47 萬、葡萄糖<2 ";

    QuestionsAnswers[717][1] = " 感染性關節炎 {AIR}";

    QuestionsAnswers[718][0] = "Synovial fluid analysis: Crystals on polarizing microscopy? No, Organisms on Gram stain? No, WBC >50,000 ";

    QuestionsAnswers[718][1] = " septic {AIR}";

    QuestionsAnswers[719][0] = "發燒(>38°C)、night sweat、體重減輕(>10%) ";

    QuestionsAnswers[719][1] = " lymphoma、TB、惡性腫瘤 (B-symptom) {AIR}";

    QuestionsAnswers[720][0] = "理學檢查或影像上出現某個器官的腫大, 血清當中 IgG4 >135 mg/dL, 病理切片顯示 IgG4+ cell 占全部 IgG+ cell 超過 40% ";

    QuestionsAnswers[720][1] = " IgG4-RD (確診) {AIR}";

    QuestionsAnswers[721][0] = "Bilateral hilar adenopathy, 手上有許多 nodules, 肝脾腫大 ";

    QuestionsAnswers[721][1] = " Sarcoidosis {AIR}";

    QuestionsAnswers[722][0] = "oral ulcer、genital ulcer, Positive Pathergy test, Erythema nodosum ";

    QuestionsAnswers[722][1] = " Behçet's disease {AIR}";

    QuestionsAnswers[723][0] = "Recurrent oral ulceration（一年內反覆>3 次）, 一年內出現 genital ulcer, Eye lesions, Skin lesions ";

    QuestionsAnswers[723][1] = " Behçet's disease (確診) {AIR}";

    QuestionsAnswers[724][0] = "Uveitis, Oral aphthae ";

    QuestionsAnswers[724][1] = " Behçet's disease (確診)(診斷流程) {AIR}";

    QuestionsAnswers[725][0] = "準備動肺癌手術的阿好姨：在麻醉後一小時內耳朵和嘴唇變得超爆腫，vital sign 相當不穩定，趕快急救，手術因此延期 ";

    QuestionsAnswers[725][1] = " 藥物過敏 {AIR}";

    QuestionsAnswers[726][0] = "皮膚發癢、潮紅；急性蕁麻疹；血管性水腫：都發生在皮膚較鬆的地方, 支氣管攣縮, 嘔吐、腹部絞痛、腹瀉 ";

    QuestionsAnswers[726][1] = " 第一型過敏反應(立即型) {AIR}";

    QuestionsAnswers[727][0] = "ENDA questionnaire: Possible drug hypersensitivity, Skin tests not available, Drug provocation test: Results POSITIVE ";

    QuestionsAnswers[727][1] = " Proven drug hypersensitivity (藥物過敏的診斷流程) {AIR}";

    QuestionsAnswers[728][0] = "疹、破、痛、紅、腫、燒 ";

    QuestionsAnswers[728][1] = " 過敏 {AIR}";

    QuestionsAnswers[729][0] = "Serum sickness ";

    QuestionsAnswers[729][1] = " Type III (Gell and Coombs classification of Drug Allergy) {AIR}";

    QuestionsAnswers[730][0] = "DRESS ";

    QuestionsAnswers[730][1] = " Type IVb (eosinophil) (Gell and Coombs classification of Drug Allergy) {AIR}";

    QuestionsAnswers[731][0] = "SJS, 水泡 ";

    QuestionsAnswers[731][1] = " Type IVc (Gell and Coombs classification of Drug Allergy) {AIR}";

    QuestionsAnswers[732][0] = "AGEP, 膿包 ";

    QuestionsAnswers[732][1] = " Type IVd (T cells→IL-8(CXCL8)、GMCSF→neutrophi) (Gell and Coombs classification of Drug Allergy) {AIR}";

    QuestionsAnswers[733][0] = "Basophil Activation test、Skin test ";

    QuestionsAnswers[733][1] = " Type I {AIR}";

    QuestionsAnswers[734][0] = "Allopurinol 過敏 ";

    QuestionsAnswers[734][1] = " HLA-B*5801 {AIR}";

    QuestionsAnswers[735][0] = "claudication, 頭偏一邊會昏倒, 沒有脈搏 ";

    QuestionsAnswers[735][1] = " LVV (Takayasu) {AIR}";

    QuestionsAnswers[736][0] = "IFT on ethanol-fixed and formalin-fixed neutrophils: Perinuclear/nuclear staining on ethanol-fixed cells,非 P-ANCA pattern, IFT on HEp2 (+) ";

    QuestionsAnswers[736][1] = " ANA (給大家以後不幸遇到 ANCA 用的流程圖) {AIR}";

    QuestionsAnswers[737][0] = "22y/o 林小姐，東海大學, 皮膚爛掉部分成為火山錐形 ";

    QuestionsAnswers[737][1] = " ANCA Associated Vasculitis(AAV) {AIR}";

    QuestionsAnswers[738][0] = "有皮膚疹，皮膚會有紅紅的可摸到的紫斑, 無痛性血尿，顯微鏡下紅紅的, 肚子痛，有血便, 關節腫 ";

    QuestionsAnswers[738][1] = " Henoch-Schönlein purpura, HSP (3 紅 1 腫) {AIR}";

    QuestionsAnswers[739][0] = "皮膚紫斑潰瘍、週邊神經病變、腎病變 ";

    QuestionsAnswers[739][1] = " 肝外：冷澱球蛋白血症 (慢性 C 型肝炎) {AIR}";

    QuestionsAnswers[740][0] = "Calcinosis、Raynaud' s syndrome、Esophageal dysmotility、Sclerodactyly、Telangiectasia ";

    QuestionsAnswers[740][1] = " CREST syndrome (Systemic sclerosis SSc) {AIR}";

    QuestionsAnswers[741][0] = "微血管擴張, abdominal distention and bloating, nonspecific interstitial pneumonitis pattern, NSIP ";

    QuestionsAnswers[741][1] = " SSc {AIR}";

    QuestionsAnswers[742][0] = "Skin thickening of the fingers of both hands extending proximal to the metacarpophalangeal joints, 排除其他發炎、trauma ";

    QuestionsAnswers[742][1] = " 系統性硬化症和硬皮病 (確診) {AIR}";

    QuestionsAnswers[743][0] = "皮膚變化及分布 軀幹、背部、頸部, 無 涉及皮膚外, 腫脹的膠原蛋白束，黏液蛋白堆積 ";

    QuestionsAnswers[743][1] = " Systemic sclerosis (鑑別診斷) (vs Scleromyxede ma, Nephrogenic systemic fibrosis, Eosinophilic fasciitis) {AIR}";

    QuestionsAnswers[744][0] = "Anti-RNP at hemagglutination titer of ≥1 : 1600, Swollen hands, Synovitis, Myositis (biologically proven) ";

    QuestionsAnswers[744][1] = " Mixed connective tissue disease ,MCTD (確診)(Alarcon Segovia Criteria) {AIR}";

    QuestionsAnswers[745][0] = "Raynaud's phenomenon、手部水腫、關節痛、關節炎、肌肉痛、發炎性肌肉病變、皮疹、食道運動功能障礙、間質性肺病 ";

    QuestionsAnswers[745][1] = " Mixed connective tissue disease( MCTD )  {AIR}";

    QuestionsAnswers[746][0] = "48 歲體型稍胖的中年男子，理學檢查，發現左腳除了紅腫熱痛外（可以看到大拇指紅腫）還發了燒(38.52 度)，周邊血液白血球高（15420/mm3） ";

    QuestionsAnswers[746][1] = " 高尿酸血症 {AIR}";

    QuestionsAnswers[747][0] = "至少發生一次關節腫脹。, 在有症狀的關節或黏液囊中出現尿酸結晶 ";

    QuestionsAnswers[747][1] = " 痛風 (確診)(2015 ACR/EULAR gout classification criteria) {AIR}";

    QuestionsAnswers[748][0] = "老年人, 退化性關節炎, 膝關節急性發作, 發燒 ";

    QuestionsAnswers[748][1] = " CPPD {AIR}";

    QuestionsAnswers[749][0] = "把關節液拿去用 alizarin red stain 染色看到很強烈的紅色 ";

    QuestionsAnswers[749][1] = " Articular BCP crystal disease (確診) {AIR}";

    QuestionsAnswers[750][0] = "眼睛經常紅紅的，乾澀感，視力模糊，畏光, 味覺改變, ILD ";

    QuestionsAnswers[750][1] = " Sjögren’s syndrome {AIR}";

    QuestionsAnswers[751][0] = "切片下可看到淋巴浸潤的唾腺炎且 Focus score ≥ 1 foci/4mm2, Anti-SSA/Ro 是 positive, 排除 HCV infection, 排除老化現象, 排除 眼瞼炎、慢性結膜炎、隱形眼鏡刺激、病毒感染、糖尿病、藥物、焦慮症或憂慮症 ";

    QuestionsAnswers[751][1] = " Sjögren’s syndrome (ACR/EULAR criteria) {AIR}";

    QuestionsAnswers[752][0] = "Bilateral reticular opacities, Ground-glass opacities(有 GGO 但不明顯), Basal and subpleural predominance, ibrosis and 有 honeycombing, 預後很差、比 NSIP 差★ ";

    QuestionsAnswers[752][1] = " UIP (UIP 和 NSIP 的影像學比較) {AIR}";

    QuestionsAnswers[753][0] = "肺高壓、血管病變, Fibrotic NSIP ";

    QuestionsAnswers[753][1] = " 硬皮症所導致的嚴重肺部纖維化 {AIR}";

    QuestionsAnswers[754][0] = "Pain, Joint deformity, Instability ";

    QuestionsAnswers[754][1] = " OA {AIR}";

    QuestionsAnswers[755][0] = "persistent usage-related joint pain, 年齡≥ 45 歲, morning stiffness≤ 30 分鐘 ";

    QuestionsAnswers[755][1] = " OA (確診)(臨床診斷) {AIR}";

    QuestionsAnswers[756][0] = "關節腔狹窄, 產生骨刺, Subchondral sclerosis ";

    QuestionsAnswers[756][1] = " OA {AIR}";

    QuestionsAnswers[757][0] = "double halo sign, serositis、肺栓塞、間質性肺病、肺高壓、shrinking lung, glomerulonephritis ";

    QuestionsAnswers[757][1] = " SLE {AIR}";

    QuestionsAnswers[758][0] = "ANA -ve, Hypo-complementaemia and positive aPL, EULAR/ACR score ≥10 with at least one clinical criterion ";

    QuestionsAnswers[758][1] = " Clinical SLE (2021 熱騰騰 criteria(EULAR/ACR)) {AIR}";

    QuestionsAnswers[759][0] = "Joint 有 Doppler signal ";

    QuestionsAnswers[759][1] = " synovitis {AIR}";

    QuestionsAnswers[760][0] = "在 longitudinal及 transverse都看到骨頭表面的不連續 ";

    QuestionsAnswers[760][1] = " bone erosion {AIR}";

    QuestionsAnswers[761][0] = "Double contour sign ";

    QuestionsAnswers[761][1] = " Gout {AIR}";

    QuestionsAnswers[762][0] = "看到肌腱周圍出現一圈黑黑的積水 ";

    QuestionsAnswers[762][1] = " Tenosynovitis {AIR}";

    QuestionsAnswers[763][0] = "肌腱出現 Hypoechoic 訊號, 出現變厚的肌腱, 出現 Doppler signal ";

    QuestionsAnswers[763][1] = " Enthesitis {AIR}";

    QuestionsAnswers[764][0] = "Bursa 中間充滿水(黑色一大片) ";

    QuestionsAnswers[764][1] = " bursitis {AIR}";

    QuestionsAnswers[765][0] = "Opportunistic infection, Kaposi’s sarcoma ";

    QuestionsAnswers[765][1] = " 愛滋病(AIDS)發病期 {Inf}";

    QuestionsAnswers[766][0] = "舌頭、硬顎、軟顎等處長出一層白白厚厚的東西，甚至一路到食道(病人抱怨有吞嚥困難的情況，疼痛….) ";

    QuestionsAnswers[766][1] = " Oral candidiasis (thrust) ＆ Esophageal candidiasis {Inf}";

    QuestionsAnswers[767][0] = "支氣管發炎，出現類似過敏症狀, 肺裡面有一些慢慢爛掉發炎的組織, 肺部有fungal ball ";

    QuestionsAnswers[767][1] = " Aspergillosis {Inf}";

    QuestionsAnswers[768][0] = "在血液觀察到 Galactomannan(GＭ) ";

    QuestionsAnswers[768][1] = " 麴菌感染 (Indirect test) {Inf}";

    QuestionsAnswers[769][0] = "鼻有焦痂, 眼瞼外翻且浮腫以及鼻竇被侵犯 ";

    QuestionsAnswers[769][1] = " Mucormycosis {Inf}";

    QuestionsAnswers[770][0] = "肺部consolidation、產生cavity, CNS 感染、血管炎, 腦膜炎 ";

    QuestionsAnswers[770][1] = " Cryptococcosis {Inf}";

    QuestionsAnswers[771][0] = "Abdominal pain, Abdominal distension, Fever、Nausea/Vomiting ";

    QuestionsAnswers[771][1] = " 腹膜炎 {Inf}";

    QuestionsAnswers[772][0] = "發炎、感染, X-ray：腹水,pleural effusion, Ultrasound / CT scan：直接看到腹水的存在 ";

    QuestionsAnswers[772][1] = " 腹膜炎 (確診) {Inf}";

    QuestionsAnswers[773][0] = "腸子不動/Ileus, 發燒、白血球上升、休克, 黏液便 ";

    QuestionsAnswers[773][1] = " C. difficile Infection (CDI) {Inf}";

    QuestionsAnswers[774][0] = "liver abcess, Leukocytosis > 15e+9, Aspirated pus shows no microorganisms, 無 Jaundice, 無 Abnormal chest finding in physical examination, 20-40 years, Previously healthy ";

    QuestionsAnswers[774][1] = " Amoebic liver abcess (阿米巴&PLA 的鑑別) {Inf}";

    QuestionsAnswers[775][0] = "Fever/chills, Anorexia/weight loss, Malaise/weakness ";

    QuestionsAnswers[775][1] = " liver abscess {Inf}";

    QuestionsAnswers[776][0] = "發燒、黃疸、RUQ壓痛 ";

    QuestionsAnswers[776][1] = " liver abscess {Inf}";

    QuestionsAnswers[777][0] = "發燒、乾咳、呼吸困難、倦怠、味嗅覺喪失、拉肚子, Lymphopenia, 胸部 X 光出現 bilateral ground glass opacity（GGO） ";

    QuestionsAnswers[777][1] = " COVID-19 {Inf}";

    QuestionsAnswers[778][0] = "Fever, cough, fatigue, shortness of breath, vomiting, loss of taste or smell ";

    QuestionsAnswers[778][1] = " COVID-19 {Inf}";

    QuestionsAnswers[779][0] = "纖維母細胞膨大 ";

    QuestionsAnswers[779][1] = " 巨細胞病毒 (Presumptive diagnosis) {Inf}";

    QuestionsAnswers[780][0] = "Hand-Foot-and-Mouth Disease, 有嚴重神經學症狀、合併無菌性腦膜炎 ";

    QuestionsAnswers[780][1] = " 腸病毒 71 型 {Inf}";

    QuestionsAnswers[781][0] = "高燒、全身倦怠、肌肉酸痛、頭痛、呼吸道症狀等，症狀發作突然(潛伏期短) ";

    QuestionsAnswers[781][1] = " 流感 {Inf}";

    QuestionsAnswers[782][0] = "流感樣肺炎, 重症 ";

    QuestionsAnswers[782][1] = " H7N9 新流感 (vs 季節性流感 (H1, H3), H5N1 禽流感) {Inf}";

    QuestionsAnswers[783][0] = "突發性的高燒(≧38°C)、頭痛、後眼窩痛、肌肉痛、關節痛及出疹 ";

    QuestionsAnswers[783][1] = " 登革熱 {Inf}";

    QuestionsAnswers[784][0] = "顏面及四肢末端, 水泡分布整齊規律, 先水泡 → 再膿泡 ";

    QuestionsAnswers[784][1] = " 天花 (天花和水痘的比較) {Inf}";

    QuestionsAnswers[785][0] = "上背痛, 高燒, 噁心嘔吐 ";

    QuestionsAnswers[785][1] = " Acute pyelonephritis (左腎離胃腸近) {Inf}";

    QuestionsAnswers[786][0] = "女性，並且有 past UTI history, sexual intercourse, diaphragm use, Parity, DM, loss estrogen, abnormal GU tract (incomplete emptying), 無症狀女性：兩次相隔 24 小時培養的 colony count of 105 /ml ";

    QuestionsAnswers[786][1] = " Cystitis (確診) {Inf}";

    QuestionsAnswers[787][0] = "女性18~40 yrs, Flank pain、發燒、噁心嘔吐, CV angle 出現 knocking tenderness ";

    QuestionsAnswers[787][1] = " Acute Pyelonephritis {Inf}";

    QuestionsAnswers[788][0] = "排尿困難、尿液有異常分泌物, 頻尿、血尿 ";

    QuestionsAnswers[788][1] = " Urethritis {Inf}";

    QuestionsAnswers[789][0] = "致病菌 Neisseria gonorrhoeae, 生長時間 短(2 ~ 6 天), Onset 急性, 症狀明顯, 膿樣分泌物, 尿液鏡檢下可見紫色雙核 ";

    QuestionsAnswers[789][1] = " Gonococcal urethritis, GU (淋病感染 v.s. 非淋病感染) {Inf}";

    QuestionsAnswers[790][0] = "無 出現鼠蹊部淋巴結腫大或變硬, 尿液檢查：Gram stain 紫色雙核,細菌培養Thayer-Martin 養出 N. gonorrhoeae ";

    QuestionsAnswers[790][1] = " Urethritis {Inf}";

    QuestionsAnswers[791][0] = "下腹腫脹、悶痛感(在直腸處), 發燒, 排尿不順排便不順 ";

    QuestionsAnswers[791][1] = " Acute Prostatitis {Inf}";

    QuestionsAnswers[792][0] = "一位 20 歲運動員參加馬拉松比賽約 2 小時後因昏倒與痙攣被救護車送醫治療。抵達醫院時，意識呈昏迷，心跳每分鐘 120 次，血壓 98/52 mmHg，體溫攝氏 40.8 度。驗血發現：aspartate aminotransferase (AST)110 U/L、alanine aminotransferase(ALT)123 U/L、creatinine 2.2 mg/dL、鈉 143 mmol/L、鉀 4.7 mmol/L、鈣 2.4 mmol/L、葡萄糖 75 mg/dL。病人過去健康情況良好，比賽前無不適症狀。比賽當日氣溫為攝氏 37 度。 ";

    QuestionsAnswers[792][1] = " heat stroke {Inf}";

    QuestionsAnswers[793][0] = "Neutrophil-Lymphocyte ratio(NLR): 數值高 ";

    QuestionsAnswers[793][1] = " 一般細菌感染(非結核菌) {Inf}";

    QuestionsAnswers[794][0] = "有一位 22 歲女性因發燒及頭痛一週就醫，最近兩天全身有淡淡紅疹。病患自訴兩週前曾至蘭嶼旅遊三天。理學檢查在popliteal area有一黑色結痂病灶，無觸痛。血液檢驗：白血球 9,800/mm3 （Band 16％，Seg 35％，Mono9％，Lymph 40％），血紅素 13.2 g/dL，血小板 195,000/mm3； GOT/GPT：154/180 IU/L；胸部 X 光、腹部超音波肝脾、尿液檢驗，皆無異常。 ";

    QuestionsAnswers[794][1] = " scrub typhus {Inf}";

    QuestionsAnswers[795][0] = "突然間看到病患發冷、寒顫等 shaking chills 等 ";

    QuestionsAnswers[795][1] = " 感染 {Inf}";

    QuestionsAnswers[796][0] = "聲音沙啞 ";

    QuestionsAnswers[796][1] = " Laryngitis {Inf}";

    QuestionsAnswers[797][0] = "初期疲倦、畏寒、打噴嚏、頭痛, 接著出現流鼻水、咳嗽、喉嚨痛, 在 2~4 天到達高峰，在 7~10 天痊癒 ";

    QuestionsAnswers[797][1] = " Common cold {Inf}";

    QuestionsAnswers[798][0] = "感冒, 口咽外觀 較不腫脹 ";

    QuestionsAnswers[798][1] = " 病毒感染 (最重要的是要鑑別細菌所引起的感冒，尤其是 Group A Streptococci) {Inf}";

    QuestionsAnswers[799][0] = "堵住呼吸道開口, 1-6 歲, 冬天 ";

    QuestionsAnswers[799][1] = " Acute Epiglottitis {Inf}";

    QuestionsAnswers[800][0] = "初期：流鼻水、輕微咳嗽、輕微發燒, 24-48 小時後，開始出現 barking cough、聲音沙啞、stridor, 使用呼吸輔助肌 ";

    QuestionsAnswers[800][1] = " Acute laryngotracheobronchitis {Inf}";

    QuestionsAnswers[801][0] = "打噴嚏、流鼻水、臉部壓脹感、發燒、可引流出膿液、頭痛 ";

    QuestionsAnswers[801][1] = " Acute sinusitis {Inf}";

    QuestionsAnswers[802][0] = "Pneumonia, 革蘭氏陽性菌, 偏球狀、多顆聚集在一起 ";

    QuestionsAnswers[802][1] = " Streptococcus pneumoniae {Inf}";

    QuestionsAnswers[803][0] = "一開始以全身症狀為主（發燒、頭痛、肌肉痠痛、不適），2-3 天退燒後，呼吸道症狀逐漸明顯 ";

    QuestionsAnswers[803][1] = " Influenza {Inf}";

    QuestionsAnswers[804][0] = "發燒, 疲倦, 乾咳 ";

    QuestionsAnswers[804][1] = " Covid-19 或 Influenza {Inf}";

    QuestionsAnswers[805][0] = "Dry cough, Fever, Loss of smell/ taste ";

    QuestionsAnswers[805][1] = " COVID-19 (Symptoms of COVID-19, cold, influenza) {Inf}";

    QuestionsAnswers[806][0] = "一位 70 歲女性病人，因發燒、頭痛超過兩週而至急診，有明顯的頸部僵硬。腦脊髓液檢查：腦壓 230 mmH2O、白血球數 316/µl，淋巴球佔其中的 90%。Protein 180 mg/dL，glucose 26 mg/dL（血糖 83 mg/dL ) ";

    QuestionsAnswers[806][1] = " TB meningitis (subacute) {Inf}";

    QuestionsAnswers[807][0] = "CSF 檢驗 WBC>2000 顆/mm3,CSF lactate：升高,壓力上升、顏色混濁、WBC 浸潤以 neutrophil 為主 ";

    QuestionsAnswers[807][1] = " Bacteria Meningitis {Inf}";

    QuestionsAnswers[808][0] = "培養後染 acid-fast stain、PCR ";

    QuestionsAnswers[808][1] = " 結核菌 (確診) {Inf}";

    QuestionsAnswers[809][0] = "幻覺、ataxia、癲癇 ";

    QuestionsAnswers[809][1] = " encephalitis {Inf}";

    QuestionsAnswers[810][0] = "腰椎穿刺抽 CSF 送檢：lymphocyte pleocytosis, MRI：腦實質病變、增亮, EEG：有 seizure 產生 ";

    QuestionsAnswers[810][1] = " encephalitis {Inf}";

    QuestionsAnswers[811][0] = "75 歲男性病人因持續發燒二週至急診，心臟聽診發現二尖瓣有 2 度收縮期心雜音，血液培養(分兩瓶：嗜氧+厭氧)長出 Streptococcus viridans 兩套。 ";

    QuestionsAnswers[811][1] = " IE {Inf}";

    QuestionsAnswers[812][0] = "2 套 血液培養陽性(分開>12hr 抽) S. viridans, 心臟超音波 Vegetation,Abscess,new valvular regurgitation ";

    QuestionsAnswers[812][1] = " IE (確診)(Modified duke criteria) {Inf}";

    QuestionsAnswers[813][0] = "持續菌血症, 瓣膜、瓣膜周圍感染, septic embolism ";

    QuestionsAnswers[813][1] = " IE {Inf}";

    QuestionsAnswers[814][0] = "TTE (+) ";

    QuestionsAnswers[814][1] = " IE (確診) {Inf}";

    QuestionsAnswers[815][0] = "數天~數週, 局部紅斑、水腫、熱、痛 ";

    QuestionsAnswers[815][1] = " Acute osteomyelitis {Inf}";

    QuestionsAnswers[816][0] = "ESR和 CRP 升高, 血中的 Calcium、Phosphate、Alkaline phosphatase(ALK-P)濃度皆是正常的, bone edema ";

    QuestionsAnswers[816][1] = " 骨髓炎 {Inf}";

    QuestionsAnswers[817][0] = "38.3 ~ 38.9°C, 發炎、腫脹、中度到重度疼痛、積液、肌肉麻痺, decreased passive & active ROM ";

    QuestionsAnswers[817][1] = " Non-gonococcal bacterial arthritis {Inf}";

    QuestionsAnswers[818][0] = "fever、chills、rash, ceftriaxone (7 days) 治療 12 到 24 小時後症狀明顯好轉 ";

    QuestionsAnswers[818][1] = " DGI (DGI=擴散淋病菌感染) (確診) {Inf}";

    QuestionsAnswers[819][0] = "年輕人，性行為感染, 多關節、遊走性, 不易培養, 對抗生素反應好，一兩天 ";

    QuestionsAnswers[819][1] = " Gonococcal arthritis (淋病關節炎與非淋病關節炎比較) {Inf}";

    QuestionsAnswers[820][0] = "一位病人出現了腳劇痛的症狀，接著出現寒顫、噁心，精神狀況變差。第二天腳開始紅腫、病灶處出現水泡，發高燒，最後過世 ";

    QuestionsAnswers[820][1] = " SSTI(skin & soft tissue infection) {Inf}";

    QuestionsAnswers[821][0] = "小水泡：快速化膿並破裂。, 膿乾燥後會形成金黃色”stuck on”痂皮，具有以下特色, 會癢但是不會痛, 病灶侷限於表皮，不會潰瘍或是侵犯到真皮。 ";

    QuestionsAnswers[821][1] = " Impetigo {Inf}";

    QuestionsAnswers[822][0] = "位於皮膚淺層，邊界明顯，病程進展快速，劇烈疼痛、leukocytosis、fever , 發生在下肢, 併發streptococcal bacteremia ";

    QuestionsAnswers[822][1] = " 丹毒 {Inf}";

    QuestionsAnswers[823][0] = "擴散快速的皮膚感染，侵犯到達皮下組織, 淋巴回流不好，腫脹明顯，會復發, 邊界不明顯 ";

    QuestionsAnswers[823][1] = " 蜂窩組織炎 {Inf}";

    QuestionsAnswers[824][0] = "位於皮下組織更深層，血管通透性受到影響, 發燒、疼痛，但後期疼痛降低, 腫脹，帶有brawny edema及 tenderness →產生 compartment syndrome ";

    QuestionsAnswers[824][1] = " 壞死性筋膜炎 {Inf}";

    QuestionsAnswers[825][0] = "Creatinine phosphokinase 上升, Blood cultures （+）, Rapidly progressing lesions ";

    QuestionsAnswers[825][1] = " 壞死性筋膜炎 {Inf}";

    QuestionsAnswers[826][0] = "患者在兩到三天內會出現發燒、劇烈疼痛、肌肉 boardlike swelling, Compartment syndrome 伴隨發生, 死亡 ";

    QuestionsAnswers[826][1] = " Myositis {Inf}";

    QuestionsAnswers[827][0] = "Bilateral nature, slow onset of symptoms, hyperpigmentation, superficial desquamation ";

    QuestionsAnswers[827][1] = " Stasis dermatitis {Inf}";

    QuestionsAnswers[828][0] = "tachycardia、tachypnea、altered mental status、significant edema、positive fluid balance、hypothermia ";

    QuestionsAnswers[828][1] = " CARS(Counter-inflammatory response syndrome) {Inf}";

    QuestionsAnswers[829][0] = "clotting times 延⻑, ⾎⼩板下降, D-dimer 增加 ";

    QuestionsAnswers[829][1] = " Coagulopathy與Disseminated Intravascular Coagulation {Inf}";

    QuestionsAnswers[830][0] = "galactomannan and β-D-glucan ";

    QuestionsAnswers[830][1] = " Aspergillus {Inf}";

    QuestionsAnswers[831][0] = "gut 黏膜表⾯壞死 ";

    QuestionsAnswers[831][1] = " Neutropenic enterocolitis {Inf}";

    QuestionsAnswers[832][0] = "容易感染、敗⾎ ";

    QuestionsAnswers[832][1] = " 嗜中性球低下 {Inf}";

    QuestionsAnswers[833][0] = "JC virus ";

    QuestionsAnswers[833][1] = " HIV {Inf}";

    QuestionsAnswers[834][0] = "Fever, abdominal pain, diarrhoea/vomiting, low blood pressure, shock, pink eye, \"strawberry tongue\", rashes, large lymph nodes, swollen hands/feet, neurological disturbances ";

    QuestionsAnswers[834][1] = " Multisystem inflammatory syndrome in children (MIS-C) {Inf}";

    QuestionsAnswers[835][0] = "fatigue and memory problems ";

    QuestionsAnswers[835][1] = " Long COVID {Inf}";

    QuestionsAnswers[836][0] = "Non-oliguria > 500mL/day, Granular casts in urine ";

    QuestionsAnswers[836][1] = " Aminoglycoside nephropathy {Nephro}";

    QuestionsAnswers[837][0] = "用 enal venography, doppler 才意外發現腎靜脈血流異常減少 ";

    QuestionsAnswers[837][1] = " Renal vein thrombosis (通常無症狀，腎功能也正常，難以診斷) {Nephro}";

    QuestionsAnswers[838][0] = "AKI, 腹痛和消化道出血, Cerebrovascular involvement ";

    QuestionsAnswers[838][1] = " Atheroembolic renal disease (cholesterol embolization syndrome(CES)) {Nephro}";

    QuestionsAnswers[839][0] = "大腦症狀、心衰竭、facial palsy, 用 2 種以上高血壓藥之後仍難控制高血壓, 血管炎的 sign ";

    QuestionsAnswers[839][1] = " Renovascular Hypertension {Nephro}";

    QuestionsAnswers[840][0] = "Captopril renography, 服用 ACEI 後，GFR 下降，左腎影像變淡 ";

    QuestionsAnswers[840][1] = " 腎動脈狹窄 {Nephro}";

    QuestionsAnswers[841][0] = "Renal failure, Liver cysts, adult onset ";

    QuestionsAnswers[841][1] = " Autosomal dominant polycystic kidney disease (ADPKD) {Nephro}";

    QuestionsAnswers[842][0] = "腎臟超音波 Age 15-29 yr, ≥3 cycsts ";

    QuestionsAnswers[842][1] = " Autosomal dominant polycystic kidney disease (ADPKD) (確診) {Nephro}";

    QuestionsAnswers[843][0] = "pitting edema、腹水, 頸靜脈鼓脹, 皮膚彈性正常 ";

    QuestionsAnswers[843][1] = " 水分過多 {Nephro}";

    QuestionsAnswers[844][0] = "高倍鏡底下看到紅血球>2 顆 ";

    QuestionsAnswers[844][1] = " 血尿，其中一段泌尿系統的出現損傷 {Nephro}";

    QuestionsAnswers[845][0] = "27 歲男性因水腫至門診求診。兩天前有發燒、咳嗽，至藥局買藥，退燒後卻出現小便顏色變深，排尿時無灼熱感。驗尿發現每個高倍鏡下有 50~70 個紅血球，3~5 個白血球，無表皮細胞。理學檢查：體溫 37.5oC，血壓 135/90 mmHg，兩側腰部有輕微呀痛，足踝稍有水腫。 ";

    QuestionsAnswers[845][1] = " 急性腎絲球腎炎 (診斷) {Nephro}";

    QuestionsAnswers[846][0] = "Fractional excretion of sodium <1 %, Urine sodium conc. <10 mmol/L ";

    QuestionsAnswers[846][1] = " Prerenal (鑑別 Pre‐renal AKI 與 Renal AKI) {Nephro}";

    QuestionsAnswers[847][0] = "每公升尿液鈉離子含量小於 20 meq ";

    QuestionsAnswers[847][1] = " 腎前因素造成腎衰竭 {Nephro}";

    QuestionsAnswers[848][0] = "𝐔𝐀𝐂𝐑/𝐔𝐏𝐂𝐑=60~80% ";

    QuestionsAnswers[848][1] = " Glomerular proteinuria {Nephro}";

    QuestionsAnswers[849][0] = "Edema, Hypoalbuminemia, Hyperlipidemia ";

    QuestionsAnswers[849][1] = " External complications {Nephro}";

    QuestionsAnswers[850][0] = "Furosemide Stress test （FST）：兩個小時內尿量沒有增加>200ml ";

    QuestionsAnswers[850][1] = " AKI (確診) {Nephro}";

    QuestionsAnswers[851][0] = "Podocyte 有 foot process effacement ";

    QuestionsAnswers[851][1] = " Minimal Change Disease(MCD) {Nephro}";

    QuestionsAnswers[852][0] = "mesangial hypercellularity 與 mesangial dense deposits ";

    QuestionsAnswers[852][1] = " IgA Nephropathy {Nephro}";

    QuestionsAnswers[853][0] = "subepithelial hump ";

    QuestionsAnswers[853][1] = " Acute Post-Streptococcal Glomerulonephritis (PSGN) {Nephro}";

    QuestionsAnswers[854][0] = "感冒 2～3 周 C3 還不回復 ";

    QuestionsAnswers[854][1] = " Membranoproliferative Glomerulonephritis {Nephro}";

    QuestionsAnswers[855][0] = "病人鼻子塌陷、又一直咳嗽，可以看到肺部有許多結節，是 Wegener granulomatosis ";

    QuestionsAnswers[855][1] = " AAV {Nephro}";

    QuestionsAnswers[856][0] = "把整個腎臟的網子勾勒出來啦 ";

    QuestionsAnswers[856][1] = " Anti-Glomerular Basement Membrane Disease {Nephro}";

    QuestionsAnswers[857][0] = "做 biopsy看到 K-W nodule ";

    QuestionsAnswers[857][1] = " DKD (確診) {Nephro}";

    QuestionsAnswers[858][0] = "Periorbital edema, Pedal edema, Weight gain ";

    QuestionsAnswers[858][1] = " Nephrotic syndrome (看到可以先懷疑) {Nephro}";

    QuestionsAnswers[859][0] = "Gradual Onset of proteinuria, Gradual Progression of CKD, Duration of diabetes >10 yr, Urinalysis Bland sediment, Retinopathy ";

    QuestionsAnswers[859][1] = " DKD (臨床上如何鑑別一個 GN 的病人是不是 DM 造成的 DKD（Diabetic kidney disease）) {Nephro}";

    QuestionsAnswers[860][0] = "Predominant light chain involved: κ, Light microscopic features: Nodular sclerosis with strong periodic acid-Schiff staining, Congo red staining: Negative, Immunofluiorescence pattern: Diffuse linear staining ";

    QuestionsAnswers[860][1] = " Monoclonal Ig Deposition Disease (辨別是 Monoclonal Ig deposition 還是 Amyloidosis) {Nephro}";

    QuestionsAnswers[861][0] = "Organized glomerular electron-dense deposits, Congo Red stain: +, Immunofluorescence for Ig LC & AA: LC + ";

    QuestionsAnswers[861][1] = " AL amyloid (8-15 nm fibrils) (Glomerular deposits disease 的鑑別診段流程) {Nephro}";

    QuestionsAnswers[862][0] = "血尿、發燒、Red cell casts、蛋白尿、高血壓、急性腎衰竭 ";

    QuestionsAnswers[862][1] = " Class IV：Diffuse nephritis {Nephro}";

    QuestionsAnswers[863][0] = "病理切片，大血管出現 Onion skinning ";

    QuestionsAnswers[863][1] = " Hypertension-attributed nephropathy {Nephro}";

    QuestionsAnswers[864][0] = "Shortness of breath, SOB, Kussmaul’s respiration ";

    QuestionsAnswers[864][1] = " 酸血症 {Nephro}";

    QuestionsAnswers[865][0] = "pH ↓, HCO3- ↓, PaCO2 ↓ ";

    QuestionsAnswers[865][1] = " Metabolic acidosis (酸鹼代償) {Nephro}";

    QuestionsAnswers[866][0] = "PaCO2 = (1.5*[HCO3-] + 8) ±2 ";

    QuestionsAnswers[866][1] = " 代謝性酸中毒 (Winter’s formula) {Nephro}";

    QuestionsAnswers[867][0] = "Serum lactate > 4 mmol / L ( 36mg/dl ) ";

    QuestionsAnswers[867][1] = " Lactic acidosis (確診) {Nephro}";

    QuestionsAnswers[868][0] = "METABOLIC ACIDOSIS, Did severe acidemia develop over a short period of time? No, High Serum AG? No, UAG > 0 ";

    QuestionsAnswers[868][1] = " RTA (代謝性酸中毒流程圖) High Serum AG == new anions in plasma, UAG < 0 == the rate of NH4+ excretion is high {Nephro}";

    QuestionsAnswers[869][0] = "METABOLIC ACIDOSIS, Did severe acidemia develop over a short period of time? Yes, 無 Ethanol intoxication plus thiamine deficiency, 無 Ingestion of an acid ";

    QuestionsAnswers[869][1] = " Hypoxic lactic acidosis (代謝性酸中毒流程圖) {Nephro}";

    QuestionsAnswers[870][0] = "METABOLIC ACIDOSIS, Did severe acidemia develop over a short period of time? No, High Serum AG? Yes, Is the EABV very low? No, Serum Cr ↑ ";

    QuestionsAnswers[870][1] = " Renal insufficiency (代謝性酸中毒流程圖) High Serum AG == new anions in plasma, Serum Cr == the GFR is very low {Nephro}";

    QuestionsAnswers[871][0] = "代謝性鹼中毒, urine Cl- 小於 20 mEq/L ";

    QuestionsAnswers[871][1] = " chloride-responsive alkaloses {Nephro}";

    QuestionsAnswers[872][0] = "先是 high anion gap metabolic acidosis, 代謝鹼, 呼吸鹼 ";

    QuestionsAnswers[872][1] = " salicylate {Nephro}";

    QuestionsAnswers[873][0] = "A 31 years old man without systemic diseases presented to ER with one week of nausea and one day of vomiting with food material。BP 158/96 mmHg, HR 111/min, RR 24/min, BT 35.1℃. Blood gas analysis revealed: pH 7.123, PCO2 21 mmHg, HCO3- 6.7 mEq/L. Blood tests: Glu 668 mg/dL, Na 118 mEq/L, K 5.3 mEq/L, Creatinine 1.56 mg/dL. ";

    QuestionsAnswers[873][1] = " Primary metabolic acidosis, Normal compensation {Nephro}";

    QuestionsAnswers[874][0] = "GFR>=60 mL/min, Hyperchloremic/Normal anion gap (AG) metabolic acidosis, Net acid excretion (NAE)下降 ";

    QuestionsAnswers[874][1] = " RTA (renal tubular acidosis) {Nephro}";

    QuestionsAnswers[875][0] = "GFR >=60 mL/min, Normal anion gap, Hyperchloremia, Urine anion gap (+), hypokalemia ";

    QuestionsAnswers[875][1] = " RTA (RTA 與 Uremic acidosis 的比較) {Nephro}";

    QuestionsAnswers[876][0] = "Serum osmolarity gap (serumOG) ↑ ";

    QuestionsAnswers[876][1] = " Presence of alcohol {Nephro}";

    QuestionsAnswers[877][0] = "Initial phase： UHCO3-↑,UNa+↑, Steady Phase Plasma HCO3-12-18 mEq/L ";

    QuestionsAnswers[877][1] = " Proximal (Type 2) RTA {Nephro}";

    QuestionsAnswers[878][0] = "Growth retardation, 骨骼疾病, 腎結石 ";

    QuestionsAnswers[878][1] = " Distal (Type 1) RTA {Nephro}";

    QuestionsAnswers[879][0] = "NAGMA, 高血鉀, Serum HCO3- ≥ 17 mEq/L ";

    QuestionsAnswers[879][1] = " Type 4 RTA (Hyporenin, Hypoaldo) {Nephro}";

    QuestionsAnswers[880][0] = "Plasma K N., Urine pH > 5.5, Net acid excretion N., FEHCO3- >15%, U-B PCO2 >25, UPCO2 >70, Flurosemide loading test N., Urinary calcium N., Urinary citrate hyper, 無 Nephrocalcinosis, Metabolic bone disease, Presence of other tubular defects, Alkali supp 10~30 mEq/kg/day ";

    QuestionsAnswers[880][1] = " Proximal (Type 2) RTA (Initial phase) (vs Distal (Type 1) RTA, Type 4 RTA){Nephro}";

    QuestionsAnswers[881][0] = "Hyperchloremic Metabolic Acidosis, UAG(-) UOG↑, U_Cl < (U_Na + U_K) ";

    QuestionsAnswers[881][1] = " Overproduction of an acid with a high rate of  excretion of its anion with NH4+ in the urine (如何 approach 一個 RTA 的病人?) UAG(-) UOG↑ == estimated rate of NH4+ excretion > 50 mmol/d, U_Cl > (U_Na + U_K) == NH4+ is excreted with Cl- {Nephro}";

    QuestionsAnswers[882][0] = "Flank pain, Acute renal failure, infiltration 和 edema ";

    QuestionsAnswers[882][1] = " Acute TIN (急性期) {Nephro}";

    QuestionsAnswers[883][0] = "急性腎衰竭, Pyuria, Eosinophil infiltration ";

    QuestionsAnswers[883][1] = " Drug induced AIN {Nephro}";

    QuestionsAnswers[884][0] = "anti-Ro、anti-La, ANA、rheumatic factor, Polyclonal hypergammaglobulinemia ";

    QuestionsAnswers[884][1] = " Sjogren‘s syndrome {Nephro}";

    QuestionsAnswers[885][0] = "病人年紀大有貧血、bone pain、高血鈣 ";

    QuestionsAnswers[885][1] = " MM {Nephro}";

    QuestionsAnswers[886][0] = "病人年紀大有貧血、bone pain、高血鈣, 尿中有 filtered monoclonal immunoglobulin light chains, 尿液、血液免疫固定電泳可見 monoclonal band ";

    QuestionsAnswers[886][1] = " Light chain cast nephropathy(LCCN) (Myeloma kidney) {Nephro}";

    QuestionsAnswers[887][0] = "腎盂、腎盞擴大, 發炎細胞浸潤 & tubular dilation, Ureter 脹到變形 ";

    QuestionsAnswers[887][1] = " Vesicoureteral reflux，又稱 reflux nephropathy {Nephro}";

    QuestionsAnswers[888][0] = "濃縮尿液功能變差, 腎臟血液灌流、 GFR 皆降低, nephrolithiasis ";

    QuestionsAnswers[888][1] = " Hypercalcemic Nephropathy {Nephro}";

    QuestionsAnswers[889][0] = "低⾎鈉, Plasma osmolality >295, 無 Mannitol, 無 Glycerol ";

    QuestionsAnswers[889][1] = " Hyperclycemia (低⾎鈉的診斷流程) {Nephro}";

    QuestionsAnswers[890][0] = "(1) Uosm>100 (2)4 ⼩時內<80% ";

    QuestionsAnswers[890][1] = " SIADH (SIADH 的鑑別診斷, vs Reset Osmostat, Primary polydipsia, Salt losing nephritis) (Water loading test)";

    QuestionsAnswers[891][0] = "Hypoosmotic (<275mOsm/kg) hyponatremia with euvolemia, 尿液滲透壓>100 mosm/kg、尿液鈉濃度 > 40 meq/L, 腎臟、甲狀腺、腎上腺功能正常 ";

    QuestionsAnswers[891][1] = " SIADH(Syndrome of inappropriate antidiuretic hormone secretion) {Nephro}";

    QuestionsAnswers[892][0] = "頭痛、緊張、嘔吐、頭暈、肌⾁扭轉、抽搐、⿇⽊ ";

    QuestionsAnswers[892][1] = " 急性低⾎鈉：<48hr {Nephro}";

    QuestionsAnswers[893][0] = "Hypernatremia, Euvolemia, U_osm<700 ";

    QuestionsAnswers[893][1] = " Central DI, Nephrogenic DI (鑑別診斷流程) Euvolemia == Pure water loss, U_osm<700 == Renal loss {Nephro}";

    QuestionsAnswers[894][0] = "Urine volume > 3L /day, Measure urine osmolality, <150 mosm/Kg, Uosm/Posm <0.9, Cosm/CCr < 3%, Dehydration test, Uosm/Posm < 1, DDVAP 1 μg SC, ΔUosm <10% ";

    QuestionsAnswers[894][1] = " CNDI (Approach to Polyuria) {Nephro}";

    QuestionsAnswers[895][0] = "Euvolemia, Urine Na >40meq/L, Hypoosmotic hyponatremia, Urine Osm>100mOsm/kg, Normal adrenal, thyroid and renal function ";

    QuestionsAnswers[895][1] = " SIADH (確診) {Nephro}";

    QuestionsAnswers[896][0] = "脫⽔後測 1st Uosm <300, DDAVP 後測 2nd Uosm 增加>50%, Plasma AVP level <1.0 ";

    QuestionsAnswers[896][1] = " Complete CDI (DI 的鑑別診斷) {Nephro}";

    QuestionsAnswers[897][0] = "serum [Na+]<130 mEq/L, Serum osmolarity <280 mOsm/kg, Urine osmolarity >100 mOsm/kg, ECF 下降(乾), UNa >20 mEq/L ";

    QuestionsAnswers[897][1] = " *代表鈉從腎流失 (低⾎鈉的診斷) {Nephro}";

    QuestionsAnswers[898][0] = "serum [Na+]>150 mEq/L, Hypovolemia, ⾼⾎鈉，尿鈉<20，尿滲透壓>700 ";

    QuestionsAnswers[898][1] = " 腎外流失低張容液體積反⽽刺激腎臟代償，加強鈉再吸收 (⾼⾎鈉診斷流程) {Nephro}";

    QuestionsAnswers[899][0] = "Hypokalemia, 無 cell shifts, Urinary K+ excretion <15 mmol/day, Metabolic acidosis ";

    QuestionsAnswers[899][1] = " Lower GI loss (低⾎鉀的 approach)(Harrison 法) {Nephro}";

    QuestionsAnswers[900][0] = "Hypokalemia, 無 cell shifts, Hypertension, Plasma renin activity Normal ";

    QuestionsAnswers[900][1] = " Cushing's syndrome (低⾎鉀的另⼀種 approach)(NKF 法) {Nephro}";

    QuestionsAnswers[901][0] = "低⾎鉀, 腎素⾼、醛固酮⾼, ⾎液中 Hyperprostaglandin ";

    QuestionsAnswers[901][1] = " Bartter syndrome {Nephro}";

    QuestionsAnswers[902][0] = "Saline suppression test：PA>10ng/dL, Aldosterone to renin ratio, ARR = PAC (ng/dL)/ PRA(ng/ml/hr) >30 ";

    QuestionsAnswers[902][1] = " Primary Hyperaldosteronism ：即 Conn's syndrome (確診) {Nephro}";

    QuestionsAnswers[903][0] = "Hyperkalemia, Exclude pseudohyperkalemia, Exclude transcellular K+ shift, Exclude oliguric renal failure, Stop NSADs and ACE inhibitors, TTKG < 5, Response to 9a-fludrocortisone TTKG ≧ 10 ";

    QuestionsAnswers[903][1] = " hypoaldosteronism (⾼⾎鉀評估) {Nephro}";

    QuestionsAnswers[904][0] = "ventricular fibrillation, Flaccid paralysis, Decreased ammonia production ";

    QuestionsAnswers[904][1] = " ⾼⾎鉀 {Nephro}";

    QuestionsAnswers[905][0] = "Hypokalemia, muscular weakness, muscle pain, and muscle cramps (from disturbed function of the skeletal muscles), and muscle spasms (from disturbed function of smooth muscles), hypocalcemia, tetany ";

    QuestionsAnswers[905][1] = " Metabolic alkalosis (低⾎鉀的 approach) Consider cell shifts {Nephro}";

    QuestionsAnswers[906][0] = "Hyperkalemia, clinically well without any ECG changes ";

    QuestionsAnswers[906][1] = " Pseudohyperkalemia (如何評估⾼⾎鉀？) {Nephro}";

    QuestionsAnswers[907][0] = "一位 58 歲尿毒症患者因續發性副甲狀腺亢進接受副甲狀腺切除手術，術後突發手部tetany，身體檢查發現 Chvostek’s sign ";

    QuestionsAnswers[907][1] = " 低血鈣 {Nephro}";

    QuestionsAnswers[908][0] = "Osteoblast/osteoclast 活性與數量快速增加, 骨質中出現high peritrabecular fibrosis, hyperparathyroidism ";

    QuestionsAnswers[908][1] = " High-turnover bone disease {Nephro}";

    QuestionsAnswers[909][0] = "Terminal Dribbling ";

    QuestionsAnswers[909][1] = " 攝護腺肥大 (早期) {Uro}";

    QuestionsAnswers[910][0] = "frequency、urgency, 排尿會痛、有灼熱感, 發燒 ";

    QuestionsAnswers[910][1] = " Urinary Tract Infection, UTI {Uro}";

    QuestionsAnswers[911][0] = "Nitrite, 高倍鏡下超過 5 個WBC, 尿液菌落培養>1e+5CFU/ml ";

    QuestionsAnswers[911][1] = " UTI (確診)(尿液培養 == Gold standard) (革蘭氏陰性菌) {Uro}";

    QuestionsAnswers[912][0] = "Papillary necrosis, Pneumaturia, 致病菌：E.coli ";

    QuestionsAnswers[912][1] = " Emphysematous pyelonephritis {Uro}";

    QuestionsAnswers[913][0] = "女性, 免疫力不好者, urgency & frequency ";

    QuestionsAnswers[913][1] = " Malacoplakia {Uro}";

    QuestionsAnswers[914][0] = "Genitalia產生painful ulcer, 會痛的雙側inguinal adenopathy ";

    QuestionsAnswers[914][1] = " Herpes Simplex {Uro}";

    QuestionsAnswers[915][0] = "髮線沒有後退，在額頭上有細毛, 鬍鬚等毛髮生長較慢, 肩膀較窄 ";

    QuestionsAnswers[915][1] = " hypogonadism {Uro}";

    QuestionsAnswers[916][0] = "Male infertility, Sperm+, gonadotoxin ";

    QuestionsAnswers[916][1] = " Varicocele (診斷流程) {Uro}";

    QuestionsAnswers[917][0] = "男性不孕症, Azoospermia, 抽血看激素、外觀, 三個皆低 ";

    QuestionsAnswers[917][1] = " Hypogonadism (診斷流程) {Uro}";

    QuestionsAnswers[918][0] = "Prehn’s sign positive ";

    QuestionsAnswers[918][1] = " 副睪炎 {Uro}";

    QuestionsAnswers[919][0] = "睪丸產生腫脹、疼痛, Prehn′s sign (-), cremasteric reflex消失 ";

    QuestionsAnswers[919][1] = " Testicular torsion {Uro}";

    QuestionsAnswers[920][0] = "a bag of worms, 躺下之後會消腫 ";

    QuestionsAnswers[920][1] = " varicocele {Uro}";

    QuestionsAnswers[921][0] = "病人出現中央型肥胖、月亮臉、水牛肩→ Order 24 小時尿液 cortisol 檢查→確定是 Cortisol 過度分泌→詢問病史：是否有習慣性服用成藥？：, 是 ";

    QuestionsAnswers[921][1] = " 醫源性類固醇 (Cushing syndrome 診斷邏輯) {Uro}";

    QuestionsAnswers[922][0] = "病人出現難控制的高血壓，且有periodic paralysis ";

    QuestionsAnswers[922][1] = " Conn syndrome（Aldosterone 太高） {Uro}";

    QuestionsAnswers[923][0] = "去做體檢，意外發現腎臟有個 cyst：, Bosniak III/IV ";

    QuestionsAnswers[923][1] = " 裡面很可能躲惡性腫瘤 {Uro}";

    QuestionsAnswers[924][0] = "CT：central stellate scar, 血管攝影：Spoke-wheel pattern ";

    QuestionsAnswers[924][1] = " Oncocytoma, RCC {Uro}";

    QuestionsAnswers[925][0] = "Mental retardation, Epilepsy, Adenoma sebaceum, skin lesions, 體染色體顯性 ";

    QuestionsAnswers[925][1] = " Angiomyolipoma (AML) {Uro}";

    QuestionsAnswers[926][0] = "flank pain, mass, hematuria ";

    QuestionsAnswers[926][1] = " Renal cell carcinoma（RCC） (Classic triad*) {Uro}";

    QuestionsAnswers[927][0] = "Wilms tumor, Aniridia, GU abnormalities, Mental Retard ";

    QuestionsAnswers[927][1] = " Nephroblastoma ( 又稱 Wilms Tumor ) (WAGR Syndrome) {Uro}";

    QuestionsAnswers[928][0] = "無痛的睪丸腫塊, 摸得到的testicular masses → 陰囊超音波, 後來初步判斷是 epididymo-orchitis，給了抗生素治療後，在 2-4 週內重新評估 ";

    QuestionsAnswers[928][1] = " Germ Cell Tumors ( GCT ) （老師說很多泌尿科醫師因為誤診這個疾病而吃上官司，怕爆><） {Uro}";

    QuestionsAnswers[929][0] = "70 歲男性, 主訴 儲尿症狀:排尿急迫、頻尿+夜尿三次, 治療 使用 Tolterodine ，預期效果可改善頻尿、急尿, 結果 病人反而覺得更頻尿、急尿且排尿困難，最後尿滯留要放導尿管 ";

    QuestionsAnswers[929][1] = " 良性攝護腺肥大(BPH) {Uro}";

    QuestionsAnswers[930][0] = "Nocturia, Global Polyuria (>40ml/Kg/D) ";

    QuestionsAnswers[930][1] = " 喝太多水 (用排尿記錄簿來鑑別診斷) {Uro}";

    QuestionsAnswers[931][0] = "febrile urinary tract infection, prenatal hydronephrosis ";

    QuestionsAnswers[931][1] = " 小兒泌尿疾病 (膀胱輸尿管逆流、雙套集尿系統異常和上泌尿道阻塞) {Uro}";

    QuestionsAnswers[932][0] = "新生兒 APD >15mm ";

    QuestionsAnswers[932][1] = " Pelvic dilatation {Uro}";

    QuestionsAnswers[933][0] = "Hooded foreskin, Ventral curvature ";

    QuestionsAnswers[933][1] = " Hypospadia {Uro}";

    QuestionsAnswers[934][0] = "International index of erectile function IIEF 小於等於 21 分 ";

    QuestionsAnswers[934][1] = " 中度到嚴重的勃起障礙 (診斷) {Uro}";

    QuestionsAnswers[935][0] = "Intravaginal Ejaculatory Latency Time(IELT)： <1 min ";

    QuestionsAnswers[935][1] = " Lifelong PE (hypersensitivity of 5-HT_1A receptor and/or hyposensitivity of 5-HT_2C receptor) (ISSM 2013) {Uro}";

    QuestionsAnswers[936][0] = "Digital rectal examination(DRE), Prostate specific antigen (PSA), PCA3 marker ";

    QuestionsAnswers[936][1] = " Prostate cancer {Uro}";

    QuestionsAnswers[937][0] = "intermittent 的血尿, Irritative voiding ";

    QuestionsAnswers[937][1] = " 尿路上皮癌/膀胱癌 {Uro}";

    QuestionsAnswers[938][0] = "女性, bladder pain, urinary frequency ";

    QuestionsAnswers[938][1] = " Interstitial Cystitis(IC) {Uro}";

    QuestionsAnswers[939][0] = "VLPP(Valsalva Leak Point Pressure) <60 ";

    QuestionsAnswers[939][1] = " TypeIII，ISD 機轉比較明顯 {Uro}";

    QuestionsAnswers[940][0] = "血尿, 腰部疼痛, 腰部大部瘀青 ";

    QuestionsAnswers[940][1] = " 腎臟創傷 {Uro}";

    QuestionsAnswers[941][0] = "開完刀出現下列症狀：, Sepsis, Ileus, Frank mass, Urinary fistula to skin ";

    QuestionsAnswers[941][1] = " 輸尿管創傷 {Uro}";

    QuestionsAnswers[942][0] = "排尿困難, 血尿, Suprapubic swelling ";

    QuestionsAnswers[942][1] = " Extraperitoneal rupture {Uro}";

    QuestionsAnswers[943][0] = "解尿困難, 血尿, 會陰血腫 ";

    QuestionsAnswers[943][1] = " 尿道創傷 (prostatic urethra、membranous urethra) {Uro}";

    QuestionsAnswers[944][0] = "A 24-year-old man had a CT scan 36 hours afer a motor vehicle accident., There is complete absence of enhancement of the entire right kidney ";

    QuestionsAnswers[944][1] = " Grade V Renal trauma {Uro}";

    QuestionsAnswers[945][0] = "Neutropenia, Anemia, Infection, Blasts ";

    QuestionsAnswers[945][1] = " Acute leukemia {Hema}";

    QuestionsAnswers[946][0] = "小便顏色較深, Acholuric, 血漿中游離的血紅素增加 ";

    QuestionsAnswers[946][1] = " 溶血性貧血 {Hema}";

    QuestionsAnswers[947][0] = "pancytopenia, LDH 高、indirect hyperbilirubinemia, beefy tongue ";

    QuestionsAnswers[947][1] = " megaloblastic anemia {Hema}";

    QuestionsAnswers[948][0] = "25 歲男子，已經全身不舒服兩個禮拜, WBC 50,000 /μl, Hb 7.5 g/dl, Pl 18 x 1000, DC(%):, Blast 85, Seg 6, Monocyte 2, Lymphocyte 7 ";

    QuestionsAnswers[948][1] = " ALL/AML {Hema}";

    QuestionsAnswers[949][0] = "發燒, CNS involvement, Hepatosplenomegaly ";

    QuestionsAnswers[949][1] = " acute leukemia (ALL) {Hema}";

    QuestionsAnswers[950][0] = "骨髓和血液中 blasts 的比例 <20%, t(8;21) ";

    QuestionsAnswers[950][1] = " AML (診斷流程總覽) {Hema}";

    QuestionsAnswers[951][0] = "陳女士 61 歲 最近走路很喘, CBC WBC：354700/μl, 紅血球數據 RBC：3590000/μl,HGB：8.4 g/dL,HCT：24%,MCV：66.9 fL,MCH：23.4 pg, PLT 1170000/μl, DC 呈 left shift, 理學檢查 脾臟腫大(10 fb below Left costal margin), LAP score Decrease, BM hypercellularity, myeloid hyperplasia, blasts<5%, 分子生物 Ph’ chromosome (+) bcr-abl P210(+) ";

    QuestionsAnswers[951][1] = " Chronic Myeloid Leukemia (CML) (確診) {Hema}";

    QuestionsAnswers[952][0] = "CC : vertigo, gait disturbance & facial flushing, HB 20.3 gm/dl, Hct 64.7%, WBC 31,300, RBC 7.03 M /μL, MCV 84fL, Platelet 657,000 /μL, ABG PH : 7.432, PCO2 : 35.6, PO2 : 77.5, O2 Sat : 95.6%, RBC volume 3264.4 ml (predict : 1899 ml), EPO 5.23 mU / ml (8.2 ~ 21.4 mU/ml) ";

    QuestionsAnswers[952][1] = " Polycythemia vera (PV) {Hema}";

    QuestionsAnswers[953][0] = "Platelet count ≥450e+9/L, Bone marrow biopsy showing proliferation mainly of the megakaryocyte lineage with increased numbers of enlarged, mature megakaryocytes with hyperlobulated nuclei. No significant increase or left shift in neutrophil granulopoieses or erythropoiesis and very rarely minor (grade 1) increase in reticulin fibers., Not meeting WHO criteria for BCR-ABL1+ CML, PV, PMF, myelodysplastic syndromes, or other myeloid neoplasms, Presence of JAK2 mutation ";

    QuestionsAnswers[953][1] = " ET (確診)(WHO diagnostic criteria essential thrombocythemia 2016) {Hema}";

    QuestionsAnswers[954][0] = "Fatigue, Night sweats, Early Satiety, 無淋巴結腫大 ";

    QuestionsAnswers[954][1] = " MPN {Hema}";

    QuestionsAnswers[955][0] = "microcytic ";

    QuestionsAnswers[955][1] = " Iron deficiency anemia {Hema}";

    QuestionsAnswers[956][0] = "Severe hypocellularity, Marrow injury cells為主要觀察到的細胞，少有造血細胞, Peripheral blood 中，Pancytopenia ";

    QuestionsAnswers[956][1] = " Aplastic Anemia {Hema}";

    QuestionsAnswers[957][0] = "≥ 20% blasts in PB, Maturation arrest, Anemia/thrombocytopenia ";

    QuestionsAnswers[957][1] = " AML {Hema}";

    QuestionsAnswers[958][0] = "Serum ferritin下降, Transferrin saturation 下降(<16%), Hemoglobin 下降 ";

    QuestionsAnswers[958][1] = " Iron deficiency {Hema}";

    QuestionsAnswers[959][0] = "Peripheral neuropathy, Dysproprioception, indirect jaundice ";

    QuestionsAnswers[959][1] = " 大球性貧血 {Hema}";

    QuestionsAnswers[960][0] = "SI <30, TIBC >360, Ferritin <15 μg/L ";

    QuestionsAnswers[960][1] = " Iron Deficiency (鑑別診斷)(vs Inflammation) {Hema}";

    QuestionsAnswers[961][0] = "BM cellularity <25% ";

    QuestionsAnswers[961][1] = " AA (Aplastic anemia) (確診) {Hema}";

    QuestionsAnswers[962][0] = "Intravascular hemolysis, BM aplasia, Thrombosis ";

    QuestionsAnswers[962][1] = " Paroxysmal Nocturnal Hematuria(PNH) {Hema}";

    QuestionsAnswers[963][0] = "淋巴結腫大, 侵犯骨髓, 無 tuberculosis ";

    QuestionsAnswers[963][1] = " Lymphoma {Hema}";

    QuestionsAnswers[964][0] = "20-30 歲, 中軸的淋巴結, 依序的擴散, 無淋巴結外侵犯 ";

    QuestionsAnswers[964][1] = " Hodgkin Disease(HD) (Hodgkin’lymphoma vs. Non-hodgkin lymphoma) {Hema}";

    QuestionsAnswers[965][0] = "全身性淋巴結腫大, 嗜酸性球浸潤、發燒、體重減輕 ";

    QuestionsAnswers[965][1] = " Peripheral T-cell Lymphoma, NOS {Hema}";

    QuestionsAnswers[966][0] = "B symptoms, itch、lumps, Lymphadenopathy ";

    QuestionsAnswers[966][1] = " Lymphoma {Hema}";

    QuestionsAnswers[967][0] = "CD20+ ";

    QuestionsAnswers[967][1] = " B cell lymphoma {Hema}";

    QuestionsAnswers[968][0] = "發燒、喘、抽血檢查發現白血球過高、貧血 ";

    QuestionsAnswers[968][1] = " 血癌 {Hema}";

    QuestionsAnswers[969][0] = "Vascular Thrombosis, Complications of Pregnancy, Anti-cardiolipin IgG Antibodies ";

    QuestionsAnswers[969][1] = " APS {Hema}";

    QuestionsAnswers[970][0] = "無 Petechiae, Minimal Bleeding from superficial cut, large Superficial ecchymosis, Deep tissue hematomas, Hemarthrosis, Delayed bleeding ";

    QuestionsAnswers[970][1] = " Coagulation disorder (vs Purpuric disorder) {Hema}";

    QuestionsAnswers[971][0] = "Ecchymosis, Deep tissue hematoma, Hemarthrosis ";

    QuestionsAnswers[971][1] = " Coagulation disorder {Hema}";

    QuestionsAnswers[972][0] = "遇到病人血小板很低下合併出血徵象，排除 -MDS(Myelodysplastic Syndromes), -Splenomegaly with hypersplenism, -DIC(Disseminated Intravascular), -Sepsis, Pseudothrombocytopenia ";

    QuestionsAnswers[972][1] = " Immune Thrombocytopenic Purpura ；Immune Thrombocytopenia (確診) {Hema}";

    QuestionsAnswers[973][0] = "一位看起來就是 purpuric disorder的病人，而 Platelet Function Closure Time 異常，但其 PLT count 卻正常。病人有家族病史 ";

    QuestionsAnswers[973][1] = " Hereditary Qualitative Platelet Disorders {Hema}";

    QuestionsAnswers[974][0] = "Bleeding tendency since toddler, 長大之後發現 Coagulation disorder, Hepatitis C ";

    QuestionsAnswers[974][1] = " Hemophilia (因為早期需要輸血補充凝血因子，結果造成感染) {Hema}";

    QuestionsAnswers[975][0] = "prolonged aPTT, prolonged bleeding time, 出血傾向 mild ";

    QuestionsAnswers[975][1] = " Von Willebrand Disease {Hema}";

    QuestionsAnswers[976][0] = "嚴重感染, Platelet count < 50, Elevated fibrin related marker strong increase ";

    QuestionsAnswers[976][1] = " DIC (確診) (Scoring system for overt DIC) {Hema}";

    QuestionsAnswers[977][0] = "65 歲男性因 bone pain 來就醫，檢驗發現 Hb 9.0 gm/dL，紅血球成串錢反應，血清電泳在 gamma 區有一 spike，X 光發現多處骨頭有 punched out lytic lesions，骨髓抹片發現大量的 plasma cells ";

    QuestionsAnswers[977][1] = " Multiple myeloma {Hema}";

    QuestionsAnswers[978][0] = "60% Plasmacytosis, Light chains I/U>100, MRI>1 focal lesion, calcium elevation, renal insufficiency, anemia, bone disease ";

    QuestionsAnswers[978][1] = " Multiple myeloma (確診) {Hema}";

    QuestionsAnswers[979][0] = "在周邊血液看到不正常的 monoclonal B cell 聚集, B cell 呈現 CD5 (+)、CD23(+), B cell 異常至少三個月 ";

    QuestionsAnswers[979][1] = " Chronic Lymphocytic Leukemia(CLL) {Hema}";

    QuestionsAnswers[980][0] = "Lymphadenopathy, DOE(dyspnea on exertion), 反覆感染 ";

    QuestionsAnswers[980][1] = " Chronic Lymphocytic Leukemia(CLL) {Hema}";

    QuestionsAnswers[981][0] = "疼痛, 呼吸困難、發燒發冷，低血壓、dark urine、出血, DIC, intravascular hemolysis ";

    QuestionsAnswers[981][1] = " acute hemolytic transfusion reaction {Hema}";

    QuestionsAnswers[982][0] = "LDH ↑ , T.bil ↑ , reticulocyte ↑ , haptoglobin ↑, direct Coomb's test : 病人的紅血球上有抗體 ";

    QuestionsAnswers[982][1] = " acute hemolytic transfusion reaction (確診) {Hema}";

    QuestionsAnswers[983][0] = "輸血後沒過多久高燒（>39°C）, rigors, 收縮壓下降>30mmHg ";

    QuestionsAnswers[983][1] = " Bacterial Sepsis {Hema}";

    QuestionsAnswers[984][0] = "剩餘血品、接受輸血者的血培養出同一種菌 ";

    QuestionsAnswers[984][1] = " bacterial sepsis (確診) {Hema}";

    QuestionsAnswers[985][0] = "unexplained anemia, hyperbilirubinemia, mild fever ";

    QuestionsAnswers[985][1] = " Delayed hemolytic transfusion reaction, DHTR {Hema}";

    QuestionsAnswers[986][0] = "新發生的 Direct antiglobulin （Coombs'） test陽性, 新發生的 Antibody screen陽性, 輸血後 10 天後 ";

    QuestionsAnswers[986][1] = " Delayed hemolytic transfusion reaction, DHTR (確診) {Hema}";

    QuestionsAnswers[987][0] = "疲勞、疼痛、食慾不振/厭食、體重減輕、不明發燒 ";

    QuestionsAnswers[987][1] = " 癌症 {Onco}";

    QuestionsAnswers[988][0] = "結腸炎, hypophysitis、甲狀腺低下、腎上腺低下, 肝炎 ";

    QuestionsAnswers[988][1] = " Checkpoint inhibitor 的副作用：iRAE (immune related adverse events) {Onco}";

    QuestionsAnswers[989][0] = "45 歲男性, 主訴：abdominal fullness持續一個月, 腹部電腦斷層影像結果：multiple liver tumor, metastasis or multiple primary HCC, CEA：754, AFP：3.42 ";

    QuestionsAnswers[989][1] = " sigmoid colon adenocarcinoma with liver metastasis {Onco}";

    QuestionsAnswers[990][0] = "5-FU(Fluorouracil)療效差 ";

    QuestionsAnswers[990][1] = " Thymidylate synthase(TS)表現量⾼ {Onco}";

    QuestionsAnswers[991][0] = "5-FU 的毒性增加 ";

    QuestionsAnswers[991][1] = " DPYD 基因出現「 IVS14+1 G2A 基因多型性」 {Onco}";

    QuestionsAnswers[992][0] = "減弱 Rituximab 和 Cetuximab 的藥效 ";

    QuestionsAnswers[992][1] = " FcRγ 的 His131Arg {Onco}";

    QuestionsAnswers[993][0] = "Cetuximab 療效降低 ";

    QuestionsAnswers[993][1] = " K-Ras 基因突變 {Onco}";

    QuestionsAnswers[994][0] = "喜樹鹼毒性增強 ";

    QuestionsAnswers[994][1] = " UGT1A1*28 變異 {Onco}";

    QuestionsAnswers[995][0] = "鉑類藥物抗藥性 ";

    QuestionsAnswers[995][1] = " NER 的過量表現 {Onco}";

    QuestionsAnswers[996][0] = "增加 oxaliplatin 化療神經病變的發⽣率 ";

    QuestionsAnswers[996][1] = " GSTP1 codon 105 的氨基酸從 Isoleucine（Ile）變成 Valine（Val） {Onco}";

    QuestionsAnswers[997][0] = "降低嗎啡類⽌痛藥之療效 ";

    QuestionsAnswers[997][1] = " μ 嗎啡接受器 A118G 基因多型性 {Onco}";

    QuestionsAnswers[998][0] = "_";

    QuestionsAnswers[998][1] = "_";

    QuestionsAnswers[999][0] = "Argyll Robertson pupil (loss of light reflex constriction; accommodation is preserved; classic form bilateral) ";

    QuestionsAnswers[999][1] = " Tertiary (neuro) syphilis";

    QuestionsAnswers[1000][0] = "Blue sclera ";

    QuestionsAnswers[1000][1] = " <br>    Osteogenesis imperfecta, types I and II (fatal)<br>    Also may be seen in Ehlers-Danlos syndrome, pseudoxanthoma elasticum, Marfn syndrome<br>    ";

    QuestionsAnswers[1001][0] = "Brushfield spots (ring of white spots around periphery of iris) ";

    QuestionsAnswers[1001][1] = " Down syndrome (trisomy 21)";

    QuestionsAnswers[1002][0] = "Charcot's triad #1 (nystagmus, intention tremor, scanning speech; triad #2 is for cholangitis: jaundice, fever, rigors, pain) ";

    QuestionsAnswers[1002][1] = " Multiple sclerosis";

    QuestionsAnswers[1003][0] = "Cerry-red spot (retinal pallor contrasting with strikingly red macular spot) ";

    QuestionsAnswers[1003][1] = " Tay-Sachs, Niemann-Pick, central retinal artery occlusion";

    QuestionsAnswers[1004][0] = "Cotton-wool spots (small areas of yellowish-white discoloration in the retina) ";

    QuestionsAnswers[1004][1] = " Chronic hypertension";

    QuestionsAnswers[1005][0] = "Horner syndrome (ptosis, miosis, anhidrosis, and apparent enophthalmos) ";

    QuestionsAnswers[1005][1] = " Impaired sympathetic innervation to eye (numerous causes, including vascular, traumatic, congenital, Pancoast tumor, other tumors)";

    QuestionsAnswers[1006][0] = "Intranuclear ophthalmoplegia (INO) (disorder of lateral conjugate gaze; affected eye cannot adduct and nystagmus occurs in the abducting eye; convergence is intact) ";

    QuestionsAnswers[1006][1] = " Multiple sclerosis";

    QuestionsAnswers[1007][0] = "Kayser-Fleischer rings (greenish or golden copper deposits in crescent or ring in the Descemet's membrane) ";

    QuestionsAnswers[1007][1] = " Wilson disease";

    QuestionsAnswers[1008][0] = "Lens dislocation ";

    QuestionsAnswers[1008][1] = " Marfan syndrome (can be accompanied by aortic dissection and joint hyperflexibility)";

    QuestionsAnswers[1009][0] = "Lisch nodules (tan harmartomas on the iris) ";

    QuestionsAnswers[1009][1] = " Neurofibromatosis type I";

    QuestionsAnswers[1010][0] = "Roth spots (hemorrhage in retina with a white center) ";

    QuestionsAnswers[1010][1] = " Bacterial endocarditis (also seen in leukemia, diabetes, collagen-vascular diseases)";

    QuestionsAnswers[1011][0] = "Adenoma sebaceum (raised, erythematous papules on the face, especially around the nose) ";

    QuestionsAnswers[1011][1] = " Tuberous sclerosis";

    QuestionsAnswers[1012][0] = "Anesthesia ";

    QuestionsAnswers[1012][1] = " Leprosy (skin may be blotchy, red, or thickened)";

    QuestionsAnswers[1013][0] = "Bullae (tense) ";

    QuestionsAnswers[1013][1] = " Bullous pemphigoid";

    QuestionsAnswers[1014][0] = "Bullae (flaccid, rupturing) ";

    QuestionsAnswers[1014][1] = " Pemphigus";

    QuestionsAnswers[1015][0] = "Brown-black lesion with fuzzy edge ";

    QuestionsAnswers[1015][1] = " Melanoma (depth of lesion most important prognotic indicator)";

    QuestionsAnswers[1016][0] = "Butterfly rash (nose and cheeks) ";

    QuestionsAnswers[1016][1] = " Systemic lupus erythematosus";

    QuestionsAnswers[1017][0] = "Café-au-lait spots (light brown spots, often over 1 cm) ";

    QuestionsAnswers[1017][1] = " Neurofibromatosis";

    QuestionsAnswers[1018][0] = "Chancre (painless ulcer, usually on genitalia) ";

    QuestionsAnswers[1018][1] = " Primary syphilis";

    QuestionsAnswers[1019][0] = "Chancroid (painful ulcer, usually on genitalia) ";

    QuestionsAnswers[1019][1] = " Haemophilus ducreyi";

    QuestionsAnswers[1020][0] = "Condylomata lata (smooth, flat, painless genital lesions) ";

    QuestionsAnswers[1020][1] = " Secondary syphilis (scrapings may show spirochetes with darkfield microscopy)";

    QuestionsAnswers[1021][0] = "Dermatitis, dementia, diarrhea ";

    QuestionsAnswers[1021][1] = " Pellagra caused by niacin deficiency";

    QuestionsAnswers[1022][0] = "Dog or cat bite ";

    QuestionsAnswers[1022][1] = " Pasteurella multocida";

    QuestionsAnswers[1023][0] = "Elastic skin ";

    QuestionsAnswers[1023][1] = " Ehlers-Danlos syndrome";

    QuestionsAnswers[1024][0] = "Erythema chronicum migrans (expanding red ring with central clearing at tick bite site) ";

    QuestionsAnswers[1024][1] = " Lyme disease";

    QuestionsAnswers[1025][0] = "Generalized hyperpigmentation ";

    QuestionsAnswers[1025][1] = " Addison disease (primary adrenal insufficiency)";

    QuestionsAnswers[1026][0] = "Kaposi sarcoma (usually slightly raised violaceous papules or plaques) ";

    QuestionsAnswers[1026][1] = " AIDS";

    QuestionsAnswers[1027][0] = "Port wine stain (large, purplish lesion on face) ";

    QuestionsAnswers[1027][1] = " Hemangioma";

    QuestionsAnswers[1028][0] = "Rash on palms and soles ";

    QuestionsAnswers[1028][1] = " Secondary syphilis, Rocky Mountain spotted fever";

    QuestionsAnswers[1029][0] = "Silvery, scaly plaques (knees, elbows, scalp) ";

    QuestionsAnswers[1029][1] = " Psoriasis";

    QuestionsAnswers[1030][0] = "Slapped cheeks ";

    QuestionsAnswers[1030][1] = " Erythema infectiosum (fifth disease, parvovirus B19)";

    QuestionsAnswers[1031][0] = "Vesicles, small painful ";

    QuestionsAnswers[1031][1] = " Herpes, dermatitis herpetiformis";

    QuestionsAnswers[1032][0] = "Arachnodactyly (very long fingers and toes) ";

    QuestionsAnswers[1032][1] = " Marfan syndrome";

    QuestionsAnswers[1033][0] = "Babinski sign (stimulation of sole of foot → upgoing great toe) ";

    QuestionsAnswers[1033][1] = " Upper motor neuron lesion";

    QuestionsAnswers[1034][0] = "Baker's cyst (cyst in popliteal fossa) ";

    QuestionsAnswers[1034][1] = " Rheumatoid arthritis";

    QuestionsAnswers[1035][0] = "Bouchard's node (PIP osteophytes) ";

    QuestionsAnswers[1035][1] = " Osteoarthritis";

    QuestionsAnswers[1036][0] = "Boutonniere deformity (finger flexed at PIP and hyperextended at DIP) ";

    QuestionsAnswers[1036][1] = " Rheumatoid arthritis";

    QuestionsAnswers[1037][0] = "Calf pseudohypertrophy (replacement of muscle with fat and connective tissue) ";

    QuestionsAnswers[1037][1] = " Duchenne muscular dystrophy";

    QuestionsAnswers[1038][0] = "Heberden's nodes (DIP enlargement because of osteophytes) ";

    QuestionsAnswers[1038][1] = " Osteoarthritis";

    QuestionsAnswers[1039][0] = "Janeway lesions (hemorrhagic nodules in palms or soles) ";

    QuestionsAnswers[1039][1] = " Endocarditis";

    QuestionsAnswers[1040][0] = "Osler's nodes (tender nodules on palms and soles) ";

    QuestionsAnswers[1040][1] = " Endocarditis";

    QuestionsAnswers[1041][0] = "Palpable purpura (legs and buttocks) ";

    QuestionsAnswers[1041][1] = " Henoch-Schönlein purpura";

    QuestionsAnswers[1042][0] = "Rash affecting palms and soles ";

    QuestionsAnswers[1042][1] = " Secondary syphilis, Rocky Mountain spotted fever";

    QuestionsAnswers[1043][0] = "Raynaud syndrome (pale to blue to red on hands or feet) ";

    QuestionsAnswers[1043][1] = " Recurrent vasospasm";

    QuestionsAnswers[1044][0] = "Simian crease (single long crease across palm) ";

    QuestionsAnswers[1044][1] = " Down syndrome (trisomy 21)";

    QuestionsAnswers[1045][0] = "Splinter hemorrhage (found under fingernails) ";

    QuestionsAnswers[1045][1] = " Infective endocarditis, trauma";

    QuestionsAnswers[1046][0] = "Tendon xanthomas (classically Achilles tendon) ";

    QuestionsAnswers[1046][1] = " Familial hypercholesterolemia";

    QuestionsAnswers[1047][0] = "Tophi (hard nodules composed of uric acid) ";

    QuestionsAnswers[1047][1] = " Gout";

    QuestionsAnswers[1048][0] = "Bamboo spine (rigid spine with fused joints) ";

    QuestionsAnswers[1048][1] = " Ankylosing spondylitis";

    QuestionsAnswers[1049][0] = "Boot-shaped heart (upturned ventricular apex and large pulmonary artery make the \"boot\") ";

    QuestionsAnswers[1049][1] = " Right ventricular hypertrophy; tetralogy of Fallot";

    QuestionsAnswers[1050][0] = "Codman's triangle (new subperiosteal bone lifts periosteum) ";

    QuestionsAnswers[1050][1] = " Osteosarcoma";

    QuestionsAnswers[1051][0] = "Double-bubble sign (two air-filled structures in upper abdomen, with little or no air distally) ";

    QuestionsAnswers[1051][1] = " Duodenal atresia, also duodenal stenosis, duodenal webs, annular pancreas, malrotation of the gut";

    QuestionsAnswers[1052][0] = "\"Hair on end\" or \"crew-out\" ";

    QuestionsAnswers[1052][1] = " Beta thelassemia, sickle cell anemia (extramedullary hematopoiesis below periosteum leads to formation of bony spicules = \"hair\" on outside of bone)";

    QuestionsAnswers[1053][0] = "Mammillary body atrophy (memory loss) ";

    QuestionsAnswers[1053][1] = " Wernicke encephalopathy";

    QuestionsAnswers[1054][0] = "Periosteal elevation ";

    QuestionsAnswers[1054][1] = " Pyogenic osteomyelitis (elevation due to subperiosteal inflammation; this may be the earliest radiologic sign of osteomyelitis)";

    QuestionsAnswers[1055][0] = "\"Punched out\" (lytic) lesions of bone ";

    QuestionsAnswers[1055][1] = " Multiple myeloma";

    QuestionsAnswers[1056][0] = "Rib notching ";

    QuestionsAnswers[1056][1] = " Coarctation of aorta (dilated aorta before coarctation puts chronic pressure on ribs)";

    QuestionsAnswers[1057][0] = "Soap bubble (lytic expansile lesion) ";

    QuestionsAnswers[1057][1] = " Giant cell tumor of bone";

    QuestionsAnswers[1058][0] = "String sign (small bowel follow-though shows very narrow lumen, typically in terminal ileum) ";

    QuestionsAnswers[1058][1] = " Crohn disease";

    QuestionsAnswers[1059][0] = "Soft systolic ejection murmurs ";

    QuestionsAnswers[1059][1] = " May be normal in infants, children, pregnancy";

    QuestionsAnswers[1060][0] = "Systolic ejection murmur (right 2nd interspace) ";

    QuestionsAnswers[1060][1] = " Aortic stenosis";

    QuestionsAnswers[1061][0] = "Systolic ejection murmur (mid to lower left sternal border) ";

    QuestionsAnswers[1061][1] = " Hypertrophic obstructive cardiomyopathy";

    QuestionsAnswers[1062][0] = "Systolic ejection murmur (left 2nd interspace) ";

    QuestionsAnswers[1062][1] = " Pulmonic stenosis";

    QuestionsAnswers[1063][0] = "Systolic ejection murmur (apex, can increase through systole) ";

    QuestionsAnswers[1063][1] = " Mitral regurgitation";

    QuestionsAnswers[1064][0] = "Systolic ejection murmur (lower left sternal border, increases with inspiration) ";

    QuestionsAnswers[1064][1] = " Tricuspid regurgitation";

    QuestionsAnswers[1065][0] = "Holosystolic ejection murmur (left fourth interspace) ";

    QuestionsAnswers[1065][1] = " Ventricular septal defect";

    QuestionsAnswers[1066][0] = "Diastolic murmur (apex) ";

    QuestionsAnswers[1066][1] = " Mitral stenosis";

    QuestionsAnswers[1067][0] = "Diastolic murmur (left 4th interspace) ";

    QuestionsAnswers[1067][1] = " Tricuspid stenosis";

    QuestionsAnswers[1068][0] = "Decrescendo diastolic murmur (left 4th interspace) ";

    QuestionsAnswers[1068][1] = " Aortic regurgitation (see also Austin-Flint murmur)";

    QuestionsAnswers[1069][0] = "Austin-Flint murmur (mid-to-late-diastolic rumble/low-frequency murmur over apex) ";

    QuestionsAnswers[1069][1] = " Severe aortic regurgitation";

    QuestionsAnswers[1070][0] = "Decrescendo Diastolic murmur (right sternal edge and left 2nd interspace) ";

    QuestionsAnswers[1070][1] = " Pulmonic regurgitation";

    QuestionsAnswers[1071][0] = "Continuous murmur (left 2nd interspace below median end of clavicle) ";

    QuestionsAnswers[1071][1] = " Patent ductus arteriosus";

    QuestionsAnswers[1072][0] = "Continuous murmur (centrally at 3rd interspace level) ";

    QuestionsAnswers[1072][1] = " Aorticopulmonary window defect";

    QuestionsAnswers[1073][0] = "Continuous murmur (peripheral body sites) ";

    QuestionsAnswers[1073][1] = " Systemic arteriovenous connections";

    QuestionsAnswers[1074][0] = "Loud S1 ";

    QuestionsAnswers[1074][1] = " Mitral stenosis";

    QuestionsAnswers[1075][0] = "Soft or absent S1 ";

    QuestionsAnswers[1075][1] = " Mitral regurgitation if valve is stiff";

    QuestionsAnswers[1076][0] = "Late aortic valve closure in S2 ";

    QuestionsAnswers[1076][1] = " Left bundle branch block, aortic stenosis";

    QuestionsAnswers[1077][0] = "Late pulmonic valve closure in S2 ";

    QuestionsAnswers[1077][1] = " Atrial septal defect, right bundle branch block";

    QuestionsAnswers[1078][0] = "Fixed split S2 during respiration ";

    QuestionsAnswers[1078][1] = " Atrial septal defect";

    QuestionsAnswers[1079][0] = "Paradoxical splitting of S2 ";

    QuestionsAnswers[1079][1] = " Left bundle branch block (also some cases of aortic stenosis and patent ductus)";

    QuestionsAnswers[1080][0] = "Single S2 ";

    QuestionsAnswers[1080][1] = " Badly damaged aortic valve (regurgitation, stenosis, or atresia)";

    QuestionsAnswers[1081][0] = "Early systolic click ";

    QuestionsAnswers[1081][1] = " Congenital aortic or pulmonic valve stenosis, severe pulmonary hypertension";

    QuestionsAnswers[1082][0] = "Changing systolic clicks with position ";

    QuestionsAnswers[1082][1] = " Myxomatous degeneration of mitral or tricuspid valves";

    QuestionsAnswers[1083][0] = "S3 (pericardial knock) ";

    QuestionsAnswers[1083][1] = " Dilated and noncompliant left (strongest on expiration) or right (strongest on inspiration) ventricle, normal in kids";

    QuestionsAnswers[1084][0] = "S4 ";

    QuestionsAnswers[1084][1] = " Right (strongest on inspiration) or left (strongest on expiration) ventricular dysfunction (myocardial ischemia or early myocardial infarction)";

    QuestionsAnswers[1085][0] = "Summation gallop (combined S3 and S4) ";

    QuestionsAnswers[1085][1] = " Tachycardic patient with right or left ventricular dysfunction";

    QuestionsAnswers[1086][0] = "Diastolic knock ";

    QuestionsAnswers[1086][1] = " Constricting pericardium";

    QuestionsAnswers[1087][0] = "Mitral opening snap ";

    QuestionsAnswers[1087][1] = " Mitral stenosis";

    QuestionsAnswers[1088][0] = "5p- ";

    QuestionsAnswers[1088][1] = " Cri-du-chat syndrome (cat-like cry, feeding problems, abnormal mental development)";

    QuestionsAnswers[1089][0] = "45,XO ";

    QuestionsAnswers[1089][1] = " Turner syndrome (infertile female, webbed neck, coarctationn of aorta)";

    QuestionsAnswers[1090][0] = "47,XXY ";

    QuestionsAnswers[1090][1] = " Klinefelter syndrome (male with small testes and eunuchoid habitus)";

    QuestionsAnswers[1091][0] = "CFTR (chloride channel gene, chromosome 7) ";

    QuestionsAnswers[1091][1] = " Cystic fibrosis (recurrent pneumonia, pancreatic exocrine insufficiency)";

    QuestionsAnswers[1092][0] = "FBN1 gene (codes for fibrillin) (chromosome 15) ";

    QuestionsAnswers[1092][1] = " Marfan syndrome (tall stature, hyperextensible joints, dissecting aortic aneurysm)";

    QuestionsAnswers[1093][0] = "NF1 ";

    QuestionsAnswers[1093][1] = " Neurofibromatosis type I (von Recklinghausen disease, chromosome 17, neurofibromas, café-au-lait spots)";

    QuestionsAnswers[1094][0] = "NF2 ";

    QuestionsAnswers[1094][1] = " Neurofibromatosis type II (bilateral acoustic neurofibromatosis, chromosome 22)";

    QuestionsAnswers[1095][0] = "t(8;14) (c-myc) ";

    QuestionsAnswers[1095][1] = " Burkitt lymphoma";

    QuestionsAnswers[1096][0] = "t(9;22) (Philadelphia chromosome, bcr-abl hybrid) ";

    QuestionsAnswers[1096][1] = " CML and occasionally AML";

    QuestionsAnswers[1097][0] = "t(14;18) (bcl-2) ";

    QuestionsAnswers[1097][1] = " Many follicular lymphomas";

    QuestionsAnswers[1098][0] = "Trisomy 13 ";

    QuestionsAnswers[1098][1] = " Patau syndrome (microcephaly, mental retardation, cleft palate, polydactyly, heart malformations)";

    QuestionsAnswers[1099][0] = "Trisomy 18 ";

    QuestionsAnswers[1099][1] = " Edwards syndrome (rocker bottom feet, microcephaly, mental retardation, multiple organ defects)";

    QuestionsAnswers[1100][0] = "Trisomy 21 ";

    QuestionsAnswers[1100][1] = " Down syndrome (most common chromosomal disorder, older maternal age, mental retardation, early Alzheimer disease)";

    QuestionsAnswers[1101][0] = "VHL (chromosome 3) ";

    QuestionsAnswers[1101][1] = " von Hippel-Lindau (hemangioblastomas, renal cell carcinoma)";

    QuestionsAnswers[1102][0] = "XYY ";

    QuestionsAnswers[1102][1] = " XYY syndrome (very tall male with increased risk of behavior problems)";

    QuestionsAnswers[1103][0] = "Auer rods (rods in white blood cell cytoplasm) ";

    QuestionsAnswers[1103][1] = " Acute myelogenous leukemia, particularly promyelocytic";

    QuestionsAnswers[1104][0] = "Basophilic stippling (dots in erythrocytes) ";

    QuestionsAnswers[1104][1] = " Lead poisoning";

    QuestionsAnswers[1105][0] = "Birbeck granules on EM ";

    QuestionsAnswers[1105][1] = " Histiocytosis X (eosinophilic granuloma)";

    QuestionsAnswers[1106][0] = "Call-Exner bodies (ring of cells with pink fluid in center) ";

    QuestionsAnswers[1106][1] = " Granulosa-theca cell tumor of ovary";

    QuestionsAnswers[1107][0] = "Cerebriform nuclei ";

    QuestionsAnswers[1107][1] = " Mycosis fungoides (cutaneous T-cell lymphoma)";

    QuestionsAnswers[1108][0] = "Clue cells (bacteria on epithelial cells) ";

    QuestionsAnswers[1108][1] = " Gardnerella vaginitis";

    QuestionsAnswers[1109][0] = "Councilman bodies (pink, round cytoplasmic inclusion in hepatocytes) ";

    QuestionsAnswers[1109][1] = " Toxic or viral hepatitis";

    QuestionsAnswers[1110][0] = "Cowdry type A bodies (intranuclear eosinophilic inclusions) ";

    QuestionsAnswers[1110][1] = " Herpes";

    QuestionsAnswers[1111][0] = "Crescents in Bowman's capsule ";

    QuestionsAnswers[1111][1] = " Rapidly progressive crescentic glomerulonephritis";

    QuestionsAnswers[1112][0] = "Curschmann's spirals (coiled mucinous fibrils found in sputum) ";

    QuestionsAnswers[1112][1] = " Bronchial asthma";

    QuestionsAnswers[1113][0] = "Depigmentation of neurons in substantia nigra ";

    QuestionsAnswers[1113][1] = " Parkinson disease (degeneration of dopaminergic nigrostriatal neurons)";

    QuestionsAnswers[1114][0] = "Donovan bodies (oval, rod-shaped organisms in cells) ";

    QuestionsAnswers[1114][1] = " Granuloma inguinale";

    QuestionsAnswers[1115][0] = "Ferruginous bodies (rod-shaped structures with crystals on them) ";

    QuestionsAnswers[1115][1] = " Asbestosis";

    QuestionsAnswers[1116][0] = "Heinz bodies (red cell inclusions) ";

    QuestionsAnswers[1116][1] = " G6PD deficiency";

    QuestionsAnswers[1117][0] = "Homer Wright rosettes (ring of neural cells) ";

    QuestionsAnswers[1117][1] = " Neuroblastoma";

    QuestionsAnswers[1118][0] = "Howell-Jowell bodies (blue-black erythrocyte inclusions) ";

    QuestionsAnswers[1118][1] = " Splenectomy or nonfunctioning spleen";

    QuestionsAnswers[1119][0] = "Hypersegmented neutrophils ";

    QuestionsAnswers[1119][1] = " Macrocytic anemia (vitamin B12 or folate deficiency)";

    QuestionsAnswers[1120][0] = "Hypochromic microcytosis ";

    QuestionsAnswers[1120][1] = " Iron deficiency anemia, lead poisoning";

    QuestionsAnswers[1121][0] = "Keratin pearls (concentric layers of keratin) ";

    QuestionsAnswers[1121][1] = " Squamous cell carcinoma";

    QuestionsAnswers[1122][0] = "Kimmelsteil-Wilson nodules (acellular nodules in glomerulus) ";

    QuestionsAnswers[1122][1] = " Diabetic nephropathy";

    QuestionsAnswers[1123][0] = "Koilocytes (look for perinuclear halo) ";

    QuestionsAnswers[1123][1] = " HPV infections such as condyloma, cervical dysplasia";

    QuestionsAnswers[1124][0] = "Lewy bodies (round, pink nodules in neuronal cytoplasm) ";

    QuestionsAnswers[1124][1] = " Parkinson disease";

    QuestionsAnswers[1125][0] = "Mallory bodies (ropy, pink cytoplasmic structures in hepatocytes) ";

    QuestionsAnswers[1125][1] = " Alcoholic liver disease";

    QuestionsAnswers[1126][0] = "Needle-shaped, negatively birefringent crystals ";

    QuestionsAnswers[1126][1] = " Gout (uric acid)";

    QuestionsAnswers[1127][0] = "Negri bodies (large viral inclusions in neurons, see on Emergency Medicine) ";

    QuestionsAnswers[1127][1] = " Rabies";

    QuestionsAnswers[1128][0] = "Neurofibrillary tangles (tangles of fibers in neuron cytoplasm) ";

    QuestionsAnswers[1128][1] = " Alzheimer disease";

    QuestionsAnswers[1129][0] = "Owl's eye nuclei ";

    QuestionsAnswers[1129][1] = " Cytomegalovirus (due to virus particles in nucleus)";

    QuestionsAnswers[1130][0] = "Pick bodies (silver protein deposits in neurons) ";

    QuestionsAnswers[1130][1] = " Pick disease";

    QuestionsAnswers[1131][0] = "Psudopalisading tumor cell arrangement (foci of necrosis surrounded by intact tumor cells) ";

    QuestionsAnswers[1131][1] = " Glioblastoma multiforme";

    QuestionsAnswers[1132][0] = "Pseudorosettes (rings of cells with central vessel) ";

    QuestionsAnswers[1132][1] = " Ewing sarcoma";

    QuestionsAnswers[1133][0] = "Reed-Sternberg cells (large binucleate cell with large nucleoli) ";

    QuestionsAnswers[1133][1] = " Hodgkin lymphoma";

    QuestionsAnswers[1134][0] = "Reinke crystals (rectangular crystals, ovary or testes) ";

    QuestionsAnswers[1134][1] = " Leydig cell tumor";

    QuestionsAnswers[1135][0] = "Renal epithelial casts in urine ";

    QuestionsAnswers[1135][1] = " Acute toxicity/viral (epithelial casts reflect tubular damage)";

    QuestionsAnswers[1136][0] = "Rhomboid crystals in joint fluid, positively birefringent ";

    QuestionsAnswers[1136][1] = " Pseudogout (calcium pyrophosphate crystals)";

    QuestionsAnswers[1137][0] = "Rouleaux (stacked erythrocytes) ";

    QuestionsAnswers[1137][1] = " Multiple myeloma";

    QuestionsAnswers[1138][0] = "Russell bodies (hyaline spheres in plasma cells) ";

    QuestionsAnswers[1138][1] = " Multiple myeloma";

    QuestionsAnswers[1139][0] = "Schiller-Duval bodies (look like glomeruli) ";

    QuestionsAnswers[1139][1] = " Yolk sac tumor";

    QuestionsAnswers[1140][0] = "Senile plaques (extracellular amyloid) ";

    QuestionsAnswers[1140][1] = " Alzheimer disease";

    QuestionsAnswers[1141][0] = "Signet ring cells (have nucleus compressed to one side of cell) ";

    QuestionsAnswers[1141][1] = " Gastric carcinoma";

    QuestionsAnswers[1142][0] = "Smudge cells (smashed lymphocyte) ";

    QuestionsAnswers[1142][1] = " Chronic lymphocytic leukemia";

    QuestionsAnswers[1143][0] = "Spike and dome on EM (irregular dense deposits with basement membrane material between deposits) ";

    QuestionsAnswers[1143][1] = " Membranous glomerulonephritis";

    QuestionsAnswers[1144][0] = "\"Starry sky\" pattern (sheets of small lymphocytes with scattered histiocytes as \"stars\") ";

    QuestionsAnswers[1144][1] = " Burkitt lymphoma";

    QuestionsAnswers[1145][0] = "Subepithelial humps on Emergency Medicine ";

    QuestionsAnswers[1145][1] = " Poststreptococcal glomerulonephritis";

    QuestionsAnswers[1146][0] = "Sulfur granules (clusters of bacteria) ";

    QuestionsAnswers[1146][1] = " Actinomyces israeli";

    QuestionsAnswers[1147][0] = "Tram track appearence on light microscopy (double contour capillary loops) ";

    QuestionsAnswers[1147][1] = " Membranoproliferative glomerulonephritis";

    QuestionsAnswers[1148][0] = "Waxy casts in urine ";

    QuestionsAnswers[1148][1] = " Chronic end-stage renal disease";

    QuestionsAnswers[1149][0] = "WBC casts in urine ";

    QuestionsAnswers[1149][1] = " Acute pyelonephritis";

    QuestionsAnswers[1150][0] = "WBCs in urine (heavy neutrophilic infiltrate) ";

    QuestionsAnswers[1150][1] = " Acute cystitis";

    QuestionsAnswers[1151][0] = "\"Wire loop\" lesion (thickened capillary basement membrane) ";

    QuestionsAnswers[1151][1] = " Lupus nephritis";

    QuestionsAnswers[1152][0] = "Anti-basement membrane ";

    QuestionsAnswers[1152][1] = " Goodpasture syndrome";

    QuestionsAnswers[1153][0] = "Anticentromere ";

    QuestionsAnswers[1153][1] = " Scleroderma (CREST syndrome)";

    QuestionsAnswers[1154][0] = "Anti-double stranded DNA (ANA antibodies) ";

    QuestionsAnswers[1154][1] = "<br>    Systemic lupus erythematosus<br>    (type III hypersensitivity-immune complexes)<br>    ";

    QuestionsAnswers[1155][0] = "Antiepithelial cell ";

    QuestionsAnswers[1155][1] = " Pemphigus vulgaris";

    QuestionsAnswers[1156][0] = "Antigliadin ";

    QuestionsAnswers[1156][1] = " Celiac disease";

    QuestionsAnswers[1157][0] = "Antihistone ";

    QuestionsAnswers[1157][1] = " Drug-induced SLE";

    QuestionsAnswers[1158][0] = "Anti-IgG (rheumatoid factor) ";

    QuestionsAnswers[1158][1] = " Rheumatoid arthritis";

    QuestionsAnswers[1159][0] = "Antimitochondrial ";

    QuestionsAnswers[1159][1] = " Primary biliary cirrhosis";

    QuestionsAnswers[1160][0] = "Antineutrophil ";

    QuestionsAnswers[1160][1] = " Vasculitis";

    QuestionsAnswers[1161][0] = "Antiplatelet ";

    QuestionsAnswers[1161][1] = " Idiopathic thrombocytopenic purpura";

    QuestionsAnswers[1162][0] = "C-ANCA, P-ANCA ";

    QuestionsAnswers[1162][1] = " Wegener granulomatosis (C-ANCA), polyarteritis nodosa (mostly P-ANCA, but can have both)";

    QuestionsAnswers[1163][0] = "CLL ";

    QuestionsAnswers[1163][1] = " Mycoplasma pneumoniae, mononucleosis, lymphoma, CLL";

    QuestionsAnswers[1164][0] = "Acanthocytes (spur cells) ";

    QuestionsAnswers[1164][1] = " Abetalipoproteinemia (severe burns, liver disease, hypothyroidism)";

    QuestionsAnswers[1165][0] = "Basophilic stippling ";

    QuestionsAnswers[1165][1] = " Lead poisoning (thalassemia)";

    QuestionsAnswers[1166][0] = "Bite cells and Heinz bodies ";

    QuestionsAnswers[1166][1] = " Glucose-6-phosphate dehydrogenase deficiency (spleen removes Heinz bodies, leading to \"bitten\" appearance of RBCs)";

    QuestionsAnswers[1167][0] = "Dacrocytes (teardrop cells) ";

    QuestionsAnswers[1167][1] = " Scarring of bone marrow (myelophthisis), splenic dysfunction";

    QuestionsAnswers[1168][0] = "Echinocytes (burr cells) ";

    QuestionsAnswers[1168][1] = " often drying artifact, uremia";

    QuestionsAnswers[1169][0] = "Elliptocytes (ovalocytes) ";

    QuestionsAnswers[1169][1] = " Hereditary elliptocytosis (iron deficiency, thalassemia, myelophthisis)";

    QuestionsAnswers[1170][0] = "Howell-Jolly bodies and Cabot rings ";

    QuestionsAnswers[1170][1] = " Splenic dysfunction (thalassemia)";

    QuestionsAnswers[1171][0] = "Macrocytes (large cells) ";

    QuestionsAnswers[1171][1] = " Vitamin B12 and folate deficiency (myelodysplastic syndromes, liver disease)";

    QuestionsAnswers[1172][0] = "Microcytes (small cells) ";

    QuestionsAnswers[1172][1] = " Iron deficiency anemia (thalassemia and some cases of anemia of chronic disease)";

    QuestionsAnswers[1173][0] = "Pappenheimer bodies ";

    QuestionsAnswers[1173][1] = " Sideroblastic anemia (splenic dysfunction)";

    QuestionsAnswers[1174][0] = "Rouleaux formation (RBCs stacked like coins) ";

    QuestionsAnswers[1174][1] = " Multiple myeloma";

    QuestionsAnswers[1175][0] = "Schistocytes (fragmented cells) ";

    QuestionsAnswers[1175][1] = " Intravascular hemolysis";

    QuestionsAnswers[1176][0] = "Spherocytes ";

    QuestionsAnswers[1176][1] = " Hereditary spherocytosis (extravascular hemolysis)";

    QuestionsAnswers[1177][0] = "Stomatocytes ";

    QuestionsAnswers[1177][1] = " Hereditary stomatocytosis (alcoholism)";

    QuestionsAnswers[1178][0] = "Target cells ";

    QuestionsAnswers[1178][1] = " Liver disease, thalassemia (HbC, occasionally in iron deficiency)";

    QuestionsAnswers[1179][0] = "Bilobed neutrophil nuclei ";

    QuestionsAnswers[1179][1] = " Pelger-Huet anomaly";

    QuestionsAnswers[1180][0] = "Cerebriform nuclei (convoluted appearance to nucleus) ";

    QuestionsAnswers[1180][1] = " Mycosis fungoides (cutaneous T-cell lymphoma)";

    QuestionsAnswers[1181][0] = "Dohle bodies (pale blue, oval cytoplasmic inclusions that can be near cytoplasmic membrane of neutrophils) ";

    QuestionsAnswers[1181][1] = " Sepsis, May-Hegglin anomaly";

    QuestionsAnswers[1182][0] = "Giant platelets ";

    QuestionsAnswers[1182][1] = " Bernard-Soulier syndrome";

    QuestionsAnswers[1183][0] = "Hypersegmented neutrophil nuclei ";

    QuestionsAnswers[1183][1] = " Megaloblastic (macrocytic) anemia";

    QuestionsAnswers[1184][0] = "Large blue granules in cytoplasm of all white blood cells ";

    QuestionsAnswers[1184][1] = " Alder-Reilly anomaly";

    QuestionsAnswers[1185][0] = "Large eosinophilic granules in neutrophil cytoplasm ";

    QuestionsAnswers[1185][1] = " Chediak-Higashi syndrome";

    QuestionsAnswers[1186][0] = "Toxic granulation (medium-to-large sized dark blue granulations in neutrophil cytoplasm) ";

    QuestionsAnswers[1186][1] = " Sepsis";

    QuestionsAnswers[1187][0] = "Alanine aminotransferase (ALT) ";

    QuestionsAnswers[1187][1] = " Liver damage";

    QuestionsAnswers[1188][0] = "Alkaline phosphatase (Alk phos) ";

    QuestionsAnswers[1188][1] = " Bone, biliary, and placental disease";

    QuestionsAnswers[1189][0] = "Amylase ";

    QuestionsAnswers[1189][1] = " Pancreatic and salivary disease";

    QuestionsAnswers[1190][0] = "Antiogensin-converting enzyme (ACE) ";

    QuestionsAnswers[1190][1] = " Sarcoidosis (also primary biliary cirrhosis, Gaucher disease, leprosy)";

    QuestionsAnswers[1191][0] = "Aspartate aminotransferase (AST) ";

    QuestionsAnswers[1191][1] = " Acute myocardial infarction, liver disease";

    QuestionsAnswers[1192][0] = "<br>    Creatinine kinase (CK)<br>        CK-MB<br>     ";

    QuestionsAnswers[1192][1] = " Myocardial infarction (early 2-8 h), severe skeletal muscle injury";

    QuestionsAnswers[1193][0] = "Elastase-1 ";

    QuestionsAnswers[1193][1] = " Pancreatic disease";

    QuestionsAnswers[1194][0] = "Lactate dehydrogenase (LDH) ";

    QuestionsAnswers[1194][1] = "<br>    Acute myocardial infarction (early), hemolysis, renal infarction<br>    Liver damage (also skeletal muscle damage)<br>    Acute myocardial infarction complicated by liver congestion; alcoholic liver disease complicated by megaloblastic anemia";

    QuestionsAnswers[1195][0] = "Lipase ";

    QuestionsAnswers[1195][1] = " Pancreatic disease";

    QuestionsAnswers[1196][0] = "Myoglobin ";

    QuestionsAnswers[1196][1] = " Myocardial infarction (early, but nonspecific)";

    QuestionsAnswers[1197][0] = "Troponin I ";

    QuestionsAnswers[1197][1] = " Myocardial infarction (elevates as early as 3 h post MI, then stays elevated up to 9 days after MI)";

    QuestionsCount = 1198;



}
