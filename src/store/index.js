import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const movies = [{"id":1,"title":"Out to Sea","description":"Toxic effects of glycols","available":false},
  {"id":2,"title":"Go","description":"Other specified injury of unspecified blood vessel at lower leg level, right leg, subsequent encounter","available":false},
  {"id":3,"title":"Walk Among the Tombstones, A","description":"Laceration without foreign body of left back wall of thorax without penetration into thoracic cavity, sequela","available":true},
  {"id":4,"title":"Fisher King, The","description":"Nondisplaced fracture of proximal third of navicular [scaphoid] bone of right wrist","available":true},
  {"id":5,"title":"Saddest Music in the World, The","description":"Displaced pilon fracture of left tibia, subsequent encounter for closed fracture with delayed healing","available":true},
  {"id":6,"title":"Flash Gordon Conquers the Universe","description":"Puncture wound with foreign body of left index finger with damage to nail, subsequent encounter","available":false},
  {"id":7,"title":"Westward Ho","description":"Complete lesion at C8 level of cervical spinal cord, sequela","available":true},
  {"id":8,"title":"Jungle Holocaust (Ultimo mondo cannibale)","description":"Car passenger injured in collision with heavy transport vehicle or bus in nontraffic accident, initial encounter","available":false},
  {"id":9,"title":"Samurai Cop","description":"Physeal arrest, lower leg","available":true},
  {"id":10,"title":"Once Upon a Time in America","description":"Unspecified superficial injuries of left front wall of thorax, subsequent encounter","available":false},
  {"id":11,"title":"Promise Me This (Zavet)","description":"Other fracture of unspecified lower leg, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion","available":false},
  {"id":12,"title":"Exiles (Exils)","description":"Major laceration of heart with hemopericardium, subsequent encounter","available":true},
  {"id":13,"title":"13Hrs","description":"Displaced fracture of distal phalanx of unspecified lesser toe(s), subsequent encounter for fracture with nonunion","available":true},
  {"id":14,"title":"Trishna","description":"Activity, frisbee","available":true},
  {"id":15,"title":"Chelsea Walls","description":"Atherosclerosis of nonautologous biological bypass graft(s) of the right leg with ulceration","available":true},
  {"id":16,"title":"Stealing Harvard","description":"Congenital complete absence of right upper limb","available":false},
  {"id":17,"title":"Ernest Film Festival, The","description":"Burn of unspecified degree of right ear [any part, except ear drum], sequela","available":false},
  {"id":18,"title":"Mad Dogs & Englishmen","description":"Unspecified lagophthalmos left lower eyelid","available":true},
  {"id":19,"title":"Young & Wild (Joven y alocada)","description":"Anterior cord syndrome at C1 level of cervical spinal cord, initial encounter","available":false},
  {"id":20,"title":"Charlotte's Web 2: Wilbur's Great Adventure","description":"Other injury of extensor or abductor muscles, fascia and tendons of right thumb at forearm level","available":true},
  {"id":21,"title":"Pharaoh's Army","description":"Rh incompatibility with acute hemolytic transfusion reaction, initial encounter","available":false},
  {"id":22,"title":"Witches, The","description":"Other specified injury of blood vessel of left middle finger, initial encounter","available":true},
  {"id":23,"title":"Dangerous Minds","description":"Poisoning by beta-adrenoreceptor antagonists, intentional self-harm, sequela","available":true},
  {"id":24,"title":"Blackboard Jungle","description":"Other disorders of orbit","available":true},
  {"id":25,"title":"How to Live Forever","description":"Other acquired abnormalities of ear ossicles, bilateral","available":true},
  {"id":26,"title":"Secrets","description":"Displacement of indwelling urethral catheter, subsequent encounter","available":true},
  {"id":27,"title":"First Sunday","description":"Unspecified nondisplaced fracture of third cervical vertebra","available":true},
  {"id":28,"title":"New Tale of Zatoichi (Shin Zatôichi monogatari) (Zatôichi 3)","description":"Dislocation of other carpometacarpal joint of right hand, subsequent encounter","available":false},
  {"id":29,"title":"Promised Land","description":"Poisoning by electrolytic, caloric and water-balance agents, intentional self-harm, sequela","available":false},
  {"id":30,"title":"Next Karate Kid, The","description":"Burn of second degree of left foot","available":false},
  {"id":31,"title":"Cool Hand Luke","description":"Unspecified car occupant injured in collision with pedestrian or animal in traffic accident","available":true},
  {"id":32,"title":"Leatherface: Texas Chainsaw Massacre III","description":"Other injury of other part of colon, initial encounter","available":true},
  {"id":33,"title":"Landscape with a Woman (Zena s krajolikom)","description":"Laceration without foreign body of right thumb without damage to nail","available":true},
  {"id":34,"title":"Run, Simon, Run","description":"Puncture wound without foreign body of right ear, subsequent encounter","available":true},
  {"id":35,"title":"Hello, Friend","description":"Contusion of left thigh, sequela","available":true},
  {"id":36,"title":"Wordplay","description":"Unspecified injury of muscle(s) and tendon(s) of the rotator cuff of unspecified shoulder, initial encounter","available":true},
  {"id":37,"title":"Agenda: Grinding America Down","description":"Displaced apophyseal fracture of right femur, subsequent encounter for open fracture type I or II with routine healing","available":false},
  {"id":38,"title":"Looking for Lenny ","description":"Underdosing of other hormones and synthetic substitutes, subsequent encounter","available":false},
  {"id":39,"title":"Creeping Terror, The (Crawling Monster, The)","description":"Accident to, on or involving land-yacht, sequela","available":false},
  {"id":40,"title":"Big Chill, The","description":"Acute and subacute hemorrhagic leukoencephalitis [Hurst]","available":false},
  {"id":41,"title":"Cazuza - O Tempo Não Pára","description":"Osteonecrosis due to previous trauma of right carpus","available":false},
  {"id":42,"title":"47 Ronin, The (Genroku Chûshingura)","description":"Other chronic osteomyelitis, left thigh","available":true},
  {"id":43,"title":"Exit Wounds","description":"Laceration without foreign body of left middle finger without damage to nail","available":false},
  {"id":44,"title":"Heavenly Body, The","description":"Other war operations occurring after cessation of hostilities, military personnel, sequela","available":true},
  {"id":45,"title":"Phantom Pain","description":"Dermatopolymyositis, unspecified with myopathy","available":true},
  {"id":46,"title":"Purge, The","description":"Displaced fracture of left radial styloid process, subsequent encounter for closed fracture with delayed healing","available":true},
  {"id":47,"title":"La discrète","description":"Toxic effect of sulfur dioxide, assault, sequela","available":false},
  {"id":48,"title":"Go Now","description":"Nondisplaced fracture of unspecified tibial tuberosity, subsequent encounter for open fracture type I or II with delayed healing","available":false},
  {"id":49,"title":"Front, The","description":"Displaced fracture of neck of unspecified metacarpal bone","available":true},
  {"id":50,"title":"Sarah Silverman:  We Are Miracles","description":"Osteophyte, unspecified hand","available":true},
  {"id":51,"title":"Captive Women (1000 Years from Now) (3000 A.D.)","description":"Complete transverse atypical femoral fracture, right leg, subsequent encounter for fracture with delayed healing","available":false},
  {"id":52,"title":"Simpsons: The Longest Daycare, The","description":"Other fracture of unspecified lower leg, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion","available":true},
  {"id":53,"title":"Lenny","description":"Terrorism involving chemical weapons, public safety official injured, subsequent encounter","available":true},
  {"id":54,"title":"Oscar","description":"Nondisplaced fracture of unspecified radial styloid process, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion","available":false},
  {"id":55,"title":"Dear Jesse","description":"Unspecified open wound of left front wall of thorax with penetration into thoracic cavity, subsequent encounter","available":true},
  {"id":56,"title":"Empire Records","description":"Multiple fractures of ribs, right side, sequela","available":true},
  {"id":57,"title":"Tarzan the Ape Man","description":"Nondisplaced fracture of shaft of fourth metacarpal bone, right hand, initial encounter for closed fracture","available":false},
  {"id":58,"title":"Weird Science","description":"Striking against or struck by front passenger side automobile airbag, initial encounter","available":false},
  {"id":59,"title":"Above the Law","description":"Other nondisplaced fracture of seventh cervical vertebra, subsequent encounter for fracture with nonunion","available":false},
  {"id":60,"title":"Shout, The","description":"Unspecified superficial injury of left upper arm, subsequent encounter","available":true},
  {"id":61,"title":"George Washington Slept Here","description":"Contact with other specified agricultural machinery","available":true},
  {"id":62,"title":"Gone Baby Gone","description":"Pedal cycle driver injured in collision with two- or three-wheeled motor vehicle in traffic accident, sequela","available":false},
  {"id":63,"title":"All the Young Men","description":"Poisoning by, adverse effect of and underdosing of methadone","available":false},
  {"id":64,"title":"And the Ship Sails On (E la nave va)","description":"Terrorism involving other means, civilian injured","available":true},
  {"id":65,"title":"Amistad","description":"Nondisplaced fracture of sternal end of left clavicle, subsequent encounter for fracture with delayed healing","available":true},
  {"id":66,"title":"Ace of Hearts","description":"Subluxation of metacarpophalangeal joint of right ring finger, sequela","available":false},
  {"id":67,"title":"Kamikaze Girls (Shimotsuma monogatari)","description":"Other fractures of lower end of left radius, subsequent encounter for closed fracture with nonunion","available":true},
  {"id":68,"title":"Siffleurs, Les (Viheltäjät)","description":"Breakdown (mechanical) of artificial skin graft and decellularized allodermis, sequela","available":false},
  {"id":69,"title":"Mask of Zorro, The","description":"Injury of trigeminal nerve, unspecified side, sequela","available":false},
  {"id":70,"title":"Big Red One, The","description":"Other signs and symptoms in breast","available":true},
  {"id":71,"title":"Man Who Knew Too Little, The","description":"Other disorders of patella, left knee","available":true},
  {"id":72,"title":"Criminal, The (a.k.a. Concrete Jungle)","description":"Corrosion of second degree of left thigh","available":false},
  {"id":73,"title":"Number Seventeen (a.k.a. Number 17)","description":"Intestinal parasitism, unspecified","available":false},
  {"id":74,"title":"Phantom, The","description":"Military operations involving destruction of aircraft due to onboard fire, military personnel, sequela","available":false},
  {"id":75,"title":"Steel Toes","description":"Toxic effect of venom of bees, intentional self-harm, subsequent encounter","available":true},
  {"id":76,"title":"Klansman, The","description":"Open wound of thumb with damage to nail","available":true},
  {"id":77,"title":"Night of the Generals, The","description":"Burn of first degree of upper back, subsequent encounter","available":false},
  {"id":78,"title":"Cruising","description":"Drug or chemical induced diabetes mellitus with moderate nonproliferative diabetic retinopathy with macular edema, left eye","available":false},
  {"id":79,"title":"Barabbas","description":"Hemorrhagic disorder due to extrinsic circulating anticoagulants","available":false},
  {"id":80,"title":"Saving Otter 501","description":"Displaced fracture of neck of unspecified metacarpal bone, initial encounter for open fracture","available":false},
  {"id":81,"title":"In This Our Life","description":"Displaced fracture of distal phalanx of right middle finger, subsequent encounter for fracture with nonunion","available":true},
  {"id":82,"title":"High School","description":"Rheumatoid lung disease with rheumatoid arthritis of right ankle and foot","available":true},
  {"id":83,"title":"Tonight You're Mine","description":"Animal-rider injured in transport accident with military vehicle, subsequent encounter","available":false},
  {"id":84,"title":"Black Fury","description":"Injury of unspecified nerve at wrist and hand level of unspecified arm","available":false},
  {"id":85,"title":"Keoma","description":"Unspecified injury of thorax, subsequent encounter","available":false},
  {"id":86,"title":"Jersey Boys","description":"Nondisplaced fracture of acromial process, left shoulder, initial encounter for open fracture","available":true},
  {"id":87,"title":"Wilder Napalm","description":"Unspecified fracture of unspecified metacarpal bone, subsequent encounter for fracture with malunion","available":false},
  {"id":88,"title":"Anna Nicole (Anna Nicole Smith Story, The)","description":"Foreign body on external eye, part unspecified, right eye, initial encounter","available":true},
  {"id":89,"title":"Cavalcade","description":"External constriction of unspecified thumb, sequela","available":true},
  {"id":90,"title":"Prime Suspect: The Lost Child","description":"Displaced fracture of medial wall of right acetabulum","available":false},
  {"id":91,"title":"Nob Hill","description":"Breakdown (mechanical) of prosthetic orbit of left eye, initial encounter","available":false},
  {"id":92,"title":"Soldier in the Rain","description":"Displaced fracture of right ulna styloid process, subsequent encounter for closed fracture with routine healing","available":false},
  {"id":93,"title":"Hamsun","description":"Unspecified fracture of shaft of unspecified fibula, initial encounter for open fracture type I or II","available":true},
  {"id":94,"title":"Werner - Das muss kesseln!!!","description":"Other nondisplaced fracture of sixth cervical vertebra, subsequent encounter for fracture with routine healing","available":false},
  {"id":95,"title":"Twilight Samurai, The (Tasogare Seibei)","description":"Open bite of unspecified external genital organs, male","available":false},
  {"id":96,"title":"Blue Sky","description":"Nondisplaced fracture of distal phalanx of left middle finger, subsequent encounter for fracture with nonunion","available":true},
  {"id":97,"title":"Crowd, The","description":"Traumatic cerebral edema with loss of consciousness greater than 24 hours without return to pre-existing conscious level with patient surviving","available":true},
  {"id":98,"title":"Affair of Love, An (Liaison pornographique, Une)","description":"Restless legs syndrome","available":true},
  {"id":99,"title":"The Snow White Murder Case","description":"Pathological fracture, unspecified hand, subsequent encounter for fracture with malunion","available":true},
  {"id":100,"title":"Teenagers from Outer Space","description":"Pressure ulcer of contiguous site of back, buttock and hip, stage 3","available":true}]

export default new Vuex.Store({
  state: {
    movies : movies,
    filter: {
      query : '',
      available : true
    }
  },
  mutations: {
    SET_QUERY(state, query){
      state.filter.query = query;
    },
    SET_AVAILABLE(state){
      state.filter.available = !state.filter.available;
    }
  },
  getters: {
    filteredMovies(state){
      if(state.filter.query.length > 2){
        return state.movies.filter(movie => movie.title.toLowerCase().includes(state.filter.query.toLowerCase()));
      }
      return state.movies.filter(movie => movie.available === state.filter.available);
    }
  }
})
