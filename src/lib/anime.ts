import { animate as animeAnimate, createTimeline, stagger } from "animejs";

type AnimeTargets = Parameters<typeof animeAnimate>[0];
type AnimeParameters = Parameters<typeof animeAnimate>[1];
type AnimeOptions = AnimeParameters extends undefined
  ? Record<string, never>
  : NonNullable<AnimeParameters>;

type AnimeConfig = AnimeOptions & { targets: AnimeTargets };

const anime = (config: AnimeConfig) => {
  const { targets, ...parameters } = config;

  return animeAnimate(targets, parameters as AnimeParameters);
};

const timeline = (parameters?: Parameters<typeof createTimeline>[0]) => createTimeline(parameters);

const animeWithHelpers = Object.assign(anime, { stagger, timeline });

export default animeWithHelpers;
