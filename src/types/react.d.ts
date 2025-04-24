import * as React from 'react';

declare module 'react' {
    export type FC<P = {}> = React.FunctionComponent<P>;
    export type FunctionComponent<P = {}> = React.ComponentType<P>;
    
    interface FunctionComponent<P = {}> {
        (props: P & { children?: React.ReactNode }, context?: any): React.ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }
}
