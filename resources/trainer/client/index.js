import {
  getCursorPos as e,
  everyTick as t,
  clearTimeout as _,
  setTimeout as i,
  logError as n,
  emit as a,
  getGxtText as s,
  showCursor as o,
  setInterval as r,
  clearInterval as l,
  logWarning as c,
  onServer as m,
  Player as h,
  emitServer as p,
  hash as d,
  RGBA as u,
  Vehicle as g,
  Entity as w,
  on as f,
} from "alt-client";
import y, {
  requestScaleformMovie as R,
  hasScaleformMovieLoaded as O,
  beginScaleformMovieMethod as M,
  scaleformMovieMethodAddParamBool as S,
  scaleformMovieMethodAddParamPlayerNameString as b,
  scaleformMovieMethodAddParamFloat as C,
  scaleformMovieMethodAddParamInt as k,
  endScaleformMovieMethod as L,
  endScaleformMovieMethodReturnValue as D,
  drawScaleformMovieFullscreen as I,
  setScaleformMovieAsNoLongerNeeded as T,
  loadCloudHat as P,
  setCloudHatOpacity as A,
  setArtificialLightsState as U,
  setPedIntoVehicle as E,
  setPedCoordsKeepVehicle as v,
  setEntityCanBeDamaged as H,
  setEntityInvincible as x,
  requestAnimDict as N,
  hasAnimDictLoaded as B,
  requestModel as F,
  hasModelLoaded as G,
  displayOnscreenKeyboard as W,
  updateOnscreenKeyboard as V,
  getOnscreenKeyboardResult as z,
  createObject as Y,
  isModelInCdimage as j,
  isModelValid as K,
  isWeaponValid as X,
  getDistanceBetweenCoords as J,
  getPrevWeatherTypeHashName as Z,
  taskPlayAnim as q,
  getClosestMajorVehicleNode as $,
  setTextCentre as Q,
  setTextScale as ee,
  setTextColour as te,
  setTextFont as _e,
  setTextOutline as ie,
  beginTextCommandDisplayText as ne,
  addTextComponentSubstringPlayerName as ae,
  endTextCommandDisplayText as se,
  getGameplayCamCoord as oe,
  getGameplayCamFov as re,
  setDrawOrigin as le,
  clearDrawOrigin as ce,
  getEntitySpeed as me,
  getVehicleBodyHealth as he,
  getVehicleEngineHealth as pe,
  getVehiclePetrolTankHealth as de,
  getEntityHealth as ue,
  getPedArmour as ge,
  getEntityPlayerIsFreeAimingAt as we,
  isEntityDead as fe,
  getVehicleDoorsLockedForPlayer as ye,
  hideHudComponentThisFrame as Re,
  displayRadar as Oe,
  getFirstBlipInfoId as Me,
  doesBlipExist as Se,
  getBlipInfoIdCoord as be,
  setEntityVisible as Ce,
  setPedCanRagdoll as ke,
  setEntityCollision as Le,
  resetPlayerStamina as De,
  setSuperJumpThisFrame as Ie,
  setRunSprintMultiplierForPlayer as Te,
  setSwimMultiplierForPlayer as Pe,
  setSeethrough as Ae,
  setNightvision as Ue,
  setEntityHealth as Ee,
  getAnimDuration as ve,
  getVehicleColours as He,
  getVehicleExtraColours as xe,
  setVehicleFixed as Ne,
  getVehicleClass as Be,
  setVehicleModKit as Fe,
  getNumVehicleMods as Ge,
  getVehicleMod as We,
  setVehicleCheatPowerIncrease as Ve,
  setPlaneTurbulenceMultiplier as ze,
  isEntityVisible as Ye,
  getEntityCanBeDamaged as je,
  getLabelText as Ke,
  getVehicleClassFromName as Xe,
  getDisplayNameFromVehicleModel as Je,
  getCurrentPedWeapon as Ze,
  hasPedGotWeaponComponent as qe,
  setPedAmmoByType as $e,
  setPedInfiniteAmmo as Qe,
  setPedInfiniteAmmoClip as et,
  getClockHours as tt,
  getClockMinutes as _t,
  getClockSeconds as it,
  getCloudHatOpacity as nt,
  setTimecycleModifier as at,
  clearTimecycleModifier as st,
} from "natives";
var ot, rt, lt;
!(function (e) {
  (e[(e.M = 77)] = "M"), (e[(e.F7 = 118)] = "F7");
})(ot || (ot = {})),
  ((lt = rt || (rt = {}))[(lt.None = 0)] = "None"),
  (lt[(lt.BronzeMedal = 1)] = "BronzeMedal"),
  (lt[(lt.GoldMedal = 2)] = "GoldMedal"),
  (lt[(lt.SilverMedal = 3)] = "SilverMedal"),
  (lt[(lt.Alert = 4)] = "Alert"),
  (lt[(lt.Crown = 5)] = "Crown"),
  (lt[(lt.Ammo = 6)] = "Ammo"),
  (lt[(lt.Armour = 7)] = "Armour"),
  (lt[(lt.Barber = 8)] = "Barber"),
  (lt[(lt.Clothes = 9)] = "Clothes"),
  (lt[(lt.Franklin = 10)] = "Franklin"),
  (lt[(lt.Bike = 11)] = "Bike"),
  (lt[(lt.Car = 12)] = "Car"),
  (lt[(lt.Gun = 13)] = "Gun"),
  (lt[(lt.Heart = 14)] = "Heart"),
  (lt[(lt.Makeup = 15)] = "Makeup"),
  (lt[(lt.Mask = 16)] = "Mask"),
  (lt[(lt.Michael = 17)] = "Michael"),
  (lt[(lt.Star = 18)] = "Star"),
  (lt[(lt.Tattoo = 19)] = "Tattoo"),
  (lt[(lt.Trevor = 20)] = "Trevor"),
  (lt[(lt.Lock = 21)] = "Lock"),
  (lt[(lt.Tick = 22)] = "Tick"),
  (lt[(lt.Sale = 23)] = "Sale"),
  (lt[(lt.ArrowLeft = 24)] = "ArrowLeft"),
  (lt[(lt.ArrowRight = 25)] = "ArrowRight"),
  (lt[(lt.Audio1 = 26)] = "Audio1"),
  (lt[(lt.Audio2 = 27)] = "Audio2"),
  (lt[(lt.Audio3 = 28)] = "Audio3"),
  (lt[(lt.AudioInactive = 29)] = "AudioInactive"),
  (lt[(lt.AudioMute = 30)] = "AudioMute");
var ct,
  mt = rt;
!(function (e) {
  (e[(e.ChaletLondon = 0)] = "ChaletLondon"),
    (e[(e.HouseScript = 1)] = "HouseScript"),
    (e[(e.Monospace = 2)] = "Monospace"),
    (e[(e.CharletComprimeColonge = 4)] = "CharletComprimeColonge"),
    (e[(e.Pricedown = 7)] = "Pricedown");
})(ct || (ct = {}));
var ht,
  pt = ct;
!(function (e) {
  (e[(e.Left = 0)] = "Left"),
    (e[(e.Centered = 1)] = "Centered"),
    (e[(e.Right = 2)] = "Right");
})(ht || (ht = {}));
var dt,
  ut = ht;
!(function (e) {
  (e[(e.NextCamera = 0)] = "NextCamera"),
    (e[(e.LookLeftRight = 1)] = "LookLeftRight"),
    (e[(e.LookUpDown = 2)] = "LookUpDown"),
    (e[(e.LookUpOnly = 3)] = "LookUpOnly"),
    (e[(e.LookDownOnly = 4)] = "LookDownOnly"),
    (e[(e.LookLeftOnly = 5)] = "LookLeftOnly"),
    (e[(e.LookRightOnly = 6)] = "LookRightOnly"),
    (e[(e.CinematicSlowMo = 7)] = "CinematicSlowMo"),
    (e[(e.FlyUpDown = 8)] = "FlyUpDown"),
    (e[(e.FlyLeftRight = 9)] = "FlyLeftRight"),
    (e[(e.ScriptedFlyZUp = 10)] = "ScriptedFlyZUp"),
    (e[(e.ScriptedFlyZDown = 11)] = "ScriptedFlyZDown"),
    (e[(e.WeaponWheelUpDown = 12)] = "WeaponWheelUpDown"),
    (e[(e.WeaponWheelLeftRight = 13)] = "WeaponWheelLeftRight"),
    (e[(e.WeaponWheelNext = 14)] = "WeaponWheelNext"),
    (e[(e.WeaponWheelPrev = 15)] = "WeaponWheelPrev"),
    (e[(e.SelectNextWeapon = 16)] = "SelectNextWeapon"),
    (e[(e.SelectPrevWeapon = 17)] = "SelectPrevWeapon"),
    (e[(e.SkipCutscene = 18)] = "SkipCutscene"),
    (e[(e.CharacterWheel = 19)] = "CharacterWheel"),
    (e[(e.MultiplayerInfo = 20)] = "MultiplayerInfo"),
    (e[(e.Sprint = 21)] = "Sprint"),
    (e[(e.Jump = 22)] = "Jump"),
    (e[(e.Enter = 23)] = "Enter"),
    (e[(e.Attack = 24)] = "Attack"),
    (e[(e.Aim = 25)] = "Aim"),
    (e[(e.LookBehind = 26)] = "LookBehind"),
    (e[(e.Phone = 27)] = "Phone"),
    (e[(e.SpecialAbility = 28)] = "SpecialAbility"),
    (e[(e.SpecialAbilitySecondary = 29)] = "SpecialAbilitySecondary"),
    (e[(e.MoveLeftRight = 30)] = "MoveLeftRight"),
    (e[(e.MoveUpDown = 31)] = "MoveUpDown"),
    (e[(e.MoveUpOnly = 32)] = "MoveUpOnly"),
    (e[(e.MoveDownOnly = 33)] = "MoveDownOnly"),
    (e[(e.MoveLeftOnly = 34)] = "MoveLeftOnly"),
    (e[(e.MoveRightOnly = 35)] = "MoveRightOnly"),
    (e[(e.Duck = 36)] = "Duck"),
    (e[(e.SelectWeapon = 37)] = "SelectWeapon"),
    (e[(e.Pickup = 38)] = "Pickup"),
    (e[(e.SniperZoom = 39)] = "SniperZoom"),
    (e[(e.SniperZoomInOnly = 40)] = "SniperZoomInOnly"),
    (e[(e.SniperZoomOutOnly = 41)] = "SniperZoomOutOnly"),
    (e[(e.SniperZoomInSecondary = 42)] = "SniperZoomInSecondary"),
    (e[(e.SniperZoomOutSecondary = 43)] = "SniperZoomOutSecondary"),
    (e[(e.Cover = 44)] = "Cover"),
    (e[(e.Reload = 45)] = "Reload"),
    (e[(e.Talk = 46)] = "Talk"),
    (e[(e.Detonate = 47)] = "Detonate"),
    (e[(e.HUDSpecial = 48)] = "HUDSpecial"),
    (e[(e.Arrest = 49)] = "Arrest"),
    (e[(e.AccurateAim = 50)] = "AccurateAim"),
    (e[(e.Context = 51)] = "Context"),
    (e[(e.ContextSecondary = 52)] = "ContextSecondary"),
    (e[(e.WeaponSpecial = 53)] = "WeaponSpecial"),
    (e[(e.WeaponSpecial2 = 54)] = "WeaponSpecial2"),
    (e[(e.Dive = 55)] = "Dive"),
    (e[(e.DropWeapon = 56)] = "DropWeapon"),
    (e[(e.DropAmmo = 57)] = "DropAmmo"),
    (e[(e.ThrowGrenade = 58)] = "ThrowGrenade"),
    (e[(e.VehicleMoveLeftRight = 59)] = "VehicleMoveLeftRight"),
    (e[(e.VehicleMoveUpDown = 60)] = "VehicleMoveUpDown"),
    (e[(e.VehicleMoveUpOnly = 61)] = "VehicleMoveUpOnly"),
    (e[(e.VehicleMoveDownOnly = 62)] = "VehicleMoveDownOnly"),
    (e[(e.VehicleMoveLeftOnly = 63)] = "VehicleMoveLeftOnly"),
    (e[(e.VehicleMoveRightOnly = 64)] = "VehicleMoveRightOnly"),
    (e[(e.VehicleSpecial = 65)] = "VehicleSpecial"),
    (e[(e.VehicleGunLeftRight = 66)] = "VehicleGunLeftRight"),
    (e[(e.VehicleGunUpDown = 67)] = "VehicleGunUpDown"),
    (e[(e.VehicleAim = 68)] = "VehicleAim"),
    (e[(e.VehicleAttack = 69)] = "VehicleAttack"),
    (e[(e.VehicleAttack2 = 70)] = "VehicleAttack2"),
    (e[(e.VehicleAccelerate = 71)] = "VehicleAccelerate"),
    (e[(e.VehicleBrake = 72)] = "VehicleBrake"),
    (e[(e.VehicleDuck = 73)] = "VehicleDuck"),
    (e[(e.VehicleHeadlight = 74)] = "VehicleHeadlight"),
    (e[(e.VehicleExit = 75)] = "VehicleExit"),
    (e[(e.VehicleHandbrake = 76)] = "VehicleHandbrake"),
    (e[(e.VehicleHotwireLeft = 77)] = "VehicleHotwireLeft"),
    (e[(e.VehicleHotwireRight = 78)] = "VehicleHotwireRight"),
    (e[(e.VehicleLookBehind = 79)] = "VehicleLookBehind"),
    (e[(e.VehicleCinCam = 80)] = "VehicleCinCam"),
    (e[(e.VehicleNextRadio = 81)] = "VehicleNextRadio"),
    (e[(e.VehiclePrevRadio = 82)] = "VehiclePrevRadio"),
    (e[(e.VehicleNextRadioTrack = 83)] = "VehicleNextRadioTrack"),
    (e[(e.VehiclePrevRadioTrack = 84)] = "VehiclePrevRadioTrack"),
    (e[(e.VehicleRadioWheel = 85)] = "VehicleRadioWheel"),
    (e[(e.VehicleHorn = 86)] = "VehicleHorn"),
    (e[(e.VehicleFlyThrottleUp = 87)] = "VehicleFlyThrottleUp"),
    (e[(e.VehicleFlyThrottleDown = 88)] = "VehicleFlyThrottleDown"),
    (e[(e.VehicleFlyYawLeft = 89)] = "VehicleFlyYawLeft"),
    (e[(e.VehicleFlyYawRight = 90)] = "VehicleFlyYawRight"),
    (e[(e.VehiclePassengerAim = 91)] = "VehiclePassengerAim"),
    (e[(e.VehiclePassengerAttack = 92)] = "VehiclePassengerAttack"),
    (e[(e.VehicleSpecialAbilityFranklin = 93)] =
      "VehicleSpecialAbilityFranklin"),
    (e[(e.VehicleStuntUpDown = 94)] = "VehicleStuntUpDown"),
    (e[(e.VehicleCinematicUpDown = 95)] = "VehicleCinematicUpDown"),
    (e[(e.VehicleCinematicUpOnly = 96)] = "VehicleCinematicUpOnly"),
    (e[(e.VehicleCinematicDownOnly = 97)] = "VehicleCinematicDownOnly"),
    (e[(e.VehicleCinematicLeftRight = 98)] = "VehicleCinematicLeftRight"),
    (e[(e.VehicleSelectNextWeapon = 99)] = "VehicleSelectNextWeapon"),
    (e[(e.VehicleSelectPrevWeapon = 100)] = "VehicleSelectPrevWeapon"),
    (e[(e.VehicleRoof = 101)] = "VehicleRoof"),
    (e[(e.VehicleJump = 102)] = "VehicleJump"),
    (e[(e.VehicleGrapplingHook = 103)] = "VehicleGrapplingHook"),
    (e[(e.VehicleShuffle = 104)] = "VehicleShuffle"),
    (e[(e.VehicleDropProjectile = 105)] = "VehicleDropProjectile"),
    (e[(e.VehicleMouseControlOverride = 106)] = "VehicleMouseControlOverride"),
    (e[(e.VehicleFlyRollLeftRight = 107)] = "VehicleFlyRollLeftRight"),
    (e[(e.VehicleFlyRollLeftOnly = 108)] = "VehicleFlyRollLeftOnly"),
    (e[(e.VehicleFlyRollRightOnly = 109)] = "VehicleFlyRollRightOnly"),
    (e[(e.VehicleFlyPitchUpDown = 110)] = "VehicleFlyPitchUpDown"),
    (e[(e.VehicleFlyPitchUpOnly = 111)] = "VehicleFlyPitchUpOnly"),
    (e[(e.VehicleFlyPitchDownOnly = 112)] = "VehicleFlyPitchDownOnly"),
    (e[(e.VehicleFlyUnderCarriage = 113)] = "VehicleFlyUnderCarriage"),
    (e[(e.VehicleFlyAttack = 114)] = "VehicleFlyAttack"),
    (e[(e.VehicleFlySelectNextWeapon = 115)] = "VehicleFlySelectNextWeapon"),
    (e[(e.VehicleFlySelectPrevWeapon = 116)] = "VehicleFlySelectPrevWeapon"),
    (e[(e.VehicleFlySelectTargetLeft = 117)] = "VehicleFlySelectTargetLeft"),
    (e[(e.VehicleFlySelectTargetRight = 118)] = "VehicleFlySelectTargetRight"),
    (e[(e.VehicleFlyVerticalFlightMode = 119)] =
      "VehicleFlyVerticalFlightMode"),
    (e[(e.VehicleFlyDuck = 120)] = "VehicleFlyDuck"),
    (e[(e.VehicleFlyAttackCamera = 121)] = "VehicleFlyAttackCamera"),
    (e[(e.VehicleFlyMouseControlOverride = 122)] =
      "VehicleFlyMouseControlOverride"),
    (e[(e.VehicleSubTurnLeftRight = 123)] = "VehicleSubTurnLeftRight"),
    (e[(e.VehicleSubTurnLeftOnly = 124)] = "VehicleSubTurnLeftOnly"),
    (e[(e.VehicleSubTurnRightOnly = 125)] = "VehicleSubTurnRightOnly"),
    (e[(e.VehicleSubPitchUpDown = 126)] = "VehicleSubPitchUpDown"),
    (e[(e.VehicleSubPitchUpOnly = 127)] = "VehicleSubPitchUpOnly"),
    (e[(e.VehicleSubPitchDownOnly = 128)] = "VehicleSubPitchDownOnly"),
    (e[(e.VehicleSubThrottleUp = 129)] = "VehicleSubThrottleUp"),
    (e[(e.VehicleSubThrottleDown = 130)] = "VehicleSubThrottleDown"),
    (e[(e.VehicleSubAscend = 131)] = "VehicleSubAscend"),
    (e[(e.VehicleSubDescend = 132)] = "VehicleSubDescend"),
    (e[(e.VehicleSubTurnHardLeft = 133)] = "VehicleSubTurnHardLeft"),
    (e[(e.VehicleSubTurnHardRight = 134)] = "VehicleSubTurnHardRight"),
    (e[(e.VehicleSubMouseControlOverride = 135)] =
      "VehicleSubMouseControlOverride"),
    (e[(e.VehiclePushbikePedal = 136)] = "VehiclePushbikePedal"),
    (e[(e.VehiclePushbikeSprint = 137)] = "VehiclePushbikeSprint"),
    (e[(e.VehiclePushbikeFrontBrake = 138)] = "VehiclePushbikeFrontBrake"),
    (e[(e.VehiclePushbikeRearBrake = 139)] = "VehiclePushbikeRearBrake"),
    (e[(e.MeleeAttackLight = 140)] = "MeleeAttackLight"),
    (e[(e.MeleeAttackHeavy = 141)] = "MeleeAttackHeavy"),
    (e[(e.MeleeAttackAlternate = 142)] = "MeleeAttackAlternate"),
    (e[(e.MeleeBlock = 143)] = "MeleeBlock"),
    (e[(e.ParachuteDeploy = 144)] = "ParachuteDeploy"),
    (e[(e.ParachuteDetach = 145)] = "ParachuteDetach"),
    (e[(e.ParachuteTurnLeftRight = 146)] = "ParachuteTurnLeftRight"),
    (e[(e.ParachuteTurnLeftOnly = 147)] = "ParachuteTurnLeftOnly"),
    (e[(e.ParachuteTurnRightOnly = 148)] = "ParachuteTurnRightOnly"),
    (e[(e.ParachutePitchUpDown = 149)] = "ParachutePitchUpDown"),
    (e[(e.ParachutePitchUpOnly = 150)] = "ParachutePitchUpOnly"),
    (e[(e.ParachutePitchDownOnly = 151)] = "ParachutePitchDownOnly"),
    (e[(e.ParachuteBrakeLeft = 152)] = "ParachuteBrakeLeft"),
    (e[(e.ParachuteBrakeRight = 153)] = "ParachuteBrakeRight"),
    (e[(e.ParachuteSmoke = 154)] = "ParachuteSmoke"),
    (e[(e.ParachutePrecisionLanding = 155)] = "ParachutePrecisionLanding"),
    (e[(e.Map = 156)] = "Map"),
    (e[(e.SelectWeaponUnarmed = 157)] = "SelectWeaponUnarmed"),
    (e[(e.SelectWeaponMelee = 158)] = "SelectWeaponMelee"),
    (e[(e.SelectWeaponHandgun = 159)] = "SelectWeaponHandgun"),
    (e[(e.SelectWeaponShotgun = 160)] = "SelectWeaponShotgun"),
    (e[(e.SelectWeaponSmg = 161)] = "SelectWeaponSmg"),
    (e[(e.SelectWeaponAutoRifle = 162)] = "SelectWeaponAutoRifle"),
    (e[(e.SelectWeaponSniper = 163)] = "SelectWeaponSniper"),
    (e[(e.SelectWeaponHeavy = 164)] = "SelectWeaponHeavy"),
    (e[(e.SelectWeaponSpecial = 165)] = "SelectWeaponSpecial"),
    (e[(e.SelectCharacterMichael = 166)] = "SelectCharacterMichael"),
    (e[(e.SelectCharacterFranklin = 167)] = "SelectCharacterFranklin"),
    (e[(e.SelectCharacterTrevor = 168)] = "SelectCharacterTrevor"),
    (e[(e.SelectCharacterMultiplayer = 169)] = "SelectCharacterMultiplayer"),
    (e[(e.SaveReplayClip = 170)] = "SaveReplayClip"),
    (e[(e.SpecialAbilityPC = 171)] = "SpecialAbilityPC"),
    (e[(e.PhoneUp = 172)] = "PhoneUp"),
    (e[(e.PhoneDown = 173)] = "PhoneDown"),
    (e[(e.PhoneLeft = 174)] = "PhoneLeft"),
    (e[(e.PhoneRight = 175)] = "PhoneRight"),
    (e[(e.PhoneSelect = 176)] = "PhoneSelect"),
    (e[(e.PhoneCancel = 177)] = "PhoneCancel"),
    (e[(e.PhoneOption = 178)] = "PhoneOption"),
    (e[(e.PhoneExtraOption = 179)] = "PhoneExtraOption"),
    (e[(e.PhoneScrollForward = 180)] = "PhoneScrollForward"),
    (e[(e.PhoneScrollBackward = 181)] = "PhoneScrollBackward"),
    (e[(e.PhoneCameraFocusLock = 182)] = "PhoneCameraFocusLock"),
    (e[(e.PhoneCameraGrid = 183)] = "PhoneCameraGrid"),
    (e[(e.PhoneCameraSelfie = 184)] = "PhoneCameraSelfie"),
    (e[(e.PhoneCameraDOF = 185)] = "PhoneCameraDOF"),
    (e[(e.PhoneCameraExpression = 186)] = "PhoneCameraExpression"),
    (e[(e.FrontendDown = 187)] = "FrontendDown"),
    (e[(e.FrontendUp = 188)] = "FrontendUp"),
    (e[(e.FrontendLeft = 189)] = "FrontendLeft"),
    (e[(e.FrontendRight = 190)] = "FrontendRight"),
    (e[(e.FrontendRdown = 191)] = "FrontendRdown"),
    (e[(e.FrontendRup = 192)] = "FrontendRup"),
    (e[(e.FrontendRleft = 193)] = "FrontendRleft"),
    (e[(e.FrontendRright = 194)] = "FrontendRright"),
    (e[(e.FrontendAxisX = 195)] = "FrontendAxisX"),
    (e[(e.FrontendAxisY = 196)] = "FrontendAxisY"),
    (e[(e.FrontendRightAxisX = 197)] = "FrontendRightAxisX"),
    (e[(e.FrontendRightAxisY = 198)] = "FrontendRightAxisY"),
    (e[(e.FrontendPause = 199)] = "FrontendPause"),
    (e[(e.FrontendPauseAlternate = 200)] = "FrontendPauseAlternate"),
    (e[(e.FrontendAccept = 201)] = "FrontendAccept"),
    (e[(e.FrontendCancel = 202)] = "FrontendCancel"),
    (e[(e.FrontendX = 203)] = "FrontendX"),
    (e[(e.FrontendY = 204)] = "FrontendY"),
    (e[(e.FrontendLb = 205)] = "FrontendLb"),
    (e[(e.FrontendRb = 206)] = "FrontendRb"),
    (e[(e.FrontendLt = 207)] = "FrontendLt"),
    (e[(e.FrontendRt = 208)] = "FrontendRt"),
    (e[(e.FrontendLs = 209)] = "FrontendLs"),
    (e[(e.FrontendRs = 210)] = "FrontendRs"),
    (e[(e.FrontendLeaderboard = 211)] = "FrontendLeaderboard"),
    (e[(e.FrontendSocialClub = 212)] = "FrontendSocialClub"),
    (e[(e.FrontendSocialClubSecondary = 213)] = "FrontendSocialClubSecondary"),
    (e[(e.FrontendDelete = 214)] = "FrontendDelete"),
    (e[(e.FrontendEndscreenAccept = 215)] = "FrontendEndscreenAccept"),
    (e[(e.FrontendEndscreenExpand = 216)] = "FrontendEndscreenExpand"),
    (e[(e.FrontendSelect = 217)] = "FrontendSelect"),
    (e[(e.ScriptLeftAxisX = 218)] = "ScriptLeftAxisX"),
    (e[(e.ScriptLeftAxisY = 219)] = "ScriptLeftAxisY"),
    (e[(e.ScriptRightAxisX = 220)] = "ScriptRightAxisX"),
    (e[(e.ScriptRightAxisY = 221)] = "ScriptRightAxisY"),
    (e[(e.ScriptRUp = 222)] = "ScriptRUp"),
    (e[(e.ScriptRDown = 223)] = "ScriptRDown"),
    (e[(e.ScriptRLeft = 224)] = "ScriptRLeft"),
    (e[(e.ScriptRRight = 225)] = "ScriptRRight"),
    (e[(e.ScriptLB = 226)] = "ScriptLB"),
    (e[(e.ScriptRB = 227)] = "ScriptRB"),
    (e[(e.ScriptLT = 228)] = "ScriptLT"),
    (e[(e.ScriptRT = 229)] = "ScriptRT"),
    (e[(e.ScriptLS = 230)] = "ScriptLS"),
    (e[(e.ScriptRS = 231)] = "ScriptRS"),
    (e[(e.ScriptPadUp = 232)] = "ScriptPadUp"),
    (e[(e.ScriptPadDown = 233)] = "ScriptPadDown"),
    (e[(e.ScriptPadLeft = 234)] = "ScriptPadLeft"),
    (e[(e.ScriptPadRight = 235)] = "ScriptPadRight"),
    (e[(e.ScriptSelect = 236)] = "ScriptSelect"),
    (e[(e.CursorAccept = 237)] = "CursorAccept"),
    (e[(e.CursorCancel = 238)] = "CursorCancel"),
    (e[(e.CursorX = 239)] = "CursorX"),
    (e[(e.CursorY = 240)] = "CursorY"),
    (e[(e.CursorScrollUp = 241)] = "CursorScrollUp"),
    (e[(e.CursorScrollDown = 242)] = "CursorScrollDown"),
    (e[(e.EnterCheatCode = 243)] = "EnterCheatCode"),
    (e[(e.InteractionMenu = 244)] = "InteractionMenu"),
    (e[(e.MpTextChatAll = 245)] = "MpTextChatAll"),
    (e[(e.MpTextChatTeam = 246)] = "MpTextChatTeam"),
    (e[(e.MpTextChatFriends = 247)] = "MpTextChatFriends"),
    (e[(e.MpTextChatCrew = 248)] = "MpTextChatCrew"),
    (e[(e.PushToTalk = 249)] = "PushToTalk"),
    (e[(e.CreatorLS = 250)] = "CreatorLS"),
    (e[(e.CreatorRS = 251)] = "CreatorRS"),
    (e[(e.CreatorLT = 252)] = "CreatorLT"),
    (e[(e.CreatorRT = 253)] = "CreatorRT"),
    (e[(e.CreatorMenuToggle = 254)] = "CreatorMenuToggle"),
    (e[(e.CreatorAccept = 255)] = "CreatorAccept"),
    (e[(e.CreatorDelete = 256)] = "CreatorDelete"),
    (e[(e.Attack2 = 257)] = "Attack2"),
    (e[(e.RappelJump = 258)] = "RappelJump"),
    (e[(e.RappelLongJump = 259)] = "RappelLongJump"),
    (e[(e.RappelSmashWindow = 260)] = "RappelSmashWindow"),
    (e[(e.PrevWeapon = 261)] = "PrevWeapon"),
    (e[(e.NextWeapon = 262)] = "NextWeapon"),
    (e[(e.MeleeAttack1 = 263)] = "MeleeAttack1"),
    (e[(e.MeleeAttack2 = 264)] = "MeleeAttack2"),
    (e[(e.Whistle = 265)] = "Whistle"),
    (e[(e.MoveLeft = 266)] = "MoveLeft"),
    (e[(e.MoveRight = 267)] = "MoveRight"),
    (e[(e.MoveUp = 268)] = "MoveUp"),
    (e[(e.MoveDown = 269)] = "MoveDown"),
    (e[(e.LookLeft = 270)] = "LookLeft"),
    (e[(e.LookRight = 271)] = "LookRight"),
    (e[(e.LookUp = 272)] = "LookUp"),
    (e[(e.LookDown = 273)] = "LookDown"),
    (e[(e.SniperZoomIn = 274)] = "SniperZoomIn"),
    (e[(e.SniperZoomOut = 275)] = "SniperZoomOut"),
    (e[(e.SniperZoomInAlternate = 276)] = "SniperZoomInAlternate"),
    (e[(e.SniperZoomOutAlternate = 277)] = "SniperZoomOutAlternate"),
    (e[(e.VehicleMoveLeft = 278)] = "VehicleMoveLeft"),
    (e[(e.VehicleMoveRight = 279)] = "VehicleMoveRight"),
    (e[(e.VehicleMoveUp = 280)] = "VehicleMoveUp"),
    (e[(e.VehicleMoveDown = 281)] = "VehicleMoveDown"),
    (e[(e.VehicleGunLeft = 282)] = "VehicleGunLeft"),
    (e[(e.VehicleGunRight = 283)] = "VehicleGunRight"),
    (e[(e.VehicleGunUp = 284)] = "VehicleGunUp"),
    (e[(e.VehicleGunDown = 285)] = "VehicleGunDown"),
    (e[(e.VehicleLookLeft = 286)] = "VehicleLookLeft"),
    (e[(e.VehicleLookRight = 287)] = "VehicleLookRight"),
    (e[(e.ReplayStartStopRecording = 288)] = "ReplayStartStopRecording"),
    (e[(e.ReplayStartStopRecordingSecondary = 289)] =
      "ReplayStartStopRecordingSecondary"),
    (e[(e.ScaledLookLeftRight = 290)] = "ScaledLookLeftRight"),
    (e[(e.ScaledLookUpDown = 291)] = "ScaledLookUpDown"),
    (e[(e.ScaledLookUpOnly = 292)] = "ScaledLookUpOnly"),
    (e[(e.ScaledLookDownOnly = 293)] = "ScaledLookDownOnly"),
    (e[(e.ScaledLookLeftOnly = 294)] = "ScaledLookLeftOnly"),
    (e[(e.ScaledLookRightOnly = 295)] = "ScaledLookRightOnly"),
    (e[(e.ReplayMarkerDelete = 296)] = "ReplayMarkerDelete"),
    (e[(e.ReplayClipDelete = 297)] = "ReplayClipDelete"),
    (e[(e.ReplayPause = 298)] = "ReplayPause"),
    (e[(e.ReplayRewind = 299)] = "ReplayRewind"),
    (e[(e.ReplayFfwd = 300)] = "ReplayFfwd"),
    (e[(e.ReplayNewmarker = 301)] = "ReplayNewmarker"),
    (e[(e.ReplayRecord = 302)] = "ReplayRecord"),
    (e[(e.ReplayScreenshot = 303)] = "ReplayScreenshot"),
    (e[(e.ReplayHidehud = 304)] = "ReplayHidehud"),
    (e[(e.ReplayStartpoint = 305)] = "ReplayStartpoint"),
    (e[(e.ReplayEndpoint = 306)] = "ReplayEndpoint"),
    (e[(e.ReplayAdvance = 307)] = "ReplayAdvance"),
    (e[(e.ReplayBack = 308)] = "ReplayBack"),
    (e[(e.ReplayTools = 309)] = "ReplayTools"),
    (e[(e.ReplayRestart = 310)] = "ReplayRestart"),
    (e[(e.ReplayShowhotkey = 311)] = "ReplayShowhotkey"),
    (e[(e.ReplayCycleMarkerLeft = 312)] = "ReplayCycleMarkerLeft"),
    (e[(e.ReplayCycleMarkerRight = 313)] = "ReplayCycleMarkerRight"),
    (e[(e.ReplayFOVIncrease = 314)] = "ReplayFOVIncrease"),
    (e[(e.ReplayFOVDecrease = 315)] = "ReplayFOVDecrease"),
    (e[(e.ReplayCameraUp = 316)] = "ReplayCameraUp"),
    (e[(e.ReplayCameraDown = 317)] = "ReplayCameraDown"),
    (e[(e.ReplaySave = 318)] = "ReplaySave"),
    (e[(e.ReplayToggletime = 319)] = "ReplayToggletime"),
    (e[(e.ReplayToggletips = 320)] = "ReplayToggletips"),
    (e[(e.ReplayPreview = 321)] = "ReplayPreview"),
    (e[(e.ReplayToggleTimeline = 322)] = "ReplayToggleTimeline"),
    (e[(e.ReplayTimelinePickupClip = 323)] = "ReplayTimelinePickupClip"),
    (e[(e.ReplayTimelineDuplicateClip = 324)] = "ReplayTimelineDuplicateClip"),
    (e[(e.ReplayTimelinePlaceClip = 325)] = "ReplayTimelinePlaceClip"),
    (e[(e.ReplayCtrl = 326)] = "ReplayCtrl"),
    (e[(e.ReplayTimelineSave = 327)] = "ReplayTimelineSave"),
    (e[(e.ReplayPreviewAudio = 328)] = "ReplayPreviewAudio"),
    (e[(e.VehicleDriveLook = 329)] = "VehicleDriveLook"),
    (e[(e.VehicleDriveLook2 = 330)] = "VehicleDriveLook2"),
    (e[(e.VehicleFlyAttack2 = 331)] = "VehicleFlyAttack2"),
    (e[(e.RadioWheelUpDown = 332)] = "RadioWheelUpDown"),
    (e[(e.RadioWheelLeftRight = 333)] = "RadioWheelLeftRight"),
    (e[(e.VehicleSlowMoUpDown = 334)] = "VehicleSlowMoUpDown"),
    (e[(e.VehicleSlowMoUpOnly = 335)] = "VehicleSlowMoUpOnly"),
    (e[(e.VehicleSlowMoDownOnly = 336)] = "VehicleSlowMoDownOnly"),
    (e[(e.MapPointOfInterest = 337)] = "MapPointOfInterest"),
    (e[(e.ReplaySnapmaticPhoto = 338)] = "ReplaySnapmaticPhoto"),
    (e[(e.VehicleCarJump = 339)] = "VehicleCarJump"),
    (e[(e.VehicleRocketBoost = 340)] = "VehicleRocketBoost"),
    (e[(e.VehicleParachute = 341)] = "VehicleParachute"),
    (e[(e.VehicleBikeWings = 342)] = "VehicleBikeWings"),
    (e[(e.VehicleFlyBombBay = 343)] = "VehicleFlyBombBay"),
    (e[(e.VehicleFlyCounter = 344)] = "VehicleFlyCounter"),
    (e[(e.VehicleFlyTransform = 345)] = "VehicleFlyTransform");
})(dt || (dt = {}));
var gt,
  wt,
  ft = dt;
!(function (e) {
  (e[(e.HUD_COLOUR_PURE_WHITE = 0)] = "HUD_COLOUR_PURE_WHITE"),
    (e[(e.HUD_COLOUR_WHITE = 1)] = "HUD_COLOUR_WHITE"),
    (e[(e.HUD_COLOUR_BLACK = 2)] = "HUD_COLOUR_BLACK"),
    (e[(e.HUD_COLOUR_GREY = 3)] = "HUD_COLOUR_GREY"),
    (e[(e.HUD_COLOUR_GREYLIGHT = 4)] = "HUD_COLOUR_GREYLIGHT"),
    (e[(e.HUD_COLOUR_GREYDARK = 5)] = "HUD_COLOUR_GREYDARK"),
    (e[(e.HUD_COLOUR_RED = 6)] = "HUD_COLOUR_RED"),
    (e[(e.HUD_COLOUR_REDLIGHT = 7)] = "HUD_COLOUR_REDLIGHT"),
    (e[(e.HUD_COLOUR_REDDARK = 8)] = "HUD_COLOUR_REDDARK"),
    (e[(e.HUD_COLOUR_BLUE = 9)] = "HUD_COLOUR_BLUE"),
    (e[(e.HUD_COLOUR_BLUELIGHT = 10)] = "HUD_COLOUR_BLUELIGHT"),
    (e[(e.HUD_COLOUR_BLUEDARK = 11)] = "HUD_COLOUR_BLUEDARK"),
    (e[(e.HUD_COLOUR_YELLOW = 12)] = "HUD_COLOUR_YELLOW"),
    (e[(e.HUD_COLOUR_YELLOWLIGHT = 13)] = "HUD_COLOUR_YELLOWLIGHT"),
    (e[(e.HUD_COLOUR_YELLOWDARK = 14)] = "HUD_COLOUR_YELLOWDARK"),
    (e[(e.HUD_COLOUR_ORANGE = 15)] = "HUD_COLOUR_ORANGE"),
    (e[(e.HUD_COLOUR_ORANGELIGHT = 16)] = "HUD_COLOUR_ORANGELIGHT"),
    (e[(e.HUD_COLOUR_ORANGEDARK = 17)] = "HUD_COLOUR_ORANGEDARK"),
    (e[(e.HUD_COLOUR_GREEN = 18)] = "HUD_COLOUR_GREEN"),
    (e[(e.HUD_COLOUR_GREENLIGHT = 19)] = "HUD_COLOUR_GREENLIGHT"),
    (e[(e.HUD_COLOUR_GREENDARK = 20)] = "HUD_COLOUR_GREENDARK"),
    (e[(e.HUD_COLOUR_PURPLE = 21)] = "HUD_COLOUR_PURPLE"),
    (e[(e.HUD_COLOUR_PURPLELIGHT = 22)] = "HUD_COLOUR_PURPLELIGHT"),
    (e[(e.HUD_COLOUR_PURPLEDARK = 23)] = "HUD_COLOUR_PURPLEDARK"),
    (e[(e.HUD_COLOUR_PINK = 24)] = "HUD_COLOUR_PINK"),
    (e[(e.HUD_COLOUR_RADAR_HEALTH = 25)] = "HUD_COLOUR_RADAR_HEALTH"),
    (e[(e.HUD_COLOUR_RADAR_ARMOUR = 26)] = "HUD_COLOUR_RADAR_ARMOUR"),
    (e[(e.HUD_COLOUR_RADAR_DAMAGE = 27)] = "HUD_COLOUR_RADAR_DAMAGE"),
    (e[(e.HUD_COLOUR_NET_PLAYER1 = 28)] = "HUD_COLOUR_NET_PLAYER1"),
    (e[(e.HUD_COLOUR_NET_PLAYER2 = 29)] = "HUD_COLOUR_NET_PLAYER2"),
    (e[(e.HUD_COLOUR_NET_PLAYER3 = 30)] = "HUD_COLOUR_NET_PLAYER3"),
    (e[(e.HUD_COLOUR_NET_PLAYER4 = 31)] = "HUD_COLOUR_NET_PLAYER4"),
    (e[(e.HUD_COLOUR_NET_PLAYER5 = 32)] = "HUD_COLOUR_NET_PLAYER5"),
    (e[(e.HUD_COLOUR_NET_PLAYER6 = 33)] = "HUD_COLOUR_NET_PLAYER6"),
    (e[(e.HUD_COLOUR_NET_PLAYER7 = 34)] = "HUD_COLOUR_NET_PLAYER7"),
    (e[(e.HUD_COLOUR_NET_PLAYER8 = 35)] = "HUD_COLOUR_NET_PLAYER8"),
    (e[(e.HUD_COLOUR_NET_PLAYER9 = 36)] = "HUD_COLOUR_NET_PLAYER9"),
    (e[(e.HUD_COLOUR_NET_PLAYER10 = 37)] = "HUD_COLOUR_NET_PLAYER10"),
    (e[(e.HUD_COLOUR_NET_PLAYER11 = 38)] = "HUD_COLOUR_NET_PLAYER11"),
    (e[(e.HUD_COLOUR_NET_PLAYER12 = 39)] = "HUD_COLOUR_NET_PLAYER12"),
    (e[(e.HUD_COLOUR_NET_PLAYER13 = 40)] = "HUD_COLOUR_NET_PLAYER13"),
    (e[(e.HUD_COLOUR_NET_PLAYER14 = 41)] = "HUD_COLOUR_NET_PLAYER14"),
    (e[(e.HUD_COLOUR_NET_PLAYER15 = 42)] = "HUD_COLOUR_NET_PLAYER15"),
    (e[(e.HUD_COLOUR_NET_PLAYER16 = 43)] = "HUD_COLOUR_NET_PLAYER16"),
    (e[(e.HUD_COLOUR_NET_PLAYER17 = 44)] = "HUD_COLOUR_NET_PLAYER17"),
    (e[(e.HUD_COLOUR_NET_PLAYER18 = 45)] = "HUD_COLOUR_NET_PLAYER18"),
    (e[(e.HUD_COLOUR_NET_PLAYER19 = 46)] = "HUD_COLOUR_NET_PLAYER19"),
    (e[(e.HUD_COLOUR_NET_PLAYER20 = 47)] = "HUD_COLOUR_NET_PLAYER20"),
    (e[(e.HUD_COLOUR_NET_PLAYER21 = 48)] = "HUD_COLOUR_NET_PLAYER21"),
    (e[(e.HUD_COLOUR_NET_PLAYER22 = 49)] = "HUD_COLOUR_NET_PLAYER22"),
    (e[(e.HUD_COLOUR_NET_PLAYER23 = 50)] = "HUD_COLOUR_NET_PLAYER23"),
    (e[(e.HUD_COLOUR_NET_PLAYER24 = 51)] = "HUD_COLOUR_NET_PLAYER24"),
    (e[(e.HUD_COLOUR_NET_PLAYER25 = 52)] = "HUD_COLOUR_NET_PLAYER25"),
    (e[(e.HUD_COLOUR_NET_PLAYER26 = 53)] = "HUD_COLOUR_NET_PLAYER26"),
    (e[(e.HUD_COLOUR_NET_PLAYER27 = 54)] = "HUD_COLOUR_NET_PLAYER27"),
    (e[(e.HUD_COLOUR_NET_PLAYER28 = 55)] = "HUD_COLOUR_NET_PLAYER28"),
    (e[(e.HUD_COLOUR_NET_PLAYER29 = 56)] = "HUD_COLOUR_NET_PLAYER29"),
    (e[(e.HUD_COLOUR_NET_PLAYER30 = 57)] = "HUD_COLOUR_NET_PLAYER30"),
    (e[(e.HUD_COLOUR_NET_PLAYER31 = 58)] = "HUD_COLOUR_NET_PLAYER31"),
    (e[(e.HUD_COLOUR_NET_PLAYER32 = 59)] = "HUD_COLOUR_NET_PLAYER32"),
    (e[(e.HUD_COLOUR_SIMPLEBLIP_DEFAULT = 60)] =
      "HUD_COLOUR_SIMPLEBLIP_DEFAULT"),
    (e[(e.HUD_COLOUR_MENU_BLUE = 61)] = "HUD_COLOUR_MENU_BLUE"),
    (e[(e.HUD_COLOUR_MENU_GREY_LIGHT = 62)] = "HUD_COLOUR_MENU_GREY_LIGHT"),
    (e[(e.HUD_COLOUR_MENU_BLUE_EXTRA_DARK = 63)] =
      "HUD_COLOUR_MENU_BLUE_EXTRA_DARK"),
    (e[(e.HUD_COLOUR_MENU_YELLOW = 64)] = "HUD_COLOUR_MENU_YELLOW"),
    (e[(e.HUD_COLOUR_MENU_YELLOW_DARK = 65)] = "HUD_COLOUR_MENU_YELLOW_DARK"),
    (e[(e.HUD_COLOUR_MENU_GREEN = 66)] = "HUD_COLOUR_MENU_GREEN"),
    (e[(e.HUD_COLOUR_MENU_GREY = 67)] = "HUD_COLOUR_MENU_GREY"),
    (e[(e.HUD_COLOUR_MENU_GREY_DARK = 68)] = "HUD_COLOUR_MENU_GREY_DARK"),
    (e[(e.HUD_COLOUR_MENU_HIGHLIGHT = 69)] = "HUD_COLOUR_MENU_HIGHLIGHT"),
    (e[(e.HUD_COLOUR_MENU_STANDARD = 70)] = "HUD_COLOUR_MENU_STANDARD"),
    (e[(e.HUD_COLOUR_MENU_DIMMED = 71)] = "HUD_COLOUR_MENU_DIMMED"),
    (e[(e.HUD_COLOUR_MENU_EXTRA_DIMMED = 72)] = "HUD_COLOUR_MENU_EXTRA_DIMMED"),
    (e[(e.HUD_COLOUR_BRIEF_TITLE = 73)] = "HUD_COLOUR_BRIEF_TITLE"),
    (e[(e.HUD_COLOUR_MID_GREY_MP = 74)] = "HUD_COLOUR_MID_GREY_MP"),
    (e[(e.HUD_COLOUR_NET_PLAYER1_DARK = 75)] = "HUD_COLOUR_NET_PLAYER1_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER2_DARK = 76)] = "HUD_COLOUR_NET_PLAYER2_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER3_DARK = 77)] = "HUD_COLOUR_NET_PLAYER3_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER4_DARK = 78)] = "HUD_COLOUR_NET_PLAYER4_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER5_DARK = 79)] = "HUD_COLOUR_NET_PLAYER5_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER6_DARK = 80)] = "HUD_COLOUR_NET_PLAYER6_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER7_DARK = 81)] = "HUD_COLOUR_NET_PLAYER7_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER8_DARK = 82)] = "HUD_COLOUR_NET_PLAYER8_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER9_DARK = 83)] = "HUD_COLOUR_NET_PLAYER9_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER10_DARK = 84)] = "HUD_COLOUR_NET_PLAYER10_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER11_DARK = 85)] = "HUD_COLOUR_NET_PLAYER11_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER12_DARK = 86)] = "HUD_COLOUR_NET_PLAYER12_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER13_DARK = 87)] = "HUD_COLOUR_NET_PLAYER13_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER14_DARK = 88)] = "HUD_COLOUR_NET_PLAYER14_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER15_DARK = 89)] = "HUD_COLOUR_NET_PLAYER15_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER16_DARK = 90)] = "HUD_COLOUR_NET_PLAYER16_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER17_DARK = 91)] = "HUD_COLOUR_NET_PLAYER17_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER18_DARK = 92)] = "HUD_COLOUR_NET_PLAYER18_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER19_DARK = 93)] = "HUD_COLOUR_NET_PLAYER19_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER20_DARK = 94)] = "HUD_COLOUR_NET_PLAYER20_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER21_DARK = 95)] = "HUD_COLOUR_NET_PLAYER21_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER22_DARK = 96)] = "HUD_COLOUR_NET_PLAYER22_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER23_DARK = 97)] = "HUD_COLOUR_NET_PLAYER23_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER24_DARK = 98)] = "HUD_COLOUR_NET_PLAYER24_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER25_DARK = 99)] = "HUD_COLOUR_NET_PLAYER25_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER26_DARK = 100)] =
      "HUD_COLOUR_NET_PLAYER26_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER27_DARK = 101)] =
      "HUD_COLOUR_NET_PLAYER27_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER28_DARK = 102)] =
      "HUD_COLOUR_NET_PLAYER28_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER29_DARK = 103)] =
      "HUD_COLOUR_NET_PLAYER29_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER30_DARK = 104)] =
      "HUD_COLOUR_NET_PLAYER30_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER31_DARK = 105)] =
      "HUD_COLOUR_NET_PLAYER31_DARK"),
    (e[(e.HUD_COLOUR_NET_PLAYER32_DARK = 106)] =
      "HUD_COLOUR_NET_PLAYER32_DARK"),
    (e[(e.HUD_COLOUR_BRONZE = 107)] = "HUD_COLOUR_BRONZE"),
    (e[(e.HUD_COLOUR_SILVER = 108)] = "HUD_COLOUR_SILVER"),
    (e[(e.HUD_COLOUR_GOLD = 109)] = "HUD_COLOUR_GOLD"),
    (e[(e.HUD_COLOUR_PLATINUM = 110)] = "HUD_COLOUR_PLATINUM"),
    (e[(e.HUD_COLOUR_GANG1 = 111)] = "HUD_COLOUR_GANG1"),
    (e[(e.HUD_COLOUR_GANG2 = 112)] = "HUD_COLOUR_GANG2"),
    (e[(e.HUD_COLOUR_GANG3 = 113)] = "HUD_COLOUR_GANG3"),
    (e[(e.HUD_COLOUR_GANG4 = 114)] = "HUD_COLOUR_GANG4"),
    (e[(e.HUD_COLOUR_SAME_CREW = 115)] = "HUD_COLOUR_SAME_CREW"),
    (e[(e.HUD_COLOUR_FREEMODE = 116)] = "HUD_COLOUR_FREEMODE"),
    (e[(e.HUD_COLOUR_PAUSE_BG = 117)] = "HUD_COLOUR_PAUSE_BG"),
    (e[(e.HUD_COLOUR_FRIENDLY = 118)] = "HUD_COLOUR_FRIENDLY"),
    (e[(e.HUD_COLOUR_ENEMY = 119)] = "HUD_COLOUR_ENEMY"),
    (e[(e.HUD_COLOUR_LOCATION = 120)] = "HUD_COLOUR_LOCATION"),
    (e[(e.HUD_COLOUR_PICKUP = 121)] = "HUD_COLOUR_PICKUP"),
    (e[(e.HUD_COLOUR_PAUSE_SINGLEPLAYER = 122)] =
      "HUD_COLOUR_PAUSE_SINGLEPLAYER"),
    (e[(e.HUD_COLOUR_FREEMODE_DARK = 123)] = "HUD_COLOUR_FREEMODE_DARK"),
    (e[(e.HUD_COLOUR_INACTIVE_MISSION = 124)] = "HUD_COLOUR_INACTIVE_MISSION"),
    (e[(e.HUD_COLOUR_DAMAGE = 125)] = "HUD_COLOUR_DAMAGE"),
    (e[(e.HUD_COLOUR_PINKLIGHT = 126)] = "HUD_COLOUR_PINKLIGHT"),
    (e[(e.HUD_COLOUR_PM_MITEM_HIGHLIGHT = 127)] =
      "HUD_COLOUR_PM_MITEM_HIGHLIGHT"),
    (e[(e.HUD_COLOUR_SCRIPT_VARIABLE = 128)] = "HUD_COLOUR_SCRIPT_VARIABLE"),
    (e[(e.HUD_COLOUR_YOGA = 129)] = "HUD_COLOUR_YOGA"),
    (e[(e.HUD_COLOUR_TENNIS = 130)] = "HUD_COLOUR_TENNIS"),
    (e[(e.HUD_COLOUR_GOLF = 131)] = "HUD_COLOUR_GOLF"),
    (e[(e.HUD_COLOUR_SHOOTING_RANGE = 132)] = "HUD_COLOUR_SHOOTING_RANGE"),
    (e[(e.HUD_COLOUR_FLIGHT_SCHOOL = 133)] = "HUD_COLOUR_FLIGHT_SCHOOL"),
    (e[(e.HUD_COLOUR_NORTH_BLUE = 134)] = "HUD_COLOUR_NORTH_BLUE"),
    (e[(e.HUD_COLOUR_SOCIAL_CLUB = 135)] = "HUD_COLOUR_SOCIAL_CLUB"),
    (e[(e.HUD_COLOUR_PLATFORM_BLUE = 136)] = "HUD_COLOUR_PLATFORM_BLUE"),
    (e[(e.HUD_COLOUR_PLATFORM_GREEN = 137)] = "HUD_COLOUR_PLATFORM_GREEN"),
    (e[(e.HUD_COLOUR_PLATFORM_GREY = 138)] = "HUD_COLOUR_PLATFORM_GREY"),
    (e[(e.HUD_COLOUR_FACEBOOK_BLUE = 139)] = "HUD_COLOUR_FACEBOOK_BLUE"),
    (e[(e.HUD_COLOUR_INGAME_BG = 140)] = "HUD_COLOUR_INGAME_BG"),
    (e[(e.HUD_COLOUR_DARTS = 141)] = "HUD_COLOUR_DARTS"),
    (e[(e.HUD_COLOUR_WAYPOINT = 142)] = "HUD_COLOUR_WAYPOINT"),
    (e[(e.HUD_COLOUR_MICHAEL = 143)] = "HUD_COLOUR_MICHAEL"),
    (e[(e.HUD_COLOUR_FRANKLIN = 144)] = "HUD_COLOUR_FRANKLIN"),
    (e[(e.HUD_COLOUR_TREVOR = 145)] = "HUD_COLOUR_TREVOR"),
    (e[(e.HUD_COLOUR_GOLF_P1 = 146)] = "HUD_COLOUR_GOLF_P1"),
    (e[(e.HUD_COLOUR_GOLF_P2 = 147)] = "HUD_COLOUR_GOLF_P2"),
    (e[(e.HUD_COLOUR_GOLF_P3 = 148)] = "HUD_COLOUR_GOLF_P3"),
    (e[(e.HUD_COLOUR_GOLF_P4 = 149)] = "HUD_COLOUR_GOLF_P4"),
    (e[(e.HUD_COLOUR_WAYPOINTLIGHT = 150)] = "HUD_COLOUR_WAYPOINTLIGHT"),
    (e[(e.HUD_COLOUR_WAYPOINTDARK = 151)] = "HUD_COLOUR_WAYPOINTDARK"),
    (e[(e.HUD_COLOUR_PANEL_LIGHT = 152)] = "HUD_COLOUR_PANEL_LIGHT"),
    (e[(e.HUD_COLOUR_MICHAEL_DARK = 153)] = "HUD_COLOUR_MICHAEL_DARK"),
    (e[(e.HUD_COLOUR_FRANKLIN_DARK = 154)] = "HUD_COLOUR_FRANKLIN_DARK"),
    (e[(e.HUD_COLOUR_TREVOR_DARK = 155)] = "HUD_COLOUR_TREVOR_DARK"),
    (e[(e.HUD_COLOUR_OBJECTIVE_ROUTE = 156)] = "HUD_COLOUR_OBJECTIVE_ROUTE"),
    (e[(e.HUD_COLOUR_PAUSEMAP_TINT = 157)] = "HUD_COLOUR_PAUSEMAP_TINT"),
    (e[(e.HUD_COLOUR_PAUSE_DESELECT = 158)] = "HUD_COLOUR_PAUSE_DESELECT"),
    (e[(e.HUD_COLOUR_PM_WEAPONS_PURCHASABLE = 159)] =
      "HUD_COLOUR_PM_WEAPONS_PURCHASABLE"),
    (e[(e.HUD_COLOUR_PM_WEAPONS_LOCKED = 160)] =
      "HUD_COLOUR_PM_WEAPONS_LOCKED"),
    (e[(e.HUD_COLOUR_END_SCREEN_BG = 161)] = "HUD_COLOUR_END_SCREEN_BG"),
    (e[(e.HUD_COLOUR_CHOP = 162)] = "HUD_COLOUR_CHOP"),
    (e[(e.HUD_COLOUR_PAUSEMAP_TINT_HALF = 163)] =
      "HUD_COLOUR_PAUSEMAP_TINT_HALF"),
    (e[(e.HUD_COLOUR_NORTH_BLUE_OFFICIAL = 164)] =
      "HUD_COLOUR_NORTH_BLUE_OFFICIAL"),
    (e[(e.HUD_COLOUR_SCRIPT_VARIABLE_2 = 165)] =
      "HUD_COLOUR_SCRIPT_VARIABLE_2"),
    (e[(e.HUD_COLOUR_H = 166)] = "HUD_COLOUR_H"),
    (e[(e.HUD_COLOUR_HDARK = 167)] = "HUD_COLOUR_HDARK"),
    (e[(e.HUD_COLOUR_T = 168)] = "HUD_COLOUR_T"),
    (e[(e.HUD_COLOUR_TDARK = 169)] = "HUD_COLOUR_TDARK"),
    (e[(e.HUD_COLOUR_HSHARD = 170)] = "HUD_COLOUR_HSHARD"),
    (e[(e.HUD_COLOUR_CONTROLLER_MICHAEL = 171)] =
      "HUD_COLOUR_CONTROLLER_MICHAEL"),
    (e[(e.HUD_COLOUR_CONTROLLER_FRANKLIN = 172)] =
      "HUD_COLOUR_CONTROLLER_FRANKLIN"),
    (e[(e.HUD_COLOUR_CONTROLLER_TREVOR = 173)] =
      "HUD_COLOUR_CONTROLLER_TREVOR"),
    (e[(e.HUD_COLOUR_CONTROLLER_CHOP = 174)] = "HUD_COLOUR_CONTROLLER_CHOP"),
    (e[(e.HUD_COLOUR_VIDEO_EDITOR_VIDEO = 175)] =
      "HUD_COLOUR_VIDEO_EDITOR_VIDEO"),
    (e[(e.HUD_COLOUR_VIDEO_EDITOR_AUDIO = 176)] =
      "HUD_COLOUR_VIDEO_EDITOR_AUDIO"),
    (e[(e.HUD_COLOUR_VIDEO_EDITOR_TEXT = 177)] =
      "HUD_COLOUR_VIDEO_EDITOR_TEXT"),
    (e[(e.HUD_COLOUR_HB_BLUE = 178)] = "HUD_COLOUR_HB_BLUE"),
    (e[(e.HUD_COLOUR_HB_YELLOW = 179)] = "HUD_COLOUR_HB_YELLOW");
})(gt || (gt = {})),
  (function (e) {
    (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
  })(wt || (wt = {}));
var yt = wt;
class Rt {
  constructor(e, t, _, i = 255) {
    (this.R = e), (this.G = t), (this.B = _), (this.A = i);
  }
}
(Rt.Empty = new Rt(0, 0, 0, 0)),
  (Rt.Transparent = new Rt(0, 0, 0, 0)),
  (Rt.Black = new Rt(0, 0, 0, 255)),
  (Rt.White = new Rt(255, 255, 255, 255)),
  (Rt.WhiteSmoke = new Rt(245, 245, 245, 255));
class Ot {
  constructor(e = 0, t = 0) {
    (this.Width = e), (this.Height = t);
  }
}
class Mt {
  constructor(e, t) {
    (this.X = 0), (this.Y = 0), (this.X = e), (this.Y = t);
  }
  static Parse(e) {
    if ("object" == typeof e) {
      if (e.length) return new Mt(e[0], e[1]);
      if (e.X && e.Y) return new Mt(e.X, e.Y);
    } else if ("string" == typeof e && -1 !== e.indexOf(",")) {
      const t = e.split(",");
      return new Mt(parseFloat(t[0]), parseFloat(t[1]));
    }
    return new Mt(0, 0);
  }
}
class St {
  constructor() {
    this.Enabled = !0;
  }
}
class bt extends St {
  constructor(e, t, _, i, n, a) {
    super(),
      (this.Caption = e),
      (this.Pos = t),
      (this.Scale = _),
      (this.Color = i || new Rt(255, 255, 255, 255)),
      (this.Font = n || 0),
      (this.Centered = a || !1);
  }
  Draw(e, t, _, i, n, a) {
    !e ||
      t ||
      _ ||
      i ||
      n ||
      a ||
      ((t = new Mt(this.Pos.X + e.Width, this.Pos.Y + e.Height)),
        (_ = this.Scale),
        (i = this.Color),
        (n = this.Font),
        (a = this.Centered));
    const s = t.X / 1280,
      o = t.Y / 720;
    y.setTextFont(parseInt(n)),
      y.setTextScale(_, _),
      y.setTextColour(i.R, i.G, i.B, i.A),
      y.setTextCentre(a),
      y.beginTextCommandDisplayText("STRING"),
      bt.AddLongString(e),
      y.endTextCommandDisplayText(s, o, 0);
  }
  static AddLongString(e) {
    if (e.length)
      for (let t, _ = 0; _ < e.length; _ += 99) {
        let i = e.substr(_, _ + 99),
          n = _;
        (i.match(/~/g) || []).length % 2 != 0
          ? ((t = i.lastIndexOf("~")), (_ -= 99 - t))
          : (t = Math.min(99, e.length - n)),
          y.addTextComponentSubstringPlayerName(e.substr(n, t));
      }
  }
}
const Ct = y.getActiveScreenResolution(0, 0);
class kt {
  static get ResolutionMaintainRatio() {
    const e = kt.Width / kt.Height;
    return new Ot(1080 * e, 1080);
  }
  static MousePosition(t = !1) {
    const _ = kt.ResolutionMaintainRatio,
      i = e();
    let [n, a] = [i.x, i.y];
    return t && ([n, a] = [i.x / _.Width, i.y / _.Height]), { X: n, Y: a };
  }
  static IsMouseInBounds(e, t) {
    const _ = kt.MousePosition();
    return (
      _.X >= e.X && _.X <= e.X + t.Width && _.Y > e.Y && _.Y < e.Y + t.Height
    );
  }
  static GetTextWidth(e, t, _) {
    y.beginTextCommandGetWidth("CELL_EMAIL_BCON"),
      bt.AddLongString(e),
      y.setTextFont(t),
      y.setTextScale(1, _);
    const i = y.endTextCommandGetWidth(!0);
    return kt.ResolutionMaintainRatio.Width * i;
  }
  static GetLineCount(e, t, _, i, n) {
    y.beginTextCommandLineCount("CELL_EMAIL_BCON"), bt.AddLongString(e);
    const a = kt.ResolutionMaintainRatio,
      s = t.X / a.Width,
      o = t.Y / a.Height;
    if ((y.setTextFont(_), y.setTextScale(1, i), n > 0)) {
      const e = t.X / a.Width + n / a.Width;
      y.setTextWrap(s, e);
    }
    return y.endTextCommandLineCount(s, o);
  }
}
(kt.Width = Ct[1]), (kt.Height = Ct[2]);
class Lt {
  constructor(e, t, _, i, n = 0, a = new Rt(255, 255, 255)) {
    (this.TextureDict = e),
      (this.TextureName = t),
      (this.Pos = _),
      (this.Size = i),
      (this.Heading = n),
      (this.Color = a),
      (this.Visible = !0);
  }
  LoadTextureDictionary() {
    this.requestTextureDictPromise(this._textureDict).then((e) => { });
  }
  requestTextureDictPromise(e) {
    return new Promise((t, _) => {
      y.requestStreamedTextureDict(e, !0);
      let i = r(() => {
        if (y.hasStreamedTextureDictLoaded(e)) return l(i), t(!0);
      }, 10);
    });
  }
  set TextureDict(e) {
    (this._textureDict = e),
      this.IsTextureDictionaryLoaded || this.LoadTextureDictionary();
  }
  get TextureDict() {
    return this._textureDict;
  }
  get IsTextureDictionaryLoaded() {
    return y.hasStreamedTextureDictLoaded(this._textureDict);
  }
  Draw(e, t, _, i, n, a, s) {
    (e = e || this.TextureDict),
      (t = t || this.TextureName),
      (_ = _ || this.Pos),
      (i = i || this.Size),
      (n = n || this.Heading),
      (a = a || this.Color),
      (s = s || !0) &&
      (y.hasStreamedTextureDictLoaded(e) ||
        y.requestStreamedTextureDict(e, !0));
    const o = (kt.Width / kt.Height) * 1080,
      r = this.Size.Width / o,
      l = this.Size.Height / 1080,
      c = this.Pos.X / o + 0.5 * r,
      m = this.Pos.Y / 1080 + 0.5 * l;
    y.drawSprite(e, t, c, m, r, l, n, a.R, a.G, a.B, a.A, !0);
  }
}
class Dt extends St {
  constructor(e, t, _) {
    super(),
      (this.Enabled = !0),
      (this.Pos = e),
      (this.Size = t),
      (this.Color = _);
  }
  Draw(e, t, _) {
    e || (e = new Ot(0, 0)),
      t ||
      _ ||
      ((e = new Mt(this.Pos.X + e.Width, this.Pos.Y + e.Height)),
        (t = this.Size),
        (_ = this.Color));
    const i = t.Width / 1280,
      n = t.Height / 720,
      a = e.X / 1280 + 0.5 * i,
      s = e.Y / 720 + 0.5 * n;
    y.drawRect(a, s, i, n, _.R, _.G, _.B, _.A, !1);
  }
}
class It extends Dt {
  constructor(e, t, _) {
    super(e, t, _);
  }
  Draw(e, t, _) {
    e || (e = new Ot()),
      !e ||
      t ||
      _ ||
      ((e = new Mt(this.Pos.X + e.Width, this.Pos.Y + e.Height)),
        (t = this.Size),
        (_ = this.Color));
    const i = (kt.Width / kt.Height) * 1080,
      n = t.Width / i,
      a = t.Height / 1080,
      s = e.X / i + 0.5 * n,
      o = e.Y / 1080 + 0.5 * a;
    y.drawRect(s, o, n, a, _.R, _.G, _.B, _.A, !1);
  }
}
class Tt extends bt {
  constructor(e, t, _, i, n, a) {
    super(e, t, _, i || new Rt(255, 255, 255), n || 0, !1),
      (this.TextAlignment = ut.Left),
      (this.Wrap = 0),
      a && (this.TextAlignment = a);
  }
  get WordWrap() {
    return new Ot(this.Wrap, 0);
  }
  set WordWrap(e) {
    this.Wrap = e.Width;
  }
  Draw(e, t, _, i, n, a, s, o, r) {
    let l = e,
      m = a,
      h = a;
    e || (e = new Ot(0, 0)),
      e &&
      !t &&
      ((h = this.TextAlignment),
        (l = this.Caption),
        (t = new Mt(this.Pos.X + e.Width, this.Pos.Y + e.Height)),
        (_ = this.Scale),
        (i = this.Color),
        (n = this.Font),
        1 == m || 0 == m
          ? (m = this.Centered)
          : ((m = void 0),
            (s = this.DropShadow),
            (o = this.Outline),
            this.WordWrap));
    const p = (kt.Width / kt.Height) * 1080,
      d = this.Pos.X / p,
      u = this.Pos.Y / 1080;
    if (
      (y.setTextFont(parseInt(n)),
        y.setTextScale(1, _),
        y.setTextColour(i.R, i.G, i.B, i.A),
        void 0 !== m)
    )
      y.setTextCentre(m);
    else {
      switch (
      (s && y.setTextDropshadow(2, 0, 0, 0, 0),
        o && c("[NativeUI] ResText outline not working!"),
        h)
      ) {
        case ut.Centered:
          y.setTextCentre(!0);
          break;
        case ut.Right:
          y.setTextRightJustify(!0), y.setTextWrap(0, d);
      }
      if (this.Wrap) {
        const e = (this.Pos.X + this.Wrap) / p;
        y.setTextWrap(d, e);
      }
    }
    y.beginTextCommandDisplayText("CELL_EMAIL_BCON"),
      bt.AddLongString(l),
      y.endTextCommandDisplayText(d, u, 0);
  }
}
function Pt() {
  let e,
    t = "";
  for (e = 0; e < 32; e += 1)
    switch (e) {
      case 8:
      case 20:
        (t += "-"), (t += ((16 * Math.random()) | 0).toString(16));
        break;
      case 12:
        (t += "-"), (t += "4");
        break;
      case 16:
        (t += "-"), (t += ((4 * Math.random()) | 8).toString(16));
        break;
      default:
        t += ((16 * Math.random()) | 0).toString(16);
    }
  return t;
}
class At {
  constructor(e, t = "", _ = null) {
    (this.Id = Pt()),
      (this.BackColor = At.DefaultBackColor),
      (this.HighlightedBackColor = At.DefaultHighlightedBackColor),
      (this.ForeColor = At.DefaultForeColor),
      (this.HighlightedForeColor = At.DefaultHighlightedForeColor),
      (this.RightLabel = ""),
      (this.LeftBadge = mt.None),
      (this.RightBadge = mt.None),
      (this.Enabled = !0),
      (this.Data = _),
      (this._rectangle = new It(
        new Mt(0, 0),
        new Ot(431, 38),
        new Rt(150, 0, 0, 0)
      )),
      (this._text = new Tt(
        e,
        new Mt(8, 0),
        0.33,
        Rt.WhiteSmoke,
        pt.ChaletLondon,
        ut.Left
      )),
      (this.Description = t),
      (this._selectedSprite = new Lt(
        "commonmenu",
        "gradient_nav",
        new Mt(0, 0),
        new Ot(431, 38)
      )),
      (this._badgeLeft = new Lt(
        "commonmenu",
        "",
        new Mt(0, 0),
        new Ot(40, 40)
      )),
      (this._badgeRight = new Lt(
        "commonmenu",
        "",
        new Mt(0, 0),
        new Ot(40, 40)
      )),
      (this._labelText = new Tt("", new Mt(0, 0), 0.35, Rt.White, 0, ut.Right));
  }
  get Text() {
    return this._text.Caption;
  }
  set Text(e) {
    this._text.Caption = e;
  }
  get Description() {
    return this._description;
  }
  set Description(e) {
    (this._description = e),
      this.hasOwnProperty("Parent") && this.Parent.UpdateDescriptionCaption();
  }
  SetVerticalPosition(e) {
    (this._rectangle.Pos = new Mt(this.Offset.X, e + 144 + this.Offset.Y)),
      (this._selectedSprite.Pos = new Mt(
        0 + this.Offset.X,
        e + 144 + this.Offset.Y
      )),
      (this._text.Pos = new Mt(8 + this.Offset.X, e + 147 + this.Offset.Y)),
      (this._badgeLeft.Pos = new Mt(
        0 + this.Offset.X,
        e + 142 + this.Offset.Y
      )),
      (this._badgeRight.Pos = new Mt(
        385 + this.Offset.X,
        e + 142 + this.Offset.Y
      )),
      (this._labelText.Pos = new Mt(
        420 + this.Offset.X,
        e + 148 + this.Offset.Y
      ));
  }
  addEvent(e, ...t) {
    this._event = { event: e, args: t };
  }
  fireEvent() {
    this._event && a(this._event.event, ...this._event.args);
  }
  Draw() {
    (this._rectangle.Size = new Ot(431 + this.Parent.WidthOffset, 38)),
      (this._selectedSprite.Size = new Ot(431 + this.Parent.WidthOffset, 38)),
      this.Hovered &&
      !this.Selected &&
      ((this._rectangle.Color = new Rt(255, 255, 255, 20)),
        this._rectangle.Draw()),
      (this._selectedSprite.Color = this.Selected
        ? this.HighlightedBackColor
        : this.BackColor),
      this._selectedSprite.Draw(),
      (this._text.Color = this.Enabled
        ? this.Selected
          ? this.HighlightedForeColor
          : this.ForeColor
        : new Rt(163, 159, 148)),
      this.LeftBadge != mt.None
        ? ((this._text.Pos = new Mt(35 + this.Offset.X, this._text.Pos.Y)),
          (this._badgeLeft.TextureDict = this.BadgeToSpriteLib(this.LeftBadge)),
          (this._badgeLeft.TextureName = this.BadgeToSpriteName(
            this.LeftBadge,
            this.Selected
          )),
          (this._badgeLeft.Color = this.IsBagdeWhiteSprite(this.LeftBadge)
            ? this.Enabled
              ? this.Selected
                ? this.HighlightedForeColor
                : this.ForeColor
              : new Rt(163, 159, 148)
            : Rt.White),
          this._badgeLeft.Draw())
        : (this._text.Pos = new Mt(8 + this.Offset.X, this._text.Pos.Y)),
      this.RightBadge != mt.None &&
      ((this._badgeRight.Pos = new Mt(
        385 + this.Offset.X + this.Parent.WidthOffset,
        this._badgeRight.Pos.Y
      )),
        (this._badgeRight.TextureDict = this.BadgeToSpriteLib(this.RightBadge)),
        (this._badgeRight.TextureName = this.BadgeToSpriteName(
          this.RightBadge,
          this.Selected
        )),
        (this._badgeRight.Color = this.IsBagdeWhiteSprite(this.RightBadge)
          ? this.Enabled
            ? this.Selected
              ? this.HighlightedForeColor
              : this.ForeColor
            : new Rt(163, 159, 148)
          : Rt.White),
        this._badgeRight.Draw()),
      this.RightLabel &&
      "" !== this.RightLabel &&
      ((this._labelText.Pos = new Mt(
        420 + this.Offset.X + this.Parent.WidthOffset,
        this._labelText.Pos.Y
      )),
        (this._labelText.Caption = this.RightLabel),
        (this._labelText.Color = this._text.Color =
          this.Enabled
            ? this.Selected
              ? this.HighlightedForeColor
              : this.ForeColor
            : new Rt(163, 159, 148)),
        this._labelText.Draw()),
      this._text.Draw();
  }
  SetLeftBadge(e) {
    this.LeftBadge = e;
  }
  SetRightBadge(e) {
    this.RightBadge = e;
  }
  SetRightLabel(e) {
    this.RightLabel = e;
  }
  BadgeToSpriteLib(e) {
    switch (e) {
      case mt.Sale:
        return "mpshopsale";
      case mt.Audio1:
      case mt.Audio2:
      case mt.Audio3:
      case mt.AudioInactive:
      case mt.AudioMute:
        return "mpleaderboard";
      default:
        return "commonmenu";
    }
  }
  BadgeToSpriteName(e, t) {
    switch (e) {
      case mt.None:
        return "";
      case mt.BronzeMedal:
        return "mp_medal_bronze";
      case mt.GoldMedal:
        return "mp_medal_gold";
      case mt.SilverMedal:
        return "medal_silver";
      case mt.Alert:
        return "mp_alerttriangle";
      case mt.Crown:
        return "mp_hostcrown";
      case mt.Ammo:
        return t ? "shop_ammo_icon_b" : "shop_ammo_icon_a";
      case mt.Armour:
        return t ? "shop_armour_icon_b" : "shop_armour_icon_a";
      case mt.Barber:
        return t ? "shop_barber_icon_b" : "shop_barber_icon_a";
      case mt.Clothes:
        return t ? "shop_clothing_icon_b" : "shop_clothing_icon_a";
      case mt.Franklin:
        return t ? "shop_franklin_icon_b" : "shop_franklin_icon_a";
      case mt.Bike:
        return t ? "shop_garage_bike_icon_b" : "shop_garage_bike_icon_a";
      case mt.Car:
        return t ? "shop_garage_icon_b" : "shop_garage_icon_a";
      case mt.Gun:
        return t ? "shop_gunclub_icon_b" : "shop_gunclub_icon_a";
      case mt.Heart:
        return t ? "shop_health_icon_b" : "shop_health_icon_a";
      case mt.Lock:
        return "shop_lock";
      case mt.Makeup:
        return t ? "shop_makeup_icon_b" : "shop_makeup_icon_a";
      case mt.Mask:
        return t ? "shop_mask_icon_b" : "shop_mask_icon_a";
      case mt.Michael:
        return t ? "shop_michael_icon_b" : "shop_michael_icon_a";
      case mt.Star:
        return "shop_new_star";
      case mt.Tattoo:
        return t ? "shop_tattoos_icon_b" : "shop_tattoos_icon_a";
      case mt.Tick:
        return "shop_tick_icon";
      case mt.Trevor:
        return t ? "shop_trevor_icon_b" : "shop_trevor_icon_a";
      case mt.Sale:
        return "saleicon";
      case mt.ArrowLeft:
        return "arrowleft";
      case mt.ArrowRight:
        return "arrowright";
      case mt.Audio1:
        return "leaderboard_audio_1";
      case mt.Audio2:
        return "leaderboard_audio_2";
      case mt.Audio3:
        return "leaderboard_audio_3";
      case mt.AudioInactive:
        return "leaderboard_audio_inactive";
      case mt.AudioMute:
        return "leaderboard_audio_mute";
      default:
        return "";
    }
  }
  IsBagdeWhiteSprite(e) {
    switch (e) {
      case mt.Lock:
      case mt.Tick:
      case mt.Crown:
        return !0;
      default:
        return !1;
    }
  }
  BadgeToColor(e, t) {
    switch (e) {
      case mt.Lock:
      case mt.Tick:
      case mt.Crown:
        return t ? new Rt(255, 0, 0, 0) : new Rt(255, 255, 255, 255);
      default:
        return new Rt(255, 255, 255, 255);
    }
  }
}
(At.DefaultBackColor = Rt.Empty),
  (At.DefaultHighlightedBackColor = Rt.White),
  (At.DefaultForeColor = Rt.WhiteSmoke),
  (At.DefaultHighlightedForeColor = Rt.Black);
class Ut extends At {
  constructor(e, t = !1, _ = "") {
    super(e, _),
      (this.Checked = !1),
      (this._checkedSprite = new Lt(
        "commonmenu",
        "shop_box_blank",
        new Mt(410, 95),
        new Ot(50, 50)
      )),
      (this.Checked = t);
  }
  SetVerticalPosition(e) {
    super.SetVerticalPosition(e),
      (this._checkedSprite.Pos = new Mt(
        380 + this.Offset.X + this.Parent.WidthOffset,
        e + 138 + this.Offset.Y
      ));
  }
  Draw() {
    super.Draw(),
      (this._checkedSprite.Pos = this._checkedSprite.Pos =
        new Mt(
          380 + this.Offset.X + this.Parent.WidthOffset,
          this._checkedSprite.Pos.Y
        ));
    const e = this.HighlightedForeColor == At.DefaultHighlightedForeColor;
    this.Selected && e
      ? (this._checkedSprite.TextureName = this.Checked
        ? "shop_box_tickb"
        : "shop_box_blankb")
      : (this._checkedSprite.TextureName = this.Checked
        ? "shop_box_tick"
        : "shop_box_blank"),
      (this._checkedSprite.Color = this.Enabled
        ? this.Selected && !e
          ? this.HighlightedForeColor
          : this.ForeColor
        : new Rt(163, 159, 148)),
      this._checkedSprite.Draw();
  }
  SetRightBadge(e) {
    return this;
  }
  SetRightLabel(e) {
    return this;
  }
}
class Et {
  constructor(e = "", t = null) {
    (this.Id = Pt()), (this.DisplayText = e), (this.Data = t);
  }
}
class vt {
  constructor(e) {
    if (0 === e.length) throw new Error("ItemsCollection cannot be empty");
    this.items = e;
  }
  length() {
    return this.items.length;
  }
  getListItems() {
    const e = [];
    for (const t of this.items)
      t instanceof Et
        ? e.push(t)
        : "string" == typeof t
          ? e.push(new Et(t))
          : "number" == typeof t && e.push(new Et(t.toString()));
    return e;
  }
}
class Ht extends At {
  constructor(e, t = "", _ = new vt([]), i = 0, n = null) {
    super(e, t, n),
      (this.ScrollingEnabled = !0),
      (this.HoldTimeBeforeScroll = 200),
      (this._currentOffset = 0),
      (this._itemsCollection = []),
      (this._index = 0),
      (this.Collection = _.getListItems()),
      (this.Index = i),
      (this._arrowLeft = new Lt(
        "commonmenu",
        "arrowleft",
        new Mt(110, 105),
        new Ot(30, 30)
      )),
      (this._arrowRight = new Lt(
        "commonmenu",
        "arrowright",
        new Mt(280, 105),
        new Ot(30, 30)
      )),
      (this._itemText = new Tt(
        "",
        new Mt(290, 104),
        0.35,
        Rt.White,
        pt.ChaletLondon,
        ut.Right
      ));
  }
  get Collection() {
    return this._itemsCollection;
  }
  set Collection(e) {
    if (!e) throw new Error("The collection can't be null");
    this._itemsCollection = e;
  }
  set SelectedItem(e) {
    const t = this.Collection.findIndex((t) => t.Id === e.Id);
    this.Index = t > 0 ? t : 0;
  }
  get SelectedItem() {
    return this.Collection.length > 0 ? this.Collection[this.Index] : null;
  }
  get SelectedValue() {
    return null == this.SelectedItem
      ? null
      : null == this.SelectedItem.Data
        ? this.SelectedItem.DisplayText
        : this.SelectedItem.Data;
  }
  get Index() {
    return null == this.Collection ||
      (null != this.Collection && 0 == this.Collection.length)
      ? -1
      : this._index % this.Collection.length;
  }
  set Index(e) {
    if (null == this.Collection) return;
    if (null != this.Collection && 0 == this.Collection.length) return;
    this._index = 1e8 - (1e8 % this.Collection.length) + e;
    const t =
      this.Collection.length >= this.Index
        ? this.Collection[this.Index].DisplayText
        : " ";
    this._currentOffset = kt.GetTextWidth(
      t,
      this._itemText && this._itemText.Font ? this._itemText.Font : 0,
      0.35
    );
  }
  setCollection(e) {
    this.Collection = e.getListItems();
  }
  setCollectionItem(e, t, _ = !0) {
    if (e > this.Collection.length) throw new Error("Index out of bounds");
    "string" == typeof t && (t = new Et(t)),
      this.Collection.splice(e, 1, t),
      _ && (this.Index = 0);
  }
  SetVerticalPosition(e) {
    (this._arrowLeft.Pos = new Mt(
      300 + this.Offset.X + this.Parent.WidthOffset,
      147 + e + this.Offset.Y
    )),
      (this._arrowRight.Pos = new Mt(
        400 + this.Offset.X + this.Parent.WidthOffset,
        147 + e + this.Offset.Y
      )),
      (this._itemText.Pos = new Mt(
        300 + this.Offset.X + this.Parent.WidthOffset,
        e + 147 + this.Offset.Y
      )),
      super.SetVerticalPosition(e);
  }
  SetRightLabel(e) {
    return this;
  }
  SetRightBadge(e) {
    return this;
  }
  Draw() {
    super.Draw();
    const e =
      this.Collection.length >= this.Index
        ? this.Collection[this.Index].DisplayText
        : " ",
      t = this._currentOffset;
    (this._itemText.Color = this.Enabled
      ? this.Selected
        ? this.HighlightedForeColor
        : this.ForeColor
      : new Rt(163, 159, 148)),
      (this._itemText.Caption = e),
      (this._arrowLeft.Color = this.Enabled
        ? this.Selected
          ? this.HighlightedForeColor
          : this.ForeColor
        : new Rt(163, 159, 148)),
      (this._arrowRight.Color = this.Enabled
        ? this.Selected
          ? this.HighlightedForeColor
          : this.ForeColor
        : new Rt(163, 159, 148)),
      (this._arrowLeft.Pos = new Mt(
        380 - t + this.Offset.X + this.Parent.WidthOffset,
        this._arrowLeft.Pos.Y
      )),
      this.Selected
        ? (this._arrowLeft.Draw(),
          this._arrowRight.Draw(),
          (this._itemText.Pos = new Mt(
            405 + this.Offset.X + this.Parent.WidthOffset,
            this._itemText.Pos.Y
          )))
        : (this._itemText.Pos = new Mt(
          420 + this.Offset.X + this.Parent.WidthOffset,
          this._itemText.Pos.Y
        )),
      this._itemText.Draw();
  }
}
Number.isInteger =
  Number.isInteger ||
  function (e) {
    return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
  };
class xt extends At {
  constructor(e, t = "", _ = 0, i = 10, n = 0, a = null) {
    super(e, t, a),
      (this._currentOffset = 0),
      (this._leftMoveThreshold = 1),
      (this._rightMoveThreshold = 1),
      (this._lowerThreshold = 0),
      (this._upperThreshold = 10),
      (this._preCaptionText = ""),
      (this._postCaptionText = ""),
      (this.LowerThreshold = _),
      (this.UpperThreshold = _ > i ? _ : i),
      (this.SelectedValue = n < _ || n > i ? _ : n),
      (this._arrowLeft = new Lt(
        "commonmenu",
        "arrowleft",
        new Mt(110, 105),
        new Ot(30, 30)
      )),
      (this._arrowRight = new Lt(
        "commonmenu",
        "arrowright",
        new Mt(280, 105),
        new Ot(30, 30)
      )),
      (this._itemText = new Tt(
        "",
        new Mt(290, 104),
        0.35,
        Rt.White,
        pt.ChaletLondon,
        ut.Right
      ));
  }
  get PreCaptionText() {
    return this._preCaptionText;
  }
  set PreCaptionText(e) {
    if (!e) throw new Error("The pre caption text can't be null");
    if ("string" != typeof e)
      throw new Error("The pre caption text must be a string");
    (this._preCaptionText = e),
      (this._currentOffset = kt.GetTextWidth(
        this.PreCaptionText +
        this._selectedValue.toString() +
        this.PostCaptionText,
        this._itemText && this._itemText.Font ? this._itemText.Font : 0,
        0.35
      ));
  }
  get PostCaptionText() {
    return this._postCaptionText;
  }
  set PostCaptionText(e) {
    if (!e) throw new Error("The post caption text can't be null");
    if ("string" != typeof e)
      throw new Error("The post caption text must be a string");
    (this._postCaptionText = e),
      (this._currentOffset = kt.GetTextWidth(
        this.PreCaptionText +
        this._selectedValue.toString() +
        this.PostCaptionText,
        this._itemText && this._itemText.Font ? this._itemText.Font : 0,
        0.35
      ));
  }
  get LeftMoveThreshold() {
    return this._leftMoveThreshold;
  }
  set LeftMoveThreshold(e) {
    if (!e) throw new Error("The left threshold can't be null");
    this._leftMoveThreshold = e;
  }
  get RightMoveThreshold() {
    return this._rightMoveThreshold;
  }
  set RightMoveThreshold(e) {
    if (!e) throw new Error("The right threshold can't be null");
    this._rightMoveThreshold = e;
  }
  get LowerThreshold() {
    return this._lowerThreshold;
  }
  set LowerThreshold(e) {
    if ("number" != typeof e && !e)
      throw new Error("The lower threshold can't be null");
    (this._lowerThreshold = e),
      this.SelectedValue < e && (this.SelectedValue = e);
  }
  get UpperThreshold() {
    return this._upperThreshold;
  }
  set UpperThreshold(e) {
    if ("number" != typeof e && !e)
      throw new Error("The upper threshold can't be null");
    (this._upperThreshold = e),
      this.SelectedValue > e && (this.SelectedValue = e);
  }
  get SelectedValue() {
    return this._selectedValue;
  }
  set SelectedValue(e) {
    if (e < this._lowerThreshold || e > this._upperThreshold)
      throw new Error("The value can not be outside the lower or upper limits");
    var t;
    (this._selectedValue =
      ((t = e), Number.isInteger(t) ? t : parseFloat(t.toFixed(10)))),
      (this._currentOffset = kt.GetTextWidth(
        this.PreCaptionText +
        this._selectedValue.toString() +
        this.PostCaptionText,
        this._itemText && this._itemText.Font ? this._itemText.Font : 0,
        this._itemText && this._itemText.Scale ? this._itemText.Scale : 0.35
      ));
  }
  SetVerticalPosition(e) {
    (this._arrowLeft.Pos = new Mt(
      300 + this.Offset.X + this.Parent.WidthOffset,
      147 + e + this.Offset.Y
    )),
      (this._arrowRight.Pos = new Mt(
        400 + this.Offset.X + this.Parent.WidthOffset,
        147 + e + this.Offset.Y
      )),
      (this._itemText.Pos = new Mt(
        300 + this.Offset.X + this.Parent.WidthOffset,
        e + 147 + this.Offset.Y
      )),
      super.SetVerticalPosition(e);
  }
  SetRightLabel(e) {
    return this;
  }
  SetRightBadge(e) {
    return this;
  }
  Draw() {
    super.Draw();
    const e = this._currentOffset;
    (this._itemText.Color = this.Enabled
      ? this.Selected
        ? this.HighlightedForeColor
        : this.ForeColor
      : new Rt(163, 159, 148)),
      (this._itemText.Caption =
        this.PreCaptionText + this._selectedValue + this.PostCaptionText),
      (this._arrowLeft.Color = this.Enabled
        ? this.Selected
          ? this.HighlightedForeColor
          : this.ForeColor
        : new Rt(163, 159, 148)),
      (this._arrowRight.Color = this.Enabled
        ? this.Selected
          ? this.HighlightedForeColor
          : this.ForeColor
        : new Rt(163, 159, 148)),
      (this._arrowLeft.Pos = new Mt(
        380 - e + this.Offset.X + this.Parent.WidthOffset,
        this._arrowLeft.Pos.Y
      )),
      this.Selected
        ? (this._arrowLeft.Draw(),
          this._arrowRight.Draw(),
          (this._itemText.Pos = new Mt(
            405 + this.Offset.X + this.Parent.WidthOffset,
            this._itemText.Pos.Y
          )))
        : (this._itemText.Pos = new Mt(
          420 + this.Offset.X + this.Parent.WidthOffset,
          this._itemText.Pos.Y
        )),
      this._itemText.Draw();
  }
}
class Nt extends At {
  constructor(e, t, _, i = "", n = !1, a = null) {
    super(e, i, a),
      (this._items = t),
      (this._arrowLeft = new Lt(
        "commonmenutu",
        "arrowleft",
        new Mt(0, 105),
        new Ot(15, 15)
      )),
      (this._arrowRight = new Lt(
        "commonmenutu",
        "arrowright",
        new Mt(0, 105),
        new Ot(15, 15)
      )),
      (this._rectangleBackground = new It(
        new Mt(0, 0),
        new Ot(150, 9),
        new Rt(4, 32, 57, 255)
      )),
      (this._rectangleSlider = new It(
        new Mt(0, 0),
        new Ot(75, 9),
        new Rt(57, 116, 200, 255)
      )),
      (this._rectangleDivider = new It(
        new Mt(0, 0),
        new Ot(2.5, 20),
        n ? Rt.WhiteSmoke : Rt.Transparent
      )),
      (this.Index = _);
  }
  get Index() {
    return this._index % this._items.length;
  }
  set Index(e) {
    this._index = 1e8 - (1e8 % this._items.length) + e;
  }
  SetVerticalPosition(e) {
    (this._rectangleBackground.Pos = new Mt(
      250 + this.Offset.X + this.Parent.WidthOffset,
      e + 158.5 + this.Offset.Y
    )),
      (this._rectangleSlider.Pos = new Mt(
        250 + this.Offset.X + this.Parent.WidthOffset,
        e + 158.5 + this.Offset.Y
      )),
      (this._rectangleDivider.Pos = new Mt(
        323.5 + this.Offset.X + this.Parent.WidthOffset,
        e + 153 + this.Offset.Y
      )),
      (this._arrowLeft.Pos = new Mt(
        235 + this.Offset.X + this.Parent.WidthOffset,
        155.5 + e + this.Offset.Y
      )),
      (this._arrowRight.Pos = new Mt(
        400 + this.Offset.X + this.Parent.WidthOffset,
        155.5 + e + this.Offset.Y
      )),
      super.SetVerticalPosition(e);
  }
  IndexToItem(e) {
    return this._items[e];
  }
  Draw() {
    super.Draw(),
      (this._arrowLeft.Color = this.Enabled
        ? this.Selected
          ? Rt.Black
          : Rt.WhiteSmoke
        : new Rt(163, 159, 148)),
      (this._arrowRight.Color = this.Enabled
        ? this.Selected
          ? Rt.Black
          : Rt.WhiteSmoke
        : new Rt(163, 159, 148));
    let e =
      ((this._rectangleBackground.Size.Width -
        this._rectangleSlider.Size.Width) /
        (this._items.length - 1)) *
      this.Index;
    (this._rectangleSlider.Pos = new Mt(
      250 + this.Offset.X + e + +this.Parent.WidthOffset,
      this._rectangleSlider.Pos.Y
    )),
      this.Selected && (this._arrowLeft.Draw(), this._arrowRight.Draw()),
      this._rectangleBackground.Draw(),
      this._rectangleSlider.Draw(),
      this._rectangleDivider.Draw();
  }
  SetRightBadge(e) { }
  SetRightLabel(e) { }
}
class Bt extends Dt {
  constructor(e, t, _) {
    super(e, t, _), (this.Items = []);
  }
  addItem(e) {
    this.Items.push(e);
  }
  Draw(e) {
    if (!this.Enabled) return;
    e = e || new Ot();
    const t = (kt.Width / kt.Height) * 1080,
      _ = this.Size.Width / t,
      i = this.Size.Height / 1080,
      n = (this.Pos.X + e.Width) / t + 0.5 * _,
      a = (this.Pos.Y + e.Height) / 1080 + 0.5 * i;
    for (var s of (y.drawRect(
      n,
      a,
      _,
      i,
      this.Color.R,
      this.Color.G,
      this.Color.B,
      this.Color.A,
      !1
    ),
      this.Items))
      s.Draw(new Ot(this.Pos.X + e.Width, this.Pos.Y + e.Height));
  }
}
class Ft {
  static PlaySound(e, t) {
    y.playSound(-1, e, t, !1, 0, !0);
  }
}
class Gt {
  constructor() {
    this.handlers = [];
  }
  on(e) {
    this.handlers.push(e);
  }
  off(e) {
    this.handlers = this.handlers.filter((t) => t !== e);
  }
  emit(...e) {
    this.handlers.slice(0).forEach((t) => t(...e));
  }
  expose() {
    return this;
  }
  count() {
    return this.handlers.length;
  }
}
class Wt {
  constructor(e) {
    (this._handle = 0),
      (this.scaleForm = e),
      (this._handle = R(this.scaleForm));
  }
  get handle() {
    return this._handle;
  }
  get isValid() {
    return 0 != this._handle;
  }
  get isLoaded() {
    return O(this._handle);
  }
  callFunctionHead(e, ...t) {
    this.isValid &&
      this.isLoaded &&
      (M(this._handle, e),
        t.forEach((e) => {
          switch (typeof e) {
            case "number":
              Number(e) === e && e % 1 != 0 ? C(e) : k(e);
            case "string":
              b(e);
              break;
            case "boolean":
              S(e);
              break;
            default:
              n(
                `Unknown argument type ${typeof e} = ${e.toString()} passed to scaleform with handle ${this._handle
                }`
              );
          }
        }));
  }
  callFunction(e, ...t) {
    this.callFunctionHead(e, ...t), L();
  }
  callFunctionReturn(e, ...t) {
    return this.callFunctionHead(e, ...t), D();
  }
  render2D() {
    this.isValid && this.isLoaded && I(this._handle, 255, 255, 255, 255, 0);
  }
  recreate() {
    this.isValid &&
      this.isLoaded &&
      (T(this._handle), (this._handle = R(this.scaleForm)));
  }
  destroy() {
    this.isValid && (T(this._handle), (this._handle = 0));
  }
}
class Vt {
  static Initialize(e, t) {
    (this._transitionOutAnimName = t), (this._scaleform = new Wt(e));
  }
  static get IsVisible() {
    return this._messageVisible;
  }
  static get Scaleform() {
    return this._scaleform;
  }
  static Load() {
    null != this._delayedTransitionInTimeout &&
      (_(this._delayedTransitionInTimeout),
        (this._delayedTransitionInTimeout = null));
  }
  static SetDelayedTransition(e, t) {
    this._delayedTransitionInTimeout = i(() => {
      (this._delayedTransitionInTimeout = null), this.TransitionIn(e, t);
    }, this._transitionOutTimeMs);
  }
  static ShowCustomShard(e, t = 5e3, ..._) {
    this.ShowComplexCustomShard(() => {
      this._scaleform.callFunction(e, ..._);
    }, t);
  }
  static ShowComplexCustomShard(e, t = 5e3) {
    this.Load(),
      this._messageVisible
        ? (this.TransitionOut(), this.SetDelayedTransition(() => e(), t))
        : this.TransitionIn(e, t);
  }
  static TransitionOut() {
    this._messageVisible &&
      (null != this._transitionOutTimeout &&
        (_(this._transitionOutTimeout), (this._transitionOutTimeout = null)),
        null != this._transitionOutFinishedTimeout &&
        (_(this._transitionOutFinishedTimeout),
          (this._transitionOutFinishedTimeout = null)),
        this._scaleform.callFunction(this._transitionOutAnimName),
        (this._transitionOutFinishedTimeout = i(() => {
          (this._messageVisible = !1), this._scaleform.recreate();
        }, this._transitionOutTimeMs)));
  }
  static TransitionIn(e, t = 500) {
    (this._messageVisible = !0), e(), this.SetTransitionOutTimer(t);
  }
  static SetTransitionOutTimer(e) {
    this._transitionOutTimeout = i(() => {
      (this._transitionOutTimeout = null), this.TransitionOut();
    }, e);
  }
  static Render() {
    this._messageVisible && this._scaleform.render2D();
  }
}
(Vt._messageVisible = !1),
  (Vt._transitionOutTimeout = null),
  (Vt._transitionOutFinishedTimeout = null),
  (Vt._delayedTransitionInTimeout = null),
  (Vt._scaleform = null),
  (Vt._transitionOutTimeMs = 500),
  (Vt._transitionOutAnimName = null);
(class extends Vt {
  static Initialize(e, _) {
    super.Initialize(e, _), t(() => this.Render());
  }
  static ShowMissionPassedMessage(e, t = "", _ = 5e3) {
    this.ShowCustomShard(
      "SHOW_MISSION_PASSED_MESSAGE",
      _,
      e,
      t,
      100,
      !0,
      0,
      !0
    );
  }
  static ShowColoredShard(e, t, _, i, n = 5e3) {
    this.ShowCustomShard("SHOW_SHARD_CENTERED_MP_MESSAGE", n, e, t, i, _);
  }
  static ShowOldMessage(e, t = 5e3) {
    this.ShowCustomShard("SHOW_MISSION_PASSED_MESSAGE", t, e);
  }
  static ShowSimpleShard(e, t = "", _ = 5e3) {
    this.ShowCustomShard("SHOW_SHARD_CREW_RANKUP_MP_MESSAGE", _, e, t);
  }
  static ShowRankupMessage(e, t, _, i = 5e3) {
    this.ShowCustomShard("SHOW_BIG_MP_MESSAGE", i, e, t, _, "", "");
  }
  static ShowPlaneMessage(e, t, _, i = 5e3) {
    this.ShowCustomShard("SHOW_PLANE_MESSAGE", i, e, t, _, "", "");
  }
  static ShowWeaponPurchasedMessage(e, t, _, i = 5e3) {
    this.ShowCustomShard("SHOW_WEAPON_PURCHASED", i, e, t, _, "", 100);
  }
  static ShowWastedMessage(e, t, _, i, n = 5e3) {
    this.ShowCustomShard("SHOW_SHARD_WASTED_MP_MESSAGE", n, e, t, _, i);
  }
  static ShowMpMessageLarge(e, t = "", _ = 5e3) {
    this.ShowComplexCustomShard(() => {
      this.Scaleform.callFunction(
        "SHOW_CENTERED_MP_MESSAGE_LARGE",
        e,
        t,
        100,
        !0,
        100
      ),
        this.Scaleform.callFunction("TRANSITION_IN");
    }, _);
  }
}.Initialize("MP_BIG_MESSAGE_FREEMODE", "TRANSITION_OUT"));
(class extends Vt {
  static Initialize(e, _) {
    super.Initialize(e, _), t(() => this.Render());
  }
  static ShowMidsizedMessage(e, t = "", _ = 5e3) {
    this.ShowCustomShard("SHOW_MIDSIZED_MESSAGE", _, e, t);
  }
  static ShowBridgesKnivesProgress(e, t, _, i, n, a = 5e3) {
    this.ShowCustomShard("SHOW_BRIDGES_KNIVES_PROGRESS", a, e, t, _, i, n);
  }
  static ShowCondensedShardMessage(e, t, _, i, n = 5e3) {
    this.ShowCustomShard("SHOW_COND_SHARD_MESSAGE", n, e, t, _, i);
  }
  static ShowMidsizedShardMessage(e, t, _, i, n, a = 5e3) {
    this.ShowCustomShard("SHOW_SHARD_MIDSIZED_MESSAGE", a, e, t, _, i, n);
  }
}.Initialize("MIDSIZED_MESSAGE", "SHARD_ANIM_OUT"));
class zt extends At {
  constructor(e, t, _ = "", i = null, a = null) {
    super(e, _, a),
      (this._currentOffset = 0),
      (this._precaptionText = ""),
      (this._selectedStartValueHandler = null),
      (this.SelectionChangeHandler = null),
      this.isVariableFunction(t) ||
      n(
        `[UIMenuDynamicListItem] ${e} is not created with a valid selectionChangeHandler, needs to be function. Please see docs.`
      ),
      this.isVariableFunction(i) ||
      n(
        `[UIMenuDynamicListItem] ${e} is not created with a valid selectedStartValueHandler, needs to be function. Please see docs.`
      ),
      (this.SelectionChangeHandler = t),
      (this._selectedStartValueHandler = i),
      (this._arrowLeft = new Lt(
        "commonmenu",
        "arrowleft",
        new Mt(110, 105),
        new Ot(30, 30)
      )),
      (this._arrowRight = new Lt(
        "commonmenu",
        "arrowright",
        new Mt(280, 105),
        new Ot(30, 30)
      )),
      (this._itemText = new Tt(
        "",
        new Mt(290, 104),
        0.35,
        Rt.White,
        pt.ChaletLondon,
        ut.Right
      ));
  }
  SelectionChangeHandlerPromise(e, t, _) {
    return new Promise((i, n) => {
      i(this.SelectionChangeHandler(e, t, _));
    });
  }
  get PreCaptionText() {
    return this._precaptionText;
  }
  set PreCaptionText(e) {
    if (!e) throw new Error("The pre caption text can't be null");
    if ("string" != typeof e)
      throw new Error("The pre caption text must be a string");
    (this._precaptionText = e),
      (this._currentOffset = kt.GetTextWidth(
        this.PreCaptionText + this._selectedValue,
        this._itemText && this._itemText.Font ? this._itemText.Font : 0,
        0.35
      ));
  }
  get SelectedValue() {
    return this._selectedValue;
  }
  set SelectedValue(e) {
    (this._selectedValue = e),
      null != e &&
      (this._currentOffset = kt.GetTextWidth(
        this.PreCaptionText + this._selectedValue,
        this._itemText && this._itemText.Font ? this._itemText.Font : 0,
        this._itemText && this._itemText.Scale ? this._itemText.Scale : 0.35
      ));
  }
  SetVerticalPosition(e) {
    (this._arrowLeft.Pos = new Mt(
      300 + this.Offset.X + this.Parent.WidthOffset,
      147 + e + this.Offset.Y
    )),
      (this._arrowRight.Pos = new Mt(
        400 + this.Offset.X + this.Parent.WidthOffset,
        147 + e + this.Offset.Y
      )),
      (this._itemText.Pos = new Mt(
        300 + this.Offset.X + this.Parent.WidthOffset,
        e + 147 + this.Offset.Y
      )),
      super.SetVerticalPosition(e);
  }
  SetRightLabel(e) {
    return this;
  }
  SetRightBadge(e) {
    return this;
  }
  Draw() {
    super.Draw(),
      null == this._selectedValue &&
      (null != this._selectedStartValueHandler
        ? (this.SelectedValue = this._selectedStartValueHandler())
        : (this._selectedValue = ""));
    const e = this._currentOffset;
    (this._itemText.Color = this.Enabled
      ? this.Selected
        ? this.HighlightedForeColor
        : this.ForeColor
      : new Rt(163, 159, 148)),
      (this._itemText.Caption = this.PreCaptionText + this._selectedValue),
      (this._arrowLeft.Color = this.Enabled
        ? this.Selected
          ? this.HighlightedForeColor
          : this.ForeColor
        : new Rt(163, 159, 148)),
      (this._arrowRight.Color = this.Enabled
        ? this.Selected
          ? this.HighlightedForeColor
          : this.ForeColor
        : new Rt(163, 159, 148)),
      (this._arrowLeft.Pos = new Mt(
        380 - e + this.Offset.X + this.Parent.WidthOffset,
        this._arrowLeft.Pos.Y
      )),
      this.Selected
        ? (this._arrowLeft.Draw(),
          this._arrowRight.Draw(),
          (this._itemText.Pos = new Mt(
            405 + this.Offset.X + this.Parent.WidthOffset,
            this._itemText.Pos.Y
          )))
        : (this._itemText.Pos = new Mt(
          420 + this.Offset.X + this.Parent.WidthOffset,
          this._itemText.Pos.Y
        )),
      this._itemText.Draw();
  }
  isVariableFunction(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
}
let Yt = [];
class jt {
  constructor(e, _, i, n, a) {
    (this._visible = !0),
      (this._counterPretext = ""),
      (this._counterOverride = void 0),
      (this._lastUpDownNavigation = 0),
      (this._lastLeftRightNavigation = 0),
      (this._extraOffset = 0),
      (this._buttonsEnabled = !0),
      (this._justOpened = !0),
      (this._justOpenedFromPool = !1),
      (this._justClosedFromPool = !1),
      (this._poolOpening = null),
      (this._safezoneOffset = new Mt(0, 0)),
      (this._activeItem = 1e3),
      (this._maxItemsOnScreen = 9),
      (this._maxItem = this._maxItemsOnScreen),
      (this._mouseEdgeEnabled = !0),
      (this._bannerSprite = null),
      (this._bannerRectangle = null),
      (this._recalculateDescriptionNextFrame = 1),
      (this._instructionalButtons = []),
      (this._defaultTitleScale = 1.15),
      (this._maxMenuItems = 1e3),
      (this.Id = Pt()),
      (this.SelectTextLocalized = s("HUD_INPUT2")),
      (this.BackTextLocalized = s("HUD_INPUT3")),
      (this.WidthOffset = 0),
      (this.ParentMenu = null),
      (this.ParentItem = null),
      (this.MouseControlsEnabled = !1),
      (this.CloseableByUser = !0),
      (this.AUDIO_LIBRARY = "HUD_FRONTEND_DEFAULT_SOUNDSET"),
      (this.AUDIO_UPDOWN = "NAV_UP_DOWN"),
      (this.AUDIO_LEFTRIGHT = "NAV_LEFT_RIGHT"),
      (this.AUDIO_SELECT = "SELECT"),
      (this.AUDIO_BACK = "BACK"),
      (this.AUDIO_ERROR = "ERROR"),
      (this.MenuItems = []),
      (this.IndexChange = new Gt()),
      (this.ListChange = new Gt()),
      (this.AutoListChange = new Gt()),
      (this.DynamicListChange = new Gt()),
      (this.SliderChange = new Gt()),
      (this.CheckboxChange = new Gt()),
      (this.ItemSelect = new Gt()),
      (this.MenuOpen = new Gt()),
      (this.MenuClose = new Gt()),
      (this.MenuChange = new Gt()),
      i instanceof Mt || (i = Mt.Parse(i)),
      (this._spriteLibrary = n || "commonmenu"),
      (this._spriteName = a || "interaction_bgd"),
      (this._offset = new Mt(i.X, i.Y)),
      (this.Children = new Map()),
      (this._instructionalButtonsScaleform = new Wt("instructional_buttons")),
      this.UpdateScaleform(),
      (this._mainMenu = new Bt(
        new Mt(0, 0),
        new Ot(700, 500),
        new Rt(0, 0, 0, 0)
      )),
      (this._bannerSprite = new Lt(
        this._spriteLibrary,
        this._spriteName,
        new Mt(0 + this._offset.X, 0 + this._offset.Y),
        new Ot(431, 107)
      )),
      this._mainMenu.addItem(
        (this._titleResText = new Tt(
          e,
          new Mt(215 + this._offset.X, 20 + this._offset.Y),
          this._defaultTitleScale,
          new Rt(255, 255, 255),
          1,
          ut.Centered
        ))
      ),
      "" !== _ &&
      (this._mainMenu.addItem(
        new It(
          new Mt(0 + this._offset.X, 107 + this._offset.Y),
          new Ot(431, 37),
          new Rt(0, 0, 0, 255)
        )
      ),
        this._mainMenu.addItem(
          (this._subtitleResText = new Tt(
            _,
            new Mt(8 + this._offset.X, 110 + this._offset.Y),
            0.35,
            new Rt(255, 255, 255),
            0,
            ut.Left
          ))
        ),
        _.startsWith("~") && (this._counterPretext = _.substr(0, 3)),
        (this._counterText = new Tt(
          "",
          new Mt(425 + this._offset.X, 110 + this._offset.Y),
          0.35,
          new Rt(255, 255, 255),
          0,
          ut.Right
        )),
        (this._extraOffset += 37)),
      (this._upAndDownSprite = new Lt(
        "commonmenu",
        "shop_arrows_upanddown",
        new Mt(
          190 + this._offset.X,
          147 +
          37 * (this._maxItemsOnScreen + 1) +
          this._offset.Y -
          37 +
          this._extraOffset
        ),
        new Ot(50, 50)
      )),
      (this._extraRectangleUp = new It(
        new Mt(
          0 + this._offset.X,
          144 +
          38 * (this._maxItemsOnScreen + 1) +
          this._offset.Y -
          37 +
          this._extraOffset
        ),
        new Ot(431, 18),
        new Rt(0, 0, 0, 200)
      )),
      (this._extraRectangleDown = new It(
        new Mt(
          0 + this._offset.X,
          162 +
          38 * (this._maxItemsOnScreen + 1) +
          this._offset.Y -
          37 +
          this._extraOffset
        ),
        new Ot(431, 18),
        new Rt(0, 0, 0, 200)
      )),
      (this._descriptionBar = new It(
        new Mt(this._offset.X, 123),
        new Ot(431, 4),
        Rt.Black
      )),
      (this._descriptionRectangle = new Lt(
        "commonmenu",
        "gradient_bgd",
        new Mt(this._offset.X, 127),
        new Ot(431, 30)
      )),
      (this._descriptionText = new Tt(
        "",
        new Mt(this._offset.X + 5, 125),
        0.35,
        new Rt(255, 255, 255, 255),
        pt.ChaletLondon,
        ut.Left
      )),
      (this._descriptionText.Wrap = 400),
      (this._background = new Lt(
        "commonmenu",
        "gradient_bgd",
        new Mt(this._offset.X, 144 + this._offset.Y - 37 + this._extraOffset),
        new Ot(290, 25)
      )),
      (this._visible = !1),
      t(this.render.bind(this));
  }
  GetSpriteBanner() {
    return this._bannerSprite;
  }
  GetRectangleBanner() {
    return this._bannerRectangle;
  }
  GetTitle() {
    return this._titleResText;
  }
  get MaxItemsVisible() {
    return this._maxItemsOnScreen;
  }
  set MaxItemsVisible(e) {
    (this._maxItemsOnScreen = e), (this._maxItem = e);
  }
  get Title() {
    return this._titleResText.Caption;
  }
  set Title(e) {
    this._titleResText.Caption = e;
  }
  get GetSubTitle() {
    return this._titleResText;
  }
  get SubTitle() {
    return this._titleResText.Caption;
  }
  set SubTitle(e) {
    this._subtitleResText.Caption = e;
  }
  get Visible() {
    return this._visible;
  }
  set Visible(e) {
    if (
      ((this._visible = e),
        Ft.PlaySound(this.AUDIO_BACK, this.AUDIO_LIBRARY),
        this.UpdateScaleform(),
        e && this.UpdateDescriptionCaption(),
        !0 !== this._justOpenedFromPool)
    )
      if (e) {
        if (
          ((this._justOpened = !0),
            this.MenuOpen.emit(),
            null === this.ParentMenu &&
            !Yt.includes(this) &&
            this !== this._poolOpening)
        ) {
          const e = Yt.length ? Yt[Yt.length - 1] : null;
          Yt.push(this),
            e !== this._poolOpening &&
            null !== e &&
            ((e._justClosedFromPool = !0), (e.Visible = !1));
        }
      } else {
        if (!0 === this._justClosedFromPool)
          return void (this._justClosedFromPool = !1);
        null === this.ParentMenu &&
          Yt.includes(this) &&
          Yt.length &&
          (Yt[Yt.length - 1] === this &&
            (Yt.pop(),
              (this._justOpenedFromPool = !0),
              Yt.length || (this._poolOpening = null)),
            Yt.length &&
            ((this._poolOpening = Yt[Yt.length - 1]),
              (Yt[Yt.length - 1].Visible = !0))),
          0 === Yt.length && y.setMouseCursorSprite(1);
      }
    else this._justOpenedFromPool = !1;
  }
  get CurrentSelection() {
    return this._activeItem % this.MenuItems.length;
  }
  set CurrentSelection(e) {
    (this.MenuItems[this._activeItem % this.MenuItems.length].Selected = !1),
      (this._activeItem =
        this._maxMenuItems - (this._maxMenuItems % this.MenuItems.length) + e),
      this.CurrentSelection > this._maxItem
        ? ((this._maxItem = this.CurrentSelection),
          (this._minItem = this.CurrentSelection - this._maxItemsOnScreen))
        : this.CurrentSelection < this._minItem &&
        ((this._maxItem = this._maxItemsOnScreen + this.CurrentSelection),
          (this._minItem = this.CurrentSelection)),
      this.IndexChange.emit(
        this.CurrentSelection,
        this.MenuItems[this._activeItem % this.MenuItems.length]
      ),
      this.UpdateDescriptionCaption();
  }
  DisableInstructionalButtons(e) {
    this._buttonsEnabled = !e;
  }
  AddInstructionalButton(e) {
    this._instructionalButtons.push(e);
  }
  SetSpriteBannerType(e) {
    (this._bannerRectangle = null), this.AddSpriteBannerType(e);
  }
  SetRectangleBannerType(e) {
    (this._bannerSprite = null),
      (this._bannerRectangle = e),
      (this._bannerRectangle.Pos = new Mt(this._offset.X, this._offset.Y)),
      (this._bannerRectangle.Size = new Ot(431 + this.WidthOffset, 107));
  }
  AddSpriteBannerType(e) {
    (this._bannerSprite = e),
      (this._bannerSprite.Size = new Ot(431 + this.WidthOffset, 107)),
      (this._bannerSprite.Pos = new Mt(this._offset.X, this._offset.Y));
  }
  SetNoBannerType() {
    (this._bannerSprite = null),
      (this._bannerRectangle = new It(
        new Mt(this._offset.X, this._offset.Y),
        new Ot(431 + this.WidthOffset, 107),
        new Rt(0, 0, 0, 0)
      ));
  }
  RemoveInstructionalButton(e) {
    for (let t = 0; t < this._instructionalButtons.length; t++)
      this._instructionalButtons[t] === e &&
        this._instructionalButtons.splice(t, 1);
  }
  RecalculateDescriptionPosition() {
    const e =
      this.MenuItems.length > this._maxItemsOnScreen + 1
        ? this._maxItemsOnScreen + 2
        : this.MenuItems.length;
    (this._descriptionBar.Size = new Ot(431 + this.WidthOffset, 4)),
      (this._descriptionRectangle.Size = new Ot(431 + this.WidthOffset, 30)),
      (this._descriptionBar.Pos = new Mt(
        this._offset.X,
        112 + this._extraOffset + this._offset.Y
      )),
      (this._descriptionRectangle.Pos = new Mt(
        this._offset.X,
        112 + this._extraOffset + this._offset.Y
      )),
      (this._descriptionText.Pos = new Mt(
        this._offset.X + 8,
        118 + this._extraOffset + this._offset.Y
      )),
      (this._descriptionBar.Pos = new Mt(
        this._offset.X,
        38 * e + this._descriptionBar.Pos.Y
      )),
      (this._descriptionRectangle.Pos = new Mt(
        this._offset.X,
        38 * e + this._descriptionRectangle.Pos.Y
      )),
      (this._descriptionText.Pos = new Mt(
        this._offset.X + 8,
        38 * e + this._descriptionText.Pos.Y
      ));
  }
  SetMenuWidthOffset(e) {
    (this.WidthOffset = e),
      null != this._bannerSprite &&
      (this._bannerSprite.Size = new Ot(431 + this.WidthOffset, 107)),
      (this._mainMenu.Items[0].pos = new Mt(
        (this.WidthOffset + this._offset.X + 431) / 2,
        20 + this._offset.Y
      )),
      this._counterText &&
      (this._counterText.Pos = new Mt(
        425 + this._offset.X + e,
        110 + this._offset.Y
      )),
      this._mainMenu.Items.length >= 2 &&
      (this._mainMenu.Items[1].size = new Ot(431 + this.WidthOffset, 37)),
      null != this._bannerRectangle &&
      (this._bannerRectangle.Size = new Ot(431 + this.WidthOffset, 107));
  }
  AddItem(e) {
    this._justOpened && (this._justOpened = !1),
      (e.Offset = this._offset),
      (e.Parent = this),
      e.SetVerticalPosition(
        25 * this.MenuItems.length - 37 + this._extraOffset
      ),
      this.MenuItems.push(e),
      this.RefreshIndex();
  }
  RemoveItem(e) {
    for (let t = 0; t < this.MenuItems.length; t++)
      if (this.MenuItems[t] === e) {
        this.MenuItems.splice(t, 1);
        break;
      }
    this.RefreshIndex();
  }
  RefreshIndex() {
    if (0 == this.MenuItems.length)
      return (
        (this._activeItem = this._maxMenuItems),
        (this._maxItem = this._maxItemsOnScreen),
        void (this._minItem = 0)
      );
    for (let e = 0; e < this.MenuItems.length; e++)
      this.MenuItems[e].Selected = !1;
    (this._activeItem =
      this._maxMenuItems - (this._maxMenuItems % this.MenuItems.length)),
      (this._maxItem = this._maxItemsOnScreen),
      (this._minItem = 0),
      this._visible && this.UpdateDescriptionCaption();
  }
  Clear() {
    (this.MenuItems = []), this.RecalculateDescriptionPosition();
  }
  Open() {
    this.Visible = !0;
  }
  CleanUp(e = !1) {
    e &&
      this.Children.forEach((e) => {
        e.Close(!0);
      }),
      this.MenuItems.filter((e) => e instanceof zt).forEach((e) => {
        e.SelectedValue = void 0;
      }),
      this.RefreshIndex();
  }
  Close(e = !1) {
    (this.Visible = !1), this.CleanUp(e), this.MenuClose.emit(!0);
  }
  GoLeft() {
    if (
      (this.MenuItems[this.CurrentSelection] instanceof Ht ||
        this.MenuItems[this.CurrentSelection] instanceof xt ||
        this.MenuItems[this.CurrentSelection] instanceof zt ||
        this.MenuItems[this.CurrentSelection] instanceof Nt) &&
      this.MenuItems[this.CurrentSelection].Enabled
    )
      if (this.MenuItems[this.CurrentSelection] instanceof Ht) {
        const e = this.MenuItems[this.CurrentSelection];
        if (0 == e.Collection.length) return;
        e.Index--,
          Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
          this.ListChange.emit(e, e.Index),
          this.UpdateDescriptionCaption();
      } else if (this.MenuItems[this.CurrentSelection] instanceof xt) {
        const e = this.MenuItems[this.CurrentSelection];
        e.SelectedValue <= e.LowerThreshold
          ? (e.SelectedValue = e.UpperThreshold)
          : (e.SelectedValue -= e.LeftMoveThreshold),
          Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
          this.AutoListChange.emit(e, e.SelectedValue, yt.Left),
          this.UpdateDescriptionCaption();
      } else if (this.MenuItems[this.CurrentSelection] instanceof zt) {
        const e = this.MenuItems[this.CurrentSelection];
        e
          .SelectionChangeHandlerPromise(e, e.SelectedValue, yt.Left)
          .then((t) => {
            (e.SelectedValue = t),
              this.DynamicListChange.emit(e, e.SelectedValue, yt.Left);
          }),
          Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
          this.UpdateDescriptionCaption();
      } else if (this.MenuItems[this.CurrentSelection] instanceof Nt) {
        const e = this.MenuItems[this.CurrentSelection];
        (e.Index = e.Index - 1),
          Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
          this.SliderChange.emit(e, e.Index, e.IndexToItem(e.Index)),
          this.UpdateDescriptionCaption();
      }
  }
  GoRight() {
    if (
      (this.MenuItems[this.CurrentSelection] instanceof Ht ||
        this.MenuItems[this.CurrentSelection] instanceof xt ||
        this.MenuItems[this.CurrentSelection] instanceof zt ||
        this.MenuItems[this.CurrentSelection] instanceof Nt) &&
      this.MenuItems[this.CurrentSelection].Enabled
    )
      if (this.MenuItems[this.CurrentSelection] instanceof Ht) {
        const e = this.MenuItems[this.CurrentSelection];
        if (0 == e.Collection.length) return;
        e.Index++,
          Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
          this.ListChange.emit(e, e.Index),
          this.UpdateDescriptionCaption();
      } else if (this.MenuItems[this.CurrentSelection] instanceof xt) {
        const e = this.MenuItems[this.CurrentSelection];
        e.SelectedValue >= e.UpperThreshold
          ? (e.SelectedValue = e.LowerThreshold)
          : (e.SelectedValue += e.RightMoveThreshold),
          Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
          this.AutoListChange.emit(e, e.SelectedValue, yt.Right),
          this.UpdateDescriptionCaption();
      } else if (this.MenuItems[this.CurrentSelection] instanceof zt) {
        const e = this.MenuItems[this.CurrentSelection];
        e
          .SelectionChangeHandlerPromise(e, e.SelectedValue, yt.Right)
          .then((t) => {
            (e.SelectedValue = t),
              this.DynamicListChange.emit(e, e.SelectedValue, yt.Right);
          }),
          Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
          this.UpdateDescriptionCaption();
      } else if (this.MenuItems[this.CurrentSelection] instanceof Nt) {
        const e = this.MenuItems[this.CurrentSelection];
        e.Index++,
          Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
          this.SliderChange.emit(e, e.Index, e.IndexToItem(e.Index)),
          this.UpdateDescriptionCaption();
      }
  }
  SelectItem() {
    if (!this.MenuItems[this.CurrentSelection].Enabled)
      return void Ft.PlaySound(this.AUDIO_ERROR, this.AUDIO_LIBRARY);
    const e = this.MenuItems[this.CurrentSelection];
    if (this.MenuItems[this.CurrentSelection] instanceof Ut)
      (e.Checked = !e.Checked),
        Ft.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY),
        this.CheckboxChange.emit(e, e.Checked);
    else if (
      (Ft.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY),
        this.ItemSelect.emit(e, this.CurrentSelection),
        this.Children.has(e.Id))
    ) {
      const t = this.Children.get(e.Id);
      (this.Visible = !1), (t.Visible = !0), this.MenuChange.emit(t, !0);
    }
    e.fireEvent();
  }
  HasCurrentSelectionChildren() {
    const e = this.MenuItems[this.CurrentSelection];
    return !!(
      this.MenuItems[this.CurrentSelection] instanceof At &&
      this.Children.has(e.Id)
    );
  }
  IsMouseInListItemArrows(e, t, _) {
    y.beginTextCommandGetWidth("jamyfafi"),
      y.addTextComponentSubstringPlayerName(e.Text);
    let i = kt.ResolutionMaintainRatio,
      n = (i.Width / i.Height) * 1080;
    const a = 5 + y.endTextCommandGetWidth(!1) * n * 0.35 + 10,
      s = 431 - a;
    return kt.IsMouseInBounds(t, new Ot(a, 38))
      ? 1
      : kt.IsMouseInBounds(new Mt(t.X + a, t.Y), new Ot(s, 38))
        ? 2
        : 0;
  }
  ProcessMouse() {
    if (
      !this.Visible ||
      this._justOpened ||
      0 == this.MenuItems.length ||
      !this.MouseControlsEnabled
    )
      return void this.MenuItems.filter((e) => e.Hovered).forEach(
        (e) => (e.Hovered = !1)
      );
    o(!0);
    let e = this.MenuItems.length - 1,
      t = 0;
    this.MenuItems.length > this._maxItemsOnScreen + 1 && (e = this._maxItem),
      kt.IsMouseInBounds(new Mt(0, 0), new Ot(30, 1080)) &&
        this._mouseEdgeEnabled
        ? (y.setGameplayCamRelativeHeading(
          y.getGameplayCamRelativeHeading() + 5
        ),
          y.setMouseCursorSprite(6))
        : kt.IsMouseInBounds(
          new Mt(kt.ResolutionMaintainRatio.Width - 30, 0),
          new Ot(30, 1080)
        ) && this._mouseEdgeEnabled
          ? (y.setGameplayCamRelativeHeading(
            y.getGameplayCamRelativeHeading() - 5
          ),
            y.setMouseCursorSprite(7))
          : this._mouseEdgeEnabled && y.setMouseCursorSprite(1);
    for (let _ = this._minItem; _ <= e; _++) {
      let e = this._offset.X,
        i = this._offset.Y + 144 - 37 + this._extraOffset + 38 * t,
        n = 431 + this.WidthOffset;
      const a = 38,
        s = this.MenuItems[_];
      if (kt.IsMouseInBounds(new Mt(e, i), new Ot(n, a))) {
        s.Hovered = !0;
        const t = this.IsMouseInListItemArrows(
          this.MenuItems[_],
          new Mt(e, i),
          0
        );
        if (
          (s.Hovered &&
            1 == t &&
            (this.MenuItems[_] instanceof Ht ||
              this.MenuItems[_] instanceof xt ||
              this.MenuItems[_] instanceof zt) &&
            y.setMouseCursorSprite(5),
            y.isControlJustReleased(0, 24) ||
            y.isDisabledControlJustReleased(0, 24))
        )
          if (s.Selected && s.Enabled)
            if (
              (this.MenuItems[_] instanceof Ht ||
                this.MenuItems[_] instanceof xt ||
                this.MenuItems[_] instanceof zt) &&
              this.IsMouseInListItemArrows(this.MenuItems[_], new Mt(e, i), 0) >
              0
            )
              switch (t) {
                case 1:
                  Ft.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY),
                    this.MenuItems[_].fireEvent(),
                    this.ItemSelect.emit(this.MenuItems[_], _);
                  break;
                case 2:
                  let e = this.MenuItems[_];
                  (null == e.Collection ? e.Items.Count : e.Collection.Count) >
                    0 &&
                    (e.Index++,
                      Ft.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY),
                      this.ListChange.emit(e, e.Index));
              }
            else this.SelectItem();
          else
            s.Selected
              ? !s.Enabled &&
              s.Selected &&
              Ft.PlaySound(this.AUDIO_ERROR, this.AUDIO_LIBRARY)
              : ((this.CurrentSelection = _),
                Ft.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY),
                this.IndexChange.emit(
                  this.CurrentSelection,
                  this.MenuItems[this._activeItem % this.MenuItems.length]
                ),
                this.SelectItem(),
                this.UpdateDescriptionCaption(),
                this.UpdateScaleform());
      } else s.Hovered = !1;
      t++;
    }
    const _ =
      144 +
      38 * (this._maxItemsOnScreen + 1) +
      this._offset.Y -
      37 +
      this._extraOffset +
      this._safezoneOffset.Y,
      i = this._safezoneOffset.X + this._offset.X;
    this.MenuItems.length <= this._maxItemsOnScreen + 1 ||
      (kt.IsMouseInBounds(new Mt(i, _), new Ot(431 + this.WidthOffset, 18))
        ? ((this._extraRectangleUp.Color = new Rt(30, 30, 30, 255)),
          (y.isControlJustPressed(0, 24) ||
            y.isDisabledControlJustPressed(0, 24)) &&
          (this.MenuItems.length > this._maxItemsOnScreen + 1
            ? this.GoUpOverflow()
            : this.GoUp()))
        : (this._extraRectangleUp.Color = new Rt(0, 0, 0, 200)),
        kt.IsMouseInBounds(new Mt(i, _ + 18), new Ot(431 + this.WidthOffset, 18))
          ? ((this._extraRectangleDown.Color = new Rt(30, 30, 30, 255)),
            (y.isControlJustPressed(0, 24) ||
              y.isDisabledControlJustPressed(0, 24)) &&
            (this.MenuItems.length > this._maxItemsOnScreen + 1
              ? this.GoDownOverflow()
              : this.GoDown()))
          : (this._extraRectangleDown.Color = new Rt(0, 0, 0, 200)));
  }
  ProcessControl() {
    this.Visible &&
      (this._justOpened
        ? (this._justOpened = !1)
        : (y.isControlJustReleased(0, 177) && this.GoBack(),
          0 != this.MenuItems.length &&
          (y.isControlPressed(0, 172) &&
            this._lastUpDownNavigation + 120 < Date.now()
            ? ((this._lastUpDownNavigation = Date.now()),
              this.MenuItems.length > this._maxItemsOnScreen + 1
                ? this.GoUpOverflow()
                : this.GoUp(),
              this.UpdateScaleform())
            : y.isControlJustReleased(0, 172)
              ? (this._lastUpDownNavigation = 0)
              : y.isControlPressed(0, 173) &&
                this._lastUpDownNavigation + 120 < Date.now()
                ? ((this._lastUpDownNavigation = Date.now()),
                  this.MenuItems.length > this._maxItemsOnScreen + 1
                    ? this.GoDownOverflow()
                    : this.GoDown(),
                  this.UpdateScaleform())
                : y.isControlJustReleased(0, 173)
                  ? (this._lastUpDownNavigation = 0)
                  : y.isControlPressed(0, 174) &&
                    this._lastLeftRightNavigation + 100 < Date.now()
                    ? ((this._lastLeftRightNavigation = Date.now()), this.GoLeft())
                    : y.isControlJustReleased(0, 174)
                      ? (this._lastLeftRightNavigation = 0)
                      : y.isControlPressed(0, 175) &&
                        this._lastLeftRightNavigation + 100 < Date.now()
                        ? ((this._lastLeftRightNavigation = Date.now()), this.GoRight())
                        : y.isControlJustReleased(0, 175)
                          ? (this._lastLeftRightNavigation = 0)
                          : y.isControlJustReleased(0, 201) && this.SelectItem())));
  }
  GoUpOverflow() {
    this.MenuItems.length <= this._maxItemsOnScreen + 1 ||
      (this._activeItem % this.MenuItems.length <= this._minItem
        ? this._activeItem % this.MenuItems.length == 0
          ? ((this._minItem =
            this.MenuItems.length - this._maxItemsOnScreen - 1),
            (this._maxItem = this.MenuItems.length - 1),
            (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
              !1),
            (this._activeItem =
              this._maxMenuItems -
              (this._maxMenuItems % this.MenuItems.length)),
            (this._activeItem += this.MenuItems.length - 1),
            (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
              !0))
          : (this._minItem--,
            this._maxItem--,
            (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
              !1),
            this._activeItem--,
            (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
              !0))
        : ((this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
          !1),
          this._activeItem--,
          (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
            !0)),
        Ft.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY),
        this.IndexChange.emit(
          this.CurrentSelection,
          this.MenuItems[this._activeItem % this.MenuItems.length]
        ),
        this.UpdateDescriptionCaption());
  }
  GoUp() {
    this.MenuItems.length > this._maxItemsOnScreen + 1 ||
      ((this.MenuItems[this._activeItem % this.MenuItems.length].Selected = !1),
        this._activeItem--,
        (this.MenuItems[this._activeItem % this.MenuItems.length].Selected = !0),
        Ft.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY),
        this.IndexChange.emit(
          this.CurrentSelection,
          this.MenuItems[this._activeItem % this.MenuItems.length]
        ),
        this.UpdateDescriptionCaption());
  }
  GoDownOverflow() {
    this.MenuItems.length <= this._maxItemsOnScreen + 1 ||
      (this._activeItem % this.MenuItems.length >= this._maxItem
        ? this._activeItem % this.MenuItems.length == this.MenuItems.length - 1
          ? ((this._minItem = 0),
            (this._maxItem = this._maxItemsOnScreen),
            (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
              !1),
            (this._activeItem =
              this._maxMenuItems -
              (this._maxMenuItems % this.MenuItems.length)),
            (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
              !0))
          : (this._minItem++,
            this._maxItem++,
            (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
              !1),
            this._activeItem++,
            (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
              !0))
        : ((this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
          !1),
          this._activeItem++,
          (this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
            !0)),
        Ft.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY),
        this.IndexChange.emit(
          this.CurrentSelection,
          this.MenuItems[this._activeItem % this.MenuItems.length]
        ),
        this.UpdateDescriptionCaption());
  }
  GoDown() {
    this.MenuItems.length > this._maxItemsOnScreen + 1 ||
      ((this.MenuItems[this._activeItem % this.MenuItems.length].Selected = !1),
        this._activeItem++,
        (this.MenuItems[this._activeItem % this.MenuItems.length].Selected = !0),
        Ft.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY),
        this.IndexChange.emit(
          this.CurrentSelection,
          this.MenuItems[this._activeItem % this.MenuItems.length]
        ),
        this.UpdateDescriptionCaption());
  }
  GoBack() {
    null != this.ParentMenu
      ? ((this.Visible = !1),
        (this.ParentMenu.Visible = !0),
        this.MenuChange.emit(this.ParentMenu, !1),
        this.MenuClose.emit(!1))
      : this.CloseableByUser &&
      ((this.Visible = !1), this.CleanUp(!0), this.MenuClose.emit(!1));
  }
  BindMenuToItem(e, t) {
    this.MenuItems.includes(t) || this.AddItem(t),
      (e.ParentMenu = this),
      (e.ParentItem = t),
      this.Children.set(t.Id, e);
  }
  AddSubMenu(e, t) {
    this.BindMenuToItem(e, t);
  }
  ReleaseMenuFromItem(e) {
    if (!this.Children.has(e.Id)) return !1;
    const t = this.Children.get(e.Id);
    return (
      (t.ParentItem = null),
      (t.ParentMenu = null),
      this.Children.delete(e.Id),
      !0
    );
  }
  UpdateDescriptionCaption() {
    this.MenuItems.length &&
      ((this._descriptionText.Caption =
        this.MenuItems[this._activeItem % this.MenuItems.length].Description),
        (this._descriptionText.Wrap = 400),
        this._recalculateDescriptionNextFrame++);
  }
  CalculateDescription() {
    if (
      !(this.MenuItems.length <= 0) &&
      (this._recalculateDescriptionNextFrame > 0 &&
        this._recalculateDescriptionNextFrame--,
        this.RecalculateDescriptionPosition(),
        this.MenuItems.length > 0 &&
        this._descriptionText.Caption &&
        "" !==
        this.MenuItems[
          this._activeItem % this.MenuItems.length
        ].Description.trim())
    ) {
      const e = kt.GetLineCount(
        this._descriptionText.Caption,
        this._descriptionText.Pos,
        this._descriptionText.Font,
        this._descriptionText.Scale,
        this._descriptionText.Wrap
      );
      (this._descriptionRectangle.Size = new Ot(
        431 + this.WidthOffset,
        25 * e + 15
      )),
        0 === e && this._recalculateDescriptionNextFrame++;
    }
  }
  UpdateScaleform() {
    if (!this.Visible || !this._buttonsEnabled) return;
    this._instructionalButtonsScaleform.callFunction("CLEAR_ALL"),
      this._instructionalButtonsScaleform.callFunction(
        "TOGGLE_MOUSE_BUTTONS",
        0
      ),
      this._instructionalButtonsScaleform.callFunction("CREATE_CONTAINER"),
      this._instructionalButtonsScaleform.callFunction(
        "SET_DATA_SLOT",
        0,
        y.getControlInstructionalButton(2, ft.PhoneSelect, !1),
        this.SelectTextLocalized
      ),
      this._instructionalButtonsScaleform.callFunction(
        "SET_DATA_SLOT",
        1,
        y.getControlInstructionalButton(2, ft.PhoneCancel, !1),
        this.BackTextLocalized
      );
    let e = 2;
    this._instructionalButtons
      .filter(
        (e) =>
          null == e.ItemBind ||
          this.MenuItems[this.CurrentSelection] == e.ItemBind
      )
      .forEach((t) => {
        this._instructionalButtonsScaleform.callFunction(
          "SET_DATA_SLOT",
          e,
          t.GetButtonId(),
          t.Text
        ),
          e++;
      }),
      this._instructionalButtonsScaleform.callFunction(
        "DRAW_INSTRUCTIONAL_BUTTONS",
        -1
      );
  }
  render() {
    if (!this.Visible) return;
    this._buttonsEnabled &&
      (y.drawScaleformMovieFullscreen(
        this._instructionalButtonsScaleform.handle,
        255,
        255,
        255,
        255,
        0
      ),
        y.hideHudComponentThisFrame(6),
        y.hideHudComponentThisFrame(7),
        y.hideHudComponentThisFrame(9)),
      this._justOpened &&
      (null == this._bannerSprite ||
        this._bannerSprite.IsTextureDictionaryLoaded ||
        this._bannerSprite.LoadTextureDictionary(),
        this._background.IsTextureDictionaryLoaded ||
        this._background.LoadTextureDictionary(),
        this._descriptionRectangle.IsTextureDictionaryLoaded ||
        this._descriptionRectangle.LoadTextureDictionary(),
        this._upAndDownSprite.IsTextureDictionaryLoaded ||
        this._upAndDownSprite.LoadTextureDictionary(),
        this._recalculateDescriptionNextFrame ||
        this._recalculateDescriptionNextFrame++),
      this._mainMenu.Draw(),
      this.ProcessMouse(),
      this.ProcessControl(),
      (this._background.Size =
        this.MenuItems.length > this._maxItemsOnScreen + 1
          ? new Ot(431 + this.WidthOffset, 38 * (this._maxItemsOnScreen + 1))
          : new Ot(431 + this.WidthOffset, 38 * this.MenuItems.length)),
      this._background.Draw(),
      this._recalculateDescriptionNextFrame && this.CalculateDescription(),
      this.MenuItems.length > 0 &&
      ((this.MenuItems[this._activeItem % this.MenuItems.length].Selected =
        !0),
        "" !==
        this.MenuItems[
          this._activeItem % this.MenuItems.length
        ].Description.trim() &&
        (this._descriptionBar.Draw(),
          this._descriptionRectangle.Draw(),
          this._descriptionText.Draw()));
    let e = 0;
    if (this.MenuItems.length <= this._maxItemsOnScreen + 1) {
      for (const t of this.MenuItems)
        t.SetVerticalPosition(38 * e - 37 + this._extraOffset), t.Draw(), e++;
      this._counterText &&
        this._counterOverride &&
        ((this._counterText.Caption =
          this._counterPretext + this._counterOverride),
          this._counterText.Draw());
    } else {
      for (let t = this._minItem; t <= this._maxItem; t++) {
        let _ = this.MenuItems[t];
        _.SetVerticalPosition(38 * e - 37 + this._extraOffset), _.Draw(), e++;
      }
      if (
        ((this._extraRectangleUp.Size = new Ot(431 + this.WidthOffset, 18)),
          (this._extraRectangleDown.Size = new Ot(431 + this.WidthOffset, 18)),
          (this._upAndDownSprite.Pos = new Mt(
            190 + this._offset.X + this.WidthOffset / 2,
            147 +
            37 * (this._maxItemsOnScreen + 1) +
            this._offset.Y -
            37 +
            this._extraOffset
          )),
          this._extraRectangleUp.Draw(),
          this._extraRectangleDown.Draw(),
          this._upAndDownSprite.Draw(),
          this._counterText)
      ) {
        if (this._counterOverride)
          this._counterText.Caption =
            this._counterPretext + this._counterOverride;
        else {
          const e = this.CurrentSelection + 1 + " / " + this.MenuItems.length;
          this._counterText.Caption = this._counterPretext + e;
        }
        this._counterText.Draw();
      }
    }
    null != this._bannerRectangle && this._bannerRectangle.Draw(),
      null != this._bannerSprite && this._bannerSprite.Draw();
  }
}
class Kt {
  constructor(e, t) {
    (this.pool = e),
      (this.menuObject = new jt("", t.toUpperCase(), new Mt(500, -87))),
      this.menuObject.SetNoBannerType(),
      this.menuObject.DisableInstructionalButtons(!0),
      this.menuObject.ItemSelect.on((e) => e.Data()),
      this.menuObject.CheckboxChange.on((e, t) => e.Data(t)),
      this.menuObject.DynamicListChange.on((e, t, _) => e.Data(t, _)),
      this.menuObject.ListChange.on((e, t) => e.Data(t)),
      this.pool.add(this.menuObject);
  }
  addItem(e, t = () => { }) {
    (e.Data = t), this.menuObject.AddItem(e);
  }
  addUserInputItem(e, t) {
    (e.RightLabel = "[ ... ]"), this.addItem(e, t);
  }
}
var Xt, Jt, Zt;
!(function (e) {
  (e[(e.ChaletLondon = 0)] = "ChaletLondon"),
    (e[(e.HouseScript = 1)] = "HouseScript"),
    (e[(e.Monospace = 2)] = "Monospace"),
    (e[(e.ChaletComprimeCologne = 4)] = "ChaletComprimeCologne"),
    (e[(e.Pricedown = 7)] = "Pricedown");
})(Xt || (Xt = {})),
  (function (e) {
    (e[(e.Normal = 0)] = "Normal"),
      (e[(e.Repeat = 1)] = "Repeat"),
      (e[(e.StopLastFrame = 2)] = "StopLastFrame"),
      (e[(e.Upperbody = 16)] = "Upperbody"),
      (e[(e.EnablePlayerControl = 32)] = "EnablePlayerControl"),
      (e[(e.Cancelable = 120)] = "Cancelable");
  })(Jt || (Jt = {})),
  (function (e) {
    (e[(e.Free = -2)] = "Free"),
      (e[(e.Driver = -1)] = "Driver"),
      (e[(e.Passenger = 0)] = "Passenger"),
      (e[(e.LeftRear = 1)] = "LeftRear"),
      (e[(e.RightRear = 2)] = "RightRear");
  })(Zt || (Zt = {}));
const qt = new (class {
  constructor() {
    (this.callbackID = 0), (this.callbacks = {});
  }
  init() {
    m("network:sendCallback", (e, t) => this.callbacks[e](t)),
      m("world:setCloudHat", (e) => P(e, 0)),
      m("world:setCloudHatOpacity", (e) => A(e)),
      m("world:setArtificialLightsState", (e) => U(e)),
      m("player:teleportToEntity", (e) =>
        e instanceof h && e.vehicle
          ? E(h.local.scriptID, e.vehicle.scriptID, Zt.Free)
          : v(h.local.scriptID, e.pos.x, e.pos.y, e.pos.z)
      );
  }
  async callback(e, t = []) {
    return await new Promise((_) => {
      p("network:requestCallback", this.callbackID, e, t),
        (this.callbacks[this.callbackID] = _),
        this.callbackID++;
    });
  }
})();
class $t {
  static setInvincible(e, t) {
    H(e.scriptID, !t), x(e.scriptID, t);
  }
}
var Qt;
!(function (e) {
  (e[(e.ExtraSunny = 0)] = "ExtraSunny"),
    (e[(e.Clear = 1)] = "Clear"),
    (e[(e.Clouds = 2)] = "Clouds"),
    (e[(e.Smog = 3)] = "Smog"),
    (e[(e.Foggy = 4)] = "Foggy"),
    (e[(e.Overcast = 5)] = "Overcast"),
    (e[(e.Rain = 6)] = "Rain"),
    (e[(e.Thunder = 7)] = "Thunder"),
    (e[(e.Clearing = 8)] = "Clearing"),
    (e[(e.Neutral = 9)] = "Neutral"),
    (e[(e.Snow = 10)] = "Snow"),
    (e[(e.Blizzard = 11)] = "Blizzard"),
    (e[(e.Snowlight = 12)] = "Snowlight"),
    (e[(e.Xmas = 13)] = "Xmas"),
    (e[(e.Halloween = 14)] = "Halloween");
})(Qt || (Qt = {}));
const e_ = new (class {
  constructor() {
    this.handlers = {};
  }
  register(e, t, _, n = -1, a = () => { }) {
    let s = r(t, _);
    -1 != n &&
      i(() => {
        this.handlers[e] && (this.clear(e), a(), c(e + " timed out"));
      }, n),
      this.add(e, s);
  }
  clear(e) {
    try {
      l(this.handlers[e]), delete this.handlers[e];
    } catch (t) {
      n(t, e);
    }
  }
  add(e, t) {
    if (this.handlers[e]) throw new Error("id already exists");
    this.handlers[e] = t;
  }
})();
class t_ {
  static async loadAnimationDict(e) {
    await new Promise((t) => {
      N(e),
        e_.register(
          "game:loadAnim",
          () => {
            B(e) && (t(), e_.clear("game:loadAnim"));
          },
          50,
          3e3
        );
    });
  }
  static async requestModel(e) {
    await new Promise((t) => {
      this.isModelValid(e) &&
        (F(e),
          e_.register(
            "game:requestModel",
            () => {
              G(e) && (t(), e_.clear("game:requestModel"));
            },
            50,
            3e3
          ));
    });
  }
  static async getUserInput(e = 30) {
    return (
      W(6, "FMMC_KEY_TIP8", "", "", "", "", "", e),
      await new Promise((e) => {
        e_.register(
          "player:awaitInput",
          () => {
            0 != V() && (e(z()), e_.clear("player:awaitInput"));
          },
          0
        );
      })
    );
  }
  static async createProp(e, t, _) {
    G(e) || (await this.requestModel(e)), Y(e, t.x, t.y, t.z, !0, !0, _);
  }
  static isModelValid(e) {
    return !!(j(e) || K(e) || X(e));
  }
  static getDistanceBetweenCoords(e, t) {
    return J(e.x, e.y, e.z, t.x, t.y, t.z, !0);
  }
  static async getPlayerIdentifiers(e) {
    return await qt.callback("game:getPlayerIdentifiers", [e]);
  }
  static async teleportPlayertoEntity(e, t) {
    await qt.callback("game:teleportPlayerToEntity", [e, t]);
  }
  static async setTime(e, t, _) {
    await qt.callback("game:setTime", [e, t, _]);
  }
  static async setWeather(e) {
    await qt.callback("game:setWeather", [e]);
  }
  static async setCloudHat(e) {
    await qt.callback("game:setCloudHat", [e]);
  }
  static async setCloudHatOpacity(e) {
    await qt.callback("game:setCloudHatOpacity", [e]);
  }
  static async setArtificialLightsState(e) {
    await qt.callback("game:setArtificialLightsState", [e]);
  }
  static getCurrentWeather() {
    switch (Z()) {
      case 2544503417:
        return Qt.ExtraSunny;
      case 916995460:
        return Qt.Clear;
      case 821931868:
        return Qt.Clouds;
      case 282916021:
        return Qt.Smog;
      case 2926802500:
        return Qt.Foggy;
      case 3146353965:
        return Qt.Overcast;
      case 1420204096:
        return Qt.Rain;
      case 3061285535:
        return Qt.Thunder;
      case 1840358669:
        return Qt.Clearing;
      case 2764706598:
        return Qt.Neutral;
      case 4021743606:
        return Qt.Snow;
      case 669657108:
        return Qt.Blizzard;
      case 603685163:
        return Qt.Snowlight;
      case 2865350805:
        return Qt.Xmas;
      case 3373937154:
        return Qt.Halloween;
      default:
        return 0;
    }
  }
}
t_.isCreatingVehicle = !1;
class __ extends $t {
  static async respawn() {
    await qt.callback("player:respawn");
  }
  static async heal() {
    await qt.callback("player:heal");
  }
  static async setModel(e) {
    await qt.callback("player:setModel", [e]);
  }
  static async giveWeapon(e, t = !1, _ = 250) {
    await qt.callback("player:giveWeapon", [e, _, t]);
  }
  static async removeWeapon(e) {
    await qt.callback("player:removeWeapon", [e]);
  }
  static async removeAllWeapons() {
    await qt.callback("player:removeAllWeapons");
  }
  static async addWeaponComponent(e, t) {
    await qt.callback("player:addWeaponComponent", [e, t]);
  }
  static async removeWeaponComponent(e, t) {
    await qt.callback("player:removeWeaponComponent", [e, t]);
  }
  static async playAnimation(e, t, _ = Jt.Normal) {
    await t_.loadAnimationDict(e),
      q(h.local.scriptID, e, t, 8, 8, -1, _, 0, !1, !1, !0);
  }
  static teleportTo(e) {
    let t = $(e.x, e.y, 0, void 0, 3, 0)[1];
    v(h.local.scriptID, t.x, t.y, t.z);
  }
}
class i_ {
  constructor(e, t, _, i) {
    (this.text = e), (this.scale = t), (this.font = _), (this.color = i);
  }
}
class n_ extends i_ {
  constructor(e, t, _, i, n, a) {
    super(e, _, i, n), (this.position = t), (this.centre = a);
  }
  drawThisFrame() {
    Q(this.centre),
      ee(0, this.scale),
      te(this.color.r, this.color.g, this.color.b, this.color.a),
      _e(this.font),
      ie(),
      ne("CELL_EMAIL_BCON"),
      this.text.match(/.{1,99}/g).forEach((e) => ae(e)),
      se(this.position[0], this.position[1], 0);
  }
}
class a_ extends i_ {
  constructor(e, t, _, i, n, a) {
    super(e, _, i, n), (this.position = t), (this.attachedTo = a);
  }
  drawThisFrame() {
    this.attachedTo && (this.position = this.attachedTo.pos);
    let e =
      (1 / t_.getDistanceBetweenCoords(oe(), this.position)) *
      20 *
      ((1 / re()) * 100);
    Q(!0),
      ee(0, this.scale * e),
      te(this.color.r, this.color.g, this.color.b, this.color.a),
      _e(this.font),
      ie(),
      le(this.position.x, this.position.y, this.position.z, 0),
      ne("CELL_EMAIL_BCON"),
      this.text.match(/.{1,99}/g).forEach((e) => ae(e)),
      se(0, 0, 0),
      ce();
  }
}
var s_, o_, r_, l_, c_, m_, h_, p_, d_, u_, g_;
!(function (e) {
  (e[(e.Hud = 0)] = "Hud"),
    (e[(e.HudWantedStars = 1)] = "HudWantedStars"),
    (e[(e.HudWeaponIcon = 2)] = "HudWeaponIcon"),
    (e[(e.HudCash = 3)] = "HudCash"),
    (e[(e.HudMpCash = 4)] = "HudMpCash"),
    (e[(e.HudMpMessage = 5)] = "HudMpMessage"),
    (e[(e.HudVehicleName = 6)] = "HudVehicleName"),
    (e[(e.HudAreaName = 7)] = "HudAreaName"),
    (e[(e.HudVehicleClass = 8)] = "HudVehicleClass"),
    (e[(e.HudStreetName = 9)] = "HudStreetName"),
    (e[(e.HudHelpText = 10)] = "HudHelpText"),
    (e[(e.HudFloatingHelpText1 = 11)] = "HudFloatingHelpText1"),
    (e[(e.HudFloatingHelpText2 = 12)] = "HudFloatingHelpText2"),
    (e[(e.HudCashChange = 13)] = "HudCashChange"),
    (e[(e.HudReticle = 14)] = "HudReticle"),
    (e[(e.HudSubtitleText = 15)] = "HudSubtitleText"),
    (e[(e.HudRadioStations = 16)] = "HudRadioStations"),
    (e[(e.HudSavingGame = 17)] = "HudSavingGame"),
    (e[(e.HudGameStream = 18)] = "HudGameStream"),
    (e[(e.HudWeaponWheel = 19)] = "HudWeaponWheel"),
    (e[(e.HudWeaponWheelStats = 20)] = "HudWeaponWheelStats"),
    (e[(e.MaxHudComponents = 21)] = "MaxHudComponents"),
    (e[(e.MaxHudWeapons = 22)] = "MaxHudWeapons"),
    (e[(e.MaxScriptedHudComponents = 141)] = "MaxScriptedHudComponents");
})(s_ || (s_ = {}));
class w_ {
  static getKeys(e) {
    return Object.keys(e).filter((t) => "number" == typeof e[t]);
  }
  static getValues(e) {
    return this.getKeys(e).map((t) => e[t]);
  }
  static getStringKeys(e) {
    return Object.keys(e);
  }
  static getStringValues(e) {
    return Object.values(e);
  }
}
class f_ extends Kt {
  constructor(e, t) {
    super(e.pool, t),
      (this.parentMenu = e),
      (this.menuItem = new At(t)),
      (this.menuItem.RightLabel = "→→→"),
      this.parentMenu.addItem(this.menuItem),
      this.parentMenu.menuObject.AddSubMenu(this.menuObject, this.menuItem);
  }
  remove() {
    this.parentMenu.menuObject.RemoveItem(this.menuItem),
      this.pool.remove(this.menuObject);
  }
}
class y_ extends f_ {
  constructor(e, t) {
    super(e, t),
      this.addUserInputItem(
        (this.customPropItem = new At("Spawn Custom Prop")),
        async () => t_.createProp(d(await t_.getUserInput()), h.local.pos, !0)
      ),
      this.addUserInputItem(
        (this.customTeleportItem = new At("Teleport To Coordinates")),
        async () => {
          let e = +(await t_.getUserInput()),
            t = +(await t_.getUserInput()),
            _ = +(await t_.getUserInput());
          v(
            h.local.scriptID,
            isNaN(e) ? 0 : e,
            isNaN(t) ? 0 : t,
            isNaN(_) ? 0 : _
          );
        }
      ),
      this.addItem(
        (this.teleportToMarkerItem = new Ut(
          "Teleport To Marker",
          !0,
          "This enables the ~b~F7~s~ key to be used as a shortcut to teleport around the map."
        ))
      ),
      this.addItem(
        (this.playerCoordsItem = new Ut("Show Player Coordinates")),
        (e) =>
          e
            ? e_.register(
              "misc:drawPlayerCoord",
              () =>
                new n_(
                  "~y~x~s~ " +
                  h.local.pos.x.toFixed(3) +
                  " ~y~y~s~ " +
                  h.local.pos.y.toFixed(3) +
                  " ~y~z~s~ " +
                  h.local.pos.z.toFixed(3),
                  [0.5, 0.95],
                  0.5,
                  Xt.ChaletComprimeCologne,
                  new u(255, 255, 255, 220),
                  !0
                ).drawThisFrame(),
              0
            )
            : e_.clear("misc:drawPlayerCoord")
      ),
      this.addItem((this.playerSpeedItem = new Ut("Show Player Speed")), (e) =>
        e
          ? e_.register(
            "misc:drawPlayerSpeed",
            () =>
              new n_(
                "~y~m/s~s~ " +
                me(h.local.scriptID).toFixed(3) +
                " ~y~km/h~s~ " +
                (3.6 * me(h.local.scriptID)).toFixed(3) +
                " ~y~mph~s~ " +
                (2.23694 * me(h.local.scriptID)).toFixed(3),
                [0.5, 0.9],
                0.5,
                Xt.ChaletComprimeCologne,
                new u(255, 255, 255, 220),
                !0
              ).drawThisFrame(),
            0
          )
          : e_.clear("misc:drawPlayerSpeed")
      ),
      this.addItem((this.entitiesInfoItem = new Ut("Show Entity Info")), (e) =>
        e
          ? e_.register(
            "misc:drawEntityInfo",
            () => {
              g.all.forEach((e) =>
                this.draw3DText(
                  "SCRIPTID " +
                  e.scriptID +
                  " - ID " +
                  e.id +
                  " - TYPE " +
                  e.type +
                  " - MODEL " +
                  e.model +
                  " - BODY " +
                  he(e.scriptID) +
                  " - ENGINE " +
                  pe(e.scriptID) +
                  " - PETROL TANK " +
                  de(e.scriptID),
                  e
                )
              ),
                h.all.forEach((e) =>
                  this.draw3DText(
                    "SCRIPTID " +
                    e.scriptID +
                    ` - ID ${e.id} - TYPE ${e.type} - MODEL ` +
                    e.model +
                    " - HEALTH " +
                    ue(e.scriptID) +
                    " - ARMOR " +
                    ge(e.scriptID),
                    e
                  )
                );
            },
            0
          )
          : e_.clear("misc:drawEntityInfo")
      ),
      this.addItem((this.raycastInfoItem = new Ut("Show Raycast Info")), (e) =>
        e
          ? e_.register(
            "misc:drawRaycastInfo",
            () => {
              let e = w.getByScriptID(we(h.local.scriptID, 0)[1]);
              if (!e) return;
              let t =
                "~y~SCRIPTID " +
                e.scriptID +
                " - ID " +
                e.id +
                " - TYPE " +
                e.type +
                " - POS (" +
                e.pos.x.toFixed(3) +
                " - " +
                e.pos.y.toFixed(3) +
                ` - ${e.pos.z.toFixed(3)}) - ` +
                (fe(e.scriptID, !1) ? "DEAD" : "ALIVE") +
                " - DISTANCE " +
                t_.getDistanceBetweenCoords(h.local.pos, e.pos).toFixed(3);
              e instanceof g &&
                (t = t.concat(
                  " - " +
                  (ye(e.scriptID, h.local.scriptID) ? "LOCKED" : "UNLOCKED")
                )),
                this.draw3DText(t, e);
            },
            0
          )
          : e_.clear("misc:drawRaycastInfo")
      ),
      this.addItem((this.hideHudItem = new Ut("Hide Game Hud")), (e) => {
        e
          ? e_.register(
            "misc:hideHud",
            () => w_.getValues(s_).forEach((e) => Re(+e)),
            0
          )
          : e_.clear("misc:hideHud"),
          Oe(!e);
      }),
      this.addItem(
        (this.creditsItem = new At(
          "About\\Credits",
          "Trainer made by ~b~Jayreen~s~ #1395 for ~b~alt:V~s~."
        ))
      ),
      (this.creditsItem.LeftBadge = mt.Heart),
      (this.creditsItem.RightLabel = "~h~ 1.0.2"),
      f("keyup", (e) => {
        if (e == ot.F7 && this.teleportToMarkerItem.Checked) {
          let e = Me(8);
          Se(e) && __.teleportTo(be(e));
        }
      });
  }
  draw3DText(e, t) {
    new a_(
      e,
      void 0,
      0.06,
      Xt.ChaletComprimeCologne,
      new u(255, 255, 255, 220),
      t
    ).drawThisFrame();
  }
}
class R_ extends f_ {
  constructor(e, t) {
    super(e, t),
      this.addItem(
        (this.reloadPlayerListItem = new At("Reload Player List")),
        () => this.reloadPlayerList()
      ),
      (this.reloadPlayerListItem.LeftBadge = mt.Alert),
      this.menuObject.MenuOpen.on(() => this.reloadPlayerList());
  }
  reloadPlayerList() {
    this.menuObject.MenuItems.length != h.all.length + 1 &&
      (this.menuObject.MenuItems.splice(1),
        h.all.forEach((e) => new O_(this, `ID ${e.id} - ${e.name}`, e)));
  }
}
class O_ extends f_ {
  constructor(e, t, _) {
    super(e, t),
      this.addItem((this.hwIdHashItem = new At("HWID"))),
      this.addItem((this.hwIdExHashItem = new At("HWIDEX"))),
      this.addItem((this.socialIdItem = new At("SOCIALID"))),
      this.addItem((this.teleportToItem = new At("Teleport To Player")), () =>
        t_.teleportPlayertoEntity(h.local, _)
      ),
      this.addItem((this.teleportHereItem = new At("Teleport Here")), () =>
        t_.teleportPlayertoEntity(_, h.local)
      ),
      this.getIdentifiers(_);
  }
  async getIdentifiers(e) {
    let t = await t_.getPlayerIdentifiers(e);
    (this.hwIdHashItem.RightLabel = t[0]),
      (this.hwIdExHashItem.RightLabel = t[1]),
      (this.socialIdItem.RightLabel = t[2]);
  }
}
class M_ {
  static selectItem(e, t) {
    e.Parent.MenuItems.forEach((e) => this.deselectItem(e)),
      (e.Enabled = !1),
      (e.RightBadge = t);
  }
  static deselectItem(e) {
    (e.Enabled = !0), (e.RightBadge = mt.None);
  }
  static lockMenuItem(e) {
    e && (e.Enabled = !1);
  }
  static unlockMenuItem(e) {
    e && (e.Enabled = !0);
  }
  static lockMenuItems(e) {
    e.MenuItems.forEach((e) => this.lockMenuItem(e));
  }
  static unlockMenuItems(e) {
    e.MenuItems.forEach((e) => this.unlockMenuItem(e));
  }
  static sortMenuItems(e) {
    e.MenuItems.sort((e, t) => e.Text.localeCompare(t.Text));
  }
}
!(function (e) {
  (e[(e.a_c_boar = 3462393972)] = "a_c_boar"),
    (e[(e.a_c_cat_01 = 1462895032)] = "a_c_cat_01"),
    (e[(e.a_c_chickenhawk = 2864127842)] = "a_c_chickenhawk"),
    (e[(e.a_c_chimp = 2825402133)] = "a_c_chimp"),
    (e[(e.a_c_chop = 351016938)] = "a_c_chop"),
    (e[(e.a_c_cormorant = 1457690978)] = "a_c_cormorant"),
    (e[(e.a_c_cow = 4244282910)] = "a_c_cow"),
    (e[(e.a_c_coyote = 1682622302)] = "a_c_coyote"),
    (e[(e.a_c_crow = 402729631)] = "a_c_crow"),
    (e[(e.a_c_deer = 3630914197)] = "a_c_deer"),
    (e[(e.a_c_dolphin = 2344268885)] = "a_c_dolphin"),
    (e[(e.a_c_fish = 802685111)] = "a_c_fish"),
    (e[(e.a_c_hen = 1794449327)] = "a_c_hen"),
    (e[(e.a_c_humpback = 1193010354)] = "a_c_humpback"),
    (e[(e.a_c_husky = 1318032802)] = "a_c_husky"),
    (e[(e.a_c_killerwhale = 2374682809)] = "a_c_killerwhale"),
    (e[(e.a_c_mtlion = 307287994)] = "a_c_mtlion"),
    (e[(e.a_c_pig = 2971380566)] = "a_c_pig"),
    (e[(e.a_c_pigeon = 111281960)] = "a_c_pigeon"),
    (e[(e.a_c_poodle = 1125994524)] = "a_c_poodle"),
    (e[(e.a_c_pug = 1832265812)] = "a_c_pug"),
    (e[(e.a_c_rabbit_01 = 3753204865)] = "a_c_rabbit_01"),
    (e[(e.a_c_rat = 3283429734)] = "a_c_rat"),
    (e[(e.a_c_retriever = 882848737)] = "a_c_retriever"),
    (e[(e.a_c_rhesus = 3268439891)] = "a_c_rhesus"),
    (e[(e.a_c_rottweiler = 2506301981)] = "a_c_rottweiler"),
    (e[(e.a_c_seagull = 3549666813)] = "a_c_seagull"),
    (e[(e.a_c_sharkhammer = 1015224100)] = "a_c_sharkhammer"),
    (e[(e.a_c_sharktiger = 113504370)] = "a_c_sharktiger"),
    (e[(e.a_c_shepherd = 1126154828)] = "a_c_shepherd"),
    (e[(e.a_c_stingray = 2705875277)] = "a_c_stingray"),
    (e[(e.a_c_westy = 2910340283)] = "a_c_westy"),
    (e[(e.a_f_m_beach_01 = 808859815)] = "a_f_m_beach_01"),
    (e[(e.a_f_m_bevhills_01 = 3188223741)] = "a_f_m_bevhills_01"),
    (e[(e.a_f_m_bevhills_02 = 2688103263)] = "a_f_m_bevhills_02"),
    (e[(e.a_f_m_bodybuild_01 = 1004114196)] = "a_f_m_bodybuild_01"),
    (e[(e.a_f_m_business_02 = 532905404)] = "a_f_m_business_02"),
    (e[(e.a_f_m_downtown_01 = 1699403886)] = "a_f_m_downtown_01"),
    (e[(e.a_f_m_eastsa_01 = 2638072698)] = "a_f_m_eastsa_01"),
    (e[(e.a_f_m_eastsa_02 = 1674107025)] = "a_f_m_eastsa_02"),
    (e[(e.a_f_m_fatbla_01 = 4206136267)] = "a_f_m_fatbla_01"),
    (e[(e.a_f_m_fatcult_01 = 3050275044)] = "a_f_m_fatcult_01"),
    (e[(e.a_f_m_fatwhite_01 = 951767867)] = "a_f_m_fatwhite_01"),
    (e[(e.a_f_m_ktown_01 = 1388848350)] = "a_f_m_ktown_01"),
    (e[(e.a_f_m_ktown_02 = 1090617681)] = "a_f_m_ktown_02"),
    (e[(e.a_f_m_prolhost_01 = 379310561)] = "a_f_m_prolhost_01"),
    (e[(e.a_f_m_salton_01 = 3725461865)] = "a_f_m_salton_01"),
    (e[(e.a_f_m_skidrow_01 = 2962707003)] = "a_f_m_skidrow_01"),
    (e[(e.a_f_m_soucent_01 = 1951946145)] = "a_f_m_soucent_01"),
    (e[(e.a_f_m_soucent_02 = 4079145784)] = "a_f_m_soucent_02"),
    (e[(e.a_f_m_soucentmc_01 = 3454621138)] = "a_f_m_soucentmc_01"),
    (e[(e.a_f_m_tourist_01 = 1347814329)] = "a_f_m_tourist_01"),
    (e[(e.a_f_m_tramp_01 = 1224306523)] = "a_f_m_tramp_01"),
    (e[(e.a_f_m_trampbeac_01 = 2359345766)] = "a_f_m_trampbeac_01"),
    (e[(e.a_f_o_genstreet_01 = 1640504453)] = "a_f_o_genstreet_01"),
    (e[(e.a_f_o_indian_01 = 3134700416)] = "a_f_o_indian_01"),
    (e[(e.a_f_o_ktown_01 = 1204772502)] = "a_f_o_ktown_01"),
    (e[(e.a_f_o_salton_01 = 3439295882)] = "a_f_o_salton_01"),
    (e[(e.a_f_o_soucent_01 = 1039800368)] = "a_f_o_soucent_01"),
    (e[(e.a_f_o_soucent_02 = 2775443222)] = "a_f_o_soucent_02"),
    (e[(e.a_f_y_beach_01 = 3349113128)] = "a_f_y_beach_01"),
    (e[(e.a_f_y_bevhills_01 = 1146800212)] = "a_f_y_bevhills_01"),
    (e[(e.a_f_y_bevhills_02 = 1546450936)] = "a_f_y_bevhills_02"),
    (e[(e.a_f_y_bevhills_03 = 549978415)] = "a_f_y_bevhills_03"),
    (e[(e.a_f_y_bevhills_04 = 920595805)] = "a_f_y_bevhills_04"),
    (e[(e.a_f_y_business_01 = 664399832)] = "a_f_y_business_01"),
    (e[(e.a_f_y_business_02 = 826475330)] = "a_f_y_business_02"),
    (e[(e.a_f_y_business_03 = 2928082356)] = "a_f_y_business_03"),
    (e[(e.a_f_y_business_04 = 3083210802)] = "a_f_y_business_04"),
    (e[(e.a_f_y_eastsa_01 = 4121954205)] = "a_f_y_eastsa_01"),
    (e[(e.a_f_y_eastsa_02 = 70821038)] = "a_f_y_eastsa_02"),
    (e[(e.a_f_y_eastsa_03 = 1371553700)] = "a_f_y_eastsa_03"),
    (e[(e.a_f_y_epsilon_01 = 1755064960)] = "a_f_y_epsilon_01"),
    (e[(e.a_f_y_femaleagent = 1348537411)] = "a_f_y_femaleagent"),
    (e[(e.a_f_y_fitness_01 = 1165780219)] = "a_f_y_fitness_01"),
    (e[(e.a_f_y_fitness_02 = 331645324)] = "a_f_y_fitness_02"),
    (e[(e.a_f_y_genhot_01 = 793439294)] = "a_f_y_genhot_01"),
    (e[(e.a_f_y_golfer_01 = 2111372120)] = "a_f_y_golfer_01"),
    (e[(e.a_f_y_hiker_01 = 813893651)] = "a_f_y_hiker_01"),
    (e[(e.a_f_y_hippie_01 = 343259175)] = "a_f_y_hippie_01"),
    (e[(e.a_f_y_hipster_01 = 2185745201)] = "a_f_y_hipster_01"),
    (e[(e.a_f_y_hipster_02 = 2549481101)] = "a_f_y_hipster_02"),
    (e[(e.a_f_y_hipster_03 = 2780469782)] = "a_f_y_hipster_03"),
    (e[(e.a_f_y_hipster_04 = 429425116)] = "a_f_y_hipster_04"),
    (e[(e.a_f_y_indian_01 = 153984193)] = "a_f_y_indian_01"),
    (e[(e.a_f_y_juggalo_01 = 3675473203)] = "a_f_y_juggalo_01"),
    (e[(e.a_f_y_runner_01 = 3343476521)] = "a_f_y_runner_01"),
    (e[(e.a_f_y_rurmeth_01 = 1064866854)] = "a_f_y_rurmeth_01"),
    (e[(e.a_f_y_scdressy_01 = 3680420864)] = "a_f_y_scdressy_01"),
    (e[(e.a_f_y_skater_01 = 1767892582)] = "a_f_y_skater_01"),
    (e[(e.a_f_y_soucent_01 = 744758650)] = "a_f_y_soucent_01"),
    (e[(e.a_f_y_soucent_02 = 1519319503)] = "a_f_y_soucent_02"),
    (e[(e.a_f_y_soucent_03 = 2276611093)] = "a_f_y_soucent_03"),
    (e[(e.a_f_y_tennis_01 = 1426880966)] = "a_f_y_tennis_01"),
    (e[(e.a_f_y_topless_01 = 2633130371)] = "a_f_y_topless_01"),
    (e[(e.a_f_y_tourist_01 = 1446741360)] = "a_f_y_tourist_01"),
    (e[(e.a_f_y_tourist_02 = 2435054400)] = "a_f_y_tourist_02"),
    (e[(e.a_f_y_vinewood_01 = 435429221)] = "a_f_y_vinewood_01"),
    (e[(e.a_f_y_vinewood_02 = 3669401835)] = "a_f_y_vinewood_02"),
    (e[(e.a_f_y_vinewood_03 = 933092024)] = "a_f_y_vinewood_03"),
    (e[(e.a_f_y_vinewood_04 = 4209271110)] = "a_f_y_vinewood_04"),
    (e[(e.a_f_y_yoga_01 = 3290105390)] = "a_f_y_yoga_01"),
    (e[(e.a_m_m_acult_01 = 1413662315)] = "a_m_m_acult_01"),
    (e[(e.a_m_m_afriamer_01 = 3513928062)] = "a_m_m_afriamer_01"),
    (e[(e.a_m_m_beach_01 = 1077785853)] = "a_m_m_beach_01"),
    (e[(e.a_m_m_beach_02 = 2021631368)] = "a_m_m_beach_02"),
    (e[(e.a_m_m_bevhills_01 = 1423699487)] = "a_m_m_bevhills_01"),
    (e[(e.a_m_m_bevhills_02 = 1068876755)] = "a_m_m_bevhills_02"),
    (e[(e.a_m_m_business_01 = 2120901815)] = "a_m_m_business_01"),
    (e[(e.a_m_m_eastsa_01 = 4188468543)] = "a_m_m_eastsa_01"),
    (e[(e.a_m_m_eastsa_02 = 131961260)] = "a_m_m_eastsa_02"),
    (e[(e.a_m_m_farmer_01 = 2488675799)] = "a_m_m_farmer_01"),
    (e[(e.a_m_m_fatlatin_01 = 1641152947)] = "a_m_m_fatlatin_01"),
    (e[(e.a_m_m_genfat_01 = 115168927)] = "a_m_m_genfat_01"),
    (e[(e.a_m_m_genfat_02 = 330231874)] = "a_m_m_genfat_02"),
    (e[(e.a_m_m_golfer_01 = 2850754114)] = "a_m_m_golfer_01"),
    (e[(e.a_m_m_hasjew_01 = 1809430156)] = "a_m_m_hasjew_01"),
    (e[(e.a_m_m_hillbilly_01 = 1822107721)] = "a_m_m_hillbilly_01"),
    (e[(e.a_m_m_hillbilly_02 = 2064532783)] = "a_m_m_hillbilly_02"),
    (e[(e.a_m_m_indian_01 = 3721046572)] = "a_m_m_indian_01"),
    (e[(e.a_m_m_ktown_01 = 3512565361)] = "a_m_m_ktown_01"),
    (e[(e.a_m_m_malibu_01 = 803106487)] = "a_m_m_malibu_01"),
    (e[(e.a_m_m_mexcntry_01 = 3716251309)] = "a_m_m_mexcntry_01"),
    (e[(e.a_m_m_mexlabor_01 = 2992445106)] = "a_m_m_mexlabor_01"),
    (e[(e.a_m_m_og_boss_01 = 1746653202)] = "a_m_m_og_boss_01"),
    (e[(e.a_m_m_paparazzi_01 = 3972697109)] = "a_m_m_paparazzi_01"),
    (e[(e.a_m_m_polynesian_01 = 2849617566)] = "a_m_m_polynesian_01"),
    (e[(e.a_m_m_prolhost_01 = 2534589327)] = "a_m_m_prolhost_01"),
    (e[(e.a_m_m_rurmeth_01 = 1001210244)] = "a_m_m_rurmeth_01"),
    (e[(e.a_m_m_salton_01 = 1328415626)] = "a_m_m_salton_01"),
    (e[(e.a_m_m_salton_02 = 1626646295)] = "a_m_m_salton_02"),
    (e[(e.a_m_m_salton_03 = 2995538501)] = "a_m_m_salton_03"),
    (e[(e.a_m_m_salton_04 = 2521108919)] = "a_m_m_salton_04"),
    (e[(e.a_m_m_skater_01 = 3654768780)] = "a_m_m_skater_01"),
    (e[(e.a_m_m_skidrow_01 = 32417469)] = "a_m_m_skidrow_01"),
    (e[(e.a_m_m_socenlat_01 = 193817059)] = "a_m_m_socenlat_01"),
    (e[(e.a_m_m_soucent_01 = 1750583735)] = "a_m_m_soucent_01"),
    (e[(e.a_m_m_soucent_02 = 2674735073)] = "a_m_m_soucent_02"),
    (e[(e.a_m_m_soucent_03 = 2346291386)] = "a_m_m_soucent_03"),
    (e[(e.a_m_m_soucent_04 = 3271294718)] = "a_m_m_soucent_04"),
    (e[(e.a_m_m_stlat_02 = 3265820418)] = "a_m_m_stlat_02"),
    (e[(e.a_m_m_tennis_01 = 1416254276)] = "a_m_m_tennis_01"),
    (e[(e.a_m_m_tourist_01 = 3365863812)] = "a_m_m_tourist_01"),
    (e[(e.a_m_m_tramp_01 = 516505552)] = "a_m_m_tramp_01"),
    (e[(e.a_m_m_trampbeac_01 = 1404403376)] = "a_m_m_trampbeac_01"),
    (e[(e.a_m_m_tranvest_01 = 3773208948)] = "a_m_m_tranvest_01"),
    (e[(e.a_m_m_tranvest_02 = 4144940484)] = "a_m_m_tranvest_02"),
    (e[(e.a_m_o_acult_01 = 1430544400)] = "a_m_o_acult_01"),
    (e[(e.a_m_o_acult_02 = 1268862154)] = "a_m_o_acult_02"),
    (e[(e.a_m_o_beach_01 = 2217202584)] = "a_m_o_beach_01"),
    (e[(e.a_m_o_genstreet_01 = 2908022696)] = "a_m_o_genstreet_01"),
    (e[(e.a_m_o_ktown_01 = 355916122)] = "a_m_o_ktown_01"),
    (e[(e.a_m_o_salton_01 = 539004493)] = "a_m_o_salton_01"),
    (e[(e.a_m_o_soucent_01 = 718836251)] = "a_m_o_soucent_01"),
    (e[(e.a_m_o_soucent_02 = 1082572151)] = "a_m_o_soucent_02"),
    (e[(e.a_m_o_soucent_03 = 238213328)] = "a_m_o_soucent_03"),
    (e[(e.a_m_o_tramp_01 = 390939205)] = "a_m_o_tramp_01"),
    (e[(e.a_m_y_acult_01 = 3043264555)] = "a_m_y_acult_01"),
    (e[(e.a_m_y_acult_02 = 2162532142)] = "a_m_y_acult_02"),
    (e[(e.a_m_y_beach_01 = 3523131524)] = "a_m_y_beach_01"),
    (e[(e.a_m_y_beach_02 = 600300561)] = "a_m_y_beach_02"),
    (e[(e.a_m_y_beach_03 = 3886638041)] = "a_m_y_beach_03"),
    (e[(e.a_m_y_beachvesp_01 = 2114544056)] = "a_m_y_beachvesp_01"),
    (e[(e.a_m_y_beachvesp_02 = 3394697810)] = "a_m_y_beachvesp_02"),
    (e[(e.a_m_y_bevhills_01 = 1982350912)] = "a_m_y_bevhills_01"),
    (e[(e.a_m_y_bevhills_02 = 1720428295)] = "a_m_y_bevhills_02"),
    (e[(e.a_m_y_breakdance_01 = 933205398)] = "a_m_y_breakdance_01"),
    (e[(e.a_m_y_busicas_01 = 2597531625)] = "a_m_y_busicas_01"),
    (e[(e.a_m_y_business_01 = 3382649284)] = "a_m_y_business_01"),
    (e[(e.a_m_y_business_02 = 3014915558)] = "a_m_y_business_02"),
    (e[(e.a_m_y_business_03 = 2705543429)] = "a_m_y_business_03"),
    (e[(e.a_m_y_cyclist_01 = 4257633223)] = "a_m_y_cyclist_01"),
    (e[(e.a_m_y_dhill_01 = 4282288299)] = "a_m_y_dhill_01"),
    (e[(e.a_m_y_downtown_01 = 766375082)] = "a_m_y_downtown_01"),
    (e[(e.a_m_y_eastsa_01 = 2756120947)] = "a_m_y_eastsa_01"),
    (e[(e.a_m_y_eastsa_02 = 377976310)] = "a_m_y_eastsa_02"),
    (e[(e.a_m_y_epsilon_01 = 2010389054)] = "a_m_y_epsilon_01"),
    (e[(e.a_m_y_epsilon_02 = 2860711835)] = "a_m_y_epsilon_02"),
    (e[(e.a_m_y_gay_01 = 3519864886)] = "a_m_y_gay_01"),
    (e[(e.a_m_y_gay_02 = 2775713665)] = "a_m_y_gay_02"),
    (e[(e.a_m_y_genstreet_01 = 2557996913)] = "a_m_y_genstreet_01"),
    (e[(e.a_m_y_genstreet_02 = 891398354)] = "a_m_y_genstreet_02"),
    (e[(e.a_m_y_golfer_01 = 3609190705)] = "a_m_y_golfer_01"),
    (e[(e.a_m_y_hasjew_01 = 3782053633)] = "a_m_y_hasjew_01"),
    (e[(e.a_m_y_hiker_01 = 1358380044)] = "a_m_y_hiker_01"),
    (e[(e.a_m_y_hippy_01 = 2097407511)] = "a_m_y_hippy_01"),
    (e[(e.a_m_y_hipster_01 = 587703123)] = "a_m_y_hipster_01"),
    (e[(e.a_m_y_hipster_02 = 349505262)] = "a_m_y_hipster_02"),
    (e[(e.a_m_y_hipster_03 = 1312913862)] = "a_m_y_hipster_03"),
    (e[(e.a_m_y_indian_01 = 706935758)] = "a_m_y_indian_01"),
    (e[(e.a_m_y_jetski_01 = 767028979)] = "a_m_y_jetski_01"),
    (e[(e.a_m_y_juggalo_01 = 2445950508)] = "a_m_y_juggalo_01"),
    (e[(e.a_m_y_ktown_01 = 452351020)] = "a_m_y_ktown_01"),
    (e[(e.a_m_y_ktown_02 = 696250687)] = "a_m_y_ktown_02"),
    (e[(e.a_m_y_latino_01 = 321657486)] = "a_m_y_latino_01"),
    (e[(e.a_m_y_methhead_01 = 1768677545)] = "a_m_y_methhead_01"),
    (e[(e.a_m_y_mexthug_01 = 810804565)] = "a_m_y_mexthug_01"),
    (e[(e.a_m_y_motox_01 = 1694362237)] = "a_m_y_motox_01"),
    (e[(e.a_m_y_motox_02 = 2007797722)] = "a_m_y_motox_02"),
    (e[(e.a_m_y_musclbeac_01 = 1264920838)] = "a_m_y_musclbeac_01"),
    (e[(e.a_m_y_musclbeac_02 = 3374523516)] = "a_m_y_musclbeac_02"),
    (e[(e.a_m_y_polynesian_01 = 2206530719)] = "a_m_y_polynesian_01"),
    (e[(e.a_m_y_roadcyc_01 = 4116817094)] = "a_m_y_roadcyc_01"),
    (e[(e.a_m_y_runner_01 = 623927022)] = "a_m_y_runner_01"),
    (e[(e.a_m_y_runner_02 = 2218630415)] = "a_m_y_runner_02"),
    (e[(e.a_m_y_salton_01 = 3613420592)] = "a_m_y_salton_01"),
    (e[(e.a_m_y_skater_01 = 3250873975)] = "a_m_y_skater_01"),
    (e[(e.a_m_y_skater_02 = 2952446692)] = "a_m_y_skater_02"),
    (e[(e.a_m_y_soucent_01 = 3877027275)] = "a_m_y_soucent_01"),
    (e[(e.a_m_y_soucent_02 = 2896414922)] = "a_m_y_soucent_02"),
    (e[(e.a_m_y_soucent_03 = 3287349092)] = "a_m_y_soucent_03"),
    (e[(e.a_m_y_soucent_04 = 2318861297)] = "a_m_y_soucent_04"),
    (e[(e.a_m_y_stbla_01 = 3482496489)] = "a_m_y_stbla_01"),
    (e[(e.a_m_y_stbla_02 = 2563194959)] = "a_m_y_stbla_02"),
    (e[(e.a_m_y_stlat_01 = 2255803900)] = "a_m_y_stlat_01"),
    (e[(e.a_m_y_stwhi_01 = 605602864)] = "a_m_y_stwhi_01"),
    (e[(e.a_m_y_stwhi_02 = 919005580)] = "a_m_y_stwhi_02"),
    (e[(e.a_m_y_sunbathe_01 = 3072929548)] = "a_m_y_sunbathe_01"),
    (e[(e.a_m_y_surfer_01 = 3938633710)] = "a_m_y_surfer_01"),
    (e[(e.a_m_y_vindouche_01 = 3247667175)] = "a_m_y_vindouche_01"),
    (e[(e.a_m_y_vinewood_01 = 1264851357)] = "a_m_y_vinewood_01"),
    (e[(e.a_m_y_vinewood_02 = 1561705728)] = "a_m_y_vinewood_02"),
    (e[(e.a_m_y_vinewood_03 = 534725268)] = "a_m_y_vinewood_03"),
    (e[(e.a_m_y_vinewood_04 = 835315305)] = "a_m_y_vinewood_04"),
    (e[(e.a_m_y_yoga_01 = 2869588309)] = "a_m_y_yoga_01"),
    (e[(e.cs_amandatownley = 2515474659)] = "cs_amandatownley"),
    (e[(e.cs_andreas = 3881194279)] = "cs_andreas"),
    (e[(e.cs_ashley = 650367097)] = "cs_ashley"),
    (e[(e.cs_bankman = 2539657518)] = "cs_bankman"),
    (e[(e.cs_barry = 1767447799)] = "cs_barry"),
    (e[(e.cs_beverly = 3027157846)] = "cs_beverly"),
    (e[(e.cs_brad = 4024807398)] = "cs_brad"),
    (e[(e.cs_bradcadaver = 1915268960)] = "cs_bradcadaver"),
    (e[(e.cs_carbuyer = 2362341647)] = "cs_carbuyer"),
    (e[(e.cs_casey = 3935738944)] = "cs_casey"),
    (e[(e.cs_chengsr = 819699067)] = "cs_chengsr"),
    (e[(e.cs_chrisformage = 3253960934)] = "cs_chrisformage"),
    (e[(e.cs_clay = 3687553076)] = "cs_clay"),
    (e[(e.cs_dale = 216536661)] = "cs_dale"),
    (e[(e.cs_davenorton = 2240226444)] = "cs_davenorton"),
    (e[(e.cs_debra = 3973074921)] = "cs_debra"),
    (e[(e.cs_denise = 1870669624)] = "cs_denise"),
    (e[(e.cs_devin = 788622594)] = "cs_devin"),
    (e[(e.cs_dom = 1198698306)] = "cs_dom"),
    (e[(e.cs_dreyfuss = 1012965715)] = "cs_dreyfuss"),
    (e[(e.cs_drfriedlander = 2745392175)] = "cs_drfriedlander"),
    (e[(e.cs_fabien = 1191403201)] = "cs_fabien"),
    (e[(e.cs_fbisuit_01 = 1482427218)] = "cs_fbisuit_01"),
    (e[(e.cs_floyd = 103106535)] = "cs_floyd"),
    (e[(e.cs_guadalope = 261428209)] = "cs_guadalope"),
    (e[(e.cs_gurk = 3272931111)] = "cs_gurk"),
    (e[(e.cs_hunter = 1531218220)] = "cs_hunter"),
    (e[(e.cs_janet = 808778210)] = "cs_janet"),
    (e[(e.cs_jewelass = 1145088004)] = "cs_jewelass"),
    (e[(e.cs_jimmyboston = 60192701)] = "cs_jimmyboston"),
    (e[(e.cs_jimmydisanto = 3100414644)] = "cs_jimmydisanto"),
    (e[(e.cs_joeminuteman = 4036845097)] = "cs_joeminuteman"),
    (e[(e.cs_johnnyklebitz = 4203395201)] = "cs_johnnyklebitz"),
    (e[(e.cs_josef = 1167549130)] = "cs_josef"),
    (e[(e.cs_josh = 1158606749)] = "cs_josh"),
    (e[(e.cs_karen_daniels = 1269774364)] = "cs_karen_daniels"),
    (e[(e.cs_lamardavis = 1162230285)] = "cs_lamardavis"),
    (e[(e.cs_lazlow = 949295643)] = "cs_lazlow"),
    (e[(e.cs_lestercrest = 3046438339)] = "cs_lestercrest"),
    (e[(e.cs_lifeinvad_01 = 1918178165)] = "cs_lifeinvad_01"),
    (e[(e.cs_magenta = 1477887514)] = "cs_magenta"),
    (e[(e.cs_manuel = 4222842058)] = "cs_manuel"),
    (e[(e.cs_marnie = 1464721716)] = "cs_marnie"),
    (e[(e.cs_martinmadrazo = 1129928304)] = "cs_martinmadrazo"),
    (e[(e.cs_maryann = 161007533)] = "cs_maryann"),
    (e[(e.cs_michelle = 1890499016)] = "cs_michelle"),
    (e[(e.cs_milton = 3077190415)] = "cs_milton"),
    (e[(e.cs_molly = 1167167044)] = "cs_molly"),
    (e[(e.cs_movpremf_01 = 1270514905)] = "cs_movpremf_01"),
    (e[(e.cs_movpremmale = 2372398717)] = "cs_movpremmale"),
    (e[(e.cs_mrk = 3284966005)] = "cs_mrk"),
    (e[(e.cs_mrs_thornhill = 1334976110)] = "cs_mrs_thornhill"),
    (e[(e.cs_mrsphillips = 3422397391)] = "cs_mrsphillips"),
    (e[(e.cs_natalia = 1325314544)] = "cs_natalia"),
    (e[(e.cs_nervousron = 2023152276)] = "cs_nervousron"),
    (e[(e.cs_nigel = 3779566603)] = "cs_nigel"),
    (e[(e.cs_old_man1a = 518814684)] = "cs_old_man1a"),
    (e[(e.cs_old_man2 = 2566514544)] = "cs_old_man2"),
    (e[(e.cs_omega = 2339419141)] = "cs_omega"),
    (e[(e.cs_orleans = 2905870170)] = "cs_orleans"),
    (e[(e.cs_paper = 1798879480)] = "cs_paper"),
    (e[(e.cs_patricia = 3750433537)] = "cs_patricia"),
    (e[(e.cs_priest = 1299047806)] = "cs_priest"),
    (e[(e.cs_prolsec_02 = 512955554)] = "cs_prolsec_02"),
    (e[(e.cs_russiandrunk = 1179785778)] = "cs_russiandrunk"),
    (e[(e.cs_siemonyetarian = 3230888450)] = "cs_siemonyetarian"),
    (e[(e.cs_solomon = 4140949582)] = "cs_solomon"),
    (e[(e.cs_stevehains = 2766184958)] = "cs_stevehains"),
    (e[(e.cs_stretch = 2302502917)] = "cs_stretch"),
    (e[(e.cs_tanisha = 1123963760)] = "cs_tanisha"),
    (e[(e.cs_taocheng = 2288257085)] = "cs_taocheng"),
    (e[(e.cs_taostranslator = 1397974313)] = "cs_taostranslator"),
    (e[(e.cs_tenniscoach = 1545995274)] = "cs_tenniscoach"),
    (e[(e.cs_terry = 978452933)] = "cs_terry"),
    (e[(e.cs_tom = 1776856003)] = "cs_tom"),
    (e[(e.cs_tomepsilon = 2349847778)] = "cs_tomepsilon"),
    (e[(e.cs_tracydisanto = 101298480)] = "cs_tracydisanto"),
    (e[(e.cs_wade = 3529955798)] = "cs_wade"),
    (e[(e.cs_zimbor = 3937184496)] = "cs_zimbor"),
    (e[(e.csb_abigail = 2306246977)] = "csb_abigail"),
    (e[(e.csb_agent = 3614493108)] = "csb_agent"),
    (e[(e.csb_anita = 117698822)] = "csb_anita"),
    (e[(e.csb_anton = 2781317046)] = "csb_anton"),
    (e[(e.csb_ballasog = 2884567044)] = "csb_ballasog"),
    (e[(e.csb_bride = 2193587873)] = "csb_bride"),
    (e[(e.csb_burgerdrug = 2363277399)] = "csb_burgerdrug"),
    (e[(e.csb_car3guy1 = 71501447)] = "csb_car3guy1"),
    (e[(e.csb_car3guy2 = 327394568)] = "csb_car3guy2"),
    (e[(e.csb_chef = 2739391114)] = "csb_chef"),
    (e[(e.csb_chef2 = 2925257274)] = "csb_chef2"),
    (e[(e.csb_chin_goon = 2831296918)] = "csb_chin_goon"),
    (e[(e.csb_cletus = 3404326357)] = "csb_cletus"),
    (e[(e.csb_cop = 2595446627)] = "csb_cop"),
    (e[(e.csb_customer = 2756669323)] = "csb_customer"),
    (e[(e.csb_denise_friend = 3045926185)] = "csb_denise_friend"),
    (e[(e.csb_fos_rep = 466359675)] = "csb_fos_rep"),
    (e[(e.csb_g = 2727244247)] = "csb_g"),
    (e[(e.csb_groom = 2058033618)] = "csb_groom"),
    (e[(e.csb_grove_str_dlr = 3898166818)] = "csb_grove_str_dlr"),
    (e[(e.csb_hao = 3969814300)] = "csb_hao"),
    (e[(e.csb_hugh = 1863555924)] = "csb_hugh"),
    (e[(e.csb_imran = 3812756443)] = "csb_imran"),
    (e[(e.csb_jackhowitzer = 1153203121)] = "csb_jackhowitzer"),
    (e[(e.csb_janitor = 3254803008)] = "csb_janitor"),
    (e[(e.csb_maude = 3166991819)] = "csb_maude"),
    (e[(e.csb_money = 2560490906)] = "csb_money"),
    (e[(e.csb_mp_agent14 = 1841036427)] = "csb_mp_agent14"),
    (e[(e.csb_mweather = 1631478380)] = "csb_mweather"),
    (e[(e.csb_ortega = 3235579087)] = "csb_ortega"),
    (e[(e.csb_oscar = 4095687067)] = "csb_oscar"),
    (e[(e.csb_paige = 1528799427)] = "csb_paige"),
    (e[(e.csb_popov = 1635617250)] = "csb_popov"),
    (e[(e.csb_porndudes = 793443893)] = "csb_porndudes"),
    (e[(e.csb_prologuedriver = 4027271643)] = "csb_prologuedriver"),
    (e[(e.csb_prolsec = 2141384740)] = "csb_prolsec"),
    (e[(e.csb_ramp_gang = 3263172030)] = "csb_ramp_gang"),
    (e[(e.csb_ramp_hic = 2240582840)] = "csb_ramp_hic"),
    (e[(e.csb_ramp_hipster = 569740212)] = "csb_ramp_hipster"),
    (e[(e.csb_ramp_marine = 1634506681)] = "csb_ramp_marine"),
    (e[(e.csb_ramp_mex = 4132362192)] = "csb_ramp_mex"),
    (e[(e.csb_rashcosvki = 411081129)] = "csb_rashcosvki"),
    (e[(e.csb_reporter = 776079908)] = "csb_reporter"),
    (e[(e.csb_roccopelosi = 2858686092)] = "csb_roccopelosi"),
    (e[(e.csb_screen_writer = 2346790124)] = "csb_screen_writer"),
    (e[(e.csb_stripper_01 = 2934601397)] = "csb_stripper_01"),
    (e[(e.csb_stripper_02 = 2168724337)] = "csb_stripper_02"),
    (e[(e.csb_tonya = 1665391897)] = "csb_tonya"),
    (e[(e.csb_trafficwarden = 3727243251)] = "csb_trafficwarden"),
    (e[(e.csb_undercover = 4017642090)] = "csb_undercover"),
    (e[(e.csb_vagspeak = 1224690857)] = "csb_vagspeak"),
    (e[(e.g_f_importexport_01 = 2225189146)] = "g_f_importexport_01"),
    (e[(e.g_f_y_ballas_01 = 361513884)] = "g_f_y_ballas_01"),
    (e[(e.g_f_y_families_01 = 1309468115)] = "g_f_y_families_01"),
    (e[(e.g_f_y_lost_01 = 4250220510)] = "g_f_y_lost_01"),
    (e[(e.g_f_y_vagos_01 = 1520708641)] = "g_f_y_vagos_01"),
    (e[(e.g_m_importexport_01 = 3164785898)] = "g_m_importexport_01"),
    (e[(e.g_m_m_armboss_01 = 4058522530)] = "g_m_m_armboss_01"),
    (e[(e.g_m_m_armgoon_01 = 4255728232)] = "g_m_m_armgoon_01"),
    (e[(e.g_m_m_armlieut_01 = 3882958867)] = "g_m_m_armlieut_01"),
    (e[(e.g_m_m_chemwork_01 = 4128603535)] = "g_m_m_chemwork_01"),
    (e[(e.g_m_m_chiboss_01 = 3118269184)] = "g_m_m_chiboss_01"),
    (e[(e.g_m_m_chicold_01 = 275618457)] = "g_m_m_chicold_01"),
    (e[(e.g_m_m_chigoon_01 = 2119136831)] = "g_m_m_chigoon_01"),
    (e[(e.g_m_m_chigoon_02 = 4285659174)] = "g_m_m_chigoon_02"),
    (e[(e.g_m_m_korboss_01 = 891945583)] = "g_m_m_korboss_01"),
    (e[(e.g_m_m_mexboss_01 = 1466037421)] = "g_m_m_mexboss_01"),
    (e[(e.g_m_m_mexboss_02 = 1226102803)] = "g_m_m_mexboss_02"),
    (e[(e.g_m_y_armgoon_02 = 3310258058)] = "g_m_y_armgoon_02"),
    (e[(e.g_m_y_azteca_01 = 1752208920)] = "g_m_y_azteca_01"),
    (e[(e.g_m_y_ballaeast_01 = 4096714883)] = "g_m_y_ballaeast_01"),
    (e[(e.g_m_y_ballaorig_01 = 588969535)] = "g_m_y_ballaorig_01"),
    (e[(e.g_m_y_ballasout_01 = 599294057)] = "g_m_y_ballasout_01"),
    (e[(e.g_m_y_famca_01 = 3896218551)] = "g_m_y_famca_01"),
    (e[(e.g_m_y_famdnf_01 = 3681718840)] = "g_m_y_famdnf_01"),
    (e[(e.g_m_y_famfor_01 = 2217749257)] = "g_m_y_famfor_01"),
    (e[(e.g_m_y_korean_01 = 611648169)] = "g_m_y_korean_01"),
    (e[(e.g_m_y_korean_02 = 2414729609)] = "g_m_y_korean_02"),
    (e[(e.g_m_y_korlieut_01 = 2093736314)] = "g_m_y_korlieut_01"),
    (e[(e.g_m_y_lost_01 = 1330042375)] = "g_m_y_lost_01"),
    (e[(e.g_m_y_lost_02 = 1032073858)] = "g_m_y_lost_02"),
    (e[(e.g_m_y_lost_03 = 850468060)] = "g_m_y_lost_03"),
    (e[(e.g_m_y_mexgang_01 = 3185399110)] = "g_m_y_mexgang_01"),
    (e[(e.g_m_y_mexgoon_01 = 653210662)] = "g_m_y_mexgoon_01"),
    (e[(e.g_m_y_mexgoon_02 = 832784782)] = "g_m_y_mexgoon_02"),
    (e[(e.g_m_y_mexgoon_03 = 2521633500)] = "g_m_y_mexgoon_03"),
    (e[(e.g_m_y_pologoon_01 = 1329576454)] = "g_m_y_pologoon_01"),
    (e[(e.g_m_y_pologoon_02 = 2733138262)] = "g_m_y_pologoon_02"),
    (e[(e.g_m_y_salvaboss_01 = 2422005962)] = "g_m_y_salvaboss_01"),
    (e[(e.g_m_y_salvagoon_01 = 663522487)] = "g_m_y_salvagoon_01"),
    (e[(e.g_m_y_salvagoon_02 = 846439045)] = "g_m_y_salvagoon_02"),
    (e[(e.g_m_y_salvagoon_03 = 62440720)] = "g_m_y_salvagoon_03"),
    (e[(e.g_m_y_strpunk_01 = 4246489531)] = "g_m_y_strpunk_01"),
    (e[(e.g_m_y_strpunk_02 = 228715206)] = "g_m_y_strpunk_02"),
    (e[(e.hc_driver = 994527967)] = "hc_driver"),
    (e[(e.hc_gunman = 193469166)] = "hc_gunman"),
    (e[(e.hc_hacker = 2579169528)] = "hc_hacker"),
    (e[(e.ig_abigail = 1074457665)] = "ig_abigail"),
    (e[(e.ig_agent = 610988552)] = "ig_agent"),
    (e[(e.ig_amandatownley = 1830688247)] = "ig_amandatownley"),
    (e[(e.ig_andreas = 1206185632)] = "ig_andreas"),
    (e[(e.ig_ashley = 2129936603)] = "ig_ashley"),
    (e[(e.ig_avon = 4242698434)] = "ig_avon"),
    (e[(e.ig_ballasog = 2802535058)] = "ig_ballasog"),
    (e[(e.ig_bankman = 2426248831)] = "ig_bankman"),
    (e[(e.ig_barry = 797459875)] = "ig_barry"),
    (e[(e.ig_benny = 3300333010)] = "ig_benny"),
    (e[(e.ig_bestmen = 1464257942)] = "ig_bestmen"),
    (e[(e.ig_beverly = 3181518428)] = "ig_beverly"),
    (e[(e.ig_brad = 3183167778)] = "ig_brad"),
    (e[(e.ig_bride = 1633872967)] = "ig_bride"),
    (e[(e.ig_car3guy1 = 2230970679)] = "ig_car3guy1"),
    (e[(e.ig_car3guy2 = 1975732938)] = "ig_car3guy2"),
    (e[(e.ig_casey = 3774489940)] = "ig_casey"),
    (e[(e.ig_chef = 1240128502)] = "ig_chef"),
    (e[(e.ig_chef2 = 2240322243)] = "ig_chef2"),
    (e[(e.ig_chengsr = 2867128955)] = "ig_chengsr"),
    (e[(e.ig_chrisformage = 678319271)] = "ig_chrisformage"),
    (e[(e.ig_clay = 1825562762)] = "ig_clay"),
    (e[(e.ig_claypain = 2634057640)] = "ig_claypain"),
    (e[(e.ig_cletus = 3865252245)] = "ig_cletus"),
    (e[(e.ig_dale = 1182012905)] = "ig_dale"),
    (e[(e.ig_davenorton = 365775923)] = "ig_davenorton"),
    (e[(e.ig_denise = 2181772221)] = "ig_denise"),
    (e[(e.ig_devin = 1952555184)] = "ig_devin"),
    (e[(e.ig_dom = 2620240008)] = "ig_dom"),
    (e[(e.ig_dreyfuss = 3666413874)] = "ig_dreyfuss"),
    (e[(e.ig_drfriedlander = 3422293493)] = "ig_drfriedlander"),
    (e[(e.ig_fabien = 3499148112)] = "ig_fabien"),
    (e[(e.ig_fbisuit_01 = 988062523)] = "ig_fbisuit_01"),
    (e[(e.ig_floyd = 2981205682)] = "ig_floyd"),
    (e[(e.ig_g = 2216405299)] = "ig_g"),
    (e[(e.ig_groom = 4274948997)] = "ig_groom"),
    (e[(e.ig_hao = 1704428387)] = "ig_hao"),
    (e[(e.ig_hunter = 3457361118)] = "ig_hunter"),
    (e[(e.ig_janet = 225287241)] = "ig_janet"),
    (e[(e.ig_jay_norris = 2050158196)] = "ig_jay_norris"),
    (e[(e.ig_jewelass = 257763003)] = "ig_jewelass"),
    (e[(e.ig_jimmyboston = 3986688045)] = "ig_jimmyboston"),
    (e[(e.ig_jimmydisanto = 1459905209)] = "ig_jimmydisanto"),
    (e[(e.ig_joeminuteman = 3189787803)] = "ig_joeminuteman"),
    (e[(e.ig_johnnyklebitz = 2278195374)] = "ig_johnnyklebitz"),
    (e[(e.ig_josef = 3776618420)] = "ig_josef"),
    (e[(e.ig_josh = 2040438510)] = "ig_josh"),
    (e[(e.ig_karen_daniels = 3948009817)] = "ig_karen_daniels"),
    (e[(e.ig_kerrymcintosh = 1530648845)] = "ig_kerrymcintosh"),
    (e[(e.ig_lamardavis = 1706635382)] = "ig_lamardavis"),
    (e[(e.ig_lazlow = 3756278757)] = "ig_lazlow"),
    (e[(e.ig_lestercrest_2 = 1849883942)] = "ig_lestercrest_2"),
    (e[(e.ig_lestercrest = 1302784073)] = "ig_lestercrest"),
    (e[(e.ig_lifeinvad_01 = 1401530684)] = "ig_lifeinvad_01"),
    (e[(e.ig_lifeinvad_02 = 666718676)] = "ig_lifeinvad_02"),
    (e[(e.ig_magenta = 4242313482)] = "ig_magenta"),
    (e[(e.ig_malc = 4055673113)] = "ig_malc"),
    (e[(e.ig_manuel = 4248931856)] = "ig_manuel"),
    (e[(e.ig_marnie = 411185872)] = "ig_marnie"),
    (e[(e.ig_maryann = 2741999622)] = "ig_maryann"),
    (e[(e.ig_maude = 1005070462)] = "ig_maude"),
    (e[(e.ig_michelle = 3214308084)] = "ig_michelle"),
    (e[(e.ig_milton = 3408943538)] = "ig_milton"),
    (e[(e.ig_molly = 2936266209)] = "ig_molly"),
    (e[(e.ig_money = 939183526)] = "ig_money"),
    (e[(e.ig_mp_agent14 = 4227433577)] = "ig_mp_agent14"),
    (e[(e.ig_mrk = 3990661997)] = "ig_mrk"),
    (e[(e.ig_mrs_thornhill = 503621995)] = "ig_mrs_thornhill"),
    (e[(e.ig_mrsphillips = 946007720)] = "ig_mrsphillips"),
    (e[(e.ig_natalia = 3726105915)] = "ig_natalia"),
    (e[(e.ig_nervousron = 3170921201)] = "ig_nervousron"),
    (e[(e.ig_nigel = 3367442045)] = "ig_nigel"),
    (e[(e.ig_old_man1a = 1906124788)] = "ig_old_man1a"),
    (e[(e.ig_old_man2 = 4011150407)] = "ig_old_man2"),
    (e[(e.ig_omega = 1625728984)] = "ig_omega"),
    (e[(e.ig_oneil = 768005095)] = "ig_oneil"),
    (e[(e.ig_orleans = 1641334641)] = "ig_orleans"),
    (e[(e.ig_ortega = 648372919)] = "ig_ortega"),
    (e[(e.ig_paige = 357551935)] = "ig_paige"),
    (e[(e.ig_paper = 2577072326)] = "ig_paper"),
    (e[(e.ig_patricia = 3312325004)] = "ig_patricia"),
    (e[(e.ig_popov = 645279998)] = "ig_popov"),
    (e[(e.ig_priest = 1681385341)] = "ig_priest"),
    (e[(e.ig_prolsec_02 = 666086773)] = "ig_prolsec_02"),
    (e[(e.ig_ramp_gang = 3845001836)] = "ig_ramp_gang"),
    (e[(e.ig_ramp_hic = 1165307954)] = "ig_ramp_hic"),
    (e[(e.ig_ramp_hipster = 3740245870)] = "ig_ramp_hipster"),
    (e[(e.ig_ramp_mex = 3870061732)] = "ig_ramp_mex"),
    (e[(e.ig_rashcosvki = 940330470)] = "ig_rashcosvki"),
    (e[(e.ig_roccopelosi = 3585757951)] = "ig_roccopelosi"),
    (e[(e.ig_russiandrunk = 1024089777)] = "ig_russiandrunk"),
    (e[(e.ig_screen_writer = 4293277303)] = "ig_screen_writer"),
    (e[(e.ig_siemonyetarian = 1283141381)] = "ig_siemonyetarian"),
    (e[(e.ig_solomon = 2260598310)] = "ig_solomon"),
    (e[(e.ig_stevehains = 941695432)] = "ig_stevehains"),
    (e[(e.ig_stretch = 915948376)] = "ig_stretch"),
    (e[(e.ig_talina = 3885222120)] = "ig_talina"),
    (e[(e.ig_tanisha = 226559113)] = "ig_tanisha"),
    (e[(e.ig_taocheng = 3697041061)] = "ig_taocheng"),
    (e[(e.ig_taostranslator = 2089096292)] = "ig_taostranslator"),
    (e[(e.ig_tenniscoach = 2721800023)] = "ig_tenniscoach"),
    (e[(e.ig_terry = 1728056212)] = "ig_terry"),
    (e[(e.ig_tomepsilon = 3447159466)] = "ig_tomepsilon"),
    (e[(e.ig_tonya = 3402126148)] = "ig_tonya"),
    (e[(e.ig_tracydisanto = 3728026165)] = "ig_tracydisanto"),
    (e[(e.ig_trafficwarden = 1461287021)] = "ig_trafficwarden"),
    (e[(e.ig_tylerdix = 1382414087)] = "ig_tylerdix"),
    (e[(e.ig_vagspeak = 4194109068)] = "ig_vagspeak"),
    (e[(e.ig_wade = 2459507570)] = "ig_wade"),
    (e[(e.ig_zimbor = 188012277)] = "ig_zimbor"),
    (e[(e.mp_f_boatstaff_01 = 848542158)] = "mp_f_boatstaff_01"),
    (e[(e.mp_f_cardesign_01 = 606876839)] = "mp_f_cardesign_01"),
    (e[(e.mp_f_chbar_01 = 3287737221)] = "mp_f_chbar_01"),
    (e[(e.mp_f_cocaine_01 = 1264941816)] = "mp_f_cocaine_01"),
    (e[(e.mp_f_counterfeit_01 = 3079205365)] = "mp_f_counterfeit_01"),
    (e[(e.mp_f_deadhooker = 1943971979)] = "mp_f_deadhooker"),
    (e[(e.mp_f_execpa_01 = 1126998116)] = "mp_f_execpa_01"),
    (e[(e.mp_f_execpa_02 = 1500695792)] = "mp_f_execpa_02"),
    (e[(e.mp_f_forgery_01 = 2014985464)] = "mp_f_forgery_01"),
    (e[(e.mp_f_freemode_01 = 2627665880)] = "mp_f_freemode_01"),
    (e[(e.mp_f_helistaff_01 = 431423238)] = "mp_f_helistaff_01"),
    (e[(e.mp_f_meth_01 = 3534913217)] = "mp_f_meth_01"),
    (e[(e.mp_f_misty_01 = 3509125021)] = "mp_f_misty_01"),
    (e[(e.mp_f_stripperlite = 695248020)] = "mp_f_stripperlite"),
    (e[(e.mp_f_weed_01 = 2992993187)] = "mp_f_weed_01"),
    (e[(e.mp_g_m_pros_01 = 1822283721)] = "mp_g_m_pros_01"),
    (e[(e.mp_m_avongoon = 2618542997)] = "mp_m_avongoon"),
    (e[(e.mp_m_boatstaff_01 = 3361671816)] = "mp_m_boatstaff_01"),
    (e[(e.mp_m_bogdangoon = 1297520375)] = "mp_m_bogdangoon"),
    (e[(e.mp_m_claude_01 = 3237179831)] = "mp_m_claude_01"),
    (e[(e.mp_m_cocaine_01 = 1456705429)] = "mp_m_cocaine_01"),
    (e[(e.mp_m_counterfeit_01 = 2555758964)] = "mp_m_counterfeit_01"),
    (e[(e.mp_m_exarmy_01 = 1161072059)] = "mp_m_exarmy_01"),
    (e[(e.mp_m_execpa_01 = 1048844220)] = "mp_m_execpa_01"),
    (e[(e.mp_m_famdd_01 = 866411749)] = "mp_m_famdd_01"),
    (e[(e.mp_m_fibsec_01 = 1558115333)] = "mp_m_fibsec_01"),
    (e[(e.mp_m_forgery_01 = 1631482011)] = "mp_m_forgery_01"),
    (e[(e.mp_m_freemode_01 = 1885233650)] = "mp_m_freemode_01"),
    (e[(e.mp_m_g_vagfun_01 = 3299219389)] = "mp_m_g_vagfun_01"),
    (e[(e.mp_m_marston_01 = 943915367)] = "mp_m_marston_01"),
    (e[(e.mp_m_meth_01 = 3988008767)] = "mp_m_meth_01"),
    (e[(e.mp_m_niko_01 = 4007317449)] = "mp_m_niko_01"),
    (e[(e.mp_m_securoguard_01 = 3660355662)] = "mp_m_securoguard_01"),
    (e[(e.mp_m_shopkeep_01 = 416176080)] = "mp_m_shopkeep_01"),
    (e[(e.mp_m_waremech_01 = 4154933561)] = "mp_m_waremech_01"),
    (e[(e.mp_m_weapexp_01 = 921328393)] = "mp_m_weapexp_01"),
    (e[(e.mp_m_weapwork_01 = 1099321454)] = "mp_m_weapwork_01"),
    (e[(e.mp_m_weed_01 = 2441008217)] = "mp_m_weed_01"),
    (e[(e.mp_s_m_armoured_01 = 3455013896)] = "mp_s_m_armoured_01"),
    (e[(e.player_one = 2602752943)] = "player_one"),
    (e[(e.player_two = 2608926626)] = "player_two"),
    (e[(e.player_zero = 225514697)] = "player_zero"),
    (e[(e.s_f_m_fembarber = 373000027)] = "s_f_m_fembarber"),
    (e[(e.s_f_m_maid_01 = 3767780806)] = "s_f_m_maid_01"),
    (e[(e.s_f_m_shop_high = 2923947184)] = "s_f_m_shop_high"),
    (e[(e.s_f_m_sweatshop_01 = 824925120)] = "s_f_m_sweatshop_01"),
    (e[(e.s_f_y_airhostess_01 = 1567728751)] = "s_f_y_airhostess_01"),
    (e[(e.s_f_y_bartender_01 = 2014052797)] = "s_f_y_bartender_01"),
    (e[(e.s_f_y_baywatch_01 = 1250841910)] = "s_f_y_baywatch_01"),
    (e[(e.s_f_y_cop_01 = 368603149)] = "s_f_y_cop_01"),
    (e[(e.s_f_y_factory_01 = 1777626099)] = "s_f_y_factory_01"),
    (e[(e.s_f_y_hooker_01 = 42647445)] = "s_f_y_hooker_01"),
    (e[(e.s_f_y_hooker_02 = 348382215)] = "s_f_y_hooker_02"),
    (e[(e.s_f_y_hooker_03 = 51789996)] = "s_f_y_hooker_03"),
    (e[(e.s_f_y_migrant_01 = 3579522037)] = "s_f_y_migrant_01"),
    (e[(e.s_f_y_movprem_01 = 587253782)] = "s_f_y_movprem_01"),
    (e[(e.s_f_y_ranger_01 = 2680682039)] = "s_f_y_ranger_01"),
    (e[(e.s_f_y_scrubs_01 = 2874755766)] = "s_f_y_scrubs_01"),
    (e[(e.s_f_y_sheriff_01 = 1096929346)] = "s_f_y_sheriff_01"),
    (e[(e.s_f_y_shop_low = 2842568196)] = "s_f_y_shop_low"),
    (e[(e.s_f_y_shop_mid = 1055701597)] = "s_f_y_shop_mid"),
    (e[(e.s_f_y_stripper_01 = 1381498905)] = "s_f_y_stripper_01"),
    (e[(e.s_f_y_stripper_02 = 1846523796)] = "s_f_y_stripper_02"),
    (e[(e.s_f_y_stripperlite = 1544875514)] = "s_f_y_stripperlite"),
    (e[(e.s_f_y_sweatshop_01 = 2231547570)] = "s_f_y_sweatshop_01"),
    (e[(e.s_m_m_ammucountry = 233415434)] = "s_m_m_ammucountry"),
    (e[(e.s_m_m_armoured_01 = 2512875213)] = "s_m_m_armoured_01"),
    (e[(e.s_m_m_armoured_02 = 1669696074)] = "s_m_m_armoured_02"),
    (e[(e.s_m_m_autoshop_01 = 68070371)] = "s_m_m_autoshop_01"),
    (e[(e.s_m_m_autoshop_02 = 4033578141)] = "s_m_m_autoshop_02"),
    (e[(e.s_m_m_bouncer_01 = 2681481517)] = "s_m_m_bouncer_01"),
    (e[(e.s_m_m_ccrew_01 = 3387290987)] = "s_m_m_ccrew_01"),
    (e[(e.s_m_m_chemsec_01 = 788443093)] = "s_m_m_chemsec_01"),
    (e[(e.s_m_m_ciasec_01 = 1650288984)] = "s_m_m_ciasec_01"),
    (e[(e.s_m_m_cntrybar_01 = 436345731)] = "s_m_m_cntrybar_01"),
    (e[(e.s_m_m_dockwork_01 = 349680864)] = "s_m_m_dockwork_01"),
    (e[(e.s_m_m_doctor_01 = 3564307372)] = "s_m_m_doctor_01"),
    (e[(e.s_m_m_fiboffice_01 = 3988550982)] = "s_m_m_fiboffice_01"),
    (e[(e.s_m_m_fiboffice_02 = 653289389)] = "s_m_m_fiboffice_02"),
    (e[(e.s_m_m_fibsec_01 = 2072724299)] = "s_m_m_fibsec_01"),
    (e[(e.s_m_m_gaffer_01 = 2841034142)] = "s_m_m_gaffer_01"),
    (e[(e.s_m_m_gardener_01 = 1240094341)] = "s_m_m_gardener_01"),
    (e[(e.s_m_m_gentransport = 411102470)] = "s_m_m_gentransport"),
    (e[(e.s_m_m_hairdress_01 = 1099825042)] = "s_m_m_hairdress_01"),
    (e[(e.s_m_m_highsec_01 = 4049719826)] = "s_m_m_highsec_01"),
    (e[(e.s_m_m_highsec_02 = 691061163)] = "s_m_m_highsec_02"),
    (e[(e.s_m_m_janitor = 2842417644)] = "s_m_m_janitor"),
    (e[(e.s_m_m_lathandy_01 = 2659242702)] = "s_m_m_lathandy_01"),
    (e[(e.s_m_m_lifeinvad_01 = 3724572669)] = "s_m_m_lifeinvad_01"),
    (e[(e.s_m_m_linecook = 3684436375)] = "s_m_m_linecook"),
    (e[(e.s_m_m_lsmetro_01 = 1985653476)] = "s_m_m_lsmetro_01"),
    (e[(e.s_m_m_mariachi_01 = 2124742566)] = "s_m_m_mariachi_01"),
    (e[(e.s_m_m_marine_01 = 4074414829)] = "s_m_m_marine_01"),
    (e[(e.s_m_m_marine_02 = 4028996995)] = "s_m_m_marine_02"),
    (e[(e.s_m_m_migrant_01 = 3977045190)] = "s_m_m_migrant_01"),
    (e[(e.s_m_m_movalien_01 = 1684083350)] = "s_m_m_movalien_01"),
    (e[(e.s_m_m_movprem_01 = 3630066984)] = "s_m_m_movprem_01"),
    (e[(e.s_m_m_movspace_01 = 3887273010)] = "s_m_m_movspace_01"),
    (e[(e.s_m_m_paramedic_01 = 3008586398)] = "s_m_m_paramedic_01"),
    (e[(e.s_m_m_pilot_01 = 3881519900)] = "s_m_m_pilot_01"),
    (e[(e.s_m_m_pilot_02 = 4131252449)] = "s_m_m_pilot_02"),
    (e[(e.s_m_m_postal_01 = 1650036788)] = "s_m_m_postal_01"),
    (e[(e.s_m_m_postal_02 = 1936142927)] = "s_m_m_postal_02"),
    (e[(e.s_m_m_prisguard_01 = 1456041926)] = "s_m_m_prisguard_01"),
    (e[(e.s_m_m_scientist_01 = 1092080539)] = "s_m_m_scientist_01"),
    (e[(e.s_m_m_security_01 = 3613962792)] = "s_m_m_security_01"),
    (e[(e.s_m_m_snowcop_01 = 451459928)] = "s_m_m_snowcop_01"),
    (e[(e.s_m_m_strperf_01 = 2035992488)] = "s_m_m_strperf_01"),
    (e[(e.s_m_m_strpreach_01 = 469792763)] = "s_m_m_strpreach_01"),
    (e[(e.s_m_m_strvend_01 = 3465614249)] = "s_m_m_strvend_01"),
    (e[(e.s_m_m_trucker_01 = 1498487404)] = "s_m_m_trucker_01"),
    (e[(e.s_m_m_ups_01 = 2680389410)] = "s_m_m_ups_01"),
    (e[(e.s_m_m_ups_02 = 3502104854)] = "s_m_m_ups_02"),
    (e[(e.s_m_o_busker_01 = 2912874939)] = "s_m_o_busker_01"),
    (e[(e.s_m_y_airworker = 1644266841)] = "s_m_y_airworker"),
    (e[(e.s_m_y_ammucity_01 = 2651349821)] = "s_m_y_ammucity_01"),
    (e[(e.s_m_y_armymech_01 = 1657546978)] = "s_m_y_armymech_01"),
    (e[(e.s_m_y_autopsy_01 = 2988916046)] = "s_m_y_autopsy_01"),
    (e[(e.s_m_y_barman_01 = 3852538118)] = "s_m_y_barman_01"),
    (e[(e.s_m_y_baywatch_01 = 189425762)] = "s_m_y_baywatch_01"),
    (e[(e.s_m_y_blackops_01 = 3019107892)] = "s_m_y_blackops_01"),
    (e[(e.s_m_y_blackops_02 = 2047212121)] = "s_m_y_blackops_02"),
    (e[(e.s_m_y_blackops_03 = 1349953339)] = "s_m_y_blackops_03"),
    (e[(e.s_m_y_busboy_01 = 3640249671)] = "s_m_y_busboy_01"),
    (e[(e.s_m_y_chef_01 = 261586155)] = "s_m_y_chef_01"),
    (e[(e.s_m_y_clown_01 = 71929310)] = "s_m_y_clown_01"),
    (e[(e.s_m_y_construct_01 = 3621428889)] = "s_m_y_construct_01"),
    (e[(e.s_m_y_construct_02 = 3321821918)] = "s_m_y_construct_02"),
    (e[(e.s_m_y_cop_01 = 1581098148)] = "s_m_y_cop_01"),
    (e[(e.s_m_y_dealer_01 = 3835149295)] = "s_m_y_dealer_01"),
    (e[(e.s_m_y_devinsec_01 = 2606068340)] = "s_m_y_devinsec_01"),
    (e[(e.s_m_y_dockwork_01 = 2255894993)] = "s_m_y_dockwork_01"),
    (e[(e.s_m_y_doorman_01 = 579932932)] = "s_m_y_doorman_01"),
    (e[(e.s_m_y_dwservice_01 = 1976765073)] = "s_m_y_dwservice_01"),
    (e[(e.s_m_y_dwservice_02 = 4119890438)] = "s_m_y_dwservice_02"),
    (e[(e.s_m_y_factory_01 = 1097048408)] = "s_m_y_factory_01"),
    (e[(e.s_m_y_fireman_01 = 3065114024)] = "s_m_y_fireman_01"),
    (e[(e.s_m_y_garbage = 4000686095)] = "s_m_y_garbage"),
    (e[(e.s_m_y_grip_01 = 815693290)] = "s_m_y_grip_01"),
    (e[(e.s_m_y_hwaycop_01 = 1939545845)] = "s_m_y_hwaycop_01"),
    (e[(e.s_m_y_marine_01 = 1702441027)] = "s_m_y_marine_01"),
    (e[(e.s_m_y_marine_02 = 1490458366)] = "s_m_y_marine_02"),
    (e[(e.s_m_y_marine_03 = 1925237458)] = "s_m_y_marine_03"),
    (e[(e.s_m_y_mime = 1021093698)] = "s_m_y_mime"),
    (e[(e.s_m_y_pestcont_01 = 1209091352)] = "s_m_y_pestcont_01"),
    (e[(e.s_m_y_pilot_01 = 2872052743)] = "s_m_y_pilot_01"),
    (e[(e.s_m_y_prismuscl_01 = 1596003233)] = "s_m_y_prismuscl_01"),
    (e[(e.s_m_y_prisoner_01 = 2981862233)] = "s_m_y_prisoner_01"),
    (e[(e.s_m_y_ranger_01 = 4017173934)] = "s_m_y_ranger_01"),
    (e[(e.s_m_y_robber_01 = 3227390873)] = "s_m_y_robber_01"),
    (e[(e.s_m_y_sheriff_01 = 2974087609)] = "s_m_y_sheriff_01"),
    (e[(e.s_m_y_shop_mask = 1846684678)] = "s_m_y_shop_mask"),
    (e[(e.s_m_y_strvend_01 = 2457805603)] = "s_m_y_strvend_01"),
    (e[(e.s_m_y_swat_01 = 2374966032)] = "s_m_y_swat_01"),
    (e[(e.s_m_y_uscg_01 = 3389018345)] = "s_m_y_uscg_01"),
    (e[(e.s_m_y_valet_01 = 999748158)] = "s_m_y_valet_01"),
    (e[(e.s_m_y_waiter_01 = 2907468364)] = "s_m_y_waiter_01"),
    (e[(e.s_m_y_winclean_01 = 1426951581)] = "s_m_y_winclean_01"),
    (e[(e.s_m_y_xmech_01 = 1142162924)] = "s_m_y_xmech_01"),
    (e[(e.s_m_y_xmech_02_mp = 1762949645)] = "s_m_y_xmech_02_mp"),
    (e[(e.s_m_y_xmech_02 = 3189832196)] = "s_m_y_xmech_02"),
    (e[(e.u_f_m_corpse_01 = 773063444)] = "u_f_m_corpse_01"),
    (e[(e.u_f_m_drowned_01 = 3623056905)] = "u_f_m_drowned_01"),
    (e[(e.u_f_m_miranda = 1095737979)] = "u_f_m_miranda"),
    (e[(e.u_f_m_promourn_01 = 2718472679)] = "u_f_m_promourn_01"),
    (e[(e.u_f_o_moviestar = 894928436)] = "u_f_o_moviestar"),
    (e[(e.u_f_o_prolhost_01 = 3306347811)] = "u_f_o_prolhost_01"),
    (e[(e.u_f_y_bikerchic = 4198014287)] = "u_f_y_bikerchic"),
    (e[(e.u_f_y_comjane = 3064628686)] = "u_f_y_comjane"),
    (e[(e.u_f_y_corpse_01 = 2624589981)] = "u_f_y_corpse_01"),
    (e[(e.u_f_y_corpse_02 = 228356856)] = "u_f_y_corpse_02"),
    (e[(e.u_f_y_hotposh_01 = 2526768638)] = "u_f_y_hotposh_01"),
    (e[(e.u_f_y_jewelass_01 = 4040474158)] = "u_f_y_jewelass_01"),
    (e[(e.u_f_y_mistress = 1573528872)] = "u_f_y_mistress"),
    (e[(e.u_f_y_poppymich = 602513566)] = "u_f_y_poppymich"),
    (e[(e.u_f_y_princess = 3538133636)] = "u_f_y_princess"),
    (e[(e.u_f_y_spyactress = 1535236204)] = "u_f_y_spyactress"),
    (e[(e.u_m_m_aldinapoli = 4042020578)] = "u_m_m_aldinapoli"),
    (e[(e.u_m_m_bankman = 3272005365)] = "u_m_m_bankman"),
    (e[(e.u_m_m_bikehire_01 = 1984382277)] = "u_m_m_bikehire_01"),
    (e[(e.u_m_m_doa_01 = 1646160893)] = "u_m_m_doa_01"),
    (e[(e.u_m_m_edtoh = 712602007)] = "u_m_m_edtoh"),
    (e[(e.u_m_m_fibarchitect = 874722259)] = "u_m_m_fibarchitect"),
    (e[(e.u_m_m_filmdirector = 728636342)] = "u_m_m_filmdirector"),
    (e[(e.u_m_m_glenstank_01 = 1169888870)] = "u_m_m_glenstank_01"),
    (e[(e.u_m_m_griff_01 = 3293887675)] = "u_m_m_griff_01"),
    (e[(e.u_m_m_jesus_01 = 3459037009)] = "u_m_m_jesus_01"),
    (e[(e.u_m_m_jewelsec_01 = 2899099062)] = "u_m_m_jewelsec_01"),
    (e[(e.u_m_m_jewelthief = 3872144604)] = "u_m_m_jewelthief"),
    (e[(e.u_m_m_markfost = 479578891)] = "u_m_m_markfost"),
    (e[(e.u_m_m_partytarget = 2180468199)] = "u_m_m_partytarget"),
    (e[(e.u_m_m_prolsec_01 = 1888624839)] = "u_m_m_prolsec_01"),
    (e[(e.u_m_m_promourn_01 = 3465937675)] = "u_m_m_promourn_01"),
    (e[(e.u_m_m_rivalpap = 1624626906)] = "u_m_m_rivalpap"),
    (e[(e.u_m_m_spyactor = 2886641112)] = "u_m_m_spyactor"),
    (e[(e.u_m_m_streetart_01 = 1813637474)] = "u_m_m_streetart_01"),
    (e[(e.u_m_m_willyfist = 2423691919)] = "u_m_m_willyfist"),
    (e[(e.u_m_o_filmnoir = 732742363)] = "u_m_o_filmnoir"),
    (e[(e.u_m_o_finguru_01 = 1189322339)] = "u_m_o_finguru_01"),
    (e[(e.u_m_o_taphillbilly = 2585681490)] = "u_m_o_taphillbilly"),
    (e[(e.u_m_o_tramp_01 = 1787764635)] = "u_m_o_tramp_01"),
    (e[(e.u_m_y_abner = 4037813798)] = "u_m_y_abner"),
    (e[(e.u_m_y_antonb = 3479321132)] = "u_m_y_antonb"),
    (e[(e.u_m_y_babyd = 3658575486)] = "u_m_y_babyd"),
    (e[(e.u_m_y_baygor = 1380197501)] = "u_m_y_baygor"),
    (e[(e.u_m_y_burgerdrug_01 = 2340239206)] = "u_m_y_burgerdrug_01"),
    (e[(e.u_m_y_chip = 610290475)] = "u_m_y_chip"),
    (e[(e.u_m_y_corpse_01 = 2495782975)] = "u_m_y_corpse_01"),
    (e[(e.u_m_y_cyclist_01 = 755956971)] = "u_m_y_cyclist_01"),
    (e[(e.u_m_y_fibmugger_01 = 2243544680)] = "u_m_y_fibmugger_01"),
    (e[(e.u_m_y_guido_01 = 3333724719)] = "u_m_y_guido_01"),
    (e[(e.u_m_y_gunvend_01 = 3005388626)] = "u_m_y_gunvend_01"),
    (e[(e.u_m_y_hippie_01 = 4030826507)] = "u_m_y_hippie_01"),
    (e[(e.u_m_y_imporage = 880829941)] = "u_m_y_imporage"),
    (e[(e.u_m_y_juggernaut_01 = 2431602996)] = "u_m_y_juggernaut_01"),
    (e[(e.u_m_y_justin = 2109968527)] = "u_m_y_justin"),
    (e[(e.u_m_y_mani = 3367706194)] = "u_m_y_mani"),
    (e[(e.u_m_y_militarybum = 1191548746)] = "u_m_y_militarybum"),
    (e[(e.u_m_y_paparazzi = 1346941736)] = "u_m_y_paparazzi"),
    (e[(e.u_m_y_party_01 = 921110016)] = "u_m_y_party_01"),
    (e[(e.u_m_y_pogo_01 = 3696858125)] = "u_m_y_pogo_01"),
    (e[(e.u_m_y_prisoner_01 = 2073775040)] = "u_m_y_prisoner_01"),
    (e[(e.u_m_y_proldriver_01 = 2237544099)] = "u_m_y_proldriver_01"),
    (e[(e.u_m_y_rsranger_01 = 1011059922)] = "u_m_y_rsranger_01"),
    (e[(e.u_m_y_sbike = 1794381917)] = "u_m_y_sbike"),
    (e[(e.u_m_y_staggrm_01 = 2442448387)] = "u_m_y_staggrm_01"),
    (e[(e.u_m_y_tattoo_01 = 2494442380)] = "u_m_y_tattoo_01"),
    (e[(e.u_m_y_zombie_01 = 2890614022)] = "u_m_y_zombie_01");
})(o_ || (o_ = {}));
class S_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (this.modelMenu = new b_(this, "Ped Models")),
      this.addUserInputItem(
        (this.animationItem = new At(
          "Play Custom Animation",
          "Requires ~b~dictionary~s~ and ~b~name~s~."
        )),
        async () =>
          await this.playAnimation(
            await t_.getUserInput(),
            await t_.getUserInput(),
            this.animationItem
          )
      ),
      this.addItem((this.reviveItem = new At("Revive Player")), () =>
        __.respawn()
      ),
      this.addItem((this.healItem = new At("Heal Player")), () => __.heal()),
      this.addItem(
        (this.invisibilityItem = new Ut("Player Invisibility")),
        (e) => Ce(h.local.scriptID, !e, !1)
      ),
      this.addItem((this.godmodeItem = new Ut("Player Godmode")), (e) =>
        __.setInvincible(h.local, e)
      ),
      this.addItem((this.ragdollItem = new Ut("Disable Ragdoll")), (e) =>
        ke(h.local.scriptID, !e)
      ),
      this.addItem((this.collisionItem = new Ut("Disable Collision")), (e) =>
        Le(h.local.scriptID, !e, !0)
      ),
      this.addItem(
        (this.infiniteStaminaItem = new Ut("Infinite Stamina")),
        (e) =>
          e
            ? e_.register(
              "player:infiniteStamina",
              () => De(h.local.scriptID),
              0
            )
            : e_.clear("player:infiniteStamina")
      ),
      this.addItem((this.superJumpItem = new Ut("Super Jump")), (e) =>
        e
          ? e_.register("player:superJump", () => Ie(h.local.scriptID), 0)
          : e_.clear("player:superJump")
      ),
      this.addItem((this.fastRunItem = new Ut("Fast Run")), (e) =>
        Te(h.local.scriptID, e ? 1.49 : 1)
      ),
      this.addItem((this.fastSwimItem = new Ut("Fast Swim")), (e) =>
        Pe(h.local.scriptID, e ? 1.49 : 1)
      ),
      this.addItem((this.thermalVisionItem = new Ut("Thermal Vision")), (e) =>
        Ae(e)
      ),
      this.addItem((this.nightVisionItem = new Ut("Night Vision")), (e) =>
        Ue(e)
      ),
      this.addItem((this.suicideItem = new At("Suicide")), async () => {
        M_.lockMenuItem(this.suicideItem),
          await __.playAnimation("mp_suicide", "pill"),
          i(() => {
            Ee(h.local.scriptID, 0, 0), M_.unlockMenuItem(this.suicideItem);
          }, 3200);
      }),
      (this.suicideItem.LeftBadge = mt.Alert);
  }
  async playAnimation(e, t, _) {
    await __.playAnimation(e, t, Jt.EnablePlayerControl),
      M_.selectItem(_, mt.Tick),
      i(() => M_.deselectItem(_), 1e3 * ve(e, t));
  }
}
class b_ extends f_ {
  constructor(e, t) {
    super(e, t),
      this.addUserInputItem(
        (this.customItem = new At("Custom Player Model")),
        async () => __.setModel(d(await t_.getUserInput()))
      ),
      w_
        .getValues(o_)
        .forEach((e) =>
          this.addItem(new At(o_[+e].toUpperCase()), () => __.setModel(+e))
        );
  }
}
class C_ extends $t {
  static getColors(e) {
    let t = He(e.scriptID, 0, 0),
      _ = xe(e.scriptID, 0, 0);
    return [t[1], t[2], _[1], _[2]];
  }
  static async setColor(e, t, _) {
    await qt.callback("vehicle:setColor", [e, t, _]);
  }
  static async setMod(e, t, _) {
    await qt.callback("vehicle:setMod", [e, t, _]);
  }
  static async setWheels(e, t, _, i) {
    await qt.callback("vehicle:setWheels", [e, t, _ + 1, i]);
  }
  static async repair(e) {
    Ne(e.scriptID), await qt.callback("vehicle:repair", [e]);
  }
  static async clean(e) {
    await qt.callback("vehicle:clean", [e]);
  }
  static async create(e) {
    if (!t_.isCreatingVehicle) {
      (t_.isCreatingVehicle = !0),
        h.local.vehicle && (await this.delete(h.local.vehicle));
      let t = await qt.callback("vehicle:create", [e]);
      e_.register(
        "vehicle:setPedInto",
        () => {
          t?.scriptID &&
            (E(h.local.scriptID, t.scriptID, Zt.Driver),
              e_.clear("vehicle:setPedInto"),
              (t_.isCreatingVehicle = !1));
        },
        50,
        3e3,
        () => (t_.isCreatingVehicle = !1)
      );
    }
  }
  static async delete(e) {
    await qt.callback("vehicle:delete", [e]);
  }
}
!(function (e) {
  (e[(e.Spoiler = 0)] = "Spoiler"),
    (e[(e.FrontBumpers = 1)] = "FrontBumpers"),
    (e[(e.RearBumper = 2)] = "RearBumper"),
    (e[(e.Skirts = 3)] = "Skirts"),
    (e[(e.Exhaust = 4)] = "Exhaust"),
    (e[(e.Frame = 5)] = "Frame"),
    (e[(e.Grille = 6)] = "Grille"),
    (e[(e.Hood = 7)] = "Hood"),
    (e[(e.Fenders = 8)] = "Fenders"),
    (e[(e.RearFenders = 9)] = "RearFenders"),
    (e[(e.Roof = 10)] = "Roof"),
    (e[(e.Engine = 11)] = "Engine"),
    (e[(e.Brakes = 12)] = "Brakes"),
    (e[(e.Transmission = 13)] = "Transmission"),
    (e[(e.Horn = 14)] = "Horn"),
    (e[(e.Suspension = 15)] = "Suspension"),
    (e[(e.Armor = 16)] = "Armor"),
    (e[(e.FrontWheels = 23)] = "FrontWheels"),
    (e[(e.BackWheels = 24)] = "BackWheels"),
    (e[(e.Plate = 25)] = "Plate"),
    (e[(e.Vanity = 26)] = "Vanity"),
    (e[(e.Trim = 27)] = "Trim"),
    (e[(e.Ornaments = 28)] = "Ornaments"),
    (e[(e.Dashboard = 29)] = "Dashboard"),
    (e[(e.Dials = 30)] = "Dials"),
    (e[(e.DoorSpeaker = 31)] = "DoorSpeaker"),
    (e[(e.Seats = 32)] = "Seats"),
    (e[(e.SteeringWheel = 33)] = "SteeringWheel"),
    (e[(e.ShiftLever = 34)] = "ShiftLever"),
    (e[(e.Plaques = 35)] = "Plaques"),
    (e[(e.Speakers = 36)] = "Speakers"),
    (e[(e.Trunk = 37)] = "Trunk"),
    (e[(e.Hydraulics = 38)] = "Hydraulics"),
    (e[(e.EngineBlock = 39)] = "EngineBlock"),
    (e[(e.AirFilter = 40)] = "AirFilter"),
    (e[(e.Struts = 41)] = "Struts"),
    (e[(e.ArchCover = 42)] = "ArchCover"),
    (e[(e.Aerials = 43)] = "Aerials"),
    (e[(e.Visor = 44)] = "Visor"),
    (e[(e.Tank = 45)] = "Tank"),
    (e[(e.Details = 46)] = "Details"),
    (e[(e.Livery = 48)] = "Livery");
})(r_ || (r_ = {})),
  (function (e) {
    (e[(e.MetallicBlack = 0)] = "MetallicBlack"),
      (e[(e.MetallicGraphiteBlack = 1)] = "MetallicGraphiteBlack"),
      (e[(e.MetallicBlackSteel = 2)] = "MetallicBlackSteel"),
      (e[(e.MetallicDarkSilver = 3)] = "MetallicDarkSilver"),
      (e[(e.MetallicSilver = 4)] = "MetallicSilver"),
      (e[(e.MetallicBlueSilver = 5)] = "MetallicBlueSilver"),
      (e[(e.MetallicSteelGray = 6)] = "MetallicSteelGray"),
      (e[(e.MetallicShadowSilver = 7)] = "MetallicShadowSilver"),
      (e[(e.MetallicStoneSilver = 8)] = "MetallicStoneSilver"),
      (e[(e.MetallicMidnightSilver = 9)] = "MetallicMidnightSilver"),
      (e[(e.MetallicGunMetal = 10)] = "MetallicGunMetal"),
      (e[(e.MetallicAnthraciteGray = 11)] = "MetallicAnthraciteGray"),
      (e[(e.MatteBlack = 12)] = "MatteBlack"),
      (e[(e.MatteGray = 13)] = "MatteGray"),
      (e[(e.MatteLightGray = 14)] = "MatteLightGray"),
      (e[(e.UtilBlack = 15)] = "UtilBlack"),
      (e[(e.UtilBlackPoly = 16)] = "UtilBlackPoly"),
      (e[(e.UtilDarksilver = 17)] = "UtilDarksilver"),
      (e[(e.UtilSilver = 18)] = "UtilSilver"),
      (e[(e.UtilGunMetal = 19)] = "UtilGunMetal"),
      (e[(e.UtilShadowSilver = 20)] = "UtilShadowSilver"),
      (e[(e.WornBlack = 21)] = "WornBlack"),
      (e[(e.WornGraphite = 22)] = "WornGraphite"),
      (e[(e.WornSilverGray = 23)] = "WornSilverGray"),
      (e[(e.WornSilver = 24)] = "WornSilver"),
      (e[(e.WornBlueSilver = 25)] = "WornBlueSilver"),
      (e[(e.WornShadowSilver = 26)] = "WornShadowSilver"),
      (e[(e.MetallicRed = 27)] = "MetallicRed"),
      (e[(e.MetallicTorinoRed = 28)] = "MetallicTorinoRed"),
      (e[(e.MetallicFormulaRed = 29)] = "MetallicFormulaRed"),
      (e[(e.MetallicBlazeRed = 30)] = "MetallicBlazeRed"),
      (e[(e.MetallicGracefulRed = 31)] = "MetallicGracefulRed"),
      (e[(e.MetallicGarnetRed = 32)] = "MetallicGarnetRed"),
      (e[(e.MetallicDesertRed = 33)] = "MetallicDesertRed"),
      (e[(e.MetallicCabernetRed = 34)] = "MetallicCabernetRed"),
      (e[(e.MetallicCandyRed = 35)] = "MetallicCandyRed"),
      (e[(e.MetallicSunriseOrange = 36)] = "MetallicSunriseOrange"),
      (e[(e.MetallicClassicGold = 37)] = "MetallicClassicGold"),
      (e[(e.MetallicOrange = 38)] = "MetallicOrange"),
      (e[(e.MatteRed = 39)] = "MatteRed"),
      (e[(e.MatteDarkRed = 40)] = "MatteDarkRed"),
      (e[(e.MatteOrange = 41)] = "MatteOrange"),
      (e[(e.MatteYellow = 42)] = "MatteYellow"),
      (e[(e.UtilRed = 43)] = "UtilRed"),
      (e[(e.UtilBrightRed = 44)] = "UtilBrightRed"),
      (e[(e.UtilGarnetRed = 45)] = "UtilGarnetRed"),
      (e[(e.WornRed = 46)] = "WornRed"),
      (e[(e.WornGoldenRed = 47)] = "WornGoldenRed"),
      (e[(e.WornDarkRed = 48)] = "WornDarkRed"),
      (e[(e.MetallicDarkGreen = 49)] = "MetallicDarkGreen"),
      (e[(e.MetallicRacingGreen = 50)] = "MetallicRacingGreen"),
      (e[(e.MetallicSeaGreen = 51)] = "MetallicSeaGreen"),
      (e[(e.MetallicOliveGreen = 52)] = "MetallicOliveGreen"),
      (e[(e.MetallicGreen = 53)] = "MetallicGreen"),
      (e[(e.MetallicGasolineBlueGreen = 54)] = "MetallicGasolineBlueGreen"),
      (e[(e.MatteLimeGreen = 55)] = "MatteLimeGreen"),
      (e[(e.UtilDarkGreen = 56)] = "UtilDarkGreen"),
      (e[(e.UtilGreen = 57)] = "UtilGreen"),
      (e[(e.WornDarkGreen = 58)] = "WornDarkGreen"),
      (e[(e.WornGreen = 59)] = "WornGreen"),
      (e[(e.WornSeaWash = 60)] = "WornSeaWash"),
      (e[(e.MetallicMidnightBlue = 61)] = "MetallicMidnightBlue"),
      (e[(e.MetallicDarkBlue = 62)] = "MetallicDarkBlue"),
      (e[(e.MetallicSaxonyBlue = 63)] = "MetallicSaxonyBlue"),
      (e[(e.MetallicBlue = 64)] = "MetallicBlue"),
      (e[(e.MetallicMarinerBlue = 65)] = "MetallicMarinerBlue"),
      (e[(e.MetallicHarborBlue = 66)] = "MetallicHarborBlue"),
      (e[(e.MetallicDiamondBlue = 67)] = "MetallicDiamondBlue"),
      (e[(e.MetallicSurfBlue = 68)] = "MetallicSurfBlue"),
      (e[(e.MetallicNauticalBlue = 69)] = "MetallicNauticalBlue"),
      (e[(e.MetallicBrightBlue = 70)] = "MetallicBrightBlue"),
      (e[(e.MetallicPurpleBlue = 71)] = "MetallicPurpleBlue"),
      (e[(e.MetallicSpinnakerBlue = 72)] = "MetallicSpinnakerBlue"),
      (e[(e.MetallicUltraBlue = 73)] = "MetallicUltraBlue"),
      (e[(e.UtilDarkBlue = 75)] = "UtilDarkBlue"),
      (e[(e.UtilMidnightBlue = 76)] = "UtilMidnightBlue"),
      (e[(e.UtilBlue = 77)] = "UtilBlue"),
      (e[(e.UtilSeaFoamBlue = 78)] = "UtilSeaFoamBlue"),
      (e[(e.UtilLightningBlue = 79)] = "UtilLightningBlue"),
      (e[(e.UtilMauiBluePoly = 80)] = "UtilMauiBluePoly"),
      (e[(e.UtilBrightBlue = 81)] = "UtilBrightBlue"),
      (e[(e.MatteDarkBlue = 82)] = "MatteDarkBlue"),
      (e[(e.MatteBlue = 83)] = "MatteBlue"),
      (e[(e.MatteMidnightBlue = 84)] = "MatteMidnightBlue"),
      (e[(e.WornDarkBlue = 85)] = "WornDarkBlue"),
      (e[(e.WornBlue = 86)] = "WornBlue"),
      (e[(e.WornLightBlue = 87)] = "WornLightBlue"),
      (e[(e.MetallicTaxiYellow = 88)] = "MetallicTaxiYellow"),
      (e[(e.MetallicRaceYellow = 89)] = "MetallicRaceYellow"),
      (e[(e.MetallicBronze = 90)] = "MetallicBronze"),
      (e[(e.MetallicYellowBird = 91)] = "MetallicYellowBird"),
      (e[(e.MetallicLime = 92)] = "MetallicLime"),
      (e[(e.MetallicChampagne = 93)] = "MetallicChampagne"),
      (e[(e.MetallicPuebloBeige = 94)] = "MetallicPuebloBeige"),
      (e[(e.MetallicDarkIvory = 95)] = "MetallicDarkIvory"),
      (e[(e.MetallicChocoBrown = 96)] = "MetallicChocoBrown"),
      (e[(e.MetallicGoldenBrown = 97)] = "MetallicGoldenBrown"),
      (e[(e.MetallicLightBrown = 98)] = "MetallicLightBrown"),
      (e[(e.MetallicStrawBeige = 99)] = "MetallicStrawBeige"),
      (e[(e.MetallicMossBrown = 100)] = "MetallicMossBrown"),
      (e[(e.MetallicBistonBrown = 101)] = "MetallicBistonBrown"),
      (e[(e.MetallicBeechwood = 102)] = "MetallicBeechwood"),
      (e[(e.MetallicDarkBeechwood = 103)] = "MetallicDarkBeechwood"),
      (e[(e.MetallicChocoOrange = 104)] = "MetallicChocoOrange"),
      (e[(e.MetallicBeachSand = 105)] = "MetallicBeachSand"),
      (e[(e.MetallicSunBleechedSand = 106)] = "MetallicSunBleechedSand"),
      (e[(e.MetallicCream = 107)] = "MetallicCream"),
      (e[(e.UtilBrown = 108)] = "UtilBrown"),
      (e[(e.UtilMediumBrown = 109)] = "UtilMediumBrown"),
      (e[(e.UtilLightBrown = 110)] = "UtilLightBrown"),
      (e[(e.MetallicWhite = 111)] = "MetallicWhite"),
      (e[(e.MetallicFrostWhite = 112)] = "MetallicFrostWhite"),
      (e[(e.WornHoneyBeige = 113)] = "WornHoneyBeige"),
      (e[(e.WornBrown = 114)] = "WornBrown"),
      (e[(e.WornDarkBrown = 115)] = "WornDarkBrown"),
      (e[(e.WornStrawBeige = 116)] = "WornStrawBeige"),
      (e[(e.BrushedSteel = 117)] = "BrushedSteel"),
      (e[(e.BrushedBlackSteel = 118)] = "BrushedBlackSteel"),
      (e[(e.BrushedAluminium = 119)] = "BrushedAluminium"),
      (e[(e.Chrome = 120)] = "Chrome"),
      (e[(e.WornOffWhite = 121)] = "WornOffWhite"),
      (e[(e.UtilOffWhite = 122)] = "UtilOffWhite"),
      (e[(e.WornOrange = 123)] = "WornOrange"),
      (e[(e.WornLightOrange = 124)] = "WornLightOrange"),
      (e[(e.MetallicSecuricorGreen = 125)] = "MetallicSecuricorGreen"),
      (e[(e.WornTaxiYellow = 126)] = "WornTaxiYellow"),
      (e[(e.PoliceCarBlue = 127)] = "PoliceCarBlue"),
      (e[(e.MatteGreen = 128)] = "MatteGreen"),
      (e[(e.MatteBrown = 129)] = "MatteBrown"),
      (e[(e.MatteWhite = 131)] = "MatteWhite"),
      (e[(e.WornWhite = 132)] = "WornWhite"),
      (e[(e.WornOliveArmyGreen = 133)] = "WornOliveArmyGreen"),
      (e[(e.PureWhite = 134)] = "PureWhite"),
      (e[(e.HotPink = 135)] = "HotPink"),
      (e[(e.Salmonpink = 136)] = "Salmonpink"),
      (e[(e.MetallicVermillionPink = 137)] = "MetallicVermillionPink"),
      (e[(e.Orange = 138)] = "Orange"),
      (e[(e.Green = 139)] = "Green"),
      (e[(e.Blue = 140)] = "Blue"),
      (e[(e.MettalicBlackBlue = 141)] = "MettalicBlackBlue"),
      (e[(e.MetallicBlackPurple = 142)] = "MetallicBlackPurple"),
      (e[(e.MetallicBlackRed = 143)] = "MetallicBlackRed"),
      (e[(e.HunterGreen = 144)] = "HunterGreen"),
      (e[(e.MetallicPurple = 145)] = "MetallicPurple"),
      (e[(e.MetaillicVDarkBlue = 146)] = "MetaillicVDarkBlue"),
      (e[(e.ModshopBlack = 147)] = "ModshopBlack"),
      (e[(e.MattePurple = 148)] = "MattePurple"),
      (e[(e.MatteDarkPurple = 149)] = "MatteDarkPurple"),
      (e[(e.MetallicLavaRed = 150)] = "MetallicLavaRed"),
      (e[(e.MatteForestGreen = 151)] = "MatteForestGreen"),
      (e[(e.MatteOliveDrab = 152)] = "MatteOliveDrab"),
      (e[(e.MatteDesertBrown = 153)] = "MatteDesertBrown"),
      (e[(e.MatteDesertTan = 154)] = "MatteDesertTan"),
      (e[(e.MatteFoliageGreen = 155)] = "MatteFoliageGreen"),
      (e[(e.DefaultAlloyColor = 156)] = "DefaultAlloyColor"),
      (e[(e.EpsilonBlue = 157)] = "EpsilonBlue"),
      (e[(e.PureGold = 158)] = "PureGold"),
      (e[(e.BrushedGold = 159)] = "BrushedGold");
  })(l_ || (l_ = {}));
class k_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (this.primaryColorMenu = new L_(this, "Primary Color", 0)),
      (this.secondaryColorMenu = new L_(this, "Secondary Color", 1)),
      (this.pearlescentColorMenu = new L_(this, "Pearlescent Color", 2)),
      (this.rimColorMenu = new L_(this, "Rim Color", 3));
  }
}
class L_ extends f_ {
  constructor(e, t, _) {
    super(e, t),
      (this.type = _),
      this.menuObject.MenuOpen.on(() =>
        M_.selectItem(
          this.menuObject.MenuItems.find(
            (e) =>
              e.Text.replace(/\s+/g, "") ==
              l_[C_.getColors(this.parentMenu.vehicle)[this.type]]
          ),
          mt.Car
        )
      ),
      w_.getValues(l_).forEach((e) => {
        let t = new At(l_[+e].replace(/([A-Z])/g, " $1").trim());
        this.addItem(t, () => {
          C_.setColor(this.parentMenu.vehicle, this.type, +e),
            M_.selectItem(t, mt.Car);
        });
      });
  }
}
!(function (e) {
  (e[(e.Stock = -1)] = "Stock"),
    (e[(e.Sport = 0)] = "Sport"),
    (e[(e.Muscle = 1)] = "Muscle"),
    (e[(e.Lowrider = 2)] = "Lowrider"),
    (e[(e.SUV = 3)] = "SUV"),
    (e[(e.OffRoad = 4)] = "OffRoad"),
    (e[(e.Tuner = 5)] = "Tuner"),
    (e[(e.Bike = 6)] = "Bike"),
    (e[(e.HighEnd = 7)] = "HighEnd"),
    (e[(e.BennysOriginal = 8)] = "BennysOriginal"),
    (e[(e.BennysBespoke = 9)] = "BennysBespoke"),
    (e[(e.Race = 10)] = "Race"),
    (e[(e.Street = 11)] = "Street");
})(c_ || (c_ = {}));
class D_ extends f_ {
  constructor(e, t) {
    super(e, t),
      this.addItem((this.stockWheels = new At("Stock Wheels")), () =>
        C_.setWheels(this.vehicle, 0, 0, 8 == Be(this.vehicle.scriptID))
      ),
      (this.wheelsMenus = [
        new I_(this, "Sport", c_.Sport, 50),
        new I_(this, "Muscle", c_.Muscle, 36),
        new I_(this, "Lowrider", c_.Lowrider, 30),
        new I_(this, "SUV", c_.SUV, 38),
        new I_(this, "Off-Road", c_.OffRoad, 35),
        new I_(this, "Tuner", c_.Tuner, 48),
        new I_(this, "Bike", c_.Bike, 72),
        new I_(this, "High End", c_.HighEnd, 40),
        new I_(this, "Benny's Original", c_.BennysOriginal, 217),
        new I_(this, "Benny's Bespoke", c_.BennysBespoke, 217),
        new I_(this, "Race", c_.Race, 140),
        new I_(this, "Street", c_.Street, 210),
      ]);
  }
}
class I_ extends f_ {
  constructor(e, t, _, i) {
    super(e, t);
    for (let e = 0; e < i; e++) {
      let t = new At(e.toString());
      this.addItem(t, () =>
        C_.setWheels(
          this.parentMenu.vehicle,
          _,
          e,
          8 == Be(this.parentMenu.vehicle.scriptID)
        )
      );
    }
  }
}
class T_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (this.bennysMenu = new P_(this, "Benny's Original")),
      (this.vehicleColorMenu = new k_(this, "Colors")),
      (this.vehicleWheelsMenu = new D_(this, "Wheels")),
      (this.modMenus = [
        new A_(this, "Armor", r_.Armor),
        new A_(this, "Brakes", r_.Brakes),
        new A_(this, "Engine", r_.Engine),
        new A_(this, "Exhaust", r_.Exhaust),
        new A_(this, "Fenders", r_.Fenders),
        new A_(this, "Frame", r_.Frame),
        new A_(this, "Front Bumpers", r_.FrontBumpers),
        new A_(this, "Grille", r_.Grille),
        new A_(this, "Hood", r_.Hood),
        new A_(this, "Horn", r_.Horn),
        new A_(this, "Livery", r_.Livery),
        new A_(this, "Rear Bumpers", r_.RearBumper),
        new A_(this, "Rear Fenders", r_.RearFenders),
        new A_(this, "Roof", r_.Roof),
        new A_(this, "Skirts", r_.Skirts),
        new A_(this, "Spoiler", r_.Spoiler),
        new A_(this, "Suspension", r_.Suspension),
        new A_(this, "Transmission", r_.Transmission),
      ].concat(this.bennysMenu.modMenus)),
      this.menuObject.MenuOpen.on(() => {
        Fe(this.vehicle.scriptID, 0),
          w_
            .getValues(r_)
            .forEach((e) =>
              this.modMenus.find((t) => t.mod == +e)?.init(this.vehicle)
            );
      });
  }
}
class P_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (this.modMenus = [
        new A_(this, "Aerials", r_.Aerials),
        new A_(this, "Air Filter", r_.AirFilter),
        new A_(this, "Arch Cover", r_.ArchCover),
        new A_(this, "Dashboard", r_.Dashboard),
        new A_(this, "Details", r_.Details),
        new A_(this, "Dials", r_.Dials),
        new A_(this, "Door Speaker", r_.DoorSpeaker),
        new A_(this, "Engine Block", r_.EngineBlock),
        new A_(this, "Hydraulics", r_.Hydraulics),
        new A_(this, "Ornaments", r_.Ornaments),
        new A_(this, "Plaques", r_.Plaques),
        new A_(this, "Plate", r_.Plate),
        new A_(this, "Seats", r_.Seats),
        new A_(this, "Shift Lever", r_.ShiftLever),
        new A_(this, "Speakers", r_.Speakers),
        new A_(this, "Steering Wheel", r_.SteeringWheel),
        new A_(this, "Struts", r_.Struts),
        new A_(this, "Tank", r_.Tank),
        new A_(this, "Trim", r_.Trim),
        new A_(this, "Trunk", r_.Trunk),
        new A_(this, "Vanity", r_.Vanity),
        new A_(this, "Visor", r_.Visor),
      ]);
  }
}
class A_ extends f_ {
  constructor(e, t, _) {
    super(e, t), (this.mod = _);
  }
  init(e) {
    if (
      (this.menuObject.Clear(),
        (this.numMods = Ge(e.scriptID, this.mod)),
        0 == this.numMods)
    )
      M_.lockMenuItem(this.menuItem);
    else {
      for (let t = 0; t <= this.numMods; t++) {
        let _ = new At(this.menuItem.Text + " #" + t);
        this.addItem(_, () => {
          C_.setMod(e, this.mod, t), M_.selectItem(_, mt.Car);
        });
      }
      M_.selectItem(
        this.menuObject.MenuItems[We(e.scriptID, this.mod) + 1],
        mt.Car
      );
    }
  }
}
class U_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (this.multiplier = 1),
      (this.vehicleCustomizationMenu = new T_(this, "Vehicle Customization")),
      this.addItem((this.repairItem = new At("Repair Vehicle")), () =>
        C_.repair(this.vehicle)
      ),
      this.addItem((this.cleanItem = new At("Clean Vehicle")), () =>
        C_.clean(this.vehicle)
      ),
      this.addItem(
        (this.engineTorqueItem = new Ut("Enable Torque Multiplier")),
        (e) =>
          e
            ? e_.register(
              "vehicle:torqueMultiplier",
              () => Ve(h.local.vehicle?.scriptID, this.multiplier),
              0
            )
            : e_.clear("vehicle:torqueMultiplier")
      ),
      this.addItem(
        (this.torqueMultiplierItem = new zt(
          "Engine Torque Multiplier",
          (e, t, _) => (
            _ == yt.Right
              ? (this.multiplier = +t + 5)
              : (this.multiplier = +t - 5),
            "" + this.multiplier.toFixed(2)
          ),
          void 0,
          () => "" + this.multiplier.toFixed(2)
        ))
      ),
      this.addItem(
        (this.invisibilityItem = new Ut("Vehicle Invisibility")),
        (e) => Ce(this.vehicle.scriptID, !e, !1)
      ),
      this.addItem((this.godmodeItem = new Ut("Vehicle Godmode")), (e) =>
        C_.setInvincible(this.vehicle, e)
      ),
      this.addItem(
        (this.turbulenceItem = new Ut("Disable Plane Turbulence")),
        (e) => ze(this.vehicle.scriptID, e ? 0 : 1)
      ),
      this.addItem((this.deleteItem = new At("Delete Vehicle")), () => {
        C_.delete(this.vehicle), this.menuObject.GoBack();
      }),
      (this.deleteItem.LeftBadge = mt.Alert),
      this.menuObject.MenuOpen.on(() => {
        h.local.vehicle
          ? this.vehicle != h.local.vehicle &&
          (this.updateVehicle(h.local.vehicle),
            (this.invisibilityItem.Checked = !Ye(this.vehicle.scriptID)),
            (this.godmodeItem.Checked = !je(this.vehicle.scriptID)),
            (this.turbulenceItem.Checked = !1),
            M_.unlockMenuItems(this.menuObject))
          : (this.updateVehicle(void 0),
            M_.lockMenuItems(this.menuObject),
            M_.unlockMenuItem(this.engineTorqueItem),
            M_.unlockMenuItem(this.torqueMultiplierItem));
      });
  }
  updateVehicle(e) {
    (this.vehicle = e),
      (this.vehicleCustomizationMenu.vehicle = e),
      (this.vehicleCustomizationMenu.vehicleColorMenu.vehicle = e),
      (this.vehicleCustomizationMenu.vehicleWheelsMenu.vehicle = e);
  }
}
!(function (e) {
  (e[(e.Compacts = 0)] = "Compacts"),
    (e[(e.Sedans = 1)] = "Sedans"),
    (e[(e.SUVs = 2)] = "SUVs"),
    (e[(e.Coupes = 3)] = "Coupes"),
    (e[(e.Muscle = 4)] = "Muscle"),
    (e[(e.SportsClassics = 5)] = "SportsClassics"),
    (e[(e.Sports = 6)] = "Sports"),
    (e[(e.Super = 7)] = "Super"),
    (e[(e.Motorcycles = 8)] = "Motorcycles"),
    (e[(e.OffRoad = 9)] = "OffRoad"),
    (e[(e.Industrial = 10)] = "Industrial"),
    (e[(e.Utility = 11)] = "Utility"),
    (e[(e.Vans = 12)] = "Vans"),
    (e[(e.Cycles = 13)] = "Cycles"),
    (e[(e.Boats = 14)] = "Boats"),
    (e[(e.Helicopters = 15)] = "Helicopters"),
    (e[(e.Planes = 16)] = "Planes"),
    (e[(e.Service = 17)] = "Service"),
    (e[(e.Emergency = 18)] = "Emergency"),
    (e[(e.Military = 19)] = "Military"),
    (e[(e.Commercial = 20)] = "Commercial"),
    (e[(e.Trains = 21)] = "Trains"),
    (e[(e.OpenWheel = 22)] = "OpenWheel");
})(m_ || (m_ = {})),
  (function (e) {
    (e[(e.Adder = 3078201489)] = "Adder"),
      (e[(e.Airbus = 1283517198)] = "Airbus"),
      (e[(e.Airtug = 1560980623)] = "Airtug"),
      (e[(e.Akula = 1181327175)] = "Akula"),
      (e[(e.Akuma = 1672195559)] = "Akuma"),
      (e[(e.Alpha = 767087018)] = "Alpha"),
      (e[(e.Alphaz1 = 2771347558)] = "Alphaz1"),
      (e[(e.Ambulance = 1171614426)] = "Ambulance"),
      (e[(e.Annihilator = 837858166)] = "Annihilator"),
      (e[(e.Apc = 562680400)] = "Apc"),
      (e[(e.Ardent = 159274291)] = "Ardent"),
      (e[(e.Armytanker = 3087536137)] = "Armytanker"),
      (e[(e.Armytrailer2 = 2657817814)] = "Armytrailer2"),
      (e[(e.Armytrailer = 2818520053)] = "Armytrailer"),
      (e[(e.Asbo = 1118611807)] = "Asbo"),
      (e[(e.Asea2 = 2487343317)] = "Asea2"),
      (e[(e.Asea = 2485144969)] = "Asea"),
      (e[(e.Asterope = 2391954683)] = "Asterope"),
      (e[(e.Autarch = 3981782132)] = "Autarch"),
      (e[(e.Avarus = 2179174271)] = "Avarus"),
      (e[(e.Avenger2 = 408970549)] = "Avenger2"),
      (e[(e.Avenger = 2176659152)] = "Avenger"),
      (e[(e.Bagger = 2154536131)] = "Bagger"),
      (e[(e.Baletrailer = 3895125590)] = "Baletrailer"),
      (e[(e.Baller2 = 142944341)] = "Baller2"),
      (e[(e.Baller3 = 1878062887)] = "Baller3"),
      (e[(e.Baller4 = 634118882)] = "Baller4"),
      (e[(e.Baller5 = 470404958)] = "Baller5"),
      (e[(e.Baller6 = 666166960)] = "Baller6"),
      (e[(e.Baller = 3486135912)] = "Baller"),
      (e[(e.Banshee2 = 633712403)] = "Banshee2"),
      (e[(e.Banshee = 3253274834)] = "Banshee"),
      (e[(e.Barracks2 = 1074326203)] = "Barracks2"),
      (e[(e.Barracks3 = 630371791)] = "Barracks3"),
      (e[(e.Barracks = 3471458123)] = "Barracks"),
      (e[(e.Barrage = 4081974053)] = "Barrage"),
      (e[(e.Bati2 = 3403504941)] = "Bati2"),
      (e[(e.Bati = 4180675781)] = "Bati"),
      (e[(e.Benson = 2053223216)] = "Benson"),
      (e[(e.Besra = 1824333165)] = "Besra"),
      (e[(e.Bestiagts = 1274868363)] = "Bestiagts"),
      (e[(e.Bf400 = 86520421)] = "Bf400"),
      (e[(e.Bfinjection = 1126868326)] = "Bfinjection"),
      (e[(e.Biff = 850991848)] = "Biff"),
      (e[(e.Bifta = 3945366167)] = "Bifta"),
      (e[(e.Bison2 = 2072156101)] = "Bison2"),
      (e[(e.Bison3 = 1739845664)] = "Bison3"),
      (e[(e.Bison = 4278019151)] = "Bison"),
      (e[(e.Bjxl = 850565707)] = "Bjxl"),
      (e[(e.Blade = 3089165662)] = "Blade"),
      (e[(e.Blazer2 = 4246935337)] = "Blazer2"),
      (e[(e.Blazer3 = 3025077634)] = "Blazer3"),
      (e[(e.Blazer4 = 3854198872)] = "Blazer4"),
      (e[(e.Blazer5 = 2704629607)] = "Blazer5"),
      (e[(e.Blazer = 2166734073)] = "Blazer"),
      (e[(e.Blimp2 = 3681241380)] = "Blimp2"),
      (e[(e.Blimp3 = 3987008919)] = "Blimp3"),
      (e[(e.Blimp = 4143991942)] = "Blimp"),
      (e[(e.Blista2 = 1039032026)] = "Blista2"),
      (e[(e.Blista3 = 3703315515)] = "Blista3"),
      (e[(e.Blista = 3950024287)] = "Blista"),
      (e[(e.Bmx = 1131912276)] = "Bmx"),
      (e[(e.Boattrailer = 524108981)] = "Boattrailer"),
      (e[(e.Bobcatxl = 1069929536)] = "Bobcatxl"),
      (e[(e.Bodhi2 = 2859047862)] = "Bodhi2"),
      (e[(e.Bombushka = 4262088844)] = "Bombushka"),
      (e[(e.Boxville2 = 4061868990)] = "Boxville2"),
      (e[(e.Boxville3 = 121658888)] = "Boxville3"),
      (e[(e.Boxville4 = 444171386)] = "Boxville4"),
      (e[(e.Boxville5 = 682434785)] = "Boxville5"),
      (e[(e.Boxville = 2307837162)] = "Boxville"),
      (e[(e.Brawler = 2815302597)] = "Brawler"),
      (e[(e.Brickade = 3989239879)] = "Brickade"),
      (e[(e.Brioso = 1549126457)] = "Brioso"),
      (e[(e.Bruiser2 = 2600885406)] = "Bruiser2"),
      (e[(e.Bruiser3 = 2252616474)] = "Bruiser3"),
      (e[(e.Bruiser = 668439077)] = "Bruiser"),
      (e[(e.Brutus2 = 2403970600)] = "Brutus2"),
      (e[(e.Brutus3 = 2038858402)] = "Brutus3"),
      (e[(e.Brutus = 2139203625)] = "Brutus"),
      (e[(e.Btype2 = 3463132580)] = "Btype2"),
      (e[(e.Btype3 = 3692679425)] = "Btype3"),
      (e[(e.Btype = 117401876)] = "Btype"),
      (e[(e.Buccaneer2 = 3281516360)] = "Buccaneer2"),
      (e[(e.Buccaneer = 3612755468)] = "Buccaneer"),
      (e[(e.Buffalo2 = 736902334)] = "Buffalo2"),
      (e[(e.Buffalo3 = 237764926)] = "Buffalo3"),
      (e[(e.Buffalo = 3990165190)] = "Buffalo"),
      (e[(e.Bulldozer = 1886712733)] = "Bulldozer"),
      (e[(e.Bullet = 2598821281)] = "Bullet"),
      (e[(e.Burrito2 = 3387490166)] = "Burrito2"),
      (e[(e.Burrito3 = 2551651283)] = "Burrito3"),
      (e[(e.Burrito4 = 893081117)] = "Burrito4"),
      (e[(e.Burrito5 = 1132262048)] = "Burrito5"),
      (e[(e.Burrito = 2948279460)] = "Burrito"),
      (e[(e.Bus = 3581397346)] = "Bus"),
      (e[(e.Buzzard2 = 745926877)] = "Buzzard2"),
      (e[(e.Buzzard = 788747387)] = "Buzzard"),
      (e[(e.Cablecar = 3334677549)] = "Cablecar"),
      (e[(e.Caddy2 = 3757070668)] = "Caddy2"),
      (e[(e.Caddy3 = 3525819835)] = "Caddy3"),
      (e[(e.Caddy = 1147287684)] = "Caddy"),
      (e[(e.Camper = 1876516712)] = "Camper"),
      (e[(e.Caracara2 = 2945871676)] = "Caracara2"),
      (e[(e.Caracara = 1254014755)] = "Caracara"),
      (e[(e.Carbonizzare = 2072687711)] = "Carbonizzare"),
      (e[(e.Carbonrs = 11251904)] = "Carbonrs"),
      (e[(e.Cargobob2 = 1621617168)] = "Cargobob2"),
      (e[(e.Cargobob3 = 1394036463)] = "Cargobob3"),
      (e[(e.Cargobob4 = 2025593404)] = "Cargobob4"),
      (e[(e.Cargobob = 4244420235)] = "Cargobob"),
      (e[(e.Cargoplane = 368211810)] = "Cargoplane"),
      (e[(e.Casco = 941800958)] = "Casco"),
      (e[(e.Cavalcade2 = 3505073125)] = "Cavalcade2"),
      (e[(e.Cavalcade = 2006918058)] = "Cavalcade"),
      (e[(e.Cerberus2 = 679453769)] = "Cerberus2"),
      (e[(e.Cerberus3 = 1909700336)] = "Cerberus3"),
      (e[(e.Cerberus = 3493417227)] = "Cerberus"),
      (e[(e.Cheburek = 3306466016)] = "Cheburek"),
      (e[(e.Cheetah2 = 223240013)] = "Cheetah2"),
      (e[(e.Cheetah = 2983812512)] = "Cheetah"),
      (e[(e.Chernobog = 3602674979)] = "Chernobog"),
      (e[(e.Chimera = 6774487)] = "Chimera"),
      (e[(e.Chino2 = 2933279331)] = "Chino2"),
      (e[(e.Chino = 349605904)] = "Chino"),
      (e[(e.Cliffhanger = 390201602)] = "Cliffhanger"),
      (e[(e.Clique = 2728360112)] = "Clique"),
      (e[(e.Club = 2196012677)] = "Club"),
      (e[(e.Coach = 2222034228)] = "Coach"),
      (e[(e.Cog552 = 704435172)] = "Cog552"),
      (e[(e.Cog55 = 906642318)] = "Cog55"),
      (e[(e.Cogcabrio = 330661258)] = "Cogcabrio"),
      (e[(e.Cognoscenti2 = 3690124666)] = "Cognoscenti2"),
      (e[(e.Cognoscenti = 2264796e3)] = "Cognoscenti"),
      (e[(e.Comet2 = 3249425686)] = "Comet2"),
      (e[(e.Comet3 = 2272483501)] = "Comet3"),
      (e[(e.Comet4 = 1561920505)] = "Comet4"),
      (e[(e.Comet5 = 661493923)] = "Comet5"),
      (e[(e.Contender = 683047626)] = "Contender"),
      (e[(e.Coquette2 = 1011753235)] = "Coquette2"),
      (e[(e.Coquette3 = 784565758)] = "Coquette3"),
      (e[(e.Coquette4 = 2566281822)] = "Coquette4"),
      (e[(e.Coquette = 108773431)] = "Coquette"),
      (e[(e.Cruiser = 448402357)] = "Cruiser"),
      (e[(e.Crusader = 321739290)] = "Crusader"),
      (e[(e.Cuban800 = 3650256867)] = "Cuban800"),
      (e[(e.Cutter = 3288047904)] = "Cutter"),
      (e[(e.Cyclone = 1392481335)] = "Cyclone"),
      (e[(e.Daemon2 = 2890830793)] = "Daemon2"),
      (e[(e.Daemon = 2006142190)] = "Daemon"),
      (e[(e.Deathbike2 = 2482017624)] = "Deathbike2"),
      (e[(e.Deathbike3 = 2920466844)] = "Deathbike3"),
      (e[(e.Deathbike = 4267640610)] = "Deathbike"),
      (e[(e.Defiler = 822018448)] = "Defiler"),
      (e[(e.Deluxo = 1483171323)] = "Deluxo"),
      (e[(e.Deveste = 1591739866)] = "Deveste"),
      (e[(e.Deviant = 1279262537)] = "Deviant"),
      (e[(e.Diablous2 = 1790834270)] = "Diablous2"),
      (e[(e.Diablous = 4055125828)] = "Diablous"),
      (e[(e.Dilettante2 = 1682114128)] = "Dilettante2"),
      (e[(e.Dilettante = 3164157193)] = "Dilettante"),
      (e[(e.Dinghy2 = 276773164)] = "Dinghy2"),
      (e[(e.Dinghy3 = 509498602)] = "Dinghy3"),
      (e[(e.Dinghy4 = 867467158)] = "Dinghy4"),
      (e[(e.Dinghy = 1033245328)] = "Dinghy"),
      (e[(e.Dloader = 1770332643)] = "Dloader"),
      (e[(e.Docktrailer = 2154757102)] = "Docktrailer"),
      (e[(e.Docktug = 3410276810)] = "Docktug"),
      (e[(e.Dodo = 3393804037)] = "Dodo"),
      (e[(e.Dominator2 = 3379262425)] = "Dominator2"),
      (e[(e.Dominator3 = 3308022675)] = "Dominator3"),
      (e[(e.Dominator4 = 3606777648)] = "Dominator4"),
      (e[(e.Dominator5 = 2919906639)] = "Dominator5"),
      (e[(e.Dominator6 = 3001042683)] = "Dominator6"),
      (e[(e.Dominator = 80636076)] = "Dominator"),
      (e[(e.Double = 2623969160)] = "Double"),
      (e[(e.Drafter = 686471183)] = "Drafter"),
      (e[(e.Dubsta2 = 3900892662)] = "Dubsta2"),
      (e[(e.Dubsta3 = 3057713523)] = "Dubsta3"),
      (e[(e.Dubsta = 1177543287)] = "Dubsta"),
      (e[(e.Dukes2 = 3968823444)] = "Dukes2"),
      (e[(e.Dukes3 = 2134119907)] = "Dukes3"),
      (e[(e.Dukes = 723973206)] = "Dukes"),
      (e[(e.Dump = 2164484578)] = "Dump"),
      (e[(e.Dune2 = 534258863)] = "Dune2"),
      (e[(e.Dune3 = 1897744184)] = "Dune3"),
      (e[(e.Dune4 = 3467805257)] = "Dune4"),
      (e[(e.Dune5 = 3982671785)] = "Dune5"),
      (e[(e.Dune = 2633113103)] = "Dune"),
      (e[(e.Duster = 970356638)] = "Duster"),
      (e[(e.Dynasty = 310284501)] = "Dynasty"),
      (e[(e.Elegy2 = 3728579874)] = "Elegy2"),
      (e[(e.Elegy = 196747873)] = "Elegy"),
      (e[(e.Ellie = 3027423925)] = "Ellie"),
      (e[(e.Emerus = 1323778901)] = "Emerus"),
      (e[(e.Emperor2 = 2411965148)] = "Emperor2"),
      (e[(e.Emperor3 = 3053254478)] = "Emperor3"),
      (e[(e.Emperor = 3609690755)] = "Emperor"),
      (e[(e.Enduro = 1753414259)] = "Enduro"),
      (e[(e.Entity2 = 2174267100)] = "Entity2"),
      (e[(e.Entityxf = 3003014393)] = "Entityxf"),
      (e[(e.Esskey = 2035069708)] = "Esskey"),
      (e[(e.Everon = 2538945576)] = "Everon"),
      (e[(e.Exemplar = 4289813342)] = "Exemplar"),
      (e[(e.F620 = 3703357e3)] = "F620"),
      (e[(e.Faction2 = 2504420315)] = "Faction2"),
      (e[(e.Faction3 = 2255212070)] = "Faction3"),
      (e[(e.Faction = 2175389151)] = "Faction"),
      (e[(e.Fagaloa = 1617472902)] = "Fagaloa"),
      (e[(e.Faggio2 = 55628203)] = "Faggio2"),
      (e[(e.Faggio3 = 3005788552)] = "Faggio3"),
      (e[(e.Faggio = 2452219115)] = "Faggio"),
      (e[(e.Fbi2 = 2647026068)] = "Fbi2"),
      (e[(e.Fbi = 1127131465)] = "Fbi"),
      (e[(e.Fcr2 = 3537231886)] = "Fcr2"),
      (e[(e.Fcr = 627535535)] = "Fcr"),
      (e[(e.Felon2 = 4205676014)] = "Felon2"),
      (e[(e.Felon = 3903372712)] = "Felon"),
      (e[(e.Feltzer2 = 2299640309)] = "Feltzer2"),
      (e[(e.Feltzer3 = 2728226064)] = "Feltzer3"),
      (e[(e.Firetruk = 1938952078)] = "Firetruk"),
      (e[(e.Fixter = 3458454463)] = "Fixter"),
      (e[(e.Flashgt = 3035832600)] = "Flashgt"),
      (e[(e.Flatbed = 1353720154)] = "Flatbed"),
      (e[(e.Fmj = 1426219628)] = "Fmj"),
      (e[(e.Forklift = 1491375716)] = "Forklift"),
      (e[(e.Formula2 = 2334210311)] = "Formula2"),
      (e[(e.Formula = 340154634)] = "Formula"),
      (e[(e.Fq2 = 3157435195)] = "Fq2"),
      (e[(e.Freecrawler = 4240635011)] = "Freecrawler"),
      (e[(e.Freight = 1030400667)] = "Freight"),
      (e[(e.Freightcar = 184361638)] = "Freightcar"),
      (e[(e.Freightcont1 = 920453016)] = "Freightcont1"),
      (e[(e.Freightcont2 = 240201337)] = "Freightcont2"),
      (e[(e.Freightgrain = 642617954)] = "Freightgrain"),
      (e[(e.Freighttrailer = 3517691494)] = "Freighttrailer"),
      (e[(e.Frogger2 = 1949211328)] = "Frogger2"),
      (e[(e.Frogger = 744705981)] = "Frogger"),
      (e[(e.Fugitive = 1909141499)] = "Fugitive"),
      (e[(e.Furia = 960812448)] = "Furia"),
      (e[(e.Furoregt = 3205927392)] = "Furoregt"),
      (e[(e.Fusilade = 499169875)] = "Fusilade"),
      (e[(e.Futo = 2016857647)] = "Futo"),
      (e[(e.Gargoyle = 741090084)] = "Gargoyle"),
      (e[(e.Gauntlet2 = 349315417)] = "Gauntlet2"),
      (e[(e.Gauntlet3 = 722226637)] = "Gauntlet3"),
      (e[(e.Gauntlet4 = 1934384720)] = "Gauntlet4"),
      (e[(e.Gauntlet5 = 2172320429)] = "Gauntlet5"),
      (e[(e.Gauntlet = 2494797253)] = "Gauntlet"),
      (e[(e.Gb200 = 1909189272)] = "Gb200"),
      (e[(e.Gburrito2 = 296357396)] = "Gburrito2"),
      (e[(e.Gburrito = 2549763894)] = "Gburrito"),
      (e[(e.Glendale2 = 3381377750)] = "Glendale2"),
      (e[(e.Glendale = 75131841)] = "Glendale"),
      (e[(e.Gp1 = 1234311532)] = "Gp1"),
      (e[(e.Graintrailer = 1019737494)] = "Graintrailer"),
      (e[(e.Granger = 2519238556)] = "Granger"),
      (e[(e.Gresley = 2751205197)] = "Gresley"),
      (e[(e.Gt500 = 2215179066)] = "Gt500"),
      (e[(e.Guardian = 2186977100)] = "Guardian"),
      (e[(e.Habanero = 884422927)] = "Habanero"),
      (e[(e.Hakuchou2 = 4039289119)] = "Hakuchou2"),
      (e[(e.Hakuchou = 1265391242)] = "Hakuchou"),
      (e[(e.Halftrack = 4262731174)] = "Halftrack"),
      (e[(e.Handler = 444583674)] = "Handler"),
      (e[(e.Hauler2 = 387748548)] = "Hauler2"),
      (e[(e.Hauler = 1518533038)] = "Hauler"),
      (e[(e.Havok = 2310691317)] = "Havok"),
      (e[(e.Hellion = 3932816511)] = "Hellion"),
      (e[(e.Hermes = 15219735)] = "Hermes"),
      (e[(e.Hexer = 301427732)] = "Hexer"),
      (e[(e.Hotknife = 37348240)] = "Hotknife"),
      (e[(e.Hotring = 1115909093)] = "Hotring"),
      (e[(e.Howard = 3287439187)] = "Howard"),
      (e[(e.Hunter = 4252008158)] = "Hunter"),
      (e[(e.Huntley = 486987393)] = "Huntley"),
      (e[(e.Hustler = 600450546)] = "Hustler"),
      (e[(e.Hydra = 970385471)] = "Hydra"),
      (e[(e.Imorgon = 3162245632)] = "Imorgon"),
      (e[(e.Impaler2 = 1009171724)] = "Impaler2"),
      (e[(e.Impaler3 = 2370166601)] = "Impaler3"),
      (e[(e.Impaler4 = 2550461639)] = "Impaler4"),
      (e[(e.Impaler = 3001042683)] = "Impaler"),
      (e[(e.Imperator2 = 1637620610)] = "Imperator2"),
      (e[(e.Imperator3 = 3539435063)] = "Imperator3"),
      (e[(e.Imperator = 444994115)] = "Imperator"),
      (e[(e.Infernus2 = 2889029532)] = "Infernus2"),
      (e[(e.Infernus = 418536135)] = "Infernus"),
      (e[(e.Ingot = 3005245074)] = "Ingot"),
      (e[(e.Innovation = 4135840458)] = "Innovation"),
      (e[(e.Insurgent2 = 2071877360)] = "Insurgent2"),
      (e[(e.Insurgent3 = 2370534026)] = "Insurgent3"),
      (e[(e.Insurgent = 2434067162)] = "Insurgent"),
      (e[(e.Intruder = 886934177)] = "Intruder"),
      (e[(e.Issi2 = 3117103977)] = "Issi2"),
      (e[(e.Issi3 = 931280609)] = "Issi3"),
      (e[(e.Issi4 = 628003514)] = "Issi4"),
      (e[(e.Issi5 = 1537277726)] = "Issi5"),
      (e[(e.Issi6 = 1239571361)] = "Issi6"),
      (e[(e.Issi7 = 1854776567)] = "Issi7"),
      (e[(e.Italigtb2 = 3812247419)] = "Italigtb2"),
      (e[(e.Italigtb = 2246633323)] = "Italigtb"),
      (e[(e.Italigto = 3963499524)] = "Italigto"),
      (e[(e.Jackal = 3670438162)] = "Jackal"),
      (e[(e.Jb7002 = 394110044)] = "Jb7002"),
      (e[(e.Jb700 = 1051415893)] = "Jb700"),
      (e[(e.Jester2 = 3188613414)] = "Jester2"),
      (e[(e.Jester3 = 4080061290)] = "Jester3"),
      (e[(e.Jester = 2997294755)] = "Jester"),
      (e[(e.Jet = 1058115860)] = "Jet"),
      (e[(e.Jetmax = 861409633)] = "Jetmax"),
      (e[(e.Journey = 4174679674)] = "Journey"),
      (e[(e.Jugular = 4086055493)] = "Jugular"),
      (e[(e.Kalahari = 92612664)] = "Kalahari"),
      (e[(e.Kamacho = 4173521127)] = "Kamacho"),
      (e[(e.Kanjo = 409049982)] = "Kanjo"),
      (e[(e.Khamelion = 544021352)] = "Khamelion"),
      (e[(e.Khanjali = 2859440138)] = "Khanjali"),
      (e[(e.Komoda = 3460613305)] = "Komoda"),
      (e[(e.Krieger = 3630826055)] = "Krieger"),
      (e[(e.Kuruma2 = 410882957)] = "Kuruma2"),
      (e[(e.Kuruma = 2922118804)] = "Kuruma"),
      (e[(e.Landstalker2 = 3456868130)] = "Landstalker2"),
      (e[(e.Landstalker = 1269098716)] = "Landstalker"),
      (e[(e.Lazer = 3013282534)] = "Lazer"),
      (e[(e.Le7b = 3062131285)] = "Le7b"),
      (e[(e.Lectro = 640818791)] = "Lectro"),
      (e[(e.Lguard = 469291905)] = "Lguard"),
      (e[(e.Limo2 = 4180339789)] = "Limo2"),
      (e[(e.Locust = 3353694737)] = "Locust"),
      (e[(e.Lurcher = 2068293287)] = "Lurcher"),
      (e[(e.Luxor2 = 3080673438)] = "Luxor2"),
      (e[(e.Luxor = 621481054)] = "Luxor"),
      (e[(e.Lynx = 482197771)] = "Lynx"),
      (e[(e.Mamba = 2634021974)] = "Mamba"),
      (e[(e.Mammatus = 2548391185)] = "Mammatus"),
      (e[(e.Manana2 = 1717532765)] = "Manana2"),
      (e[(e.Manana = 2170765704)] = "Manana"),
      (e[(e.Manchez = 2771538552)] = "Manchez"),
      (e[(e.Marquis = 3251507587)] = "Marquis"),
      (e[(e.Marshall = 1233534620)] = "Marshall"),
      (e[(e.Massacro2 = 3663206819)] = "Massacro2"),
      (e[(e.Massacro = 4152024626)] = "Massacro"),
      (e[(e.Maverick = 2634305738)] = "Maverick"),
      (e[(e.Menacer = 2044532910)] = "Menacer"),
      (e[(e.Mesa2 = 3546958660)] = "Mesa2"),
      (e[(e.Mesa3 = 2230595153)] = "Mesa3"),
      (e[(e.Mesa = 914654722)] = "Mesa"),
      (e[(e.Metrotrain = 868868440)] = "Metrotrain"),
      (e[(e.Michelli = 1046206681)] = "Michelli"),
      (e[(e.Microlight = 2531412055)] = "Microlight"),
      (e[(e.Miljet = 165154707)] = "Miljet"),
      (e[(e.Minitank = 3040635986)] = "Minitank"),
      (e[(e.Minivan2 = 3168702960)] = "Minivan2"),
      (e[(e.Minivan = 3984502180)] = "Minivan"),
      (e[(e.Mixer2 = 475220373)] = "Mixer2"),
      (e[(e.Mixer = 3510150843)] = "Mixer"),
      (e[(e.Mogul = 3545667823)] = "Mogul"),
      (e[(e.Molotok = 1565978651)] = "Molotok"),
      (e[(e.Monroe = 3861591579)] = "Monroe"),
      (e[(e.Monster3 = 1721676810)] = "Monster3"),
      (e[(e.Monster4 = 840387324)] = "Monster4"),
      (e[(e.Monster5 = 3579220348)] = "Monster5"),
      (e[(e.Monster = 3449006043)] = "Monster"),
      (e[(e.Moonbeam2 = 1896491931)] = "Moonbeam2"),
      (e[(e.Moonbeam = 525509695)] = "Moonbeam"),
      (e[(e.Mower = 1783355638)] = "Mower"),
      (e[(e.Mule2 = 3244501995)] = "Mule2"),
      (e[(e.Mule3 = 2242229361)] = "Mule3"),
      (e[(e.Mule4 = 1945374990)] = "Mule4"),
      (e[(e.Mule = 904750859)] = "Mule"),
      (e[(e.Nebula = 3412338231)] = "Nebula"),
      (e[(e.Nemesis = 3660088182)] = "Nemesis"),
      (e[(e.Neo = 2674840994)] = "Neo"),
      (e[(e.Neon = 2445973230)] = "Neon"),
      (e[(e.Nero2 = 1093792632)] = "Nero2"),
      (e[(e.Nero = 1034187331)] = "Nero"),
      (e[(e.Nightblade = 2688780135)] = "Nightblade"),
      (e[(e.Nightshade = 2351681756)] = "Nightshade"),
      (e[(e.Nightshark = 433954513)] = "Nightshark"),
      (e[(e.Nimbus = 2999939664)] = "Nimbus"),
      (e[(e.Ninef2 = 2833484545)] = "Ninef2"),
      (e[(e.Ninef = 1032823388)] = "Ninef"),
      (e[(e.Nokota = 1036591958)] = "Nokota"),
      (e[(e.Novak = 2465530446)] = "Novak"),
      (e[(e.Omnis = 3517794615)] = "Omnis"),
      (e[(e.Openwheel1 = 1492612435)] = "Openwheel1"),
      (e[(e.Openwheel2 = 1181339704)] = "Openwheel2"),
      (e[(e.Oppressor2 = 2069146067)] = "Oppressor2"),
      (e[(e.Oppressor = 884483972)] = "Oppressor"),
      (e[(e.Oracle2 = 3783366066)] = "Oracle2"),
      (e[(e.Oracle = 1348744438)] = "Oracle"),
      (e[(e.Osiris = 1987142870)] = "Osiris"),
      (e[(e.Outlaw = 408825843)] = "Outlaw"),
      (e[(e.Packer = 569305213)] = "Packer"),
      (e[(e.Panto = 3863274624)] = "Panto"),
      (e[(e.Paradise = 1488164764)] = "Paradise"),
      (e[(e.Paragon2 = 1416466158)] = "Paragon2"),
      (e[(e.Paragon = 3847255899)] = "Paragon"),
      (e[(e.Pariah = 867799010)] = "Pariah"),
      (e[(e.Patriot2 = 3874056184)] = "Patriot2"),
      (e[(e.Patriot = 3486509883)] = "Patriot"),
      (e[(e.Pbus2 = 345756458)] = "Pbus2"),
      (e[(e.Pbus = 2287941233)] = "Pbus"),
      (e[(e.Pcj = 3385765638)] = "Pcj"),
      (e[(e.Penetrator = 2536829930)] = "Penetrator"),
      (e[(e.Penumbra2 = 3663644634)] = "Penumbra2"),
      (e[(e.Penumbra = 3917501776)] = "Penumbra"),
      (e[(e.Peyote2 = 2490551588)] = "Peyote2"),
      (e[(e.Peyote3 = 1107404867)] = "Peyote3"),
      (e[(e.Peyote = 1830407356)] = "Peyote"),
      (e[(e.Pfister811 = 2465164804)] = "Pfister811"),
      (e[(e.Phantom2 = 2645431192)] = "Phantom2"),
      (e[(e.Phantom3 = 177270108)] = "Phantom3"),
      (e[(e.Phantom = 2157618379)] = "Phantom"),
      (e[(e.Phoenix = 2199527893)] = "Phoenix"),
      (e[(e.Picador = 1507916787)] = "Picador"),
      (e[(e.Pigalle = 1078682497)] = "Pigalle"),
      (e[(e.Police2 = 2667966721)] = "Police2"),
      (e[(e.Police3 = 1912215274)] = "Police3"),
      (e[(e.Police4 = 2321795001)] = "Police4"),
      (e[(e.Police = 2046537925)] = "Police"),
      (e[(e.Policeb = 4260343491)] = "Policeb"),
      (e[(e.Policeold1 = 2758042359)] = "Policeold1"),
      (e[(e.Policeold2 = 2515846680)] = "Policeold2"),
      (e[(e.Policet = 456714581)] = "Policet"),
      (e[(e.Polmav = 353883353)] = "Polmav"),
      (e[(e.Pony2 = 943752001)] = "Pony2"),
      (e[(e.Pony = 4175309224)] = "Pony"),
      (e[(e.Pounder2 = 1653666139)] = "Pounder2"),
      (e[(e.Pounder = 2112052861)] = "Pounder"),
      (e[(e.Prairie = 2844316578)] = "Prairie"),
      (e[(e.Pranger = 741586030)] = "Pranger"),
      (e[(e.Predator = 3806844075)] = "Predator"),
      (e[(e.Premier = 2411098011)] = "Premier"),
      (e[(e.Primo2 = 2254540506)] = "Primo2"),
      (e[(e.Primo = 3144368207)] = "Primo"),
      (e[(e.Proptrailer = 356391690)] = "Proptrailer"),
      (e[(e.Prototipo = 2123327359)] = "Prototipo"),
      (e[(e.Pyro = 2908775872)] = "Pyro"),
      (e[(e.Radi = 2643899483)] = "Radi"),
      (e[(e.Raiden = 2765724541)] = "Raiden"),
      (e[(e.Raketrailer = 390902130)] = "Raketrailer"),
      (e[(e.Rallytruck = 2191146052)] = "Rallytruck"),
      (e[(e.Rancherxl2 = 1933662059)] = "Rancherxl2"),
      (e[(e.Rancherxl = 1645267888)] = "Rancherxl"),
      (e[(e.Rapidgt2 = 1737773231)] = "Rapidgt2"),
      (e[(e.Rapidgt3 = 2049897956)] = "Rapidgt3"),
      (e[(e.Rapidgt = 2360515092)] = "Rapidgt"),
      (e[(e.Raptor = 3620039993)] = "Raptor"),
      (e[(e.Ratbike = 1873600305)] = "Ratbike"),
      (e[(e.Ratloader2 = 3705788919)] = "Ratloader2"),
      (e[(e.Ratloader = 3627815886)] = "Ratloader"),
      (e[(e.Rcbandito = 4008920556)] = "Rcbandito"),
      (e[(e.Reaper = 234062309)] = "Reaper"),
      (e[(e.Rebel2 = 2249373259)] = "Rebel2"),
      (e[(e.Rebel = 3087195462)] = "Rebel"),
      (e[(e.Rebla = 83136452)] = "Rebla"),
      (e[(e.Regina = 4280472072)] = "Regina"),
      (e[(e.Rentalbus = 3196165219)] = "Rentalbus"),
      (e[(e.Retinue2 = 2031587082)] = "Retinue2"),
      (e[(e.Retinue = 1841130506)] = "Retinue"),
      (e[(e.Revolter = 3884762073)] = "Revolter"),
      (e[(e.Rhapsody = 841808271)] = "Rhapsody"),
      (e[(e.Rhino = 782665360)] = "Rhino"),
      (e[(e.Riata = 2762269779)] = "Riata"),
      (e[(e.Riot2 = 2601952180)] = "Riot2"),
      (e[(e.Riot = 3089277354)] = "Riot"),
      (e[(e.Ripley = 3448987385)] = "Ripley"),
      (e[(e.Rocoto = 2136773105)] = "Rocoto"),
      (e[(e.Rogue = 3319621991)] = "Rogue"),
      (e[(e.Romero = 627094268)] = "Romero"),
      (e[(e.Rrocket = 916547552)] = "Rrocket"),
      (e[(e.Rubble = 2589662668)] = "Rubble"),
      (e[(e.Ruffian = 3401388520)] = "Ruffian"),
      (e[(e.Ruiner2 = 941494461)] = "Ruiner2"),
      (e[(e.Ruiner3 = 777714999)] = "Ruiner3"),
      (e[(e.Ruiner = 4067225593)] = "Ruiner"),
      (e[(e.Rumpo2 = 2518351607)] = "Rumpo2"),
      (e[(e.Rumpo3 = 1475773103)] = "Rumpo3"),
      (e[(e.Rumpo = 1162065741)] = "Rumpo"),
      (e[(e.Ruston = 719660200)] = "Ruston"),
      (e[(e.S80 = 3970348707)] = "S80"),
      (e[(e.Sabregt2 = 223258115)] = "Sabregt2"),
      (e[(e.Sabregt = 2609945748)] = "Sabregt"),
      (e[(e.Sadler2 = 734217681)] = "Sadler2"),
      (e[(e.Sadler = 3695398481)] = "Sadler"),
      (e[(e.Sanchez2 = 2841686334)] = "Sanchez2"),
      (e[(e.Sanchez = 788045382)] = "Sanchez"),
      (e[(e.Sanctus = 1491277511)] = "Sanctus"),
      (e[(e.Sandking2 = 989381445)] = "Sandking2"),
      (e[(e.Sandking = 3105951696)] = "Sandking"),
      (e[(e.Savage = 4212341271)] = "Savage"),
      (e[(e.Savestra = 903794909)] = "Savestra"),
      (e[(e.Sc1 = 1352136073)] = "Sc1"),
      (e[(e.Scarab2 = 1542143200)] = "Scarab2"),
      (e[(e.Scarab3 = 3715219435)] = "Scarab3"),
      (e[(e.Scarab = 3147997943)] = "Scarab"),
      (e[(e.Schafter2 = 3039514899)] = "Schafter2"),
      (e[(e.Schafter3 = 2809443750)] = "Schafter3"),
      (e[(e.Schafter4 = 1489967196)] = "Schafter4"),
      (e[(e.Schafter5 = 3406724313)] = "Schafter5"),
      (e[(e.Schafter6 = 1922255844)] = "Schafter6"),
      (e[(e.Schlagen = 3787471536)] = "Schlagen"),
      (e[(e.Schwarzer = 3548084598)] = "Schwarzer"),
      (e[(e.Scorcher = 4108429845)] = "Scorcher"),
      (e[(e.Scramjet = 3656405053)] = "Scramjet"),
      (e[(e.Scrap = 2594165727)] = "Scrap"),
      (e[(e.Seabreeze = 3902291871)] = "Seabreeze"),
      (e[(e.Seashark2 = 3678636260)] = "Seashark2"),
      (e[(e.Seashark3 = 3983945033)] = "Seashark3"),
      (e[(e.Seashark = 3264692260)] = "Seashark"),
      (e[(e.Seasparrow = 3568198617)] = "Seasparrow"),
      (e[(e.Seminole2 = 2484160806)] = "Seminole2"),
      (e[(e.Seminole = 1221512915)] = "Seminole"),
      (e[(e.Sentinel2 = 873639469)] = "Sentinel2"),
      (e[(e.Sentinel3 = 1104234922)] = "Sentinel3"),
      (e[(e.Sentinel = 1349725314)] = "Sentinel"),
      (e[(e.Serrano = 1337041428)] = "Serrano"),
      (e[(e.Seven70 = 2537130571)] = "Seven70"),
      (e[(e.Shamal = 3080461301)] = "Shamal"),
      (e[(e.Sheava = 819197656)] = "Sheava"),
      (e[(e.Sheriff2 = 1922257928)] = "Sheriff2"),
      (e[(e.Sheriff = 2611638396)] = "Sheriff"),
      (e[(e.Shotaro = 3889340782)] = "Shotaro"),
      (e[(e.Skylift = 1044954915)] = "Skylift"),
      (e[(e.Slamvan2 = 833469436)] = "Slamvan2"),
      (e[(e.Slamvan3 = 1119641113)] = "Slamvan3"),
      (e[(e.Slamvan4 = 2233918197)] = "Slamvan4"),
      (e[(e.Slamvan5 = 373261600)] = "Slamvan5"),
      (e[(e.Slamvan6 = 1742022738)] = "Slamvan6"),
      (e[(e.Slamvan = 729783779)] = "Slamvan"),
      (e[(e.Sovereign = 743478836)] = "Sovereign"),
      (e[(e.Specter2 = 1074745671)] = "Specter2"),
      (e[(e.Specter = 1886268224)] = "Specter"),
      (e[(e.Speeder2 = 437538602)] = "Speeder2"),
      (e[(e.Speeder = 231083307)] = "Speeder"),
      (e[(e.Speedo2 = 728614474)] = "Speedo2"),
      (e[(e.Speedo4 = 219613597)] = "Speedo4"),
      (e[(e.Speedo = 3484649228)] = "Speedo"),
      (e[(e.Squalo = 400514754)] = "Squalo"),
      (e[(e.Stafford = 321186144)] = "Stafford"),
      (e[(e.Stalion2 = 3893323758)] = "Stalion2"),
      (e[(e.Stalion = 1923400478)] = "Stalion"),
      (e[(e.Stanier = 2817386317)] = "Stanier"),
      (e[(e.Starling = 2594093022)] = "Starling"),
      (e[(e.Stinger = 1545842587)] = "Stinger"),
      (e[(e.Stingergt = 2196019706)] = "Stingergt"),
      (e[(e.Stockade3 = 4080511798)] = "Stockade3"),
      (e[(e.Stockade = 1747439474)] = "Stockade"),
      (e[(e.Stratum = 1723137093)] = "Stratum"),
      (e[(e.Streiter = 1741861769)] = "Streiter"),
      (e[(e.Stretch = 2333339779)] = "Stretch"),
      (e[(e.Strikeforce = 1692272545)] = "Strikeforce"),
      (e[(e.Stromberg = 886810209)] = "Stromberg"),
      (e[(e.Stryder = 301304410)] = "Stryder"),
      (e[(e.Stunt = 2172210288)] = "Stunt"),
      (e[(e.Submersible2 = 3228633070)] = "Submersible2"),
      (e[(e.Submersible = 771711535)] = "Submersible"),
      (e[(e.Sugoi = 987469656)] = "Sugoi"),
      (e[(e.Sultan2 = 872704284)] = "Sultan2"),
      (e[(e.Sultan = 970598228)] = "Sultan"),
      (e[(e.Sultanrs = 3999278268)] = "Sultanrs"),
      (e[(e.Suntrap = 4012021193)] = "Suntrap"),
      (e[(e.Superd = 1123216662)] = "Superd"),
      (e[(e.Supervolito2 = 2623428164)] = "Supervolito2"),
      (e[(e.Supervolito = 710198397)] = "Supervolito"),
      (e[(e.Surano = 384071873)] = "Surano"),
      (e[(e.Surfer2 = 2983726598)] = "Surfer2"),
      (e[(e.Surfer = 699456151)] = "Surfer"),
      (e[(e.Surge = 2400073108)] = "Surge"),
      (e[(e.Swift2 = 1075432268)] = "Swift2"),
      (e[(e.Swift = 3955379698)] = "Swift"),
      (e[(e.Swinger = 500482303)] = "Swinger"),
      (e[(e.T20 = 1663218586)] = "T20"),
      (e[(e.Taco = 1951180813)] = "Taco"),
      (e[(e.Tailgater = 3286105550)] = "Tailgater"),
      (e[(e.Taipan = 3160260734)] = "Taipan"),
      (e[(e.Tampa2 = 3223586949)] = "Tampa2"),
      (e[(e.Tampa3 = 3084515313)] = "Tampa3"),
      (e[(e.Tampa = 972671128)] = "Tampa"),
      (e[(e.Tanker2 = 1956216962)] = "Tanker2"),
      (e[(e.Tanker = 3564062519)] = "Tanker"),
      (e[(e.Tankercar = 586013744)] = "Tankercar"),
      (e[(e.Taxi = 3338918751)] = "Taxi"),
      (e[(e.Technical2 = 1180875963)] = "Technical2"),
      (e[(e.Technical3 = 1356124575)] = "Technical3"),
      (e[(e.Technical = 2198148358)] = "Technical"),
      (e[(e.Tempesta = 272929391)] = "Tempesta"),
      (e[(e.Terbyte = 2306538597)] = "Terbyte"),
      (e[(e.Tezeract = 1031562256)] = "Tezeract"),
      (e[(e.Thrax = 1044193113)] = "Thrax"),
      (e[(e.Thrust = 1836027715)] = "Thrust"),
      (e[(e.Thruster = 1489874736)] = "Thruster"),
      (e[(e.Tigon = 2936769864)] = "Tigon"),
      (e[(e.Tiptruck2 = 3347205726)] = "Tiptruck2"),
      (e[(e.Tiptruck = 48339065)] = "Tiptruck"),
      (e[(e.Titan = 1981688531)] = "Titan"),
      (e[(e.Torero = 1504306544)] = "Torero"),
      (e[(e.Tornado2 = 1531094468)] = "Tornado2"),
      (e[(e.Tornado3 = 1762279763)] = "Tornado3"),
      (e[(e.Tornado4 = 2261744861)] = "Tornado4"),
      (e[(e.Tornado5 = 2497353967)] = "Tornado5"),
      (e[(e.Tornado6 = 2736567667)] = "Tornado6"),
      (e[(e.Tornado = 464687292)] = "Tornado"),
      (e[(e.Toro2 = 908897389)] = "Toro2"),
      (e[(e.Toro = 1070967343)] = "Toro"),
      (e[(e.Toros = 3126015148)] = "Toros"),
      (e[(e.Tourbus = 1941029835)] = "Tourbus"),
      (e[(e.Towtruck2 = 3852654278)] = "Towtruck2"),
      (e[(e.Towtruck = 2971866336)] = "Towtruck"),
      (e[(e.Tr2 = 2078290630)] = "Tr2"),
      (e[(e.Tr3 = 1784254509)] = "Tr3"),
      (e[(e.Tr4 = 2091594960)] = "Tr4"),
      (e[(e.Tractor2 = 2218488798)] = "Tractor2"),
      (e[(e.Tractor3 = 1445631933)] = "Tractor3"),
      (e[(e.Tractor = 1641462412)] = "Tractor"),
      (e[(e.Trailerlarge = 1502869817)] = "Trailerlarge"),
      (e[(e.Trailerlogs = 2016027501)] = "Trailerlogs"),
      (e[(e.Trailers2 = 2715434129)] = "Trailers2"),
      (e[(e.Trailers3 = 2236089197)] = "Trailers3"),
      (e[(e.Trailers4 = 3194418602)] = "Trailers4"),
      (e[(e.Trailers = 3417488910)] = "Trailers"),
      (e[(e.Trailersmall2 = 2413121211)] = "Trailersmall2"),
      (e[(e.Trailersmall = 712162987)] = "Trailersmall"),
      (e[(e.Trash2 = 3039269212)] = "Trash2"),
      (e[(e.Trash = 1917016601)] = "Trash"),
      (e[(e.Trflat = 2942498482)] = "Trflat"),
      (e[(e.Tribike2 = 3061159916)] = "Tribike2"),
      (e[(e.Tribike3 = 3894672200)] = "Tribike3"),
      (e[(e.Tribike = 1127861609)] = "Tribike"),
      (e[(e.Trophytruck2 = 3631668194)] = "Trophytruck2"),
      (e[(e.Trophytruck = 101905590)] = "Trophytruck"),
      (e[(e.Tropic2 = 1448677353)] = "Tropic2"),
      (e[(e.Tropic = 290013743)] = "Tropic"),
      (e[(e.Tropos = 1887331236)] = "Tropos"),
      (e[(e.Tug = 2194326579)] = "Tug"),
      (e[(e.Tula = 1043222410)] = "Tula"),
      (e[(e.Tulip = 1456744817)] = "Tulip"),
      (e[(e.Turismo2 = 3312836369)] = "Turismo2"),
      (e[(e.Turismor = 408192225)] = "Turismor"),
      (e[(e.Tvtrailer = 2524324030)] = "Tvtrailer"),
      (e[(e.Tyrant = 3918533058)] = "Tyrant"),
      (e[(e.Tyrus = 2067820283)] = "Tyrus"),
      (e[(e.Utillitruck2 = 887537515)] = "Utillitruck2"),
      (e[(e.Utillitruck3 = 2132890591)] = "Utillitruck3"),
      (e[(e.Utillitruck = 516990260)] = "Utillitruck"),
      (e[(e.Vacca = 338562499)] = "Vacca"),
      (e[(e.Vader = 4154065143)] = "Vader"),
      (e[(e.Vagner = 1939284556)] = "Vagner"),
      (e[(e.Vagrant = 740289177)] = "Vagrant"),
      (e[(e.Valkyrie2 = 1543134283)] = "Valkyrie2"),
      (e[(e.Valkyrie = 2694714877)] = "Valkyrie"),
      (e[(e.Vamos = 4245851645)] = "Vamos"),
      (e[(e.Velum2 = 1077420264)] = "Velum2"),
      (e[(e.Velum = 2621610858)] = "Velum"),
      (e[(e.Verlierer2 = 1102544804)] = "Verlierer2"),
      (e[(e.Vestra = 1341619767)] = "Vestra"),
      (e[(e.Vigero = 3469130167)] = "Vigero"),
      (e[(e.Vigilante = 3052358707)] = "Vigilante"),
      (e[(e.Vindicator = 2941886209)] = "Vindicator"),
      (e[(e.Virgo2 = 3395457658)] = "Virgo2"),
      (e[(e.Virgo3 = 16646064)] = "Virgo3"),
      (e[(e.Virgo = 3796912450)] = "Virgo"),
      (e[(e.Viseris = 3903371924)] = "Viseris"),
      (e[(e.Visione = 3296789504)] = "Visione"),
      (e[(e.Volatol = 447548909)] = "Volatol"),
      (e[(e.Volatus = 2449479409)] = "Volatus"),
      (e[(e.Voltic2 = 989294410)] = "Voltic2"),
      (e[(e.Voltic = 2672523198)] = "Voltic"),
      (e[(e.Voodoo2 = 523724515)] = "Voodoo2"),
      (e[(e.Voodoo = 2006667053)] = "Voodoo"),
      (e[(e.Vortex = 3685342204)] = "Vortex"),
      (e[(e.Vstr = 1456336509)] = "Vstr"),
      (e[(e.Warrener = 1373123368)] = "Warrener"),
      (e[(e.Washington = 1777363799)] = "Washington"),
      (e[(e.Wastelander = 2382949506)] = "Wastelander"),
      (e[(e.Windsor2 = 2364918497)] = "Windsor2"),
      (e[(e.Windsor = 1581459400)] = "Windsor"),
      (e[(e.Wolfsbane = 3676349299)] = "Wolfsbane"),
      (e[(e.Xa21 = 917809321)] = "Xa21"),
      (e[(e.Xls2 = 3862958888)] = "Xls2"),
      (e[(e.Xls = 1203490606)] = "Xls"),
      (e[(e.Yosemite2 = 1693751655)] = "Yosemite2"),
      (e[(e.Yosemite3 = 67753863)] = "Yosemite3"),
      (e[(e.Yosemite = 1871995513)] = "Yosemite"),
      (e[(e.Youga2 = 1026149675)] = "Youga2"),
      (e[(e.Youga3 = 1802742206)] = "Youga3"),
      (e[(e.Youga = 65402552)] = "Youga"),
      (e[(e.Z190 = 838982985)] = "Z190"),
      (e[(e.Zentorno = 2891838741)] = "Zentorno"),
      (e[(e.Zhaba = 1284356689)] = "Zhaba"),
      (e[(e.Zion2 = 3101863448)] = "Zion2"),
      (e[(e.Zion3 = 1862507111)] = "Zion3"),
      (e[(e.Zion = 3172678083)] = "Zion"),
      (e[(e.Zombiea = 3285698347)] = "Zombiea"),
      (e[(e.Zombieb = 3724934023)] = "Zombieb"),
      (e[(e.Zorrusso = 3612858749)] = "Zorrusso"),
      (e[(e.Zr3802 = 3188846534)] = "Zr3802"),
      (e[(e.Zr3803 = 2816263004)] = "Zr3803"),
      (e[(e.Zr380 = 540101442)] = "Zr380"),
      (e[(e.Ztype = 758895617)] = "Ztype");
  })(h_ || (h_ = {}));
class E_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (this.classMenus = []),
      this.addUserInputItem(
        (this.customVehicleItem = new At("Spawn Custom Vehicle")),
        async () => C_.create(d(await t_.getUserInput()))
      ),
      w_
        .getValues(m_)
        .forEach((e) =>
          this.classMenus.push(new v_(this, Ke("VEH_CLASS_" + e), +e))
        ),
      w_
        .getValues(h_)
        .forEach((e) => this.getVehicleClassMenu(Xe(+e)).addVehicle(+e)),
      this.classMenus.forEach((e) => M_.sortMenuItems(e.menuObject));
  }
  getVehicleClassMenu(e) {
    return this.classMenus.find((t) => t.vehicleClass == e);
  }
}
class v_ extends f_ {
  constructor(e, t, _) {
    super(e, t), (this.vehicleClass = _);
  }
  addVehicle(e) {
    let t = new At(Ke(Je(e)));
    this.addItem(t, () => C_.create(e));
  }
}
!(function (e) {
  (e[(e.AMMO_PISTOL = 1950175060)] = "AMMO_PISTOL"),
    (e[(e.AMMO_SMG = 1820140472)] = "AMMO_SMG"),
    (e[(e.AMMO_RIFLE = 218444191)] = "AMMO_RIFLE"),
    (e[(e.AMMO_MG = 1788949567)] = "AMMO_MG"),
    (e[(e.AMMO_SHOTGUN = 2416459067)] = "AMMO_SHOTGUN"),
    (e[(e.AMMO_STUNGUN = 2955849184)] = "AMMO_STUNGUN"),
    (e[(e.AMMO_SNIPER = 1285032059)] = "AMMO_SNIPER"),
    (e[(e.AMMO_SNIPER_REMOTE = 4275731760)] = "AMMO_SNIPER_REMOTE"),
    (e[(e.AMMO_GRENADELAUNCHER = 1003267566)] = "AMMO_GRENADELAUNCHER"),
    (e[(e.AMMO_GRENADELAUNCHER_SMOKE = 826266432)] =
      "AMMO_GRENADELAUNCHER_SMOKE"),
    (e[(e.AMMO_RPG = 1742569970)] = "AMMO_RPG"),
    (e[(e.AMMO_STINGER = 2437710138)] = "AMMO_STINGER"),
    (e[(e.AMMO_MINIGUN = 2680539266)] = "AMMO_MINIGUN"),
    (e[(e.AMMO_GRENADE = 1003688881)] = "AMMO_GRENADE"),
    (e[(e.AMMO_STICKYBOMB = 1411692055)] = "AMMO_STICKYBOMB"),
    (e[(e.AMMO_SMOKEGRENADE = 3859679398)] = "AMMO_SMOKEGRENADE"),
    (e[(e.AMMO_BZGAS = 2608103076)] = "AMMO_BZGAS"),
    (e[(e.AMMO_MOLOTOV = 1446246869)] = "AMMO_MOLOTOV"),
    (e[(e.AMMO_FIREEXTINGUISHER = 1359393852)] = "AMMO_FIREEXTINGUISHER"),
    (e[(e.AMMO_PETROLCAN = 3395492001)] = "AMMO_PETROLCAN"),
    (e[(e.AMMO_BALL = 4287981158)] = "AMMO_BALL"),
    (e[(e.AMMO_FLARE = 1808594799)] = "AMMO_FLARE"),
    (e[(e.AMMO_TANK = 2820358688)] = "AMMO_TANK"),
    (e[(e.AMMO_SPACE_ROCKET = 527765612)] = "AMMO_SPACE_ROCKET"),
    (e[(e.AMMO_PLANE_ROCKET = 1198741878)] = "AMMO_PLANE_ROCKET"),
    (e[(e.AMMO_PLAYER_LASER = 4129609738)] = "AMMO_PLAYER_LASER"),
    (e[(e.AMMO_ENEMY_LASER = 2922292364)] = "AMMO_ENEMY_LASER"),
    (e[(e.AMMO_BIRD_CRAP = 1117307028)] = "AMMO_BIRD_CRAP"),
    (e[(e.AMMO_PIPEBOMB = 357983224)] = "AMMO_PIPEBOMB"),
    (e[(e.AMMO_HOMINGLAUNCHER = 2568293933)] = "AMMO_HOMINGLAUNCHER"),
    (e[(e.AMMO_PROXMINE = 2938243239)] = "AMMO_PROXMINE"),
    (e[(e.AMMO_SNOWBALL = 2182627693)] = "AMMO_SNOWBALL"),
    (e[(e.AMMO_RIFLE_ARMORPIERCING = 423744068)] = "AMMO_RIFLE_ARMORPIERCING"),
    (e[(e.AMMO_RIFLE_FMJ = 1586900444)] = "AMMO_RIFLE_FMJ"),
    (e[(e.AMMO_RIFLE_INCENDIARY = 2465278413)] = "AMMO_RIFLE_INCENDIARY"),
    (e[(e.AMMO_RIFLE_TRACER = 2954464607)] = "AMMO_RIFLE_TRACER"),
    (e[(e.AMMO_SNIPER_ARMORPIERCING = 2797387177)] =
      "AMMO_SNIPER_ARMORPIERCING"),
    (e[(e.AMMO_SNIPER_FMJ = 4126262806)] = "AMMO_SNIPER_FMJ"),
    (e[(e.AMMO_SNIPER_INCENDIARY = 796697766)] = "AMMO_SNIPER_INCENDIARY"),
    (e[(e.AMMO_SNIPER_TRACER = 1184011213)] = "AMMO_SNIPER_TRACER"),
    (e[(e.AMMO_SHOTGUN_ARMORPIERCING = 1923327840)] =
      "AMMO_SHOTGUN_ARMORPIERCING"),
    (e[(e.AMMO_SHOTGUN_EXPLOSIVE = 3985664341)] = "AMMO_SHOTGUN_EXPLOSIVE"),
    (e[(e.AMMO_SHOTGUN_HOLLOWPOINT = 2089185906)] = "AMMO_SHOTGUN_HOLLOWPOINT"),
    (e[(e.AMMO_SHOTGUN_INCENDIARY = 3685537684)] = "AMMO_SHOTGUN_INCENDIARY"),
    (e[(e.AMMO_PISTOL_FMJ = 3162174467)] = "AMMO_PISTOL_FMJ"),
    (e[(e.AMMO_PISTOL_HOLLOWPOINT = 3458447638)] = "AMMO_PISTOL_HOLLOWPOINT"),
    (e[(e.AMMO_PISTOL_INCENDIARY = 2878251257)] = "AMMO_PISTOL_INCENDIARY"),
    (e[(e.AMMO_PISTOL_TRACER = 3101486635)] = "AMMO_PISTOL_TRACER"),
    (e[(e.AMMO_MG_ARMORPIERCING = 784861712)] = "AMMO_MG_ARMORPIERCING"),
    (e[(e.AMMO_MG_FMJ = 234717365)] = "AMMO_MG_FMJ"),
    (e[(e.AMMO_MG_INCENDIARY = 1461941360)] = "AMMO_MG_INCENDIARY"),
    (e[(e.AMMO_MG_TRACER = 1226421483)] = "AMMO_MG_TRACER"),
    (e[(e.AMMO_SNIPER_EXPLOSIVE = 2916183225)] = "AMMO_SNIPER_EXPLOSIVE"),
    (e[(e.AMMO_SMG_FMJ = 758230489)] = "AMMO_SMG_FMJ"),
    (e[(e.AMMO_SMG_HOLLOWPOINT = 670318226)] = "AMMO_SMG_HOLLOWPOINT"),
    (e[(e.AMMO_SMG_INCENDIARY = 3962074599)] = "AMMO_SMG_INCENDIARY"),
    (e[(e.AMMO_SMG_TRACER = 1569785553)] = "AMMO_SMG_TRACER"),
    (e[(e.AMMO_FLAREGUN = 1173416293)] = "AMMO_FLAREGUN"),
    (e[(e.AMMO_FIREWORK = 2938367503)] = "AMMO_FIREWORK"),
    (e[(e.AMMO_RAILGUN = 2034517757)] = "AMMO_RAILGUN");
})(p_ || (p_ = {})),
  (function (e) {
    (e[(e.Dagger = 2460120199)] = "Dagger"),
      (e[(e.Bat = 2508868239)] = "Bat"),
      (e[(e.Bottle = 4192643659)] = "Bottle"),
      (e[(e.Crowbar = 2227010557)] = "Crowbar"),
      (e[(e.Unarmed = 2725352035)] = "Unarmed"),
      (e[(e.Flashlight = 2343591895)] = "Flashlight"),
      (e[(e.GolfClub = 1141786504)] = "GolfClub"),
      (e[(e.Hammer = 1317494643)] = "Hammer"),
      (e[(e.Hatchet = 4191993645)] = "Hatchet"),
      (e[(e.KnuckleDusters = 3638508604)] = "KnuckleDusters"),
      (e[(e.Knife = 2578778090)] = "Knife"),
      (e[(e.Machete = 3713923289)] = "Machete"),
      (e[(e.Switchblade = 3756226112)] = "Switchblade"),
      (e[(e.Nightstick = 1737195953)] = "Nightstick"),
      (e[(e.PipeWrench = 419712736)] = "PipeWrench"),
      (e[(e.BattleAxe = 3441901897)] = "BattleAxe"),
      (e[(e.PoolCue = 2484171525)] = "PoolCue"),
      (e[(e.StoneHatchet = 940833800)] = "StoneHatchet"),
      (e[(e.Pistol = 453432689)] = "Pistol"),
      (e[(e.PistolMk2 = 3219281620)] = "PistolMk2"),
      (e[(e.CombatPistol = 1593441988)] = "CombatPistol"),
      (e[(e.APPistol = 584646201)] = "APPistol"),
      (e[(e.StunGun = 911657153)] = "StunGun"),
      (e[(e.Pistol50 = 2578377531)] = "Pistol50"),
      (e[(e.SNSPistol = 3218215474)] = "SNSPistol"),
      (e[(e.SNSPistolMk2 = 2285322324)] = "SNSPistolMk2"),
      (e[(e.HeavyPistol = 3523564046)] = "HeavyPistol"),
      (e[(e.VintagePistol = 137902532)] = "VintagePistol"),
      (e[(e.FlareGun = 1198879012)] = "FlareGun"),
      (e[(e.MarksmanPistol = 3696079510)] = "MarksmanPistol"),
      (e[(e.HeavyRevolver = 3249783761)] = "HeavyRevolver"),
      (e[(e.HeavyRevolverMk2 = 3415619887)] = "HeavyRevolverMk2"),
      (e[(e.DoubleActionRevolver = 2548703416)] = "DoubleActionRevolver"),
      (e[(e.UpNAtomizer = 2939590305)] = "UpNAtomizer"),
      (e[(e.CeramicPistol = 727643628)] = "CeramicPistol"),
      (e[(e.NavyRevolver = 2441047180)] = "NavyRevolver"),
      (e[(e.MicroSMG = 324215364)] = "MicroSMG"),
      (e[(e.SMG = 736523883)] = "SMG"),
      (e[(e.SMGMk2 = 2024373456)] = "SMGMk2"),
      (e[(e.AssaultSMG = 4024951519)] = "AssaultSMG"),
      (e[(e.CombatPDW = 171789620)] = "CombatPDW"),
      (e[(e.MachinePistol = 3675956304)] = "MachinePistol"),
      (e[(e.MiniSMG = 3173288789)] = "MiniSMG"),
      (e[(e.UnholyHellbringer = 1198256469)] = "UnholyHellbringer"),
      (e[(e.PumpShotgun = 487013001)] = "PumpShotgun"),
      (e[(e.PumpShotgunMk2 = 1432025498)] = "PumpShotgunMk2"),
      (e[(e.SawedOffShotgun = 2017895192)] = "SawedOffShotgun"),
      (e[(e.AssaultShotgun = 3800352039)] = "AssaultShotgun"),
      (e[(e.BullpupShotgun = 2640438543)] = "BullpupShotgun"),
      (e[(e.Musket = 2828843422)] = "Musket"),
      (e[(e.HeavyShotgun = 984333226)] = "HeavyShotgun"),
      (e[(e.DoubleBarrelShotgun = 4019527611)] = "DoubleBarrelShotgun"),
      (e[(e.SweeperShotgun = 317205821)] = "SweeperShotgun"),
      (e[(e.AssaultRifle = 3220176749)] = "AssaultRifle"),
      (e[(e.AssaultRifleMk2 = 961495388)] = "AssaultRifleMk2"),
      (e[(e.CarbineRifle = 2210333304)] = "CarbineRifle"),
      (e[(e.CarbineRifleMk2 = 4208062921)] = "CarbineRifleMk2"),
      (e[(e.AdvancedRifle = 2937143193)] = "AdvancedRifle"),
      (e[(e.SpecialCarbine = 3231910285)] = "SpecialCarbine"),
      (e[(e.SpecialCarbineMk2 = 2526821735)] = "SpecialCarbineMk2"),
      (e[(e.BullpupRifle = 2132975508)] = "BullpupRifle"),
      (e[(e.BullpupRifleMk2 = 2228681469)] = "BullpupRifleMk2"),
      (e[(e.CompactRifle = 1649403952)] = "CompactRifle"),
      (e[(e.MG = 2634544996)] = "MG"),
      (e[(e.CombatMG = 2144741730)] = "CombatMG"),
      (e[(e.CombatMGMk2 = 3686625920)] = "CombatMGMk2"),
      (e[(e.Gusenberg = 1627465347)] = "Gusenberg"),
      (e[(e.SniperRifle = 100416529)] = "SniperRifle"),
      (e[(e.HeavySniper = 205991906)] = "HeavySniper"),
      (e[(e.HeavySniperMk2 = 177293209)] = "HeavySniperMk2"),
      (e[(e.MarksmanRifle = 3342088282)] = "MarksmanRifle"),
      (e[(e.MarksmanRifleMk2 = 1785463520)] = "MarksmanRifleMk2"),
      (e[(e.RPG = 2982836145)] = "RPG"),
      (e[(e.GrenadeLauncher = 2726580491)] = "GrenadeLauncher"),
      (e[(e.TearGasLauncher = 1305664598)] = "TearGasLauncher"),
      (e[(e.Minigun = 1119849093)] = "Minigun"),
      (e[(e.FireworkLauncher = 2138347493)] = "FireworkLauncher"),
      (e[(e.Railgun = 1834241177)] = "Railgun"),
      (e[(e.HomingLauncher = 1672152130)] = "HomingLauncher"),
      (e[(e.CompactGrenadeLauncher = 125959754)] = "CompactGrenadeLauncher"),
      (e[(e.Widowmaker = 3056410471)] = "Widowmaker"),
      (e[(e.Grenade = 2481070269)] = "Grenade"),
      (e[(e.BZGas = 2694266206)] = "BZGas"),
      (e[(e.TearGas = 4256991824)] = "TearGas"),
      (e[(e.Flare = 1233104067)] = "Flare"),
      (e[(e.Molotov = 615608432)] = "Molotov"),
      (e[(e.StickyBomb = 741814745)] = "StickyBomb"),
      (e[(e.ProximityMine = 2874559379)] = "ProximityMine"),
      (e[(e.Snowball = 126349499)] = "Snowball"),
      (e[(e.PipeBomb = 3125143736)] = "PipeBomb"),
      (e[(e.Ball = 600439132)] = "Ball"),
      (e[(e.JerryCan = 883325847)] = "JerryCan"),
      (e[(e.FireExtinguisher = 101631238)] = "FireExtinguisher"),
      (e[(e.Parachute = 4222310262)] = "Parachute"),
      (e[(e.HazardousJerryCan = 3126027122)] = "HazardousJerryCan");
  })(d_ || (d_ = {}));
class H_ {
  constructor() {
    (this.weapons = {}),
      (this.weapons[d_.Dagger] = {
        name: "wt_dagger",
        description: "wtd_dagger",
      }),
      (this.weapons[d_.Bat] = { name: "wt_bat", description: "wtd_bat" }),
      (this.weapons[d_.Bottle] = {
        name: "wt_bottle",
        description: "wtd_bottle",
      }),
      (this.weapons[d_.Crowbar] = {
        name: "wt_crowbar",
        description: "wtd_crowbar",
      }),
      (this.weapons[d_.Unarmed] = { name: "wt_unarmed" }),
      (this.weapons[d_.Flashlight] = {
        name: "wt_flashlight",
        description: "wtd_flashlight",
      }),
      (this.weapons[d_.GolfClub] = {
        name: "wt_golfclub",
        description: "wtd_golfclub",
      }),
      (this.weapons[d_.Hammer] = {
        name: "wt_hammer",
        description: "wtd_hammer",
      }),
      (this.weapons[d_.Hatchet] = {
        name: "wt_hatchet",
        description: "wtd_hatchet",
      }),
      (this.weapons[d_.KnuckleDusters] = {
        name: "wt_knuckle",
        description: "wtd_knuckle",
      }),
      (this.weapons[d_.Knife] = { name: "wt_knife", description: "wtd_knife" }),
      (this.weapons[d_.Machete] = {
        name: "wt_machete",
        description: "wtd_machete",
      }),
      (this.weapons[d_.Switchblade] = {
        name: "wt_swblade",
        description: "wtd_swblade",
      }),
      (this.weapons[d_.Nightstick] = {
        name: "wt_ngtstk",
        description: "wtd_ngtstk",
      }),
      (this.weapons[d_.PipeWrench] = {
        name: "wt_wrench",
        description: "wtd_wrench",
      }),
      (this.weapons[d_.BattleAxe] = {
        name: "wt_battleaxe",
        description: "wtd_battleaxe",
      }),
      (this.weapons[d_.PoolCue] = {
        name: "wt_poolcue",
        description: "wtd_poolcue",
      }),
      (this.weapons[d_.StoneHatchet] = {
        name: "wt_shatchet",
        description: "wtd_shatchet",
      }),
      (this.weapons[d_.Pistol] = {
        name: "wt_pist",
        description: "wt_pist_desc",
      }),
      (this.weapons[d_.PistolMk2] = {
        name: "wt_pist2",
        description: "wtd_pist2",
      }),
      (this.weapons[d_.CombatPistol] = {
        name: "wt_pist_cbt",
        description: "wtd_pist_cbt",
      }),
      (this.weapons[d_.APPistol] = {
        name: "wt_pist_ap",
        description: "wtd_pist_ap",
      }),
      (this.weapons[d_.StunGun] = { name: "wt_stun", description: "wtd_stun" }),
      (this.weapons[d_.Pistol50] = {
        name: "wt_pist_50",
        description: "wtd_pist_50",
      }),
      (this.weapons[d_.SNSPistol] = {
        name: "wt_snspistol",
        description: "wtd_snspistol",
      }),
      (this.weapons[d_.SNSPistolMk2] = {
        name: "wt_snspistol2",
        description: "wtd_snspistol2",
      }),
      (this.weapons[d_.HeavyPistol] = {
        name: "wt_hvypistol",
        description: "wtd_hvypistol",
      }),
      (this.weapons[d_.VintagePistol] = {
        name: "wt_vpistol",
        description: "wtd_vpistol",
      }),
      (this.weapons[d_.FlareGun] = {
        name: "wt_flaregun",
        description: "wtf_flaregun",
      }),
      (this.weapons[d_.MarksmanPistol] = {
        name: "wt_mkpistol",
        description: "wtd_mkpistol",
      }),
      (this.weapons[d_.HeavyRevolver] = {
        name: "wt_revolver",
        description: "wtd_revolver",
      }),
      (this.weapons[d_.HeavyRevolverMk2] = {
        name: "wt_revolver2",
        description: "wtd_revolver2",
      }),
      (this.weapons[d_.DoubleActionRevolver] = {
        name: "wt_rev_da",
        description: "wtd_rev_da",
      }),
      (this.weapons[d_.UpNAtomizer] = {
        name: "wt_raypistol",
        description: "wtd_raypistol",
      }),
      (this.weapons[d_.CeramicPistol] = {
        name: "wt_cerpst",
        description: "wtd_cerpst",
      }),
      (this.weapons[d_.NavyRevolver] = {
        name: "wt_rev_nv",
        description: "wtd_rev_nv",
      }),
      (this.weapons[d_.MicroSMG] = {
        name: "wt_smg_mcr",
        description: "wtd_smg_mcr",
      }),
      (this.weapons[d_.SMG] = { name: "wt_smg", description: "wtd_smg" }),
      (this.weapons[d_.SMGMk2] = { name: "wt_smg2", description: "wtd_smg2" }),
      (this.weapons[d_.AssaultSMG] = {
        name: "wt_smg_asl",
        description: "wtd_smg_asl",
      }),
      (this.weapons[d_.CombatPDW] = {
        name: "wt_combatpdw",
        description: "wtd_combatpdw",
      }),
      (this.weapons[d_.MachinePistol] = {
        name: "wt_mchpist",
        description: "wtd_mchpist",
      }),
      (this.weapons[d_.MiniSMG] = {
        name: "wt_minismg",
        description: "wtd_minismg",
      }),
      (this.weapons[d_.UnholyHellbringer] = {
        name: "wt_raycarbine",
        description: "wtd_raycarbine",
      }),
      (this.weapons[d_.PumpShotgun] = {
        name: "wt_sg_pmp",
        description: "wtd_sg_pmp",
      }),
      (this.weapons[d_.PumpShotgunMk2] = {
        name: "wt_sg_pmp2",
        description: "wtd_sg_pmp2",
      }),
      (this.weapons[d_.SawedOffShotgun] = {
        name: "wt_sg_sof",
        description: "wtd_sg_sof",
      }),
      (this.weapons[d_.AssaultShotgun] = {
        name: "wt_smg_asl",
        description: "wtd_smg_asl",
      }),
      (this.weapons[d_.BullpupShotgun] = {
        name: "wt_sg_blp",
        description: "wtd_sg_blp",
      }),
      (this.weapons[d_.Musket] = {
        name: "wt_musket",
        description: "wtd_musket",
      }),
      (this.weapons[d_.HeavyShotgun] = {
        name: "wt_hvyshgn",
        description: "wtd_hvyshgn",
      }),
      (this.weapons[d_.DoubleBarrelShotgun] = {
        name: "wt_dbshgn",
        description: "wtd_dbshgn",
      }),
      (this.weapons[d_.SweeperShotgun] = {
        name: "wt_autoshgn",
        description: "wtd_autoshgn",
      }),
      (this.weapons[d_.AssaultRifle] = {
        name: "wt_rifle_asl",
        description: "wtd_rifle_asl",
      }),
      (this.weapons[d_.AssaultRifleMk2] = {
        name: "wt_rifle_asl2",
        description: "wtd_rifle_asl2",
      }),
      (this.weapons[d_.CarbineRifle] = {
        name: "wt_rifle_cbn",
        description: "wtd_rifle_cbn",
      }),
      (this.weapons[d_.CarbineRifleMk2] = {
        name: "wt_rifle_cbn2",
        description: "wtd_rifle_cbn2",
      }),
      (this.weapons[d_.AdvancedRifle] = {
        name: "wt_rifle_adv",
        description: "wtd_rifle_adv",
      }),
      (this.weapons[d_.SpecialCarbine] = {
        name: "wt_spcarbine",
        description: "wtd_spcarbine",
      }),
      (this.weapons[d_.SpecialCarbineMk2] = {
        name: "wt_spcarbine2",
        description: "wtd_spcarbine2",
      }),
      (this.weapons[d_.BullpupRifle] = {
        name: "wt_bullrifle",
        description: "wtd_bullrifle",
      }),
      (this.weapons[d_.BullpupRifleMk2] = {
        name: "wt_bullrifle2",
        description: "wtd_bullrifle2",
      }),
      (this.weapons[d_.CompactRifle] = {
        name: "wt_cmprifle",
        description: "wtd_cmprifle",
      }),
      (this.weapons[d_.MG] = { name: "wt_mg", description: "wtd_mg" }),
      (this.weapons[d_.CombatMG] = {
        name: "wt_mg_cbt",
        description: "wtd_mg_cbt",
      }),
      (this.weapons[d_.CombatMGMk2] = {
        name: "wt_mg_cbt2",
        description: "wtd_mg_cbt2",
      }),
      (this.weapons[d_.Gusenberg] = {
        name: "wt_gusnbrg",
        description: "wtd_gusnbrg",
      }),
      (this.weapons[d_.SniperRifle] = {
        name: "wt_snip_rif",
        description: "wtd_snip_rif",
      }),
      (this.weapons[d_.HeavySniper] = {
        name: "wt_snip_hvy",
        description: "wtd_snip_hvy",
      }),
      (this.weapons[d_.HeavySniperMk2] = {
        name: "wt_snip_hvy2",
        description: "wtd_snip_hvy2",
      }),
      (this.weapons[d_.MarksmanRifle] = {
        name: "wt_mkrifle",
        description: "wtd_mkrifle",
      }),
      (this.weapons[d_.MarksmanRifleMk2] = {
        name: "wt_mkrifle2",
        description: "wtd_mkrifle2",
      }),
      (this.weapons[d_.RPG] = { name: "wt_rpg", description: "wtd_rpg" }),
      (this.weapons[d_.GrenadeLauncher] = {
        name: "wt_cmpgl",
        description: "wtd_cmpgl",
      }),
      (this.weapons[d_.TearGasLauncher] = {
        name: "wt_gl_smoke",
        description: "wtd_gl_smoke",
      }),
      (this.weapons[d_.Minigun] = {
        name: "wt_minigun",
        description: "wtd_minigun",
      }),
      (this.weapons[d_.FireworkLauncher] = {
        name: "wt_firewrk",
        description: "wtd_firewrk",
      }),
      (this.weapons[d_.Railgun] = {
        name: "wt_railgun",
        description: "wtd_railgun",
      }),
      (this.weapons[d_.HomingLauncher] = {
        name: "wt_homlnch",
        description: "wtd_homlnch",
      }),
      (this.weapons[d_.CompactGrenadeLauncher] = {
        name: "wt_cmpgl",
        description: "wtd_cmpgl",
      }),
      (this.weapons[d_.Widowmaker] = {
        name: "wt_rayminigun",
        description: "wtd_rayminigun",
      }),
      (this.weapons[d_.Grenade] = {
        name: "wt_gnade",
        description: "wtd_gnade",
      }),
      (this.weapons[d_.BZGas] = { name: "wt_bzgas", description: "wtd_bzgas" }),
      (this.weapons[d_.TearGas] = {
        name: "wt_gnade_smk",
        description: "wtd_gnade_smk",
      }),
      (this.weapons[d_.Flare] = { name: "wt_flare", description: "wtd_flare" }),
      (this.weapons[d_.Molotov] = {
        name: "wt_molotov",
        description: "wtd_molotov",
      }),
      (this.weapons[d_.StickyBomb] = {
        name: "wt_gnade_stk",
        description: "wtd_gnade_stk",
      }),
      (this.weapons[d_.ProximityMine] = {
        name: "wt_prxmine",
        description: "wtd_prxmine",
      }),
      (this.weapons[d_.Snowball] = {
        name: "wt_snwball",
        description: "wtd_snwball",
      }),
      (this.weapons[d_.PipeBomb] = {
        name: "wt_pipebomb",
        description: "wtd_pipebomb",
      }),
      (this.weapons[d_.Ball] = { name: "wt_ball", description: "wtd_ball" }),
      (this.weapons[d_.JerryCan] = {
        name: "wt_petrol",
        description: "wtd_petrol",
      }),
      (this.weapons[d_.FireExtinguisher] = {
        name: "wt_fire",
        description: "wtd_fire",
      }),
      (this.weapons[d_.HazardousJerryCan] = {
        name: "wt_hazardcan",
        description: "wtd_hazardcan",
      });
  }
}
class x_ {
  constructor() {
    (this.components = {}),
      (this.components[d_.KnuckleDusters] = [
        { key: "component_knuckle_varmod_pimp", name: "wct_knuck_02" },
        { key: "component_knuckle_varmod_ballas", name: "wct_knuck_bg" },
        { key: "component_knuckle_varmod_dollar", name: "wct_knuck_dlr" },
        { key: "component_knuckle_varmod_diamond", name: "wct_knuck_dmd" },
        { key: "component_knuckle_varmod_hate", name: "wct_knuck_ht" },
        { key: "component_knuckle_varmod_love", name: "wct_knuck_lv" },
        { key: "component_knuckle_varmod_player", name: "wct_knuck_pc" },
        { key: "component_knuckle_varmod_king", name: "wct_knuck_slg" },
        { key: "component_knuckle_varmod_vagos", name: "wct_knuck_vg" },
      ]),
      (this.components[d_.Switchblade] = [
        { key: "component_switchblade_varmod_var1", name: "wct_sb_var1" },
        { key: "component_switchblade_varmod_var2", name: "wct_sb_var2" },
      ]),
      (this.components[d_.Pistol] = [
        {
          key: "component_pistol_clip_02",
          name: "wct_clip2",
          description: "wcd_p_clip2",
        },
        {
          key: "component_at_pi_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_pi_supp_02",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
        { key: "component_pistol_varmod_luxe", name: "wct_var_gold" },
      ]),
      (this.components[d_.PistolMk2] = [
        {
          key: "component_pistol_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_pistol_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr",
        },
        {
          key: "component_pistol_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc",
        },
        {
          key: "component_pistol_mk2_clip_hollowpoint",
          name: "wct_clip_hp",
          description: "wcd_clip_hp",
        },
        {
          key: "component_pistol_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_at_pi_rail",
          name: "wct_scope_pi",
          description: "wcd_scope_pi",
        },
        {
          key: "component_at_pi_flsh_02",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_pi_supp_02",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
        {
          key: "component_at_pi_comp",
          name: "wct_comp",
          description: "wcd_comp",
        },
      ]),
      (this.components[d_.CombatPistol] = [
        {
          key: "component_combatpistol_clip_02",
          name: "wct_clip2",
          description: "wcd_cp_clip2",
        },
        {
          key: "component_at_pi_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_pi_supp",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
        { key: "component_combatpistol_varmod_lowrider", name: "wct_var_gold" },
      ]),
      (this.components[d_.APPistol] = [
        {
          key: "component_appistol_clip_02",
          name: "wct_clip2",
          description: "wcd_ap_clip2",
        },
        {
          key: "component_at_pi_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_pi_supp",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
        { key: "component_appistol_varmod_luxe", name: "wct_var_metal" },
      ]),
      (this.components[d_.Pistol50] = [
        {
          key: "component_pistol50_clip_02",
          name: "wct_clip2",
          description: "wcd_p50_clip2",
        },
        {
          key: "component_at_pi_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        { key: "component_pistol50_varmod_luxe", name: "wct_var_sil" },
      ]),
      (this.components[d_.SNSPistol] = [
        {
          key: "component_snspistol_clip_02",
          name: "wct_clip2",
          description: "wcd_snsp_clip2",
        },
        { key: "component_snspistol_varmod_lowrider", name: "wct_var_wood" },
      ]),
      (this.components[d_.SNSPistolMk2] = [
        {
          key: "component_snspistol_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_snspistol_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr_rv",
        },
        {
          key: "component_snspistol_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc_ns",
        },
        {
          key: "component_snspistol_mk2_clip_hollowpoint",
          name: "wct_clip_hp",
          description: "wcd_clip_hp_rv",
        },
        {
          key: "component_snspistol_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj_rv",
        },
        {
          key: "component_at_pi_flsh_03",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_pi_rail_02",
          name: "wct_scope_pi",
          description: "wcd_scope_pi",
        },
        {
          key: "component_at_pi_supp_02",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
        {
          key: "component_at_pi_comp_02",
          name: "wct_comp",
          description: "wcd_comp",
        },
      ]),
      (this.components[d_.HeavyPistol] = [
        {
          key: "component_heavypistol_clip_02",
          name: "wct_clip2",
          description: "wcd_hpst_clip2",
        },
        {
          key: "component_at_pi_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_pi_supp",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
        { key: "component_heavypistol_varmod_luxe", name: "wct_var_wood" },
      ]),
      (this.components[d_.VintagePistol] = [
        {
          key: "component_vintagepistol_clip_02",
          name: "wct_clip2",
          description: "wcd_vpst_clip2",
        },
        {
          key: "component_at_pi_supp",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
      ]),
      (this.components[d_.HeavyRevolver] = [
        { key: "component_revolver_varmod_boss", name: "wct_rev_varb" },
        { key: "component_revolver_varmod_goon", name: "wct_rev_varg" },
      ]),
      (this.components[d_.HeavyRevolverMk2] = [
        {
          key: "component_revolver_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr_rv",
        },
        {
          key: "component_revolver_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc_rv",
        },
        {
          key: "component_revolver_mk2_clip_hollowpoint",
          name: "wct_clip_hp",
          description: "wcd_clip_hp_rv",
        },
        {
          key: "component_revolver_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj_rv",
        },
        {
          key: "component_at_sights",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_macro_mk2",
          name: "wct_scope_mac2",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_pi_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_pi_comp_03",
          name: "wct_comp",
          description: "wcd_comp",
        },
      ]),
      (this.components[d_.UpNAtomizer] = [
        {
          key: "component_raypistol_varmod_xmas18",
          name: "wct_var_ray18",
          description: "wcd_var_ray18",
        },
      ]),
      (this.components[d_.CeramicPistol] = [
        {
          key: "component_ceramicpistol_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_ceramicpistol_supp",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
      ]),
      (this.components[d_.MicroSMG] = [
        {
          key: "component_microsmg_clip_02",
          name: "wct_clip2",
          description: "wcdmsmg_clip2",
        },
        {
          key: "component_at_pi_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_scope_macro",
          name: "wct_scope_mac",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        { key: "component_microsmg_varmod_luxe", name: "wct_var_gold" },
      ]),
      (this.components[d_.SMG] = [
        {
          key: "component_smg_clip_02",
          name: "wct_clip2",
          description: "wcd_smg_clip2",
        },
        {
          key: "component_smg_clip_03",
          name: "wct_clip_drm",
          description: "wcd_clip3",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_scope_macro_02",
          name: "wct_scope_mac",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_pi_supp",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
        { key: "component_smg_varmod_luxe", name: "wct_var_gold" },
      ]),
      (this.components[d_.SMGMk2] = [
        {
          key: "component_smg_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_smg_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr",
        },
        {
          key: "component_smg_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc",
        },
        {
          key: "component_smg_mk2_clip_hollowpoint",
          name: "wct_clip_hp",
          description: "wcd_clip_hp",
        },
        {
          key: "component_smg_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_sights_smg",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_macro_02_smg_mk2",
          name: "wct_scope_mac2",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_scope_small_smg_mk2",
          name: "wct_scope_sml2",
          description: "wcd_scope_sml",
        },
        {
          key: "component_at_pi_supp",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
        {
          key: "component_at_muzzle_01",
          name: "wct_muzz1",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_02",
          name: "wct_muzz2",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_03",
          name: "wct_muzz3",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_04",
          name: "wct_muzz4",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_05",
          name: "wct_muzz5",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_06",
          name: "wct_muzz6",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_07",
          name: "wct_muzz7",
          description: "wcd_muzz",
        },
        {
          key: "component_at_sb_barrel_02",
          name: "wct_barr2",
          description: "wcd_barr2",
        },
      ]),
      (this.components[d_.MachinePistol] = [
        {
          key: "component_machinepistol_clip_02",
          name: "wct_clip2",
          description: "wcd_mchp_clip2",
        },
        {
          key: "component_machinepistol_clip_03",
          name: "wct_clip_drm",
          description: "wcd_clip3",
        },
        {
          key: "component_at_pi_supp",
          name: "wct_supp",
          description: "wcd_pi_supp",
        },
      ]),
      (this.components[d_.MiniSMG] = [
        {
          key: "component_minismg_clip_02",
          name: "wct_clip2",
          description: "wcd_mimg_clip2",
        },
      ]),
      (this.components[d_.PumpShotgun] = [
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_sr_supp",
          name: "wct_supp",
          description: "wcd_sr_supp",
        },
        { key: "component_pumpshotgun_varmod_lowrider", name: "wct_var_gold" },
      ]),
      (this.components[d_.PumpShotgunMk2] = [
        {
          key: "component_pumpshotgun_mk2_clip_incendiary",
          name: "wct_shell_inc",
          description: "wcd_shell_inc",
        },
        {
          key: "component_pumpshotgun_mk2_clip_armorpiercing",
          name: "wct_shell_ap",
          description: "wcd_shell_ap",
        },
        {
          key: "component_pumpshotgun_mk2_clip_hollowpoint",
          name: "wct_shell_hp",
          description: "wcd_shell_hp",
        },
        {
          key: "component_pumpshotgun_mk2_clip_explosive",
          name: "wct_shell_ex",
          description: "wcd_shell_ex",
        },
        {
          key: "component_at_sights",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_macro_mk2",
          name: "wct_scope_mac2",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_scope_small_mk2",
          name: "wct_scope_sml2",
          description: "wcd_scope_sml",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_sr_supp_03",
          name: "wct_supp",
          description: "wcd_sr_supp",
        },
        {
          key: "component_at_muzzle_08",
          name: "wct_muzz8",
          description: "wcd_muzz_sr",
        },
      ]),
      (this.components[d_.SawedOffShotgun] = [
        { key: "component_sawnoffshotgun_varmod_luxe", name: "wct_var_metal" },
      ]),
      (this.components[d_.AssaultShotgun] = [
        {
          key: "component_assaultshotgun_clip_02",
          name: "wct_clip2",
          description: "wcd_as_clip2",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_ar_supp",
          name: "wct_supp",
          description: "wcd_ar_supp",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
      ]),
      (this.components[d_.BullpupShotgun] = [
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
      ]),
      (this.components[d_.HeavyShotgun] = [
        {
          key: "component_heavyshotgun_clip_02",
          name: "wct_clip2",
          description: "wcd_hvsg_clip2",
        },
        {
          key: "component_heavyshotgun_clip_03",
          name: "wct_clip_drm",
          description: "wcd_clip3",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
      ]),
      (this.components[d_.AssaultRifle] = [
        {
          key: "component_assaultrifle_clip_02",
          name: "wct_clip2",
          description: "wcd_ar_clip2",
        },
        {
          key: "component_assaultrifle_clip_03",
          name: "wct_clip_drm",
          description: "wcd_clip3",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_scope_macro",
          name: "wct_scope_mac",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
        { key: "component_assaultrifle_varmod_luxe", name: "wct_var_gold" },
      ]),
      (this.components[d_.AssaultRifleMk2] = [
        {
          key: "component_assaultrifle_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_assaultrifle_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr",
        },
        {
          key: "component_assaultrifle_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc",
        },
        {
          key: "component_assaultrifle_mk2_clip_armorpiercing",
          name: "wct_clip_ap",
          description: "wcd_clip_ap",
        },
        {
          key: "component_assaultrifle_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_at_ar_afgrip_02",
          name: "wct_grip",
          description: "wcd_grip",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_sights",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_macro_mk2",
          name: "wct_scope_mac2",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_scope_medium_mk2",
          name: "wct_scope_med2",
          description: "wcd_scope_med",
        },
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        {
          key: "component_at_muzzle_01",
          name: "wct_muzz1",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_02",
          name: "wct_muzz2",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_03",
          name: "wct_muzz3",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_04",
          name: "wct_muzz4",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_05",
          name: "wct_muzz5",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_06",
          name: "wct_muzz6",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_07",
          name: "wct_muzz7",
          description: "wcd_muzz",
        },
        {
          key: "component_at_ar_barrel_02",
          name: "wct_barr2",
          description: "wcd_barr2",
        },
      ]),
      (this.components[d_.CarbineRifle] = [
        {
          key: "component_carbinerifle_clip_02",
          name: "wct_clip2",
          description: "wcd_cr_clip2",
        },
        {
          key: "component_carbinerifle_clip_03",
          name: "wct_clip_box",
          description: "wcd_clip3",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_scope_medium",
          name: "wct_scope_med",
          description: "wcd_scope_med",
        },
        {
          key: "component_at_ar_supp",
          name: "wct_supp",
          description: "wcd_ar_supp",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
        { key: "component_carbinerifle_varmod_luxe", name: "wct_var_gold" },
      ]),
      (this.components[d_.CarbineRifleMk2] = [
        {
          key: "component_carbinerifle_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_carbinerifle_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr",
        },
        {
          key: "component_carbinerifle_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc",
        },
        {
          key: "component_carbinerifle_mk2_clip_armorpiercing",
          name: "wct_clip_ap",
          description: "wcd_clip_ap",
        },
        {
          key: "component_carbinerifle_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_at_ar_afgrip_02",
          name: "wct_grip",
          description: "wcd_grip",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_sights",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_macro_mk2",
          name: "wct_scope_mac2",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_scope_medium_mk2",
          name: "wct_scope_med2",
          description: "wcd_scope_med",
        },
        {
          key: "component_at_ar_supp",
          name: "wct_supp",
          description: "wcd_ar_supp",
        },
        {
          key: "component_at_muzzle_01",
          name: "wct_muzz1",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_02",
          name: "wct_muzz2",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_03",
          name: "wct_muzz3",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_04",
          name: "wct_muzz4",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_05",
          name: "wct_muzz5",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_06",
          name: "wct_muzz6",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_07",
          name: "wct_muzz7",
          description: "wcd_muzz",
        },
        {
          key: "component_at_cr_barrel_02",
          name: "wct_barr2",
          description: "wcd_barr2",
        },
      ]),
      (this.components[d_.AdvancedRifle] = [
        {
          key: "component_advancedrifle_clip_02",
          name: "wct_clip2",
          description: "wcd_ar_clip2",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_scope_small",
          name: "wct_scope_sml",
          description: "wcd_scope_sml",
        },
        {
          key: "component_at_ar_supp",
          name: "wct_supp",
          description: "wcd_ar_supp",
        },
        { key: "component_advancedrifle_varmod_luxe", name: "wct_var_metal" },
      ]),
      (this.components[d_.SpecialCarbine] = [
        {
          key: "component_specialcarbine_clip_02",
          name: "wct_clip2",
          description: "wcd_scrb_clip2",
        },
        {
          key: "component_specialcarbine_clip_03",
          name: "wct_clip_drm",
          description: "wcd_clip3",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_scope_medium",
          name: "wct_scope_med",
          description: "wcd_scope_med",
        },
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
        {
          key: "component_specialcarbine_varmod_lowrider",
          name: "wct_var_etchm",
        },
      ]),
      (this.components[d_.SpecialCarbineMk2] = [
        {
          key: "component_specialcarbine_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_specialcarbine_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr",
        },
        {
          key: "component_specialcarbine_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc",
        },
        {
          key: "component_specialcarbine_mk2_clip_armorpiercing",
          name: "wct_clip_ap",
          description: "wcd_clip_ap",
        },
        {
          key: "component_specialcarbine_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_sights",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_macro_mk2",
          name: "wct_scope_mac2",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_scope_medium_mk2",
          name: "wct_scope_med2",
          description: "wcd_scope_med",
        },
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        {
          key: "component_at_muzzle_01",
          name: "wct_muzz1",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_02",
          name: "wct_muzz2",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_03",
          name: "wct_muzz3",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_04",
          name: "wct_muzz4",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_05",
          name: "wct_muzz5",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_06",
          name: "wct_muzz6",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_07",
          name: "wct_muzz7",
          description: "wcd_muzz",
        },
        {
          key: "component_at_ar_afgrip_02",
          name: "wct_grip",
          description: "wcd_grip",
        },
        {
          key: "component_at_sc_barrel_02",
          name: "wct_barr2",
          description: "wcd_barr2",
        },
      ]),
      (this.components[d_.BullpupRifle] = [
        {
          key: "component_bullpuprifle_clip_02",
          name: "wct_clip2",
          description: "wcd_brif_clip2",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_scope_small",
          name: "wct_scope_sml",
          description: "wcd_scope_sml",
        },
        {
          key: "component_at_ar_supp",
          name: "wct_supp",
          description: "wcd_ar_supp",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
        { key: "component_bullpuprifle_varmod_low", name: "wct_var_metal" },
      ]),
      (this.components[d_.BullpupRifleMk2] = [
        {
          key: "component_bullpuprifle_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_bullpuprifle_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr",
        },
        {
          key: "component_bullpuprifle_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc",
        },
        {
          key: "component_bullpuprifle_mk2_clip_armorpiercing",
          name: "wct_clip_ap",
          description: "wcd_clip_ap",
        },
        {
          key: "component_bullpuprifle_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_sights",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_macro_02_mk2",
          name: "wct_scope_mac2",
          description: "wcd_scope_mac",
        },
        {
          key: "component_at_scope_small_mk2",
          name: "wct_scope_sml2",
          description: "wcd_scope_sml",
        },
        {
          key: "component_at_bp_barrel_02",
          name: "wct_barr2",
          description: "wcd_barr2",
        },
        {
          key: "component_at_ar_supp",
          name: "wct_supp",
          description: "wcd_ar_supp",
        },
        {
          key: "component_at_muzzle_01",
          name: "wct_muzz1",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_02",
          name: "wct_muzz2",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_03",
          name: "wct_muzz3",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_04",
          name: "wct_muzz4",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_05",
          name: "wct_muzz5",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_06",
          name: "wct_muzz6",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_07",
          name: "wct_muzz7",
          description: "wcd_muzz",
        },
        {
          key: "component_at_ar_afgrip_02",
          name: "wct_grip",
          description: "wcd_grip",
        },
      ]),
      (this.components[d_.CompactRifle] = [
        {
          key: "component_compactrifle_clip_02",
          name: "wct_clip2",
          description: "wcd_cmpr_clip2",
        },
        {
          key: "component_compactrifle_clip_03",
          name: "wct_clip_drm",
          description: "wcd_clip3",
        },
      ]),
      (this.components[d_.MG] = [
        {
          key: "component_mg_clip_02",
          name: "wct_clip2",
          description: "wcd_mg_clip2",
        },
        {
          key: "component_at_scope_small_02",
          name: "wct_scope_sml",
          description: "wcd_scope_sml",
        },
        { key: "component_mg_varmod_lowrider", name: "wct_var_gold" },
      ]),
      (this.components[d_.CombatMG] = [
        {
          key: "component_combatmg_clip_02",
          name: "wct_clip2",
          description: "wcdcmg_clip2",
        },
        {
          key: "component_at_scope_medium",
          name: "wct_scope_med",
          description: "wcd_scope_med",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
        { key: "component_combatmg_varmod_lowrider", name: "wct_var_etchm" },
      ]),
      (this.components[d_.CombatMGMk2] = [
        {
          key: "component_combatmg_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_combatmg_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr",
        },
        {
          key: "component_combatmg_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc",
        },
        {
          key: "component_combatmg_mk2_clip_armorpiercing",
          name: "wct_clip_ap",
          description: "wcd_clip_ap",
        },
        {
          key: "component_combatmg_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_at_ar_afgrip_02",
          name: "wct_grip",
          description: "wcd_grip",
        },
        {
          key: "component_at_sights",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_small_mk2",
          name: "wct_scope_sml2",
          description: "wcd_scope_sml",
        },
        {
          key: "component_at_scope_medium_mk2",
          name: "wct_scope_med2",
          description: "wcd_scope_med",
        },
        {
          key: "component_at_muzzle_01",
          name: "wct_muzz1",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_02",
          name: "wct_muzz2",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_03",
          name: "wct_muzz3",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_04",
          name: "wct_muzz4",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_05",
          name: "wct_muzz5",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_06",
          name: "wct_muzz6",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_07",
          name: "wct_muzz7",
          description: "wcd_muzz",
        },
        {
          key: "component_at_mg_barrel_02",
          name: "wct_barr2",
          description: "wcd_barr2",
        },
      ]),
      (this.components[d_.Gusenberg] = [
        {
          key: "component_gusenberg_clip_02",
          name: "wct_clip2",
          description: "wcd_gsnb_clip2",
        },
      ]),
      (this.components[d_.SniperRifle] = [
        {
          key: "component_at_ar_supp_02",
          name: "wct_supp",
          description: "wcd_ar_supp2",
        },
        {
          key: "component_at_scope_large",
          name: "wct_scope_lrg",
          description: "wcd_scope_lrg",
        },
        {
          key: "component_at_scope_max",
          name: "wct_scope_max",
          description: "wcd_scope_max",
        },
        { key: "component_sniperrifle_varmod_luxe", name: "wct_var_wood" },
      ]),
      (this.components[d_.HeavySniper] = [
        {
          key: "component_at_scope_large",
          name: "wct_scope_lrg",
          description: "wcd_scope_lrg",
        },
        {
          key: "component_at_scope_max",
          name: "wct_scope_max",
          description: "wcd_scope_max",
        },
      ]),
      (this.components[d_.HeavySniperMk2] = [
        {
          key: "component_heavysniper_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_heavysniper_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc_sn",
        },
        {
          key: "component_heavysniper_mk2_clip_armorpiercing",
          name: "wct_clip_ap",
          description: "wcd_clip_ap",
        },
        {
          key: "component_heavysniper_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_heavysniper_mk2_clip_explosive",
          name: "wct_clip_ex",
          description: "wcd_clip_ex",
        },
        {
          key: "component_at_scope_large_mk2",
          name: "wct_scope_lrg2",
          description: "wcd_scope_lrg",
        },
        {
          key: "component_at_scope_max",
          name: "wct_scope_max",
          description: "wcd_scope_max",
        },
        {
          key: "component_at_scope_nv",
          name: "wct_scope_nv",
          description: "wcd_scope_nv",
        },
        {
          key: "component_at_scope_thermal",
          name: "wct_scope_th",
          description: "wcd_scope_th",
        },
        {
          key: "component_at_sr_supp_03",
          name: "wct_supp",
          description: "wcd_sr_supp",
        },
        {
          key: "component_at_muzzle_08",
          name: "wct_muzz8",
          description: "wcd_muzz_sr",
        },
        {
          key: "component_at_muzzle_09",
          name: "wct_muzz9",
          description: "wcd_muzz_sr",
        },
        {
          key: "component_at_sr_barrel_02",
          name: "wct_barr2",
          description: "wcd_barr2",
        },
      ]),
      (this.components[d_.MarksmanRifle] = [
        {
          key: "component_marksmanrifle_clip_02",
          name: "wct_clip2",
          description: "wcd_mkrf_clip2",
        },
        {
          key: "component_at_scope_large_fixed_zoom",
          name: "wct_scope_lrg",
          description: "wcd_scope_lrf",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_ar_supp",
          name: "wct_supp",
          description: "wcd_supp",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
        { key: "component_marksmanrifle_varmod_luxe", name: "wct_var_gold" },
      ]),
      (this.components[d_.MarksmanRifleMk2] = [
        {
          key: "component_marksmanrifle_mk2_clip_02",
          name: "wct_clip2",
          description: "wcd_clip2",
        },
        {
          key: "component_marksmanrifle_mk2_clip_tracer",
          name: "wct_clip_tr",
          description: "wcd_clip_tr",
        },
        {
          key: "component_marksmanrifle_mk2_clip_incendiary",
          name: "wct_clip_inc",
          description: "wcd_clip_inc",
        },
        {
          key: "component_marksmanrifle_mk2_clip_armorpiercing",
          name: "wct_clip_ap",
          description: "wcd_clip_ap",
        },
        {
          key: "component_marksmanrifle_mk2_clip_fmj",
          name: "wct_clip_fmj",
          description: "wcd_clip_fmj",
        },
        {
          key: "component_at_sights",
          name: "wct_holo",
          description: "wcd_holo",
        },
        {
          key: "component_at_scope_medium_mk2",
          name: "wct_scope_med2",
          description: "wcd_scope_med",
        },
        {
          key: "component_at_scope_large_fixed_zoom_mk2",
          name: "wct_scope_lrg2",
          description: "wcd_scope_lrf",
        },
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_ar_supp",
          name: "wct_supp",
          description: "wcd_ar_supp",
        },
        {
          key: "component_at_muzzle_01",
          name: "wct_muzz1",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_02",
          name: "wct_muzz2",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_03",
          name: "wct_muzz3",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_04",
          name: "wct_muzz4",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_05",
          name: "wct_muzz5",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_06",
          name: "wct_muzz6",
          description: "wcd_muzz",
        },
        {
          key: "component_at_muzzle_07",
          name: "wct_muzz7",
          description: "wcd_muzz",
        },
        {
          key: "component_at_mrfl_barrel_02",
          name: "wct_barr2",
          description: "wcd_barr2",
        },
        {
          key: "component_at_ar_afgrip_02",
          name: "wct_grip",
          description: "wcd_grip",
        },
      ]),
      (this.components[d_.GrenadeLauncher] = [
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
        {
          key: "component_at_scope_small",
          name: "wct_scope_sml",
          description: "wcd_scope_sml",
        },
      ]),
      (this.components[d_.TearGasLauncher] = [
        {
          key: "component_at_ar_flsh",
          name: "wct_flash",
          description: "wcd_flash",
        },
        {
          key: "component_at_ar_afgrip",
          name: "wct_grip",
          description: "wcd_grip",
        },
        {
          key: "component_at_scope_small",
          name: "wct_scope_sml",
          description: "wcd_scope_sml",
        },
      ]);
  }
}
class N_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (N_.componentCollection = new x_()),
      (N_.weaponCollection = new H_()),
      this.addItem((this.weaponInfo = new At(""))),
      (this.weaponInfo.RightBadge = mt.Gun),
      this.menuObject.MenuOpen.on(() => {
        let e = Ze(h.local.scriptID, void 0, void 0)[1],
          t = N_.weaponCollection.weapons[e],
          _ = Ke(t.description);
        (this.weaponInfo.Text = Ke(t.name)),
          (this.weaponInfo.Description =
            "NULL" == _ ? "" : _.length > 140 ? _.substr(0, 139) + "..." : _),
          this.menuObject.MenuItems.splice(1),
          N_.componentCollection.components[e]?.forEach((t) => {
            let _ = new At(
              Ke(t.name),
              "NULL" == Ke(t.description) ? "" : Ke(t.description)
            );
            this.addItem(_, async () => {
              let i = qe(h.local.scriptID, e, d(t.key));
              i
                ? await __.removeWeaponComponent(e, d(t.key))
                : await __.addWeaponComponent(e, d(t.key)),
                this.toggleItem(_, i);
            });
          });
      });
  }
  toggleItem(e, t) {
    M_.lockMenuItem(e),
      (e.RightLabel = t ? "Removed" : "Added"),
      i(() => {
        (e.RightLabel = ""), M_.unlockMenuItem(e);
      }, 1500);
  }
}
class B_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (this.weaponCustomizationMenu = new N_(this, "Weapon Customization")),
      this.addUserInputItem(
        (this.giveWeaponItem = new At("Give Weapon")),
        async () => __.giveWeapon(d(await t_.getUserInput()), !0)
      ),
      this.addUserInputItem(
        (this.removeWeaponItem = new At("Remove Weapon")),
        async () => __.removeWeapon(d(await t_.getUserInput()))
      ),
      this.addItem((this.giveAllWeaponsItem = new At("Give All Weapons")), () =>
        w_.getValues(d_).forEach((e) => __.giveWeapon(+e))
      ),
      this.addItem((this.refillAmmoItem = new At("Refill Ammo")), () =>
        w_.getValues(p_).forEach((e) => $e(h.local.scriptID, +e, 250))
      ),
      this.addItem((this.infiniteAmmoItem = new Ut("Infinite Ammo")), (e) =>
        w_.getValues(d_).forEach((t) => Qe(h.local.scriptID, e, +t))
      ),
      this.addItem((this.noReloadItem = new Ut("No Reload")), (e) =>
        et(h.local.scriptID, e)
      ),
      this.addItem(
        (this.removeAllWeaponsItem = new At("Remove All Weapons")),
        () => __.removeAllWeapons()
      ),
      (this.removeAllWeaponsItem.LeftBadge = mt.Alert);
  }
}
!(function (e) {
  (e.Altostratus = "altostratus"),
    (e.Cirrus = "Cirrus"),
    (e.Cirrocumulus = "cirrocumulus"),
    (e.Clear01 = "Clear 01"),
    (e.Cloudy01 = "Cloudy 01"),
    (e.Contrails = "Contrails"),
    (e.Horizon = "Horizon"),
    (e.HorizonBand1 = "horizonband1"),
    (e.HorizonBand2 = "horizonband2"),
    (e.HorizonBand3 = "horizonband3"),
    (e.Horsey = "horsey"),
    (e.Nimbus = "Nimbus"),
    (e.Puffs = "Puffs"),
    (e.Rain = "RAIN"),
    (e.Snowy01 = "Snowy 01"),
    (e.Stormy01 = "Stormy 01"),
    (e.Stratocumulus = "stratoscumulus"),
    (e.Stripey = "Stripey"),
    (e.Shower = "shower"),
    (e.Wispy = "Wispy");
})(u_ || (u_ = {})),
  (function (e) {
    (e[(e.AirRaceBoost01 = 0)] = "AirRaceBoost01"),
      (e[(e.AirRaceBoost02 = 1)] = "AirRaceBoost02"),
      (e[(e.AmbientPUSH = 2)] = "AmbientPUSH"),
      (e[(e.AP1_01_B_IntRefRange = 3)] = "AP1_01_B_IntRefRange"),
      (e[(e.AP1_01_C_NoFog = 4)] = "AP1_01_C_NoFog"),
      (e[(e.ArenaEMP = 5)] = "ArenaEMP"),
      (e[(e.ArenaEMP_Blend = 6)] = "ArenaEMP_Blend"),
      (e[(e.ArenaWheelPurple01 = 7)] = "ArenaWheelPurple01"),
      (e[(e.ArenaWheelPurple02 = 8)] = "ArenaWheelPurple02"),
      (e[(e.Bank_HLWD = 9)] = "Bank_HLWD"),
      (e[(e.Barry1_Stoned = 10)] = "Barry1_Stoned"),
      (e[(e.BarryFadeOut = 11)] = "BarryFadeOut"),
      (e[(e.baseTONEMAPPING = 12)] = "baseTONEMAPPING"),
      (e[(e.BeastIntro01 = 13)] = "BeastIntro01"),
      (e[(e.BeastIntro02 = 14)] = "BeastIntro02"),
      (e[(e.BeastLaunch01 = 15)] = "BeastLaunch01"),
      (e[(e.BeastLaunch02 = 16)] = "BeastLaunch02"),
      (e[(e.BikerFilter = 17)] = "BikerFilter"),
      (e[(e.BikerForm01 = 18)] = "BikerForm01"),
      (e[(e.BikerFormFlash = 19)] = "BikerFormFlash"),
      (e[(e.Bikers = 20)] = "Bikers"),
      (e[(e.BikersSPLASH = 21)] = "BikersSPLASH"),
      (e[(e.blackNwhite = 22)] = "blackNwhite"),
      (e[(e.BlackOut = 23)] = "BlackOut"),
      (e[(e.BleepYellow01 = 24)] = "BleepYellow01"),
      (e[(e.BleepYellow02 = 25)] = "BleepYellow02"),
      (e[(e.Bloom = 26)] = "Bloom"),
      (e[(e.BloomLight = 27)] = "BloomLight"),
      (e[(e.BloomMid = 28)] = "BloomMid"),
      (e[(e.BombCam01 = 29)] = "BombCam01"),
      (e[(e.BombCamFlash = 30)] = "BombCamFlash"),
      (e[(e.Broken_camera_fuzz = 31)] = "Broken_camera_fuzz"),
      (e[(e.buggy_shack = 32)] = "buggy_shack"),
      (e[(e.buildingTOP = 33)] = "buildingTOP"),
      (e[(e.BulletTimeDark = 34)] = "BulletTimeDark"),
      (e[(e.BulletTimeLight = 35)] = "BulletTimeLight"),
      (e[(e.CAMERA_BW = 36)] = "CAMERA_BW"),
      (e[(e.CAMERA_secuirity = 37)] = "CAMERA_secuirity"),
      (e[(e.CAMERA_secuirity_FUZZ = 38)] = "CAMERA_secuirity_FUZZ"),
      (e[(e.canyon_mission = 39)] = "canyon_mission"),
      (e[(e.carMOD_underpass = 40)] = "carMOD_underpass"),
      (e[(e.carpark = 41)] = "carpark"),
      (e[(e.carpark_dt1_02 = 42)] = "carpark_dt1_02"),
      (e[(e.carpark_dt1_03 = 43)] = "carpark_dt1_03"),
      (e[(e.Carpark_MP_exit = 44)] = "Carpark_MP_exit"),
      (e[(e.cashdepot = 45)] = "cashdepot"),
      (e[(e.cashdepotEMERGENCY = 46)] = "cashdepotEMERGENCY"),
      (e[(e.casino_brightroom = 47)] = "casino_brightroom"),
      (e[(e.casino_mainfloor = 48)] = "casino_mainfloor"),
      (e[(e.casino_mainWhiteFloor = 49)] = "casino_mainWhiteFloor"),
      (e[(e.casino_managementlobby = 50)] = "casino_managementlobby"),
      (e[(e.casino_managementOff = 51)] = "casino_managementOff"),
      (e[(e.casino_managersoffice = 52)] = "casino_managersoffice"),
      (e[(e.CasinoBathrooms = 53)] = "CasinoBathrooms"),
      (e[(e.cBank_back = 54)] = "cBank_back"),
      (e[(e.cBank_front = 55)] = "cBank_front"),
      (e[(e.ch2_tunnel_whitelight = 56)] = "ch2_tunnel_whitelight"),
      (e[(e.CH3_06_water = 57)] = "CH3_06_water"),
      (e[(e.CHOP = 58)] = "CHOP"),
      (e[(e.cinema = 59)] = "cinema"),
      (e[(e.cinema_001 = 60)] = "cinema_001"),
      (e[(e.cops = 61)] = "cops"),
      (e[(e.CopsSPLASH = 62)] = "CopsSPLASH"),
      (e[(e.crane_cam = 63)] = "crane_cam"),
      (e[(e.crane_cam_cinematic = 64)] = "crane_cam_cinematic"),
      (e[(e.CrossLine01 = 65)] = "CrossLine01"),
      (e[(e.CrossLine02 = 66)] = "CrossLine02"),
      (e[(e.CS1_railwayB_tunnel = 67)] = "CS1_railwayB_tunnel"),
      (e[(e.CS3_rail_tunnel = 68)] = "CS3_rail_tunnel"),
      (e[(e.CUSTOM_streetlight = 69)] = "CUSTOM_streetlight"),
      (e[(e.damage = 70)] = "damage"),
      (e[(e.DeadlineNeon01 = 71)] = "DeadlineNeon01"),
      (e[(e.default = 72)] = "default"),
      (e[(e.DefaultColorCode = 73)] = "DefaultColorCode"),
      (e[(e.dlc_casino_carpark = 74)] = "dlc_casino_carpark"),
      (e[(e.DLC_Casino_Garage = 75)] = "DLC_Casino_Garage"),
      (e[(e.DONT_overide_sunpos = 76)] = "DONT_overide_sunpos"),
      (e[(e.Dont_tazeme_bro = 77)] = "Dont_tazeme_bro"),
      (e[(e.dont_tazeme_bro_b = 78)] = "dont_tazeme_bro_b"),
      (e[(e.downtown_FIB_cascades_opt = 79)] = "downtown_FIB_cascades_opt"),
      (e[(e.DrivingFocusDark = 80)] = "DrivingFocusDark"),
      (e[(e.DrivingFocusLight = 81)] = "DrivingFocusLight"),
      (e[(e.Drone_FishEye_Lens = 82)] = "Drone_FishEye_Lens"),
      (e[(e.DRUG_2_drive = 83)] = "DRUG_2_drive"),
      (e[(e.Drug_deadman = 84)] = "Drug_deadman"),
      (e[(e.Drug_deadman_blend = 85)] = "Drug_deadman_blend"),
      (e[(e.drug_drive_blend01 = 86)] = "drug_drive_blend01"),
      (e[(e.drug_drive_blend02 = 87)] = "drug_drive_blend02"),
      (e[(e.drug_flying_01 = 88)] = "drug_flying_01"),
      (e[(e.drug_flying_02 = 89)] = "drug_flying_02"),
      (e[(e.drug_flying_base = 90)] = "drug_flying_base"),
      (e[(e.DRUG_gas_huffin = 91)] = "DRUG_gas_huffin"),
      (e[(e.drug_wobbly = 92)] = "drug_wobbly"),
      (e[(e.Drunk = 93)] = "Drunk"),
      (e[(e.dying = 94)] = "dying"),
      (e[(e.eatra_bouncelight_beach = 95)] = "eatra_bouncelight_beach"),
      (e[(e.epsilion = 96)] = "epsilion"),
      (e[(e.exile1_exit = 97)] = "exile1_exit"),
      (e[(e.exile1_plane = 98)] = "exile1_plane"),
      (e[(e.ExplosionJosh = 99)] = "ExplosionJosh"),
      (e[(e.EXT_FULLAmbientmult_art = 100)] = "EXT_FULLAmbientmult_art"),
      (e[(e.ext_int_extlight_large = 101)] = "ext_int_extlight_large"),
      (e[(e.EXTRA_bouncelight = 102)] = "EXTRA_bouncelight"),
      (e[(e.eyeINtheSKY = 103)] = "eyeINtheSKY"),
      (e[(e.Facebook_NEW = 104)] = "Facebook_NEW"),
      (e[(e.facebook_serveroom = 105)] = "facebook_serveroom"),
      (e[(e.FIB_5 = 106)] = "FIB_5"),
      (e[(e.FIB_6 = 107)] = "FIB_6"),
      (e[(e.FIB_A = 108)] = "FIB_A"),
      (e[(e.FIB_B = 109)] = "FIB_B"),
      (e[(e.FIB_interview = 110)] = "FIB_interview"),
      (e[(e.FIB_interview_optimise = 111)] = "FIB_interview_optimise"),
      (e[(e.FinaleBank = 112)] = "FinaleBank"),
      (e[(e.FinaleBankexit = 113)] = "FinaleBankexit"),
      (e[(e.FinaleBankMid = 114)] = "FinaleBankMid"),
      (e[(e.fireDEPT = 115)] = "fireDEPT"),
      (e[(e.FORdoron_delete = 116)] = "FORdoron_delete"),
      (e[(e.Forest = 117)] = "Forest"),
      (e[(e.fp_vig_black = 118)] = "fp_vig_black"),
      (e[(e.fp_vig_blue = 119)] = "fp_vig_blue"),
      (e[(e.fp_vig_brown = 120)] = "fp_vig_brown"),
      (e[(e.fp_vig_gray = 121)] = "fp_vig_gray"),
      (e[(e.fp_vig_green = 122)] = "fp_vig_green"),
      (e[(e.fp_vig_red = 123)] = "fp_vig_red"),
      (e[(e.FrankilinsHOUSEhills = 124)] = "FrankilinsHOUSEhills"),
      (e[(e.frankilnsAUNTS_new = 125)] = "frankilnsAUNTS_new"),
      (e[(e.frankilnsAUNTS_SUNdir = 126)] = "frankilnsAUNTS_SUNdir"),
      (e[(e.FRANKLIN = 127)] = "FRANKLIN"),
      (e[(e.FranklinColorCode = 128)] = "FranklinColorCode"),
      (e[(e.FranklinColorCodeBasic = 129)] = "FranklinColorCodeBasic"),
      (e[(e.FranklinColorCodeBright = 130)] = "FranklinColorCodeBright"),
      (e[(e.FullAmbientmult_interior = 131)] = "FullAmbientmult_interior"),
      (e[(e.gallery_refmod = 132)] = "gallery_refmod"),
      (e[(e.garage = 133)] = "garage"),
      (e[(e.gen_bank = 134)] = "gen_bank"),
      (e[(e.glasses_black = 135)] = "glasses_black"),
      (e[(e.Glasses_BlackOut = 136)] = "Glasses_BlackOut"),
      (e[(e.glasses_blue = 137)] = "glasses_blue"),
      (e[(e.glasses_brown = 138)] = "glasses_brown"),
      (e[(e.glasses_Darkblue = 139)] = "glasses_Darkblue"),
      (e[(e.glasses_green = 140)] = "glasses_green"),
      (e[(e.glasses_orange = 141)] = "glasses_orange"),
      (e[(e.glasses_pink = 142)] = "glasses_pink"),
      (e[(e.glasses_purple = 143)] = "glasses_purple"),
      (e[(e.glasses_red = 144)] = "glasses_red"),
      (e[(e.glasses_Scuba = 145)] = "glasses_Scuba"),
      (e[(e.glasses_VISOR = 146)] = "glasses_VISOR"),
      (e[(e.glasses_yellow = 147)] = "glasses_yellow"),
      (e[(e.gorge_reflection_gpu = 148)] = "gorge_reflection_gpu"),
      (e[(e.gorge_reflectionoffset = 149)] = "gorge_reflectionoffset"),
      (e[(e.gorge_reflectionoffset2 = 150)] = "gorge_reflectionoffset2"),
      (e[(e.graveyard_shootout = 151)] = "graveyard_shootout"),
      (e[(e.grdlc_int_02 = 152)] = "grdlc_int_02"),
      (e[(e.grdlc_int_02_trailer_cave = 153)] = "grdlc_int_02_trailer_cave"),
      (e[(e.gunclub = 154)] = "gunclub"),
      (e[(e.gunclubrange = 155)] = "gunclubrange"),
      (e[(e.gunshop = 156)] = "gunshop"),
      (e[(e.gunstore = 157)] = "gunstore"),
      (e[(e.half_direct = 158)] = "half_direct"),
      (e[(e.hangar_lightsmod = 159)] = "hangar_lightsmod"),
      (e[(e.Hanger_INTmods = 160)] = "Hanger_INTmods"),
      (e[(e.heathaze = 161)] = "heathaze"),
      (e[(e.heist_boat = 162)] = "heist_boat"),
      (e[(e.heist_boat_engineRoom = 163)] = "heist_boat_engineRoom"),
      (e[(e.heist_boat_norain = 164)] = "heist_boat_norain"),
      (e[(e.helicamfirst = 165)] = "helicamfirst"),
      (e[(e.heliGunCam = 166)] = "heliGunCam"),
      (e[(e.Hicksbar = 167)] = "Hicksbar"),
      (e[(e.HicksbarNEW = 168)] = "HicksbarNEW"),
      (e[(e.hillstunnel = 169)] = "hillstunnel"),
      (e[(e.Hint_cam = 170)] = "Hint_cam"),
      (e[(e.hitped = 171)] = "hitped"),
      (e[(e.hud_def_blur = 172)] = "hud_def_blur"),
      (e[(e.hud_def_blur_switch = 173)] = "hud_def_blur_switch"),
      (e[(e.hud_def_colorgrade = 174)] = "hud_def_colorgrade"),
      (e[(e.hud_def_desat_cold = 175)] = "hud_def_desat_cold"),
      (e[(e.hud_def_desat_cold_kill = 176)] = "hud_def_desat_cold_kill"),
      (e[(e.hud_def_desat_Franklin = 177)] = "hud_def_desat_Franklin"),
      (e[(e.hud_def_desat_Michael = 178)] = "hud_def_desat_Michael"),
      (e[(e.hud_def_desat_Neutral = 179)] = "hud_def_desat_Neutral"),
      (e[(e.hud_def_desat_switch = 180)] = "hud_def_desat_switch"),
      (e[(e.hud_def_desat_Trevor = 181)] = "hud_def_desat_Trevor"),
      (e[(e.hud_def_desatcrunch = 182)] = "hud_def_desatcrunch"),
      (e[(e.hud_def_flash = 183)] = "hud_def_flash"),
      (e[(e.hud_def_focus = 184)] = "hud_def_focus"),
      (e[(e.hud_def_Franklin = 185)] = "hud_def_Franklin"),
      (e[(e.hud_def_lensdistortion = 186)] = "hud_def_lensdistortion"),
      (e[(e.hud_def_lensdistortion_subtle = 187)] =
        "hud_def_lensdistortion_subtle"),
      (e[(e.hud_def_Michael = 188)] = "hud_def_Michael"),
      (e[(e.hud_def_Trevor = 189)] = "hud_def_Trevor"),
      (e[(e.ImpExp_Interior_01 = 190)] = "ImpExp_Interior_01"),
      (e[(e.IMpExt_Interior_02 = 191)] = "IMpExt_Interior_02"),
      (e[(e.IMpExt_Interior_02_stair_cage = 192)] =
        "IMpExt_Interior_02_stair_cage"),
      (e[(e.InchOrange01 = 193)] = "InchOrange01"),
      (e[(e.InchOrange02 = 194)] = "InchOrange02"),
      (e[(e.InchPickup01 = 195)] = "InchPickup01"),
      (e[(e.InchPickup02 = 196)] = "InchPickup02"),
      (e[(e.InchPurple01 = 197)] = "InchPurple01"),
      (e[(e.InchPurple02 = 198)] = "InchPurple02"),
      (e[(e.INT_FullAmbientmult = 199)] = "INT_FullAmbientmult"),
      (e[(e.INT_FULLAmbientmult_art = 200)] = "INT_FULLAmbientmult_art"),
      (e[(e.INT_FULLAmbientmult_both = 201)] = "INT_FULLAmbientmult_both"),
      (e[(e.INT_garage = 202)] = "INT_garage"),
      (e[(e.INT_mall = 203)] = "INT_mall"),
      (e[(e.INT_NO_fogALPHA = 204)] = "INT_NO_fogALPHA"),
      (e[(e.INT_NoAmbientmult = 205)] = "INT_NoAmbientmult"),
      (e[(e.INT_NoAmbientmult_art = 206)] = "INT_NoAmbientmult_art"),
      (e[(e.INT_NoAmbientmult_both = 207)] = "INT_NoAmbientmult_both"),
      (e[(e.INT_NOdirectLight = 208)] = "INT_NOdirectLight"),
      (e[(e.INT_nowaterREF = 209)] = "INT_nowaterREF"),
      (e[(e.INT_posh_hairdresser = 210)] = "INT_posh_hairdresser"),
      (e[(e.INT_smshop = 211)] = "INT_smshop"),
      (e[(e.INT_smshop_indoor_bloom = 212)] = "INT_smshop_indoor_bloom"),
      (e[(e.INT_smshop_inMOD = 213)] = "INT_smshop_inMOD"),
      (e[(e.INT_smshop_outdoor_bloom = 214)] = "INT_smshop_outdoor_bloom"),
      (e[(e.INT_streetlighting = 215)] = "INT_streetlighting"),
      (e[(e.INT_trailer_cinema = 216)] = "INT_trailer_cinema"),
      (e[(e.id1_11_tunnel = 217)] = "id1_11_tunnel"),
      (e[(e.impexp_interior_01_lift = 218)] = "impexp_interior_01_lift"),
      (e[(e.int_amb_mult_large = 219)] = "int_amb_mult_large"),
      (e[(e.int_arena_01 = 220)] = "int_arena_01"),
      (e[(e.int_arena_Mod = 221)] = "int_arena_Mod"),
      (e[(e.int_arena_Mod_garage = 222)] = "int_arena_Mod_garage"),
      (e[(e.int_arena_VIP = 223)] = "int_arena_VIP"),
      (e[(e.int_Barber1 = 224)] = "int_Barber1"),
      (e[(e.int_carmod_small = 225)] = "int_carmod_small"),
      (e[(e.int_carrier_control = 226)] = "int_carrier_control"),
      (e[(e.int_carrier_control_2 = 227)] = "int_carrier_control_2"),
      (e[(e.int_carrier_hanger = 228)] = "int_carrier_hanger"),
      (e[(e.int_carrier_rear = 229)] = "int_carrier_rear"),
      (e[(e.int_carrier_stair = 230)] = "int_carrier_stair"),
      (e[(e.int_carshowroom = 231)] = "int_carshowroom"),
      (e[(e.int_chopshop = 232)] = "int_chopshop"),
      (e[(e.int_clean_extlight_large = 233)] = "int_clean_extlight_large"),
      (e[(e.int_clean_extlight_none = 234)] = "int_clean_extlight_none"),
      (e[(e.int_clean_extlight_small = 235)] = "int_clean_extlight_small"),
      (e[(e.int_ClothesHi = 236)] = "int_ClothesHi"),
      (e[(e.int_clotheslow_large = 237)] = "int_clotheslow_large"),
      (e[(e.int_cluckinfactory_none = 238)] = "int_cluckinfactory_none"),
      (e[(e.int_cluckinfactory_small = 239)] = "int_cluckinfactory_small"),
      (e[(e.int_ControlTower_none = 240)] = "int_ControlTower_none"),
      (e[(e.int_ControlTower_small = 241)] = "int_ControlTower_small"),
      (e[(e.int_dockcontrol_small = 242)] = "int_dockcontrol_small"),
      (e[(e.int_extlght_sm_cntrst = 243)] = "int_extlght_sm_cntrst"),
      (e[(e.int_extlight_large = 244)] = "int_extlight_large"),
      (e[(e.int_extlight_large_fog = 245)] = "int_extlight_large_fog"),
      (e[(e.int_extlight_none = 246)] = "int_extlight_none"),
      (e[(e.int_extlight_none_dark = 247)] = "int_extlight_none_dark"),
      (e[(e.int_extlight_none_dark_fog = 248)] = "int_extlight_none_dark_fog"),
      (e[(e.int_extlight_none_fog = 249)] = "int_extlight_none_fog"),
      (e[(e.int_extlight_small = 250)] = "int_extlight_small"),
      (e[(e.int_extlight_small_clipped = 251)] = "int_extlight_small_clipped"),
      (e[(e.int_extlight_small_fog = 252)] = "int_extlight_small_fog"),
      (e[(e.int_Farmhouse_none = 253)] = "int_Farmhouse_none"),
      (e[(e.int_Farmhouse_small = 254)] = "int_Farmhouse_small"),
      (e[(e.int_FranklinAunt_small = 255)] = "int_FranklinAunt_small"),
      (e[(e.int_GasStation = 256)] = "int_GasStation"),
      (e[(e.int_hanger_none = 257)] = "int_hanger_none"),
      (e[(e.int_hanger_small = 258)] = "int_hanger_small"),
      (e[(e.int_Hospital_Blue = 259)] = "int_Hospital_Blue"),
      (e[(e.int_Hospital_BlueB = 260)] = "int_Hospital_BlueB"),
      (e[(e.int_hospital_dark = 261)] = "int_hospital_dark"),
      (e[(e.int_Hospital_DM = 262)] = "int_Hospital_DM"),
      (e[(e.int_hospital_small = 263)] = "int_hospital_small"),
      (e[(e.int_Hospital2_DM = 264)] = "int_Hospital2_DM"),
      (e[(e.int_lesters = 265)] = "int_lesters"),
      (e[(e.int_Lost_none = 266)] = "int_Lost_none"),
      (e[(e.int_Lost_small = 267)] = "int_Lost_small"),
      (e[(e.int_methlab_small = 268)] = "int_methlab_small"),
      (e[(e.int_motelroom = 269)] = "int_motelroom"),
      (e[(e.int_office_Lobby = 270)] = "int_office_Lobby"),
      (e[(e.int_office_LobbyHall = 271)] = "int_office_LobbyHall"),
      (e[(e.int_tattoo = 272)] = "int_tattoo"),
      (e[(e.int_tattoo_B = 273)] = "int_tattoo_B"),
      (e[(e.int_tunnel_none_dark = 274)] = "int_tunnel_none_dark"),
      (e[(e.interior_WATER_lighting = 275)] = "interior_WATER_lighting"),
      (e[(e.introblue = 276)] = "introblue"),
      (e[(e.jewel_gas = 277)] = "jewel_gas"),
      (e[(e.jewel_optim = 278)] = "jewel_optim"),
      (e[(e.jewelry_entrance = 279)] = "jewelry_entrance"),
      (e[(e.jewelry_entrance_INT = 280)] = "jewelry_entrance_INT"),
      (e[(e.jewelry_entrance_INT_fog = 281)] = "jewelry_entrance_INT_fog"),
      (e[(e.Kifflom = 282)] = "Kifflom"),
      (e[(e.KT_underpass = 283)] = "KT_underpass"),
      (e[(e.lab_none = 284)] = "lab_none"),
      (e[(e.lab_none_dark = 285)] = "lab_none_dark"),
      (e[(e.lab_none_dark_fog = 286)] = "lab_none_dark_fog"),
      (e[(e.lab_none_dark_OVR = 287)] = "lab_none_dark_OVR"),
      (e[(e.lab_none_exit = 288)] = "lab_none_exit"),
      (e[(e.lab_none_exit_OVR = 289)] = "lab_none_exit_OVR"),
      (e[(e.LectroDark = 290)] = "LectroDark"),
      (e[(e.LectroLight = 291)] = "LectroLight"),
      (e[(e.LIGHTSreduceFALLOFF = 292)] = "LIGHTSreduceFALLOFF"),
      (e[(e.li = 293)] = "li"),
      (e[(e.LifeInvaderLOD = 294)] = "LifeInvaderLOD"),
      (e[(e.lightning = 295)] = "lightning"),
      (e[(e.lightning_cloud = 296)] = "lightning_cloud"),
      (e[(e.lightning_strong = 297)] = "lightning_strong"),
      (e[(e.lightning_weak = 298)] = "lightning_weak"),
      (e[(e.LightPollutionHills = 299)] = "LightPollutionHills"),
      (e[(e.lightpolution = 300)] = "lightpolution"),
      (e[(e.LODmult_global_reduce = 301)] = "LODmult_global_reduce"),
      (e[(e.LODmult_global_reduce_NOHD = 302)] = "LODmult_global_reduce_NOHD"),
      (e[(e.LODmult_HD_orphan_LOD_reduce = 303)] =
        "LODmult_HD_orphan_LOD_reduce"),
      (e[(e.LODmult_HD_orphan_reduce = 304)] = "LODmult_HD_orphan_reduce"),
      (e[(e.LODmult_LOD_reduce = 305)] = "LODmult_LOD_reduce"),
      (e[(e.LODmult_SLOD1_reduce = 306)] = "LODmult_SLOD1_reduce"),
      (e[(e.LODmult_SLOD2_reduce = 307)] = "LODmult_SLOD2_reduce"),
      (e[(e.LODmult_SLOD3_reduce = 308)] = "LODmult_SLOD3_reduce"),
      (e[(e.lodscaler = 309)] = "lodscaler"),
      (e[(e.LostTimeDark = 310)] = "LostTimeDark"),
      (e[(e.LostTimeFlash = 311)] = "LostTimeFlash"),
      (e[(e.LostTimeLight = 312)] = "LostTimeLight"),
      (e[(e.maxlodscaler = 313)] = "maxlodscaler"),
      (e[(e.metro = 314)] = "metro"),
      (e[(e.METRO_platform = 315)] = "METRO_platform"),
      (e[(e.METRO_Tunnels = 316)] = "METRO_Tunnels"),
      (e[(e.METRO_Tunnels_entrance = 317)] = "METRO_Tunnels_entrance"),
      (e[(e.MichaelColorCode = 318)] = "MichaelColorCode"),
      (e[(e.MichaelColorCodeBasic = 319)] = "MichaelColorCodeBasic"),
      (e[(e.MichaelColorCodeBright = 320)] = "MichaelColorCodeBright"),
      (e[(e.MichaelsDarkroom = 321)] = "MichaelsDarkroom"),
      (e[(e.MichaelsDirectional = 322)] = "MichaelsDirectional"),
      (e[(e.MichaelsNODirectional = 323)] = "MichaelsNODirectional"),
      (e[(e.micheal = 324)] = "micheal"),
      (e[(e.micheals_lightsOFF = 325)] = "micheals_lightsOFF"),
      (e[(e.michealspliff = 326)] = "michealspliff"),
      (e[(e.michealspliff_blend = 327)] = "michealspliff_blend"),
      (e[(e.michealspliff_blend02 = 328)] = "michealspliff_blend02"),
      (e[(e.militarybase_nightlight = 329)] = "militarybase_nightlight"),
      (e[(e.mineshaft = 330)] = "mineshaft"),
      (e[(e.morebloom = 331)] = "morebloom"),
      (e[(e.morgue_dark = 332)] = "morgue_dark"),
      (e[(e.morgue_dark_ovr = 333)] = "morgue_dark_ovr"),
      (e[(e.Mp_apart_mid = 334)] = "Mp_apart_mid"),
      (e[(e.MP_Arena_theme_atlantis = 335)] = "MP_Arena_theme_atlantis"),
      (e[(e.MP_Arena_theme_evening = 336)] = "MP_Arena_theme_evening"),
      (e[(e.MP_Arena_theme_hell = 337)] = "MP_Arena_theme_hell"),
      (e[(e.MP_Arena_theme_midday = 338)] = "MP_Arena_theme_midday"),
      (e[(e.MP_Arena_theme_morning = 339)] = "MP_Arena_theme_morning"),
      (e[(e.MP_Arena_theme_night = 340)] = "MP_Arena_theme_night"),
      (e[(e.MP_Arena_theme_saccharine = 341)] = "MP_Arena_theme_saccharine"),
      (e[(e.MP_Arena_theme_sandstorm = 342)] = "MP_Arena_theme_sandstorm"),
      (e[(e.MP_Arena_theme_scifi_night = 343)] = "MP_Arena_theme_scifi_night"),
      (e[(e.MP_Arena_theme_storm = 344)] = "MP_Arena_theme_storm"),
      (e[(e.MP_Arena_theme_toxic = 345)] = "MP_Arena_theme_toxic"),
      (e[(e.MP_Arena_VIP = 346)] = "MP_Arena_VIP"),
      (e[(e.mp_battle_int01 = 347)] = "mp_battle_int01"),
      (e[(e.mp_battle_int01_dancefloor = 348)] = "mp_battle_int01_dancefloor"),
      (e[(e.mp_battle_int01_dancefloor_OFF = 349)] =
        "mp_battle_int01_dancefloor_OFF"),
      (e[(e.mp_battle_int01_entry = 350)] = "mp_battle_int01_entry"),
      (e[(e.mp_battle_int01_garage = 351)] = "mp_battle_int01_garage"),
      (e[(e.mp_battle_int01_office = 352)] = "mp_battle_int01_office"),
      (e[(e.mp_battle_int02 = 353)] = "mp_battle_int02"),
      (e[(e.mp_battle_int03 = 354)] = "mp_battle_int03"),
      (e[(e.mp_battle_int03_tint1 = 355)] = "mp_battle_int03_tint1"),
      (e[(e.mp_battle_int03_tint2 = 356)] = "mp_battle_int03_tint2"),
      (e[(e.mp_battle_int03_tint3 = 357)] = "mp_battle_int03_tint3"),
      (e[(e.mp_battle_int03_tint4 = 358)] = "mp_battle_int03_tint4"),
      (e[(e.mp_battle_int03_tint5 = 359)] = "mp_battle_int03_tint5"),
      (e[(e.mp_battle_int03_tint6 = 360)] = "mp_battle_int03_tint6"),
      (e[(e.mp_battle_int03_tint7 = 361)] = "mp_battle_int03_tint7"),
      (e[(e.mp_battle_int03_tint8 = 362)] = "mp_battle_int03_tint8"),
      (e[(e.mp_battle_int03_tint9 = 363)] = "mp_battle_int03_tint9"),
      (e[(e.mp_bkr_int01_garage = 364)] = "mp_bkr_int01_garage"),
      (e[(e.mp_bkr_int01_small_rooms = 365)] = "mp_bkr_int01_small_rooms"),
      (e[(e.mp_bkr_int01_transition = 366)] = "mp_bkr_int01_transition"),
      (e[(e.mp_bkr_int02_garage = 367)] = "mp_bkr_int02_garage"),
      (e[(e.mp_bkr_int02_hangout = 368)] = "mp_bkr_int02_hangout"),
      (e[(e.mp_bkr_int02_small_rooms = 369)] = "mp_bkr_int02_small_rooms"),
      (e[(e.mp_bkr_ware01 = 370)] = "mp_bkr_ware01"),
      (e[(e.mp_bkr_ware02_dry = 371)] = "mp_bkr_ware02_dry"),
      (e[(e.mp_bkr_ware02_standard = 372)] = "mp_bkr_ware02_standard"),
      (e[(e.mp_bkr_ware02_upgrade = 373)] = "mp_bkr_ware02_upgrade"),
      (e[(e.mp_bkr_ware03_basic = 374)] = "mp_bkr_ware03_basic"),
      (e[(e.mp_bkr_ware03_upgrade = 375)] = "mp_bkr_ware03_upgrade"),
      (e[(e.mp_bkr_ware04 = 376)] = "mp_bkr_ware04"),
      (e[(e.mp_bkr_ware05 = 377)] = "mp_bkr_ware05"),
      (e[(e.MP_Bull_tost = 378)] = "MP_Bull_tost"),
      (e[(e.MP_Bull_tost_blend = 379)] = "MP_Bull_tost_blend"),
      (e[(e.MP_casino_apartment_bar = 380)] = "MP_casino_apartment_bar"),
      (e[(e.MP_casino_apartment_barPARTY = 381)] =
        "MP_casino_apartment_barPARTY"),
      (e[(e.MP_casino_apartment_barPARTY_0 = 382)] =
        "MP_casino_apartment_barPARTY_0"),
      (e[(e.MP_casino_apartment_barPARTY_01 = 383)] =
        "MP_casino_apartment_barPARTY_01"),
      (e[(e.MP_casino_apartment_barPARTY_2 = 384)] =
        "MP_casino_apartment_barPARTY_2"),
      (e[(e.MP_casino_apartment_Bath = 385)] = "MP_casino_apartment_Bath"),
      (e[(e.MP_casino_apartment_changing = 386)] =
        "MP_casino_apartment_changing"),
      (e[(e.MP_casino_apartment_cinema = 387)] = "MP_casino_apartment_cinema"),
      (e[(e.MP_casino_apartment_colour0 = 388)] =
        "MP_casino_apartment_colour0"),
      (e[(e.MP_casino_apartment_colour1 = 389)] =
        "MP_casino_apartment_colour1"),
      (e[(e.MP_casino_apartment_colour2 = 390)] =
        "MP_casino_apartment_colour2"),
      (e[(e.MP_casino_apartment_exec = 391)] = "MP_casino_apartment_exec"),
      (e[(e.MP_casino_apartment_lobby = 392)] = "MP_casino_apartment_lobby"),
      (e[(e.MP_casino_apartment_lounge = 393)] = "MP_casino_apartment_lounge"),
      (e[(e.MP_casino_apartment_MBed = 394)] = "MP_casino_apartment_MBed"),
      (e[(e.MP_casino_apartment_office = 395)] = "MP_casino_apartment_office"),
      (e[(e.MP_casino_apartment_spa = 396)] = "MP_casino_apartment_spa"),
      (e[(e.MP_corona_heist = 397)] = "MP_corona_heist"),
      (e[(e.MP_corona_heist_blend = 398)] = "MP_corona_heist_blend"),
      (e[(e.MP_corona_heist_BW = 399)] = "MP_corona_heist_BW"),
      (e[(e.MP_corona_heist_BW_night = 400)] = "MP_corona_heist_BW_night"),
      (e[(e.MP_corona_heist_DOF = 401)] = "MP_corona_heist_DOF"),
      (e[(e.MP_corona_heist_night = 402)] = "MP_corona_heist_night"),
      (e[(e.MP_corona_heist_night_blend = 403)] =
        "MP_corona_heist_night_blend"),
      (e[(e.MP_corona_selection = 404)] = "MP_corona_selection"),
      (e[(e.MP_corona_switch = 405)] = "MP_corona_switch"),
      (e[(e.MP_corona_tournament = 406)] = "MP_corona_tournament"),
      (e[(e.MP_corona_tournament_DOF = 407)] = "MP_corona_tournament_DOF"),
      (e[(e.MP_death_grade = 408)] = "MP_death_grade"),
      (e[(e.MP_death_grade_blend01 = 409)] = "MP_death_grade_blend01"),
      (e[(e.MP_death_grade_blend02 = 410)] = "MP_death_grade_blend02"),
      (e[(e.MP_deathfail_night = 411)] = "MP_deathfail_night"),
      (e[(e.mp_exec_office_01 = 412)] = "mp_exec_office_01"),
      (e[(e.mp_exec_office_02 = 413)] = "mp_exec_office_02"),
      (e[(e.mp_exec_office_03 = 414)] = "mp_exec_office_03"),
      (e[(e.mp_exec_office_03_blue = 415)] = "mp_exec_office_03_blue"),
      (e[(e.mp_exec_office_03C = 416)] = "mp_exec_office_03C"),
      (e[(e.mp_exec_office_04 = 417)] = "mp_exec_office_04"),
      (e[(e.mp_exec_office_05 = 418)] = "mp_exec_office_05"),
      (e[(e.mp_exec_office_06 = 419)] = "mp_exec_office_06"),
      (e[(e.mp_exec_warehouse_01 = 420)] = "mp_exec_warehouse_01"),
      (e[(e.MP_Garage_L = 421)] = "MP_Garage_L"),
      (e[(e.mp_gr_int01_black = 422)] = "mp_gr_int01_black"),
      (e[(e.mp_gr_int01_grey = 423)] = "mp_gr_int01_grey"),
      (e[(e.mp_gr_int01_white = 424)] = "mp_gr_int01_white"),
      (e[(e.MP_H_01_Bathroom = 425)] = "MP_H_01_Bathroom"),
      (e[(e.MP_H_01_Bedroom = 426)] = "MP_H_01_Bedroom"),
      (e[(e.MP_H_01_New = 427)] = "MP_H_01_New"),
      (e[(e.MP_H_01_New_Bathroom = 428)] = "MP_H_01_New_Bathroom"),
      (e[(e.MP_H_01_New_Bedroom = 429)] = "MP_H_01_New_Bedroom"),
      (e[(e.MP_H_01_New_Study = 430)] = "MP_H_01_New_Study"),
      (e[(e.MP_H_01_Study = 431)] = "MP_H_01_Study"),
      (e[(e.MP_H_02 = 432)] = "MP_H_02"),
      (e[(e.MP_H_04 = 433)] = "MP_H_04"),
      (e[(e.mp_h_05 = 434)] = "mp_h_05"),
      (e[(e.MP_H_06 = 435)] = "MP_H_06"),
      (e[(e.mp_h_07 = 436)] = "mp_h_07"),
      (e[(e.mp_h_08 = 437)] = "mp_h_08"),
      (e[(e.MP_heli_cam = 438)] = "MP_heli_cam"),
      (e[(e.mp_imx_intwaremed = 439)] = "mp_imx_intwaremed"),
      (e[(e.mp_imx_intwaremed_office = 440)] = "mp_imx_intwaremed_office"),
      (e[(e.mp_imx_mod_int_01 = 441)] = "mp_imx_mod_int_01"),
      (e[(e.MP_intro_logo = 442)] = "MP_intro_logo"),
      (e[(e.MP_job_end_night = 443)] = "MP_job_end_night"),
      (e[(e.MP_job_load = 444)] = "MP_job_load"),
      (e[(e.MP_job_load_01 = 445)] = "MP_job_load_01"),
      (e[(e.MP_job_load_02 = 446)] = "MP_job_load_02"),
      (e[(e.MP_job_lose = 447)] = "MP_job_lose"),
      (e[(e.MP_job_preload = 448)] = "MP_job_preload"),
      (e[(e.MP_job_preload_blend = 449)] = "MP_job_preload_blend"),
      (e[(e.MP_job_preload_night = 450)] = "MP_job_preload_night"),
      (e[(e.MP_job_win = 451)] = "MP_job_win"),
      (e[(e.MP_Killstreak = 452)] = "MP_Killstreak"),
      (e[(e.MP_Killstreak_blend = 453)] = "MP_Killstreak_blend"),
      (e[(e.mp_lad_day = 454)] = "mp_lad_day"),
      (e[(e.mp_lad_judgment = 455)] = "mp_lad_judgment"),
      (e[(e.mp_lad_night = 456)] = "mp_lad_night"),
      (e[(e.MP_Loser = 457)] = "MP_Loser"),
      (e[(e.MP_Loser_blend = 458)] = "MP_Loser_blend"),
      (e[(e.MP_lowgarage = 459)] = "MP_lowgarage"),
      (e[(e.MP_MedGarage = 460)] = "MP_MedGarage"),
      (e[(e.mp_nightshark_shield_fp = 461)] = "mp_nightshark_shield_fp"),
      (e[(e.MP_Powerplay = 462)] = "MP_Powerplay"),
      (e[(e.MP_Powerplay_blend = 463)] = "MP_Powerplay_blend"),
      (e[(e.MP_race_finish = 464)] = "MP_race_finish"),
      (e[(e.MP_select = 465)] = "MP_select"),
      (e[(e.mp_smg_int01_han = 466)] = "mp_smg_int01_han"),
      (e[(e.mp_smg_int01_han_blue = 467)] = "mp_smg_int01_han_blue"),
      (e[(e.mp_smg_int01_han_red = 468)] = "mp_smg_int01_han_red"),
      (e[(e.mp_smg_int01_han_yellow = 469)] = "mp_smg_int01_han_yellow"),
      (e[(e.Mp_Stilts = 470)] = "Mp_Stilts"),
      (e[(e.Mp_Stilts_gym = 471)] = "Mp_Stilts_gym"),
      (e[(e.Mp_Stilts_gym2 = 472)] = "Mp_Stilts_gym2"),
      (e[(e.Mp_Stilts2 = 473)] = "Mp_Stilts2"),
      (e[(e.Mp_Stilts2_bath = 474)] = "Mp_Stilts2_bath"),
      (e[(e.MP_Studio_Lo = 475)] = "MP_Studio_Lo"),
      (e[(e.mp_x17dlc_base = 476)] = "mp_x17dlc_base"),
      (e[(e.mp_x17dlc_base_dark = 477)] = "mp_x17dlc_base_dark"),
      (e[(e.mp_x17dlc_base_darkest = 478)] = "mp_x17dlc_base_darkest"),
      (e[(e.mp_x17dlc_facility = 479)] = "mp_x17dlc_facility"),
      (e[(e.mp_x17dlc_facility_conference = 480)] =
        "mp_x17dlc_facility_conference"),
      (e[(e.mp_x17dlc_facility2 = 481)] = "mp_x17dlc_facility2"),
      (e[(e.mp_x17dlc_in_sub = 482)] = "mp_x17dlc_in_sub"),
      (e[(e.mp_x17dlc_in_sub_no_reflection = 483)] =
        "mp_x17dlc_in_sub_no_reflection"),
      (e[(e.mp_x17dlc_int_01 = 484)] = "mp_x17dlc_int_01"),
      (e[(e.mp_x17dlc_int_01_tint1 = 485)] = "mp_x17dlc_int_01_tint1"),
      (e[(e.mp_x17dlc_int_01_tint2 = 486)] = "mp_x17dlc_int_01_tint2"),
      (e[(e.mp_x17dlc_int_01_tint3 = 487)] = "mp_x17dlc_int_01_tint3"),
      (e[(e.mp_x17dlc_int_01_tint4 = 488)] = "mp_x17dlc_int_01_tint4"),
      (e[(e.mp_x17dlc_int_01_tint5 = 489)] = "mp_x17dlc_int_01_tint5"),
      (e[(e.mp_x17dlc_int_01_tint6 = 490)] = "mp_x17dlc_int_01_tint6"),
      (e[(e.mp_x17dlc_int_01_tint7 = 491)] = "mp_x17dlc_int_01_tint7"),
      (e[(e.mp_x17dlc_int_01_tint8 = 492)] = "mp_x17dlc_int_01_tint8"),
      (e[(e.mp_x17dlc_int_01_tint9 = 493)] = "mp_x17dlc_int_01_tint9"),
      (e[(e.mp_x17dlc_int_02 = 494)] = "mp_x17dlc_int_02"),
      (e[(e.mp_x17dlc_int_02_hangar = 495)] = "mp_x17dlc_int_02_hangar"),
      (e[(e.mp_x17dlc_int_02_outdoor_intro_camera = 496)] =
        "mp_x17dlc_int_02_outdoor_intro_camera"),
      (e[(e.mp_x17dlc_int_02_tint1 = 497)] = "mp_x17dlc_int_02_tint1"),
      (e[(e.mp_x17dlc_int_02_tint2 = 498)] = "mp_x17dlc_int_02_tint2"),
      (e[(e.mp_x17dlc_int_02_tint3 = 499)] = "mp_x17dlc_int_02_tint3"),
      (e[(e.mp_x17dlc_int_02_tint4 = 500)] = "mp_x17dlc_int_02_tint4"),
      (e[(e.mp_x17dlc_int_02_tint5 = 501)] = "mp_x17dlc_int_02_tint5"),
      (e[(e.mp_x17dlc_int_02_tint6 = 502)] = "mp_x17dlc_int_02_tint6"),
      (e[(e.mp_x17dlc_int_02_tint7 = 503)] = "mp_x17dlc_int_02_tint7"),
      (e[(e.mp_x17dlc_int_02_tint8 = 504)] = "mp_x17dlc_int_02_tint8"),
      (e[(e.mp_x17dlc_int_02_tint9 = 505)] = "mp_x17dlc_int_02_tint9"),
      (e[(e.mp_x17dlc_int_02_vehicle_avenger_camera = 506)] =
        "mp_x17dlc_int_02_vehicle_avenger_camera"),
      (e[(e.mp_x17dlc_int_02_vehicle_workshop_camera = 507)] =
        "mp_x17dlc_int_02_vehicle_workshop_camera"),
      (e[(e.mp_x17dlc_int_02_weapon_avenger_camera = 508)] =
        "mp_x17dlc_int_02_weapon_avenger_camera"),
      (e[(e.mp_x17dlc_int_silo = 509)] = "mp_x17dlc_int_silo"),
      (e[(e.mp_x17dlc_int_silo_escape = 510)] = "mp_x17dlc_int_silo_escape"),
      (e[(e.mp_x17dlc_lab = 511)] = "mp_x17dlc_lab"),
      (e[(e.mp_x17dlc_lab_loading_bay = 512)] = "mp_x17dlc_lab_loading_bay"),
      (e[(e.MPApart_H_01 = 513)] = "MPApart_H_01"),
      (e[(e.MPApart_H_01_gym = 514)] = "MPApart_H_01_gym"),
      (e[(e.MPApartHigh = 515)] = "MPApartHigh"),
      (e[(e.MPApartHigh_palnning = 516)] = "MPApartHigh_palnning"),
      (e[(e.mugShot = 517)] = "mugShot"),
      (e[(e.mugShot_lineup = 518)] = "mugShot_lineup"),
      (e[(e.Multipayer_spectatorCam = 519)] = "Multipayer_spectatorCam"),
      (e[(e.multiplayer_ped_fight = 520)] = "multiplayer_ped_fight"),
      (e[(e.nervousRON_fog = 521)] = "nervousRON_fog"),
      (e[(e.NeutralColorCode = 522)] = "NeutralColorCode"),
      (e[(e.NeutralColorCodeBasic = 523)] = "NeutralColorCodeBasic"),
      (e[(e.NeutralColorCodeBright = 524)] = "NeutralColorCodeBright"),
      (e[(e.NeutralColorCodeLight = 525)] = "NeutralColorCodeLight"),
      (e[(e.NEW_abattoir = 526)] = "NEW_abattoir"),
      (e[(e.new_bank = 527)] = "new_bank"),
      (e[(e.NEW_jewel = 528)] = "NEW_jewel"),
      (e[(e.NEW_jewel_EXIT = 529)] = "NEW_jewel_EXIT"),
      (e[(e.NEW_lesters = 530)] = "NEW_lesters"),
      (e[(e.new_MP_Garage_L = 531)] = "new_MP_Garage_L"),
      (e[(e.NEW_ornate_bank = 532)] = "NEW_ornate_bank"),
      (e[(e.NEW_ornate_bank_entrance = 533)] = "NEW_ornate_bank_entrance"),
      (e[(e.NEW_ornate_bank_office = 534)] = "NEW_ornate_bank_office"),
      (e[(e.NEW_ornate_bank_safe = 535)] = "NEW_ornate_bank_safe"),
      (e[(e.New_sewers = 536)] = "New_sewers"),
      (e[(e.NEW_shrinksOffice = 537)] = "NEW_shrinksOffice"),
      (e[(e.NEW_station_unfinished = 538)] = "NEW_station_unfinished"),
      (e[(e.new_stripper_changing = 539)] = "new_stripper_changing"),
      (e[(e.NEW_trevorstrailer = 540)] = "NEW_trevorstrailer"),
      (e[(e.NEW_tunnels = 541)] = "NEW_tunnels"),
      (e[(e.NEW_tunnels_ditch = 542)] = "NEW_tunnels_ditch"),
      (e[(e.new_tunnels_entrance = 543)] = "new_tunnels_entrance"),
      (e[(e.NEW_tunnels_hole = 544)] = "NEW_tunnels_hole"),
      (e[(e.NEW_yellowtunnels = 545)] = "NEW_yellowtunnels"),
      (e[(e.NewMicheal = 546)] = "NewMicheal"),
      (e[(e.NewMicheal_night = 547)] = "NewMicheal_night"),
      (e[(e.NewMicheal_upstairs = 548)] = "NewMicheal_upstairs"),
      (e[(e.NewMichealgirly = 549)] = "NewMichealgirly"),
      (e[(e.NewMichealstoilet = 550)] = "NewMichealstoilet"),
      (e[(e.NewMichealupstairs = 551)] = "NewMichealupstairs"),
      (e[(e.NewMod = 552)] = "NewMod"),
      (e[(e.nextgen = 553)] = "nextgen"),
      (e[(e.NG_blackout = 554)] = "NG_blackout"),
      (e[(e.NG_deathfail_BW_base = 555)] = "NG_deathfail_BW_base"),
      (e[(e.NG_deathfail_BW_blend01 = 556)] = "NG_deathfail_BW_blend01"),
      (e[(e.NG_deathfail_BW_blend02 = 557)] = "NG_deathfail_BW_blend02"),
      (e[(e.NG_filmic01 = 558)] = "NG_filmic01"),
      (e[(e.NG_filmic02 = 559)] = "NG_filmic02"),
      (e[(e.NG_filmic03 = 560)] = "NG_filmic03"),
      (e[(e.NG_filmic04 = 561)] = "NG_filmic04"),
      (e[(e.NG_filmic05 = 562)] = "NG_filmic05"),
      (e[(e.NG_filmic06 = 563)] = "NG_filmic06"),
      (e[(e.NG_filmic07 = 564)] = "NG_filmic07"),
      (e[(e.NG_filmic08 = 565)] = "NG_filmic08"),
      (e[(e.NG_filmic09 = 566)] = "NG_filmic09"),
      (e[(e.NG_filmic10 = 567)] = "NG_filmic10"),
      (e[(e.NG_filmic11 = 568)] = "NG_filmic11"),
      (e[(e.NG_filmic12 = 569)] = "NG_filmic12"),
      (e[(e.NG_filmic13 = 570)] = "NG_filmic13"),
      (e[(e.NG_filmic14 = 571)] = "NG_filmic14"),
      (e[(e.NG_filmic15 = 572)] = "NG_filmic15"),
      (e[(e.NG_filmic16 = 573)] = "NG_filmic16"),
      (e[(e.NG_filmic17 = 574)] = "NG_filmic17"),
      (e[(e.NG_filmic18 = 575)] = "NG_filmic18"),
      (e[(e.NG_filmic19 = 576)] = "NG_filmic19"),
      (e[(e.NG_filmic20 = 577)] = "NG_filmic20"),
      (e[(e.NG_filmic21 = 578)] = "NG_filmic21"),
      (e[(e.NG_filmic22 = 579)] = "NG_filmic22"),
      (e[(e.NG_filmic23 = 580)] = "NG_filmic23"),
      (e[(e.NG_filmic24 = 581)] = "NG_filmic24"),
      (e[(e.NG_filmic25 = 582)] = "NG_filmic25"),
      (e[(e.NG_filmnoir_BW01 = 583)] = "NG_filmnoir_BW01"),
      (e[(e.NG_filmnoir_BW02 = 584)] = "NG_filmnoir_BW02"),
      (e[(e.NG_first = 585)] = "NG_first"),
      (e[(e.nightvision = 586)] = "nightvision"),
      (e[(e.NO_coronas = 587)] = "NO_coronas"),
      (e[(e.NO_fog_alpha = 588)] = "NO_fog_alpha"),
      (e[(e.NO_streetAmbient = 589)] = "NO_streetAmbient"),
      (e[(e.NO_weather = 590)] = "NO_weather"),
      (e[(e.NoAmbientmult = 591)] = "NoAmbientmult"),
      (e[(e.NoAmbientmult_interior = 592)] = "NoAmbientmult_interior"),
      (e[(e.NOdirectLight = 593)] = "NOdirectLight"),
      (e[(e.NoPedLight = 594)] = "NoPedLight"),
      (e[(e.NOrain = 595)] = "NOrain"),
      (e[(e.OrbitalCannon = 596)] = "OrbitalCannon"),
      (e[(e.overwater = 597)] = "overwater"),
      (e[(e.Paleto = 598)] = "Paleto"),
      (e[(e.paleto_nightlight = 599)] = "paleto_nightlight"),
      (e[(e.paleto_opt = 600)] = "paleto_opt"),
      (e[(e.PennedInDark = 601)] = "PennedInDark"),
      (e[(e.PennedInLight = 602)] = "PennedInLight"),
      (e[(e.PERSHING_water_reflect = 603)] = "PERSHING_water_reflect"),
      (e[(e.phone_cam = 604)] = "phone_cam"),
      (e[(e.phone_cam1 = 605)] = "phone_cam1"),
      (e[(e.phone_cam10 = 606)] = "phone_cam10"),
      (e[(e.phone_cam11 = 607)] = "phone_cam11"),
      (e[(e.phone_cam12 = 608)] = "phone_cam12"),
      (e[(e.phone_cam13 = 609)] = "phone_cam13"),
      (e[(e.phone_cam2 = 610)] = "phone_cam2"),
      (e[(e.phone_cam3 = 611)] = "phone_cam3"),
      (e[(e.phone_cam3_REMOVED = 612)] = "phone_cam3_REMOVED"),
      (e[(e.phone_cam4 = 613)] = "phone_cam4"),
      (e[(e.phone_cam5 = 614)] = "phone_cam5"),
      (e[(e.phone_cam6 = 615)] = "phone_cam6"),
      (e[(e.phone_cam7 = 616)] = "phone_cam7"),
      (e[(e.phone_cam8 = 617)] = "phone_cam8"),
      (e[(e.phone_cam8_REMOVED = 618)] = "phone_cam8_REMOVED"),
      (e[(e.phone_cam9 = 619)] = "phone_cam9"),
      (e[(e.plane_inside_mode = 620)] = "plane_inside_mode"),
      (e[(e.player_transition = 621)] = "player_transition"),
      (e[(e.player_transition_no_scanlines = 622)] =
        "player_transition_no_scanlines"),
      (e[(e.player_transition_scanlines = 623)] =
        "player_transition_scanlines"),
      (e[(e.PlayerSwitchNeutralFlash = 624)] = "PlayerSwitchNeutralFlash"),
      (e[(e.PlayerSwitchPulse = 625)] = "PlayerSwitchPulse"),
      (e[(e.plaza_carpark = 626)] = "plaza_carpark"),
      (e[(e.PoliceStation = 627)] = "PoliceStation"),
      (e[(e.PoliceStationDark = 628)] = "PoliceStationDark"),
      (e[(e.polluted = 629)] = "polluted"),
      (e[(e.poolsidewaterreflection2 = 630)] = "poolsidewaterreflection2"),
      (e[(e.PORT_heist_underwater = 631)] = "PORT_heist_underwater"),
      (e[(e.powerplant_nightlight = 632)] = "powerplant_nightlight"),
      (e[(e.powerstation = 633)] = "powerstation"),
      (e[(e.PPFilter = 634)] = "PPFilter"),
      (e[(e.PPGreen01 = 635)] = "PPGreen01"),
      (e[(e.PPGreen02 = 636)] = "PPGreen02"),
      (e[(e.PPOrange01 = 637)] = "PPOrange01"),
      (e[(e.PPOrange02 = 638)] = "PPOrange02"),
      (e[(e.PPPink01 = 639)] = "PPPink01"),
      (e[(e.PPPink02 = 640)] = "PPPink02"),
      (e[(e.PPPurple01 = 641)] = "PPPurple01"),
      (e[(e.PPPurple02 = 642)] = "PPPurple02"),
      (e[(e.prison_nightlight = 643)] = "prison_nightlight"),
      (e[(e.projector = 644)] = "projector"),
      (e[(e.prologue = 645)] = "prologue"),
      (e[(e.prologue_ending_fog = 646)] = "prologue_ending_fog"),
      (e[(e.prologue_ext_art_amb = 647)] = "prologue_ext_art_amb"),
      (e[(e.prologue_reflection_opt = 648)] = "prologue_reflection_opt"),
      (e[(e.prologue_shootout = 649)] = "prologue_shootout"),
      (e[(e.Prologue_shootout_opt = 650)] = "Prologue_shootout_opt"),
      (e[(e.pulse = 651)] = "pulse"),
      (e[(e.RaceTurboDark = 652)] = "RaceTurboDark"),
      (e[(e.RaceTurboFlash = 653)] = "RaceTurboFlash"),
      (e[(e.RaceTurboLight = 654)] = "RaceTurboLight"),
      (e[(e.ranch = 655)] = "ranch"),
      (e[(e.REDMIST = 656)] = "REDMIST"),
      (e[(e.REDMIST_blend = 657)] = "REDMIST_blend"),
      (e[(e.ReduceDrawDistance = 658)] = "ReduceDrawDistance"),
      (e[(e.ReduceDrawDistanceMAP = 659)] = "ReduceDrawDistanceMAP"),
      (e[(e.ReduceDrawDistanceMission = 660)] = "ReduceDrawDistanceMission"),
      (e[(e.reducelightingcost = 661)] = "reducelightingcost"),
      (e[(e.ReduceSSAO = 662)] = "ReduceSSAO"),
      (e[(e.reducewaterREF = 663)] = "reducewaterREF"),
      (e[(e.refit = 664)] = "refit"),
      (e[(e.reflection_correct_ambient = 665)] = "reflection_correct_ambient"),
      (e[(e.RemixDrone = 666)] = "RemixDrone"),
      (e[(e.RemoteSniper = 667)] = "RemoteSniper"),
      (e[(e.resvoire_reflection = 668)] = "resvoire_reflection"),
      (e[(e.rply_brightness = 669)] = "rply_brightness"),
      (e[(e.rply_brightness_neg = 670)] = "rply_brightness_neg"),
      (e[(e.rply_contrast = 671)] = "rply_contrast"),
      (e[(e.rply_contrast_neg = 672)] = "rply_contrast_neg"),
      (e[(e.rply_motionblur = 673)] = "rply_motionblur"),
      (e[(e.rply_saturation = 674)] = "rply_saturation"),
      (e[(e.rply_saturation_neg = 675)] = "rply_saturation_neg"),
      (e[(e.rply_vignette = 676)] = "rply_vignette"),
      (e[(e.rply_vignette_neg = 677)] = "rply_vignette_neg"),
      (e[(e.SALTONSEA = 678)] = "SALTONSEA"),
      (e[(e.sandyshore_nightlight = 679)] = "sandyshore_nightlight"),
      (e[(e.SAWMILL = 680)] = "SAWMILL"),
      (e[(e.scanline_cam = 681)] = "scanline_cam"),
      (e[(e.scanline_cam_cheap = 682)] = "scanline_cam_cheap"),
      (e[(e.scope_zoom_in = 683)] = "scope_zoom_in"),
      (e[(e.scope_zoom_out = 684)] = "scope_zoom_out"),
      (e[(e.secret_camera = 685)] = "secret_camera"),
      (e[(e.services_nightlight = 686)] = "services_nightlight"),
      (e[(e.shades_pink = 687)] = "shades_pink"),
      (e[(e.shades_yellow = 688)] = "shades_yellow"),
      (e[(e.SheriffStation = 689)] = "SheriffStation"),
      (e[(e.ship_explosion_underwater = 690)] = "ship_explosion_underwater"),
      (e[(e.ship_lighting = 691)] = "ship_lighting"),
      (e[(e.Shop247 = 692)] = "Shop247"),
      (e[(e.Shop247_none = 693)] = "Shop247_none"),
      (e[(e.sleeping = 694)] = "sleeping"),
      (e[(e.SmugglerCheckpoint01 = 695)] = "SmugglerCheckpoint01"),
      (e[(e.SmugglerCheckpoint02 = 696)] = "SmugglerCheckpoint02"),
      (e[(e.SmugglerFlash = 697)] = "SmugglerFlash"),
      (e[(e.Sniper = 698)] = "Sniper"),
      (e[(e.SP1_03_drawDistance = 699)] = "SP1_03_drawDistance"),
      (e[(e.spectator1 = 700)] = "spectator1"),
      (e[(e.spectator10 = 701)] = "spectator10"),
      (e[(e.spectator2 = 702)] = "spectator2"),
      (e[(e.spectator3 = 703)] = "spectator3"),
      (e[(e.spectator4 = 704)] = "spectator4"),
      (e[(e.spectator5 = 705)] = "spectator5"),
      (e[(e.spectator6 = 706)] = "spectator6"),
      (e[(e.spectator7 = 707)] = "spectator7"),
      (e[(e.spectator8 = 708)] = "spectator8"),
      (e[(e.spectator9 = 709)] = "spectator9"),
      (e[(e.StadLobby = 710)] = "StadLobby"),
      (e[(e.stc_coroners = 711)] = "stc_coroners"),
      (e[(e.stc_deviant_bedroom = 712)] = "stc_deviant_bedroom"),
      (e[(e.stc_deviant_lounge = 713)] = "stc_deviant_lounge"),
      (e[(e.stc_franklinsHouse = 714)] = "stc_franklinsHouse"),
      (e[(e.stc_trevors = 715)] = "stc_trevors"),
      (e[(e.stoned = 716)] = "stoned"),
      (e[(e.stoned_aliens = 717)] = "stoned_aliens"),
      (e[(e.stoned_cutscene = 718)] = "stoned_cutscene"),
      (e[(e.stoned_monkeys = 719)] = "stoned_monkeys"),
      (e[(e.StreetLighting = 720)] = "StreetLighting"),
      (e[(e.StreetLightingJunction = 721)] = "StreetLightingJunction"),
      (e[(e.StreetLightingtraffic = 722)] = "StreetLightingtraffic"),
      (e[(e.STRIP_changing = 723)] = "STRIP_changing"),
      (e[(e.STRIP_nofog = 724)] = "STRIP_nofog"),
      (e[(e.STRIP_office = 725)] = "STRIP_office"),
      (e[(e.STRIP_stage = 726)] = "STRIP_stage"),
      (e[(e.StuntFastDark = 727)] = "StuntFastDark"),
      (e[(e.StuntFastLight = 728)] = "StuntFastLight"),
      (e[(e.StuntSlowDark = 729)] = "StuntSlowDark"),
      (e[(e.StuntSlowLight = 730)] = "StuntSlowLight"),
      (e[(e.subBASE_water_ref = 731)] = "subBASE_water_ref"),
      (e[(e.sunglasses = 732)] = "sunglasses"),
      (e[(e.superDARK = 733)] = "superDARK"),
      (e[(e.switch_cam_1 = 734)] = "switch_cam_1"),
      (e[(e.switch_cam_2 = 735)] = "switch_cam_2"),
      (e[(e.telescope = 736)] = "telescope"),
      (e[(e.TinyGreen01 = 737)] = "TinyGreen01"),
      (e[(e.TinyGreen02 = 738)] = "TinyGreen02"),
      (e[(e.TinyPink01 = 739)] = "TinyPink01"),
      (e[(e.TinyPink02 = 740)] = "TinyPink02"),
      (e[(e.TinyRacerMoBlur = 741)] = "TinyRacerMoBlur"),
      (e[(e.torpedo = 742)] = "torpedo"),
      (e[(e.traffic_skycam = 743)] = "traffic_skycam"),
      (e[(e.trailer_explosion_optimise = 744)] = "trailer_explosion_optimise"),
      (e[(e.TransformFlash = 745)] = "TransformFlash"),
      (e[(e.TransformRaceFlash = 746)] = "TransformRaceFlash"),
      (e[(e.TREVOR = 747)] = "TREVOR"),
      (e[(e.TrevorColorCode = 748)] = "TrevorColorCode"),
      (e[(e.TrevorColorCodeBasic = 749)] = "TrevorColorCodeBasic"),
      (e[(e.TrevorColorCodeBright = 750)] = "TrevorColorCodeBright"),
      (e[(e.Trevors_room = 751)] = "Trevors_room"),
      (e[(e.trevorspliff = 752)] = "trevorspliff"),
      (e[(e.trevorspliff_blend = 753)] = "trevorspliff_blend"),
      (e[(e.trevorspliff_blend02 = 754)] = "trevorspliff_blend02"),
      (e[(e.Tunnel = 755)] = "Tunnel"),
      (e[(e.tunnel_entrance = 756)] = "tunnel_entrance"),
      (e[(e.tunnel_entrance_INT = 757)] = "tunnel_entrance_INT"),
      (e[(e.TUNNEL_green = 758)] = "TUNNEL_green"),
      (e[(e.TUNNEL_green_ext = 759)] = "TUNNEL_green_ext"),
      (e[(e.Tunnel_green1 = 760)] = "Tunnel_green1"),
      (e[(e.tunnel_id1_11 = 761)] = "tunnel_id1_11"),
      (e[(e.TUNNEL_orange = 762)] = "TUNNEL_orange"),
      (e[(e.TUNNEL_orange_exterior = 763)] = "TUNNEL_orange_exterior"),
      (e[(e.TUNNEL_white = 764)] = "TUNNEL_white"),
      (e[(e.TUNNEL_yellow = 765)] = "TUNNEL_yellow"),
      (e[(e.TUNNEL_yellow_ext = 766)] = "TUNNEL_yellow_ext"),
      (e[(e.ufo = 767)] = "ufo"),
      (e[(e.ufo_deathray = 768)] = "ufo_deathray"),
      (e[(e.underwater = 769)] = "underwater"),
      (e[(e.underwater_deep = 770)] = "underwater_deep"),
      (e[(e.underwater_deep_clear = 771)] = "underwater_deep_clear"),
      (e[(e.v_abattoir = 772)] = "v_abattoir"),
      (e[(e.V_Abattoir_Cold = 773)] = "V_Abattoir_Cold"),
      (e[(e.v_bahama = 774)] = "v_bahama"),
      (e[(e.v_cashdepot = 775)] = "v_cashdepot"),
      (e[(e.V_CIA_Facility = 776)] = "V_CIA_Facility"),
      (e[(e.v_dark = 777)] = "v_dark"),
      (e[(e.V_FIB_IT3 = 778)] = "V_FIB_IT3"),
      (e[(e.V_FIB_IT3_alt = 779)] = "V_FIB_IT3_alt"),
      (e[(e.V_FIB_IT3_alt5 = 780)] = "V_FIB_IT3_alt5"),
      (e[(e.V_FIB_stairs = 781)] = "V_FIB_stairs"),
      (e[(e.v_foundry = 782)] = "v_foundry"),
      (e[(e.v_janitor = 783)] = "v_janitor"),
      (e[(e.v_jewel2 = 784)] = "v_jewel2"),
      (e[(e.v_metro = 785)] = "v_metro"),
      (e[(e.V_Metro_station = 786)] = "V_Metro_station"),
      (e[(e.V_Metro2 = 787)] = "V_Metro2"),
      (e[(e.v_michael = 788)] = "v_michael"),
      (e[(e.v_michael_lounge = 789)] = "v_michael_lounge"),
      (e[(e.V_Office_smoke = 790)] = "V_Office_smoke"),
      (e[(e.V_Office_smoke_ext = 791)] = "V_Office_smoke_ext"),
      (e[(e.V_Office_smoke_Fire = 792)] = "V_Office_smoke_Fire"),
      (e[(e.v_recycle = 793)] = "v_recycle"),
      (e[(e.V_recycle_dark = 794)] = "V_recycle_dark"),
      (e[(e.V_recycle_light = 795)] = "V_recycle_light"),
      (e[(e.V_recycle_mainroom = 796)] = "V_recycle_mainroom"),
      (e[(e.v_rockclub = 797)] = "v_rockclub"),
      (e[(e.V_Solomons = 798)] = "V_Solomons"),
      (e[(e.V_strip_nofog = 799)] = "V_strip_nofog");
    (e[(e.V_strip_office = 800)] = "V_strip_office"),
      (e[(e.v_strip3 = 801)] = "v_strip3"),
      (e[(e.v_strpchangerm = 802)] = "v_strpchangerm"),
      (e[(e.v_sweat = 803)] = "v_sweat"),
      (e[(e.v_sweat_entrance = 804)] = "v_sweat_entrance"),
      (e[(e.v_sweat_NoDirLight = 805)] = "v_sweat_NoDirLight"),
      (e[(e.v_torture = 806)] = "v_torture"),
      (e[(e.Vagos = 807)] = "Vagos"),
      (e[(e.vagos_extlight_small = 808)] = "vagos_extlight_small"),
      (e[(e.VAGOS_new_garage = 809)] = "VAGOS_new_garage"),
      (e[(e.VAGOS_new_hangout = 810)] = "VAGOS_new_hangout"),
      (e[(e.VagosSPLASH = 811)] = "VagosSPLASH"),
      (e[(e.VC_tunnel_entrance = 812)] = "VC_tunnel_entrance"),
      (e[(e.vehicle_subint = 813)] = "vehicle_subint"),
      (e[(e.venice_canal_tunnel = 814)] = "venice_canal_tunnel"),
      (e[(e.vespucci_garage = 815)] = "vespucci_garage"),
      (e[(e.VolticBlur = 816)] = "VolticBlur"),
      (e[(e.VolticFlash = 817)] = "VolticFlash"),
      (e[(e.VolticGold = 818)] = "VolticGold"),
      (e[(e.warehouse = 819)] = "warehouse"),
      (e[(e.WAREHOUSE = 820)] = "WAREHOUSE"),
      (e[(e.WarpCheckpoint = 821)] = "WarpCheckpoint"),
      (e[(e.WATER_CH2_06_01_03 = 822)] = "WATER_CH2_06_01_03"),
      (e[(e.WATER_CH2_06_02 = 823)] = "WATER_CH2_06_02"),
      (e[(e.WATER_CH2_06_04 = 824)] = "WATER_CH2_06_04"),
      (e[(e.WATER_cove = 825)] = "WATER_cove"),
      (e[(e.WATER_hills = 826)] = "WATER_hills"),
      (e[(e.WATER_ID2_21 = 827)] = "WATER_ID2_21"),
      (e[(e.WATER_lab = 828)] = "WATER_lab"),
      (e[(e.WATER_lab_cooling = 829)] = "WATER_lab_cooling"),
      (e[(e.WATER_militaryPOOP = 830)] = "WATER_militaryPOOP"),
      (e[(e.WATER_muddy = 831)] = "WATER_muddy"),
      (e[(e.WATER_port = 832)] = "WATER_port"),
      (e[(e.WATER_REF_malibu = 833)] = "WATER_REF_malibu"),
      (e[(e.WATER_refmap_high = 834)] = "WATER_refmap_high"),
      (e[(e.WATER_refmap_hollywoodlake = 835)] = "WATER_refmap_hollywoodlake"),
      (e[(e.WATER_refmap_low = 836)] = "WATER_refmap_low"),
      (e[(e.WATER_refmap_med = 837)] = "WATER_refmap_med"),
      (e[(e.WATER_refmap_off = 838)] = "WATER_refmap_off"),
      (e[(e.WATER_refmap_poolside = 839)] = "WATER_refmap_poolside"),
      (e[(e.WATER_refmap_silverlake = 840)] = "WATER_refmap_silverlake"),
      (e[(e.WATER_refmap_venice = 841)] = "WATER_refmap_venice"),
      (e[(e.WATER_refmap_verylow = 842)] = "WATER_refmap_verylow"),
      (e[(e.WATER_resevoir = 843)] = "WATER_resevoir"),
      (e[(e.WATER_RichmanStuntJump = 844)] = "WATER_RichmanStuntJump"),
      (e[(e.WATER_river = 845)] = "WATER_river"),
      (e[(e.WATER_salton = 846)] = "WATER_salton"),
      (e[(e.WATER_salton_bottom = 847)] = "WATER_salton_bottom"),
      (e[(e.WATER_shore = 848)] = "WATER_shore"),
      (e[(e.WATER_silty = 849)] = "WATER_silty"),
      (e[(e.WATER_silverlake = 850)] = "WATER_silverlake"),
      (e[(e.WeaponUpgrade = 851)] = "WeaponUpgrade"),
      (e[(e.whitenightlighting = 852)] = "whitenightlighting"),
      (e[(e.WhiteOut = 853)] = "WhiteOut"),
      (e[(e.winning_room = 854)] = "winning_room"),
      (e[(e.yacht_DLC = 855)] = "yacht_DLC"),
      (e[(e.yell_tunnel_nodirect = 856)] = "yell_tunnel_nodirect");
  })(g_ || (g_ = {}));
class F_ extends f_ {
  constructor(e, t) {
    super(e, t),
      (this.weatherMenu = new G_(this, "World Weather")),
      (this.cloudHatMenu = new W_(this, "World Cloud Hat")),
      (this.timeCycleMenu = new V_(this, "World Time Cycle")),
      this.addItem(
        (this.gameClockItem = new Ht(
          "Game Clock Hours",
          void 0,
          new vt([...Array(24).keys()])
        )),
        (e) => t_.setTime(e, 0, 0)
      ),
      this.addItem(
        (this.artificialLights = new Ut("Toggle Artificial Lights", !0)),
        (e) => t_.setArtificialLightsState(!e)
      ),
      this.addItem((this.freezeTime = new Ut("Freeze Time")), (e) => {
        if (e) {
          let e = [tt(), _t(), it()];
          e_.register(
            "world:freezeTime",
            () => t_.setTime(e[0], e[1], e[2]),
            500
          ),
            (this.freezeTime.Description = `Time frozen at ~y~${e[0]}:${e[1]}:${e[2]}`);
        } else e_.clear("world:freezeTime"), (this.freezeTime.Description = "");
      }),
      (this.freezeTime.LeftBadge = mt.Alert);
  }
}
class G_ extends f_ {
  constructor(e, t) {
    super(e, t),
      w_.getValues(Qt).forEach((e) => {
        let t = new At(Qt[+e].toUpperCase());
        this.addItem(t, () => {
          t_.setWeather(+e), M_.selectItem(t, mt.Tick);
        });
      }),
      this.menuObject.MenuOpen.on(() =>
        M_.selectItem(
          this.menuObject.MenuItems[t_.getCurrentWeather()],
          mt.Tick
        )
      );
  }
}
class W_ extends f_ {
  constructor(e, t) {
    super(e, t),
      this.addItem(
        (this.opacityItem = new Ht(
          "Opacity",
          void 0,
          new vt([...Array(11).keys()])
        )),
        (e) => t_.setCloudHatOpacity(e / 10)
      ),
      w_
        .getStringKeys(u_)
        .forEach((e) => this.addItem(new At(e.toUpperCase()))),
      this.menuObject.MenuOpen.on(() => {
        let e = Math.round(10 * (nt() + Number.EPSILON)) / 10;
        this.opacityItem.Index = e * Math.ceil(Math.log10(e + 1)) * 10;
      });
  }
}
class V_ extends f_ {
  constructor(e, t) {
    super(e, t),
      this.addUserInputItem(
        (this.customItem = new At("Custom Timecycle")),
        async () => at(await t_.getUserInput())
      ),
      this.addItem((this.clearItem = new At("Clear Timecycle")), () => st()),
      w_
        .getKeys(g_)
        .forEach((e) => this.addItem(new At(e.toUpperCase()), () => at(e)));
  }
}
class z_ extends Kt {
  constructor(e, t) {
    super(e, t),
      (this.onlineMenu = new R_(this, "Online Options")),
      (this.playerMenu = new S_(this, "Player Options")),
      (this.vehicleMenu = new U_(this, "Vehicle Options")),
      (this.vehicleSpawnerMenu = new E_(this, "Vehicle Spawner")),
      (this.weaponMenu = new B_(this, "Weapon Options")),
      (this.WorldMenu = new F_(this, "World Options")),
      (this.miscMenu = new y_(this, "Misc Options"));
  }
}
const Y_ = new (class extends class {
  constructor() {
    this.menus = [];
  }
  add(e) {
    this.menus.push(e);
  }
  remove(e) {
    this.menus = this.menus.filter((t) => t !== e);
  }
  isAnyMenuOpen() {
    let e = !1;
    return (
      this.menus.forEach((t) => {
        t.Visible && (e = !0);
      }),
      e
    );
  }
} {
  init() {
    let e = new z_(this, "Main Menu");
    f("keyup", (t) => {
      t == ot.F7 && (this.isAnyMenuOpen() || e.menuObject.Open());
    });
  }
})();
qt.init(), Y_.init();
//# sourceMappingURL=client.js.map
