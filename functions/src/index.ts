import * as functions from 'firebase-functions';

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

import {dialogflow, SimpleResponse, BasicCard, Button, Image} from 'actions-on-google';

const app = dialogflow({ debug: true });





export const fulfillment = functions.https.onRequest(app);