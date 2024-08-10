export type BuildMode = "development" | "production"

export type BuildEnv = {
  port: number;
  mode: BuildMode;
}

export type BuildPaths = {
  entry: string;
  output: string;
  src: string;
  html: string;
}

export type BuildOptions = {
  mode: BuildMode;
  port: number;
  paths: BuildPaths;
  isDev: boolean;
}