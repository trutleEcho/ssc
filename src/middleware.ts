import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

// Match all non-static paths
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
