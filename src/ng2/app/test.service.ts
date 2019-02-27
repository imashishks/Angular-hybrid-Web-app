import { InjectionToken } from "@angular/core";

export const TEST_SERVICE = new InjectionToken<any>('TEST_SERVICE');
export function createTestService(i) {
    return i.get('Test'); 
}
export const testServiceProvider = {
    provide: TEST_SERVICE,
    useFactory: createTestService,
    deps: ['$injector']
}