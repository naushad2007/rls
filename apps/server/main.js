(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/server/src/app/app.controller.ts":
/*!***********************************************!*\
  !*** ./apps/server/src/app/app.controller.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppController = class AppController {
};
AppController = tslib_1.__decorate([
    common_1.Controller()
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/server/src/app/app.module.ts":
/*!*******************************************!*\
  !*** ./apps/server/src/app/app.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_module_1 = __webpack_require__(/*! @/auth/auth.module */ "./apps/server/src/auth/auth.module.ts");
const users_module_1 = __webpack_require__(/*! @/users/users.module */ "./apps/server/src/users/users.module.ts");
const environments_1 = __webpack_require__(/*! ../config/environments */ "./apps/server/src/config/environments.ts");
const database_module_1 = __webpack_require__(/*! ../database/database.module */ "./apps/server/src/database/database.module.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/server/src/app/app.controller.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({ validationSchema: environments_1.default }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/server/src/auth/auth.controller.ts":
/*!*************************************************!*\
  !*** ./apps/server/src/auth/auth.controller.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const user_decorator_1 = __webpack_require__(/*! @/users/user.decorator */ "./apps/server/src/users/user.decorator.ts");
const user_entity_1 = __webpack_require__(/*! @/users/user.entity */ "./apps/server/src/users/user.entity.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/server/src/auth/auth.service.ts");
const register_dto_1 = __webpack_require__(/*! ./dto/register.dto */ "./apps/server/src/auth/dto/register.dto.ts");
const request_interface_1 = __webpack_require__(/*! ./interface/request.interface */ "./apps/server/src/auth/interface/request.interface.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    me(user) {
        return user;
    }
    register(request, registerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.register(registerDto);
            const authCookie = this.authService.getLoginCookie(user.id);
            request.res.setHeader('Set-Cookie', authCookie);
            return user;
        });
    }
    logIn(user, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const authCookie = this.authService.getLoginCookie(user.id);
            request.res.setHeader('Set-Cookie', authCookie);
            return user;
        });
    }
    logOut(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const logoutCookie = this.authService.getLogoutCookie();
            request.res.setHeader('Set-Cookie', logoutCookie);
            return;
        });
    }
};
tslib_1.__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('me'),
    tslib_1.__param(0, user_decorator_1.default()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_entity_1.default !== "undefined" && user_entity_1.default) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
tslib_1.__decorate([
    common_1.Post('register'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof request_interface_1.RequestWithResponse !== "undefined" && request_interface_1.RequestWithResponse) === "function" ? _b : Object, typeof (_c = typeof register_dto_1.default !== "undefined" && register_dto_1.default) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
tslib_1.__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(passport_1.AuthGuard('local')),
    common_1.Post('login'),
    tslib_1.__param(0, user_decorator_1.default()),
    tslib_1.__param(1, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.default !== "undefined" && user_entity_1.default) === "function" ? _d : Object, typeof (_e = typeof request_interface_1.RequestWithResponse !== "undefined" && request_interface_1.RequestWithResponse) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "logIn", null);
tslib_1.__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('logout'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof request_interface_1.RequestWithResponse !== "undefined" && request_interface_1.RequestWithResponse) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "logOut", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _g : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/server/src/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./apps/server/src/auth/auth.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const users_module_1 = __webpack_require__(/*! @/users/users.module */ "./apps/server/src/users/users.module.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/server/src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/server/src/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./apps/server/src/auth/strategies/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./strategies/local.strategy */ "./apps/server/src/auth/strategies/local.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule,
            config_1.ConfigModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: configService.get('JWT_EXPIRATION_TIME'),
                    },
                }),
            }),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/server/src/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./apps/server/src/auth/auth.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const postgresErrorCodes_enum_1 = __webpack_require__(/*! @/database/postgresErrorCodes.enum */ "./apps/server/src/database/postgresErrorCodes.enum.ts");
const users_service_1 = __webpack_require__(/*! @/users/users.service */ "./apps/server/src/users/users.service.ts");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    register(registerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt.hash(registerDto.password, 10);
            try {
                const createdUser = yield this.usersService.create(Object.assign(Object.assign({}, registerDto), { password: hashedPassword }));
                return createdUser;
            }
            catch (error) {
                if ((error === null || error === void 0 ? void 0 : error.code) === postgresErrorCodes_enum_1.PostgresErrorCode.UniqueViolation) {
                    throw new common_1.BadRequestException('A user with that email address already exists. Could it be you?');
                }
                throw new common_1.InternalServerErrorException('Something went wrong, report this issue if the problem persists.');
            }
        });
    }
    login(email, plainTextPassword) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.usersService.findByEmail(email);
                yield this.verifyPassword(plainTextPassword, user.password);
                return user;
            }
            catch (error) {
                throw new common_1.BadRequestException('Incorrect username/password, please try again.');
            }
        });
    }
    verifyPassword(plainTextPassword, hashedPassword) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isPasswordMatching = yield bcrypt.compare(plainTextPassword, hashedPassword);
            if (!isPasswordMatching) {
                throw new common_1.BadRequestException('Incorrect username/password, please try again.');
            }
        });
    }
    getToken(id) {
        const payload = { id };
        const secret = this.configService.get('JWT_SECRET');
        const expiresIn = this.configService.get('JWT_EXPIRATION_TIME');
        return this.jwtService.sign(payload, {
            secret,
            expiresIn: `${expiresIn}s`,
        });
    }
    getLoginCookie(id) {
        const token = this.getToken(id);
        const expiresIn = this.configService.get('JWT_EXPIRATION_TIME');
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${expiresIn}`;
    }
    getLogoutCookie() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/server/src/auth/dto/register.dto.ts":
/*!**************************************************!*\
  !*** ./apps/server/src/auth/dto/register.dto.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterDTO {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.MinLength(6),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "password", void 0);
exports.default = RegisterDTO;


/***/ }),

/***/ "./apps/server/src/auth/interface/request.interface.ts":
/*!*************************************************************!*\
  !*** ./apps/server/src/auth/interface/request.interface.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./apps/server/src/auth/strategies/jwt.strategy.ts":
/*!*********************************************************!*\
  !*** ./apps/server/src/auth/strategies/jwt.strategy.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const users_service_1 = __webpack_require__(/*! @/users/users.service */ "./apps/server/src/users/users.service.ts");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(configService, userService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    var _a;
                    return (_a = request === null || request === void 0 ? void 0 : request.cookies) === null || _a === void 0 ? void 0 : _a.Authentication;
                },
            ]),
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
        this.userService = userService;
    }
    validate({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.findById(id);
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/server/src/auth/strategies/local.strategy.ts":
/*!***********************************************************!*\
  !*** ./apps/server/src/auth/strategies/local.strategy.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const auth_service_1 = __webpack_require__(/*! @/auth/auth.service */ "./apps/server/src/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'email' });
        this.authService = authService;
    }
    validate(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.login(email, password);
        });
    }
};
LocalStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/server/src/config/database.ts":
/*!********************************************!*\
  !*** ./apps/server/src/config/database.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const databaseConfig = (configService) => ({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    autoLoadEntities: true,
    synchronize: true,
});
exports.default = databaseConfig;


/***/ }),

/***/ "./apps/server/src/config/environments.ts":
/*!************************************************!*\
  !*** ./apps/server/src/config/environments.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __webpack_require__(/*! joi */ "joi");
const validationSchema = Joi.object({
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRATION_TIME: Joi.number().required(),
    SESSION_SECRET: Joi.string().required(),
    POSTGRES_HOST: Joi.string().default('localhost'),
    POSTGRES_PORT: Joi.number().default(5432),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DB: Joi.string().default('reactive-resume'),
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
    PORT: Joi.number().default(3000),
});
exports.default = validationSchema;


/***/ }),

/***/ "./apps/server/src/database/database.module.ts":
/*!*****************************************************!*\
  !*** ./apps/server/src/database/database.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const database_1 = __webpack_require__(/*! @/config/database */ "./apps/server/src/config/database.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: database_1.default,
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./apps/server/src/database/postgresErrorCodes.enum.ts":
/*!*************************************************************!*\
  !*** ./apps/server/src/database/postgresErrorCodes.enum.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresErrorCode = void 0;
var PostgresErrorCode;
(function (PostgresErrorCode) {
    PostgresErrorCode["UniqueViolation"] = "23505";
})(PostgresErrorCode = exports.PostgresErrorCode || (exports.PostgresErrorCode = {}));


/***/ }),

/***/ "./apps/server/src/main.ts":
/*!*********************************!*\
  !*** ./apps/server/src/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
const morgan = __webpack_require__(/*! morgan */ "morgan");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/server/src/app/app.module.ts");
const bootstrap = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const app = yield core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3000;
    const prefix = 'api';
    // Pipes
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    // Interceptors
    const reflector = app.get(core_1.Reflector);
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
    // Middleware
    app.use(cookieParser());
    app.use(morgan('tiny'));
    app.setGlobalPrefix(prefix);
    // Swagger
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Reactive Resume')
        .setDescription('A free and open-source resume builder.')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/docs', app, document);
    yield app.listen(port, () => {
        common_1.Logger.log('Listening at http://localhost:' + port + '/' + prefix);
    });
});
bootstrap();


/***/ }),

/***/ "./apps/server/src/users/user.decorator.ts":
/*!*************************************************!*\
  !*** ./apps/server/src/users/user.decorator.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const User = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user === null || user === void 0 ? void 0 : user[data] : user;
});
exports.default = User;


/***/ }),

/***/ "./apps/server/src/users/user.entity.ts":
/*!**********************************************!*\
  !*** ./apps/server/src/users/user.entity.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let User = class User {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({ unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
User = tslib_1.__decorate([
    typeorm_1.Entity()
], User);
exports.default = User;


/***/ }),

/***/ "./apps/server/src/users/users.module.ts":
/*!***********************************************!*\
  !*** ./apps/server/src/users/users.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./apps/server/src/users/user.entity.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/server/src/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.default])],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/server/src/users/users.service.ts":
/*!************************************************!*\
  !*** ./apps/server/src/users/users.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./apps/server/src/users/user.entity.ts");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findOne({ id });
            if (user) {
                return user;
            }
            throw new common_1.HttpException(`Could not find user with id ${id}.`, common_1.HttpStatus.NOT_FOUND);
        });
    }
    findByEmail(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findOne({ email });
            if (user) {
                return user;
            }
            throw new common_1.HttpException('Incorrect username/password, please try again.', common_1.HttpStatus.NOT_FOUND);
        });
    }
    create(createUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newUser = this.usersRepository.create(createUserDto);
            yield this.usersRepository.save(newUser);
            return newUser;
        });
    }
};
UsersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(user_entity_1.default)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./apps/server/src/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amruthpillai/Projects/Nx/reactive-resume/apps/server/src/main.ts */"./apps/server/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map