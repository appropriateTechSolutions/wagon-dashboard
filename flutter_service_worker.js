'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5e24e9f6f78bcd2da12d75bf63b76d11",
"version.json": "4ff419d961602456dc8f1327e23cba56",
"index.html": "82fbb18a1de564f062d30934ee8f2c48",
"/": "82fbb18a1de564f062d30934ee8f2c48",
"main.dart.js": "7fcb9659f8c393712aa10e663e015c3f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3d632729c083c98400351668e46009ed",
".git/config": "cedf6d4d31c0dd9406dbf9eaefeb6c19",
".git/objects/6f/a1ffe2c580dbb09265c6380d6e1d2977348b47": "17699b59336d26679c5b522f3243e9a0",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/4d2bb76d4907921c9d9cef31382f636ac5c0fb": "100dab7642dd2dae6b0e0b33303188b2",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/3c/3ed36e0284c9270476ecc5d8cbbbe20fa94bf6": "38f9a06f74ba1f6d2d17474572113c74",
".git/objects/56/11b9b8f47b518c8ed4545f18f0f9b2f66b99ed": "09d60c11ece21395db34696e0812da18",
".git/objects/3d/6c0f0ee0862d3b40214cdaf2cdd574b5ed09f0": "6cdd5d2bc7445a1421fe3ab2cdface8d",
".git/objects/67/103bbdcda35f0de4ecb7a7b7655cded2680d27": "3ed4f4fe752b7657755b223f2c82f57e",
".git/objects/94/387237ccd80153097b2c36c9d554cb76ade1e0": "ee6a99548d1b570733769b1b0da4ed30",
".git/objects/9d/b2acac10189035f9bd6e39587b5f2f06a55ca4": "c90882f595efbdf0157ed0d01cf98116",
".git/objects/02/d682ca03457f91c604678b76aa42724c9f9489": "68ed59b5dc2c6af40dc4bd8ade0dec01",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b3/5d109006d49e250da3dafd6c241a42fd832b1e": "4538d041294fdd7becb1f57a86d86955",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/9c3d157a4d0b338a433ec03ab95a63d93835a6": "eeba6dcbe98d3d63e07989c9653e3480",
".git/objects/c7/7f5b303922fc9b179d0662457f9f132be43ce2": "c152305d31d7938187e9cf14af90a4ea",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/ba6fec7153e5f4255856b342fc97ff1f6efa32": "37a9f8b700e56d7588b0c9b8f46294fa",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/0646f4f4cdf2ff9b99b95fb129313b23a1c278": "82bce70d5b14ef1945d4b18a65199804",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/27/a73ad6be6ffd96450ca0fa566cafc9ffe62863": "74fed507daa0e59ddc6d8d86fe03be75",
".git/objects/11/d2150b9368939b30e0f21bea2f295857da7a68": "674a2bac21a933dfd5052b5407948c61",
".git/objects/7d/13ada39e50cab570d676aceea88efbfaefd8df": "540339735ababb04e2599a3dd775f30e",
".git/objects/29/21ff35490d8fd3df947f496214ace49791177f": "dd176d7acbedbcb95758e05d4c40c059",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/45/26a8290779569447d3f9e039f32c78c8809b64": "0222a65348d2df367688853cd029301c",
".git/objects/45/1213c224624dfa2335b610586d2047a358dfc2": "3e65428e01155bb228e31ae116e73907",
".git/objects/1f/bcc12ea53f8647a1ff1d08b766b9db1e748014": "5853f2cdec7824e2d255ade8aa8991a3",
".git/objects/74/f24817df08f1ea6c3298056ffcdb389e4a849b": "79a8da99f770849bc6a7e44e81ecf5ef",
".git/objects/28/d5766f8270f75e77f95e62b54ece269ff487de": "81a8affbdf5341e5914ce17495b4bab6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/b3756d32c83abcfbe094508838000c4dff86d2": "16dd2a709a436c4b9e8e082867889c6a",
".git/objects/4c/3cc97fa85f7f3a373f6add535b9869360eaf79": "a373e0ebb0f026ce0492737ff40d5759",
".git/objects/4d/eb0dcda2f541031609cc83ceb2f104bdfab9ca": "8c49003b0bdff50eb558bf434a56722a",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9d092c457f41e1bb34a925e570f4bd783164c8": "4f05a826e0a4fb7ff01e940c0548b320",
".git/objects/9f/c0c96c77a8eab485ef3106be36745d41fa2401": "6a01e2e9692e9618dfc2c83db08704f2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/54/927d50fdd603f47e231a56c9a1600ce919f27d": "17af55f5b174f341d6bcfac0d62f13b1",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/30/98e04958bed998d363c4e0f94f4f71591a2e65": "4cb36d399200d103f8cef3f090720e1b",
".git/objects/5e/9c77821c84cfb8eac2f38e18d69a86d7a09901": "531ea6fc3aaf13142f26bd5c4fce4d51",
".git/objects/39/759f26fa36139591aa9b3edb9f89975cae5a65": "91f2e168f41b75b96c8af3b697427b3a",
".git/objects/52/159ea3495d1b8586843ebc7f465dce4bd05ec7": "1f7b7b3947f592e46593bb7c9091e046",
".git/objects/63/9152e5fb525e21c160dd9c41d33ff50c85ac06": "75fcb7622dda80af542a8cf714569209",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/1a5e0b3028fde94ca7648d55df6425274bcf5c": "326568c6d17ec26c98558478c443e11d",
".git/objects/dd/238fba6cb926ec17180985b6fa064a97f4a779": "03d7adc05d63209dcad26d8161b3a472",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/aba43deb95234c877c0c5bab2a519bc72dc019": "a8074aa7d6e98bd9afceab618fca59e6",
".git/objects/de/9c578a3d6ee1673f52ec891afc00a8dc725696": "d9292ef403943f805b87a505611217d3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ff78ebb69df084792f29f12f364aaffea3b172": "d3776365851f48afafa23e234c088ec7",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e6/63e65962498d30c6bb2815cacbd8981fb7a4af": "208a5f551964ebc1e69d68ff1ef732d5",
".git/objects/f9/107e1dfb6150af009dcd50a28aa776f40b3a1a": "b5f0f0a6fc5c0518d7f372ebd117c356",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/1e5f8e3aa515e9d32abdaacf8a65ec1d1fc5ba": "50207bdfb80fd8829be8c3b2c7d34095",
".git/objects/f1/7fcacf4f122141713b10a90e1f8bdebab57b54": "65f4972019a3f1ef9e672232ab40e327",
".git/objects/2c/f24a270160c755be317cbe524d79e385711e75": "df9a20dfa9a4ff6c978740755605b4f8",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/12/81d9d96a58eb91c5e175bbe2c1cadafb13f76b": "6373d817f18110f2568db00816199875",
".git/objects/8c/2ac220d807803dd86ff88dba96a1cd85334901": "63120c82fa2a187fd579bd8a7d39ddb4",
".git/objects/76/dfca30943b69664298389460655b06d9154c47": "274d77814f9d08317733bcd9e752040d",
".git/objects/1c/d9c08d65a8382967340fd7ed0cadc5c4213844": "bd3d1d82611acd8dd016deb7863ec3cb",
".git/objects/47/a6bddda65bd17348b285b47cda77ea86f547c5": "23fd2d9646c5f531dbdd01009b5a3854",
".git/objects/8b/3c3017c745524829cb533c6f5756bb969e4a96": "22b6cecba2412edf04a6ea747215de7b",
".git/objects/13/3bf2f9a60c22ba1fe24d5a75f77a759b06c7c4": "573294c6e0179c75b8bd5f8cfad9fb44",
".git/objects/7f/1ffb906ddf6f18e6ecad1f8ea382eaaba86fbd": "b5b37027e8697b2ee4911caea8262306",
".git/objects/7f/6e2af9c96b5f834f62e3632e92c273596ba0ae": "af05399822b299c685d597e617e44301",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/8e/6d67c5573c498f99e66773e8a66a827cb8178a": "3836e10847290240500baeb2bb03a7e4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58e3df4226dbc1305b993685a1f54449",
".git/logs/refs/heads/main": "58e3df4226dbc1305b993685a1f54449",
".git/logs/refs/remotes/origin/main": "ec742824e896e2b008da0f36c99f88b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b995dea9af657c81adadc6a84a2b4413",
".git/refs/remotes/origin/main": "b995dea9af657c81adadc6a84a2b4413",
".git/index": "d044c17c911dc93ec16238ced7e625b1",
".git/COMMIT_EDITMSG": "ba868da5a88cddd66d225ccace39e152",
"assets/AssetManifest.json": "ace046fdaa0a425f09e32d0330f7248f",
"assets/NOTICES": "124816f71496cafd9fc4dd2b1651a1ec",
"assets/FontManifest.json": "bc08524147adfbc63ef38c42880394c4",
"assets/AssetManifest.bin.json": "54411ead630fd53e564c97d613059c75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "df5f49b28890a7d68b330099147bad48",
"assets/fonts/MaterialIcons-Regular.otf": "923b90f0327ff36a746bd49f36864607",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Map.jpg": "120adcdb81fb3b80d8c34f2a02cb716c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-Rear.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-Map.jpg": "ab9ded1d7bbeb4c95a2a29b0317e32c2",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-Front.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Coupler%2520End-Cant%2520rail%2520corner%2520(left).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Drawbar%2520End-RHS.jpg": "76576a4aa64ba2157e293a28b57bf12b",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Torsion%20box-Coupler%20End-Cant%20rail%20corner%20(right).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-LHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Torsion%20box-Drawbar%20End-RHS.jpg": "76576a4aa64ba2157e293a28b57bf12b",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-Rear.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Drawbar%20Assembly-King%20Casting-RHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Coupler%20Assembly-King%20Casting-Map.jpg": "f6ec95a8057e33101c899562d56b8858",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Torsion%20box-Drawbar%20End-Cant%20rail%20corner%20(right).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Drawbar%2520End-RHS.jpg": "d63fe177ee96764ff58307deadfe4315",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-RHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Torsion%20box-Coupler%20End-Overall.jpg": "2d4256b3f7833560173181f5b7297743",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Coupler%20Assembly-King%20Casting-Map.jpg": "ab9ded1d7bbeb4c95a2a29b0317e32c2",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Drawbar%2520End-Cant%2520rail%2520corner%2520(left).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Drawbar%20Assembly-King%20Casting-RHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-Map.jpg": "ab9ded1d7bbeb4c95a2a29b0317e32c2",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Side%20wall-LHS-Overall.jpg": "5651bae548d1fe97bb14de73a714b38a",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Coupler%20Assembly-King%20Casting-Front.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Drawbar%20Assembly-King%20Casting-Rear.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Drawbar%20Assembly-King%20Casting-Rear.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Drawbar%20Assembly-King%20Casting-LHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Drawbar%20Assembly-King%20Casting-Front.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Coupler%20Assembly-King%20Casting-Rear.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Drawbar%20Assembly-King%20Casting-LHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Map.jpg": "120adcdb81fb3b80d8c34f2a02cb716c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-LHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Drawbar%2520End-LHS.jpg": "9e9d1b6c0ae117f5e6631ca0b1249298",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Coupler%20Assembly-King%20Casting-Rear.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Side%2520wall-LHS-Overall.jpg": "5651bae548d1fe97bb14de73a714b38a",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Drawbar%2520End-Cant%2520rail%2520corner%2520(right).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Drawbar%2520End-LHS.jpg": "d688dce459a80dab87ed584ac09fb48c",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Drawbar%20Assembly-King%20Casting-Front.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Coupler%20Assembly-King%20Casting-Front.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-Front.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Map.jpg": "abe61cbed92e82b8bb049ff36ca4cdea",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Torsion%20box-Drawbar%20End-LHS.jpg": "d688dce459a80dab87ed584ac09fb48c",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Side%20wall-LHS-Overall.jpg": "5651bae548d1fe97bb14de73a714b38a",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Side%2520wall-LHS-Overall.jpg": "5651bae548d1fe97bb14de73a714b38a",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Drawbar%2520End-Cant%2520rail%2520corner%2520(right).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-RHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Coupler%2520End-Overall.jpg": "0a1db5133a2b8a514b17a35f784ac173",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Coupler%2520End-Cant%2520rail%2520corner%2520(right).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-RHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Coupler%2520End-Cant%2520rail%2520corner%2520(right).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Torsion%20box-Coupler%20End-Overall.jpg": "0a1db5133a2b8a514b17a35f784ac173",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Drawbar%20Assembly-King%20Casting-Map.jpg": "f6ec95a8057e33101c899562d56b8858",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Map.jpg": "abe61cbed92e82b8bb049ff36ca4cdea",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-Map.jpg": "f6ec95a8057e33101c899562d56b8858",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Torsion%20box-Drawbar%20End-LHS.jpg": "9e9d1b6c0ae117f5e6631ca0b1249298",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Coupler%20Assembly-King%20Casting-RHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Coupler%20Assembly-King%20Casting-RHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-LHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-Front.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Drawbar%20Assembly-King%20Casting-Map.jpg": "ab9ded1d7bbeb4c95a2a29b0317e32c2",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Coupler%20Assembly-King%20Casting-LHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Torsion%20box-Drawbar%20End-RHS.jpg": "d63fe177ee96764ff58307deadfe4315",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Side%20wall-RHS-Overall.jpg": "02639b62df0ba13f7bd2515f9c53b9dc",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Torsion%20box-Drawbar%20End-Cant%20rail%20corner%20(right).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Coupler%2520End-Overall.jpg": "2d4256b3f7833560173181f5b7297743",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-Rear.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Torsion%20box-Drawbar%20End-Cant%20rail%20corner%20(left).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Coupler%2520End-Cant%2520rail%2520corner%2520(left).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-RHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Torsion%20box-Coupler%20End-Cant%20rail%20corner%20(left).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-Front.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Coupler%20Assembly-King%20Casting-LHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Drawbar%2520End-Cant%2520rail%2520corner%2520(left).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-Map.jpg": "f6ec95a8057e33101c899562d56b8858",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-Rear.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Side%2520wall-RHS-Overall.jpg": "02639b62df0ba13f7bd2515f9c53b9dc",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Torsion%20box-Coupler%20End-Cant%20rail%20corner%20(right).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Torsion%20box-Drawbar%20End-Cant%20rail%20corner%20(left).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%20Wagon%20-%20Master-Torsion%20box-Coupler%20End-Cant%20rail%20corner%20(left).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Side%2520wall-RHS-Overall.jpg": "02639b62df0ba13f7bd2515f9c53b9dc",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-LHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%20Wagon%20-%20Slave-Side%20wall-RHS-Overall.jpg": "02639b62df0ba13f7bd2515f9c53b9dc",
"assets/assets/fixtures/defects.json": "0e364a71e218cdc21d0eedc4a4dcb09d",
"assets/assets/fixtures/inspectors.json": "0678eba9c477db63bf9d5742567d8b0c",
"assets/assets/fixtures/observations.json": "12e3e328fc892bbe3229cdd35452441f",
"assets/assets/fixtures/floc.json": "0b94aa9f20e316c75f5d9fbb1f8c73c8",
"assets/assets/fixtures/counters.json": "57d86fbc9bb75d10bcb6ad4dc6ae5ef5",
"assets/assets/fixtures/drawings.json": "36b78afc4f959af7e06c013aa85bd973",
"assets/assets/fixtures/assets.json": "3008728dce15c34388b4ec1bd3d327dc",
"assets/assets/fixtures/inspections.json": "f59919154096603f0f911d45951ae253",
"assets/assets/fonts/SairaSemiCondensed-600.ttf": "3800eb33dc25b5cdcb2bae44a1322669",
"assets/assets/fonts/SairaSemiCondensed-700.ttf": "73c62a804eb56c340e3a9a3ca8a96f70",
"assets/assets/fonts/IBMPlexMono-400.ttf": "765bec38100d4f149506f43f13c09330",
"assets/assets/fonts/Saira-500.ttf": "34c6a5eb4afbad7dc4c17215375ef86d",
"assets/assets/fonts/Saira-400.ttf": "312e564470cb505b415b93d5966420f6",
"assets/assets/fonts/IBMPlexMono-500.ttf": "d35a0e42bc2ab6266e325a43509b0543",
"assets/assets/fonts/Saira-600.ttf": "87c9c954d581ca27cff4b5733a0aeb74",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
