import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

Sentry.init({
    dsn: 'https://ad9dcbdd72b04df086d9abf4dcf7c93e@sentry.io/1360517'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
