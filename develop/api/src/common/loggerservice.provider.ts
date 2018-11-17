import { WinstonLoggerService } from './services/winstonlogger.service';
import { ConsoleLoggerService } from '../common/services/consolelogger.service';
import { LoggerService } from './services/logger.service';

export const loggerServiceProvider = {
  provide: LoggerService,
 // useClass: WinstonLoggerService,
  useClass: ConsoleLoggerService,
};
