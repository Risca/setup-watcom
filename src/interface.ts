export type ArchiveType = "exe" | "tar";

export interface ISetupWatcomSettings {
  /**
   * The requested Open Watcom version
   */
  version: string;

  /**
   * The download url
   */
  url: string;

  /**
   * Archive type
   */
  archive_type: ArchiveType,

  /**
   * The destination path
   */
  location: string;

  /**
   * Set WATCOM environment variable + add to PATH
   */
  environment: boolean;

  /**
   * Watcom subdir containing the native binaries
   */
  path_subdir: string;

  /**
   * Need mode bits fix-up
   */
  needs_chmod: boolean,

}
