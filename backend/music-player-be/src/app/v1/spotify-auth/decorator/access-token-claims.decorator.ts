import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface Claims {
    sub: string;
    azp: string;
    iat: number,
    exp: number,
    iss: string;
}

/** Extracts current user from request. Returns impersonated user if impersonation header is present. */
export const AccessTokenClaims = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext) => {
        const { user } = ctx.switchToHttp().getRequest<{ user: Claims }>();
        return user;
    }
);