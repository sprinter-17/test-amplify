import type { Schema } from '../../data/resource';


type HandlerType = Schema['generateMenu']['functionHandler'];

export const handler: HandlerType = async (event) => {
  return event.arguments.start;
};