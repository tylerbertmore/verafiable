const express = require('express');
const router = express.Router();
const db = require('../models');


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }
  req.flash('error', 'You must sign in first');
  res.redirect('/login');
}
//---------------------------------------------------
//                     /questionnaire                
//---------------------------------------------------

router.get('/', (req, res) => {
  res.render('questionnaire');
})
router.post('/', isLoggedIn, (req, res) => {
  db.Person.create(
    {firstName: req.body.firstName,
      lastName: req.body.lastName,
       gender: req.body.gender,
       phoneNumber: req.body.phoneNumber,
       clientEmail: req.body.clientEmail,
       height: req.body.height,
       bodyType: req.body.bodyType,
       originallyFrom: req.body.originallyFrom,
       seeking: req.body.seeking,
       ageRange: req.body.ageRange,
       birthday: req.body.birthday,
       frequentSpot: req.body.frequentSpot,
       ethnicity: req.body.ethnicity,
       partnerEthnicity: req.body.partnerEthnicity,
       religion: req.body.religion,
       politics: req.body.politics,
       children: req.body.children,
       wantChildren: req.body.wantChildren,
       stepParent: req.body.stepParent,
       alcoholUse: req.body.alcoholUse,
       cigaretteUse: req.body.cigaretteUse,
       marijuanaUse: req.body.marijuanaUse,
       marijuanaTypes: req.body.marijuanaTypes,
       exercise: req.body.exercise,
       tattoos: req.body.tattoos,
       totalTattoos: req.body.totalTattoos,
       totalPiercings: req.body.totalPiercings,
       partnerTattoos: req.body.partnerTattoos,
       partnerPiercings: req.body.partnerPiercings,
       piercings: req.body.piercings,
       piercingPlaces: req.body.piercingPlaces,
       tattooPlaces: req.body.tattooPlaces,
       socialMedia: req.body.socialMedia,
       military: req.body.military,
       militaryBranch: req.body.militaryBranch,
       partnerMilitary: req.body.partnerMilitary,
       livingSituation: req.body.livingSituation,
       livingStatus: req.body.livingStatus,
       areaOfTown: req.body.areaOfTown,
       verafiedJoinReason: req.body.verafiedJoinReason,
       mixers: req.body.mixers,
       verafiedSuggestions: req.body.verafiedSuggestions,
       selfEsteem: req.body.selfEsteem,
       siblings: req.body.siblings,
       outdoorsy: req.body.outdoorsy,
       outdoorActivities: req.body.outdoorActivities,
       prevMarried: req.body.prevMarried,
       hobbies1: req.body.hobbies1,
       hobbies2: req.body.hobbies2,
       hobbies3: req.body.hobbies3,
       pets: req.body.pets,
       petTypes: req.body.petTypes,
       partnerPets: req.body.partnerPets,
       books: req.body.books,
       bookTypes: req.body.bookTypes,
       tv: req.body.tv,
       tvTypes: req.body.tvTypes,
       movies: req.body.movies,
       favMovieGenre: req.body.favMovieGenre,
       gamer: req.body.gamer,
       favGameGenre: req.body.favGameGenre,
       profession: req.body.profession,
       professionIndustry: req.body.professionIndustry,
       professionLength: req.body.professionLength,
       professionSchedule: req.body.professionSchedule,
       relationshipGoal: req.body.relationshipGoal,
       loveLanguage: req.body.loveLanguage,
       threePhysicalTraits: req.body.threePhysicalTraits,
       threePersonalityTraits: req.body.threePersonalityTraits,
       whatDoYouWant: req.body.whatDoYouWant,
       dealBreakers: req.body.dealBreakers,
       partnerLooks: req.body.partnerLooks,
       familyCloseness: req.body.familyCloseness,
       beenInLove: req.body.beenInLove,
       heartBreaker: req.body.heartBreaker,
       intimacy: req.body.intimacy,
       mentalHealth: req.body.mentalHealth,
       whenLastRelationship: req.body.whenLastRelationship,
       whyLastRelationship: req.body.whyLastRelationship,
       threePersonalGoals: req.body.threePersonalGoals,
       threeCharacterFlaws: req.body.threeCharacterFlaws,
       threeThingsTable: req.body.threeThingsTable,
       holidays: req.body.holidays,
       lastBirthday: req.body.lastBirthday,
       dayOff: req.body.dayOff,
       threeSelfLove: req.body.threeSelfLove,
       petPeeves: req.body.petPeeves,
       threePastRelationshipIssues: req.body.threePastRelationshipIssues,
       idealFirstDate: req.body.idealFirstDate,
       communicationStyle: req.body.communicationStyle,
       reliable: req.body.reliable,
       planner: req.body.planner,
       hygiene: req.body.hygiene,
       familyInVegas: req.body.familyInVegas,
       partnerType: req.body.partnerType,
       fiveYearPlan: req.body.fiveYearPlan,
       dominantSubmissive: req.body.dominantSubmissive,
       adventurer: req.body.adventurer,
       perfectDate: req.body.perfectDate,
       cooking: req.body.cooking,
       likeSports: req.body.likeSports,
       likeTravel: req.body.likeTravel,
       travelledOutsideUS: req.body.travelledOutsideUS,
       travelledTo: req.body.travelledTo,
       littleKnownFact: req.body.littleKnownFact,
       prizedPossesion: req.body.prizedPossesion,
       trulyValue: req.body.trulyValue,
       criminalHistory: req.body.criminalHistory,
       extraInfo: req.body.extraInfo,
       celebCrush: req.body.celebCrush


        }, (err, newPerson) =>{
    if(err){
      console.log(err)
    }
    console.log(newPerson)
  })
  req.flash('success', 'Person Successfully Added');
  res.redirect('/people/')
});


module.exports = router