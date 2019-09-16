'use strict';
/* eslint-disable max-len */

exports.Endpoints = {
  Community({ root, token, locale }) {
    return {
      Profile: () => `${root}/wow/user/characters?access_token=${token}`,
      Achievement: id => `${root}/wow/achievement/${id}?locale=${locale}&access_token=${token}`,
      Auction: realm => `${root}/wow/auction/data/${realm}?locale=${locale}&access_token=${token}`,
      Boss: {
        MasterList: () => `${root}/wow/boss/?locale=${locale}&access_token=${token}`,
        Boss: bossId => `${root}/wow/boss/${bossId}?locale=${locale}&access_token=${token}`,
      },
      Challenge: {
        Realm: realm => `${root}/wow/challenge/${realm}?locale=${locale}&access_token=${token}`,
        Region: () => `${root}/wow/challenge/region?locale=${locale}&access_token=${token}`,
      },
      Character: {
        Profile: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Achievements: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Appearance: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Feed: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Guild: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        HunterPets: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Items: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Mounts: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Pets: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        PetStlots: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Professions: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Progression: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Pvp: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Quests: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Reputation: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Statistics: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Stats: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Talents: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Titles: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Audit: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&access_token=${token}`,
      },
      Guild: {
        Profile: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Members: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Achievements: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        News: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&access_token=${token}`,
        Challenge: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&access_token=${token}`,
      },
      Item: {
        Item: itemId => `${root}/wow/item/${itemId}?locale=${locale}&access_token=${token}`,
        Set: setId => `${root}/wow/item/set/${setId}?locale=${locale}&access_token=${token}`,
      },
      Mount: () => `${root}/wow/mount/?locale=${locale}&access_token=${token}`,
      Pet: {
        MasterList: () => `${root}/wow/pet/?locale=${locale}&access_token=${token}`,
        Abilities: abilityId => `${root}/wow/pet/ability/${abilityId}?locale=${locale}&access_token=${token}`,
        Species: speciesId => `${root}/wow/pet/species/${speciesId}?locale=${locale}&access_token=${token}`,
        Stats: (speciesId, level, breedId, qualityId) =>
          `${root}/wow/pet/stats/${speciesId}?level=${level}&breedId=${breedId}&qualityId=${qualityId}&locale=${locale}&access_token=${token}`,
      },
      Pvp: bracket => `${root}/wow/leaderboard/${bracket}?locale=e${locale}&access_token=${token}`,
      Quest: questId => `${root}/wow/quest/${questId}?locale=${locale}&access_token=${token}`,
      RealmStatus: () => `${root}/wow/realm/status?locale=${locale}&access_token=${token}`,
      Recipe: recipeId => `${root}/wow/recipe/${recipeId}?locale=${locale}&access_token=${token}`,
      Spell: spellId => `${root}/wow/spell/${spellId}?locale=${locale}&access_token=${token}`,
      User: () => `${root}/wow/user/characters?locale=${locale}&access_token=${token}`,
      Resources: {
        BattleGroups: () => `${root}/wow/data/battlegroups/?locale=${locale}&access_token=${token}`,
        CharacterRaces: () => `${root}/wow/data/character/races?locale=${locale}&access_token=${token}`,
        CharacterClasses: () => `${root}/wow/data/character/classes?locale=${locale}&access_token=${token}`,
        CharacterAchievements: () => `${root}/wow/data/character/achievements?locale=${locale}&access_token=${token}`,
        GuildRewards: () => `${root}/wow/data/guild/rewards?locale=${locale}&access_token=${token}`,
        GuildPerks: () => `${root}/wow/data/guild/perks?locale=${locale}&access_token=${token}`,
        GuildAchievements: () => `${root}/wow/data/guild/achievements?locale=${locale}&access_token=${token}`,
        ItemClasses: () => `${root}/wow/data/item/classes?locale=${locale}&access_token=${token}`,
        Talents: () => `${root}/wow/data/talents?locale=${locale}&access_token=${token}`,
        PetTypes: () => `${root}/wow/data/pet/types?locale=${locale}&access_token=${token}`,
      },
      Zone: {
        MasterList: () => `${root}/wow/zone/?locale=${locale}&access_token=${token}`,
        Zone: zoneId => `${root}/wow/zone/${zoneId}?locale=${locale}&access_token=${token}`,
      },
    };
  },
};
