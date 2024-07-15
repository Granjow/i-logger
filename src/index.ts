export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'child';

export interface ILogger {
    trace( ...args: ( string | Object )[] ): void;

    debug( ...args: ( string | Object )[] ): void;

    info( ...args: ( string | Object )[] ): void;

    warn( ...args: ( string | Object )[] ): void;

    error( ...args: ( string | Object )[] ): void;

    child( bindings: Object ): ILogger;

    level: LogLevel | string;
}
