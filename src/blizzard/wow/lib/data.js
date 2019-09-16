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
      KeystoneAffix: {
        Index: () => `${root}/data/wow/keystone-affix/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: keystoneAffixId => `${root}/data/wow/keystone-affix/${keystoneAffixId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      RaidLeaderboard: (raid, faction) => `${root}/data/wow/leaderboard/hall-of-fame/${raid}/${faction}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
      Mount: {
        Index: () => `${root}/data/wow/mount/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: mountId => `${root}/data/wow/mount/${mountId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      KeystoneDungeon: {
        DungeonsIndex: () => `${root}/data/wow/mythic-keystone/dungeon/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Get: dungeonId => `${root}/data/wow/mythic-keystone/dungeon/${dungeonId}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        KeystoneIndex: () => `${root}/data/wow/mythic-keystone/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        PeriodsIndex: () => `${root}/data/wow/mythic-keystone/period/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        SeasonIndex: () => `${root}/data/wow/mythic-keystone/season/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Season: seasonId => `${root}/data/wow/mythic-keystone/season/${seasonId}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
      },
      KeystoneLeaderboard: {
        Index: connectedRealmId => `${root}/data/wow/connected-realm/${connectedRealmId}/mythic-leaderboard/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Get: (connectedRealmId, dungeonId, period) => `${root}/wow/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
      },
      Pet: {
        Index: () => `${root}/data/wow/pet/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: petId => `${root}/data/wow/pet/${petId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      PlayableClass: {
        Index: () => `${root}/data/wow/playable-class/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: classId => `${root}/data/wow/playable-class/${classId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Media: playableClassId => `${root}/data/wow/media/playable-class/${playableClassId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        PVPTalentSlots: classId => `${root}/data/wow/playable-class/${classId}/pvp-talent-slots?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      PlayableRace: {
        Index: () => `${root}/data/wow/playable-race/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: playableRaceId => `${root}/data/wow/playable-race/${playableRaceId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      PlayableSpecialization: {
        Index: () => `${root}/data/wow/playable-specialization/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: specId => `${root}/data/wow/playable-specialization/${specId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      PowerType: {
        Index: () => `${root}/data/wow/power-type/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: powerTypeId => `${root}/data/wow/power-type/${powerTypeId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      PvPSeason: {
        Index: () => `${root}/data/wow/pvp-season/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Get: pvpSeasonId => `${root}/data/wow/pvp-season/${pvpSeasonId}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        LeaderboardsIndex: pvpSeasonId => `${root}/data/wow/pvp-season/${pvpSeasonId}/pvp-leaderboard/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Leaderboard: (pvpSeasonId, pvpBracket) => `${root}/data/wow/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        RewardsIndex: pvpSeasonId => `${root}/data/wow/pvp-season/${pvpSeasonId}/pvp-reward/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
      },
      Realm: {
        Index: () => `${root}/data/wow/realm/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Get: realmSlug => `${root}/data/wow/realm/${realmSlug}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
      },
      Region: {
        Index: () => `${root}/data/wow/region/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Get: regionId => `${root}/data/wow/region/${regionId}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
      },
      Title: {
        Index: () => `${root}/data/wow/title/index?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Get: titleId => `${root}/data/wow/title/${titleId}?namespace=static-${region}&locale=${locale}&access_token=${token}`,
      },
      Token: () => `${root}/data/wow/token/index?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
    };
  },
};
