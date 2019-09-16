'use strict';
/* eslint-disable max-len */

exports.Endpoints = {
  Data({ root, region, locale, token }) {
    return {
      Creature: {
        FamiliesIndex: () => `${root}/data/wow/creature-family/index?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Family: creatureFamilyId => `${root}data/wow/creature-family/${creatureFamilyId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        TypesIndex: () => `${root}/data/wow/creature-type/index?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Type: creatureTypeId => `${root}/data/wow/creature-type/${creatureTypeId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Get: creatureId => `${root}/data/wow/creature/${creatureId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        DisplayMedia: creatureDisplayId => `${root}/data/wow/media/creature-display/${creatureDisplayId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        FamilyMedia: creatureFamilyId => `${root}/data/wow/media/creature-family/${creatureFamilyId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
      },
      GuildCrest: {
        ComponentsIndex: () => `${root}/data/wow/guild-crest/index?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        BorderMedia: borderId => `${root}/data/wow/media/guild-crest/border/${borderId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        EmblemMedia: emblemId => `-${root}/data/wow/media/guild-crest/emblem/${emblemId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
      },
      Item: {
        ClassesIndex: () => `-${root}/data/wow/item-class/index?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Class: itemClassId => `-${root}/data/wow/item-class/${itemClassId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Subclass: (itemClassId, itemSubclassId) => `-${root}/data/wow/item-class/${itemClassId}/item-subclass/${itemSubclassId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Get: itemId => `-${root}/data/wow/item/${itemId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Media: itemId => `-${root}/data/wow/media/item/${itemId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
      },
      PlayableClass: {
        Index: () => `${root}/data/wow/playable-class/index?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Get: classId => `${root}/data/wow/playable-class/${classId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Media: playableClassId => `${root}/data/wow/media/playable-class/${playableClassId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        PVPTalentSlots: classId => `${root}/data/wow/playable-class/${classId}/pvp-talent-slots?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
      },
      PlayableRace: {
        Index: () => `${root}/data/wow/playable-race/index?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Get: playableRaceId => `${root}/data/wow/playable-race/${playableRaceId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
      },
      PowerType: {
        Index: () => `${root}/data/wow/power-type/index?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
        Get: powerTypeId => `${root}/data/wow/power-type/${powerTypeId}?namespace=static-classic-${region}&locale=${locale}&access_token=${token}`,
      },
    };
  },
};
