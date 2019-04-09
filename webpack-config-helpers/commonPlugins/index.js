import WebpackBar from 'webpackbar';
import { StatsWriterPlugin } from 'webpack-stats-plugin';


export const commonPlugins = [
  new StatsWriterPlugin({
    filename: 'stats.json',
  }),
];

export const getWebpackBar = target => (
  new WebpackBar({
    color: target === 'web' ? '#1da916' : '#0079ff',
    name: target === 'web' ? 'client' : 'server',
  })
);

export default commonPlugins;
