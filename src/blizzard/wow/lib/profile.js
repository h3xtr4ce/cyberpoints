'use strict';
/* eslint-disable max-len */

exports.Endpoints = {
  Data({ root, region, locale, token }) {
    return {
      Achievements: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/achievements?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      Appearance: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/appearance?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      Equipment: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/equipment?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      Media: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/character-media?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      MythicKeystone: {
        ProfileIndex: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
        SeasonDetails: (realmSlug, characterName, seasonId) => `${root}/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      },
      Profile: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      PvP: {
        BracketStatistics: (realmSlug, characterName, pvpBracket) => `${root}/profile/wow/character/${realmSlug}/${characterName}/pvp-bracket/${pvpBracket}?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
        Get: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/pvp-summary?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      },
      Specializations: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/specializations?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      Statistics: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/statistics?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      Titles: (realmSlug, characterName) => `${root}/profile/wow/character/${realmSlug}/${characterName}/titles?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      Guild: {
        Get: (realmSlug, nameSlug) => `${root}/data/wow/guild/${realmSlug}/${nameSlug}?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
        Achievements: (realmSlug, nameSlug) => `${root}/data/wow/guild/${realmSlug}/${nameSlug}/achievements?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
        Roster: (realmSlug, nameSlug) => `${root}/data/wow/guild/${realmSlug}/${nameSlug}/roster?namespace=profile-${region}&locale=${locale}&access_token=${token}`,
      },
    };
  },
};
