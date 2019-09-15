'use strict';
/* eslint-disable max-len */

exports.Endpoints = {
  Data({ root, region, locale, token }) {
    return {
      Achievement: {
        CategoriesIndex: () => `${root}/data/wow/achievement-category/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Category: achievementCategoryId => `${root}/data/wow/achievement-category/${achievementCategoryId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Index: () => `${root}/data/wow/achievement/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: achievementId => `${root}/data/wow/achievement/${achievementId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Media: achievementId => `${root}/data/wow/media/achievement/${achievementId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      AzeriteEssence: {
        Index: () => `${root}/data/wow/azerite-essence/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: azeriteEssenceId => `${root}/data/wow/azerite-essence/${azeriteEssenceId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Media: azeriteEssenceId => `${root}/data/wow/media/azerite-essence/${azeriteEssenceId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      ConnectedRealm: {
        Index: () => `${root}/data/wow/connected-realm/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Get: connectedRealmId => `${root}/data/wow/connected-realm/${connectedRealmId}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
      },
      Creature: {
        FamiliesIndex: () => `${root}/data/wow/creature-family/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Family: creatureFamilyId => `${root}data/wow/creature-family/${creatureFamilyId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        TypesIndex: () => `${root}/data/wow/creature-type/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Type: creatureTypeId => `${root}/data/wow/creature-type/${creatureTypeId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: creatureId => `${root}/data/wow/creature/${creatureId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        DisplayMedia: creatureDisplayId => `${root}/data/wow/media/creature-display/${creatureDisplayId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        FamilyMedia: creatureFamilyId => `${root}/data/wow/media/creature-family/${creatureFamilyId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      GuildCrest: {
        ComponentsIndex: () => `${root}/data/wow/guild-crest/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        BorderMedia: borderId => `${root}/data/wow/media/guild-crest/border/${borderId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        EmblemMedia: emblemId => `-${root}/data/wow/media/guild-crest/emblem/${emblemId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      Item: {
        ClassesIndex: () => `-${root}/data/wow/item-class/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Class: itemClassId => `-${root}/data/wow/item-class/${itemClassId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Subclass: (itemClassId, itemSubclassId) => `-${root}/data/wow/item-class/${itemClassId}/item-subclass/${itemSubclassId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: itemId => `-${root}/data/wow/item/${itemId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Media: itemId => `-${root}/data/wow/media/item/${itemId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
    };
  },
};

