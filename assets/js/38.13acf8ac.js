(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{452:function(e,t,a){e.exports=a.p+"assets/img/lunanode-fork.0a8ba55f.png"},453:function(e,t,a){e.exports=a.p+"assets/img/regtest-paid-invoice.d35b2e14.png"},692:function(e,t,a){"use strict";a.r(t);var r=a(35),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"testing-btcpay-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testing-btcpay-server"}},[e._v("#")]),e._v(" Testing BTCPay Server")]),e._v(" "),r("p",[e._v("Testing the software is a great way to contribute to the project. There are many different ways that someone can "),r("em",[e._v("test")]),e._v(" the software. Users who manually test (QA) the software and features to provide user experience, feedback or bugs to the project developers and designers is always appreciated.")]),e._v(" "),r("p",[e._v("Since the software is open source, anyone can test and audit the code. Some merchants or other technical users may want verify new or existing features by testing the software themselves. Developers working on the code can also benefit from understanding how to manually test certain actions in BTCPay.")]),e._v(" "),r("p",[e._v("This guide will show you how to manually test some common BTCPay features and assumes you already have your "),r("RouterLink",{attrs:{to:"/Contribute/DevCode/"}},[e._v("Local Development Environment")]),e._v(" set up. Once you understand the basic testing actions, most other features can be manually tested in a similar way.")],1),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#setup-regtest-network-and-local-btcpay-server"}},[e._v("Setup Regtest Network and Local BTCPay Server")])]),r("li",[r("a",{attrs:{href:"#using-docker-images-for-mainnet-testing"}},[e._v("Using Docker Images for Mainnet Testing")])]),r("li",[r("a",{attrs:{href:"#create-invoice"}},[e._v("Create Invoice")])]),r("li",[r("a",{attrs:{href:"#pay-invoice"}},[e._v("Pay Invoice")])]),r("li",[r("a",{attrs:{href:"#testers-faq"}},[e._v("Testers FAQ")]),r("ul",[r("li",[r("a",{attrs:{href:"#start-debugging-gives-error-no-connection-could-be-made-because-the-target-machine-actively-refused-it-12700139372"}},[e._v("Start Debugging gives Error: No connection could be made because the target machine actively refused it. 127.0.0.1:39372")])]),r("li",[r("a",{attrs:{href:"#regtest-payments-are-not-showing-as-confirmed"}},[e._v("Regtest payments are not showing as confirmed?")])]),r("li",[r("a",{attrs:{href:"#which-branch-should-be-tested-for-major-releases"}},[e._v("Which branch should be tested for major releases?")])]),r("li",[r("a",{attrs:{href:"#can-i-mark-an-invoice-as-paid"}},[e._v("Can I mark an invoice as paid?")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"setup-regtest-network-and-local-btcpay-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-regtest-network-and-local-btcpay-server"}},[e._v("#")]),e._v(" Setup Regtest Network and Local BTCPay Server")]),e._v(" "),r("p",[e._v("First, be sure you have completed the following:")]),e._v(" "),r("ul",[r("li",[e._v("Option 1: Test the latest code - "),r("RouterLink",{attrs:{to:"/Contribute/DevCode/#sync-forked-btcpayserver-repository"}},[e._v("Pull master")])],1),e._v(" "),r("li",[e._v("Option 2: Test a new feature - "),r("RouterLink",{attrs:{to:"/Contribute/DevCode/#create-a-branch-of-a-pull-request"}},[e._v("Pull request")])],1),e._v(" "),r("li",[e._v("Created a local "),r("RouterLink",{attrs:{to:"/Contribute/DevCode/#bitcoin-regtest-network-setup"}},[e._v("Regtest Network")])],1),e._v(" "),r("li",[e._v("Built your solution and started "),r("RouterLink",{attrs:{to:"/Contribute/DevCode/#build-local-btcpayserver-in-browser-mode"}},[e._v("Browser mode")]),e._v(" or "),r("RouterLink",{attrs:{to:"/Contribute/DevCode/#build-local-btcpayserver-in-debug-mode"}},[e._v("Debug mode")])],1)]),e._v(" "),r("h2",{attrs:{id:"using-docker-images-for-mainnet-testing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-images-for-mainnet-testing"}},[e._v("#")]),e._v(" Using Docker Images for Mainnet Testing")]),e._v(" "),r("p",[e._v("Some features are not suitable for testing using a localhost development environment. Integration type features often require mainnet or testnet payments in order to be sufficiently tested. This will show you how to deploy a custom docker image containing an unreleased feature for testing on a live server.")]),e._v(" "),r("p",[e._v("Step 1:")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/Contribute/DevCode/#git-setup"}},[e._v("Fork, clone and create a branch")]),e._v(" of the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server repository"),r("OutboundLink")],1),e._v(" and name your branch: "),r("code",[e._v("btcpay-branch")]),e._v(". Make a modification, such as changing "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer/Views/UIHome/Home.cshtml#L31",target:"_blank",rel:"noopener noreferrer"}},[e._v("this line"),r("OutboundLink")],1),e._v(" on your new branch.")],1),e._v(" "),r("p",[e._v("Step 2:")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/Contribute/DevCode/#git-setup"}},[e._v("Fork, clone and create a branch")]),e._v(" of the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server Docker repository"),r("OutboundLink")],1),e._v(" and name your branch: "),r("code",[e._v("docker-branch")]),e._v(".")],1),e._v(" "),r("p",[e._v("Step 3:")]),e._v(" "),r("p",[e._v("Create a Docker Hub account, Docker repository, download Docker Desktop and Login to your account by following "),r("a",{attrs:{href:"https://docs.docker.com/docker-hub/",target:"_blank",rel:"noopener noreferrer"}},[e._v("these steps"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Step 4:")]),e._v(" "),r("p",[e._v("Since BTCPay Server requires a blockchain sync, it's easiest to use an already deployed & synced server. This server should be deployed referencing your own "),r("code",[e._v("docker-branch")]),e._v(" created in step 2. See this example using the "),r("a",{attrs:{href:"https://launchbtcpay.lunanode.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LunaNode launcher"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("figure",[r("img",{attrs:{src:a(452),alt:"LunaNode Fork"}})]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Note the image above shows you must specify your GitHub repository url and branch name of your forked and cloned btcpayserver-docker repository you created in step 2.")])]),e._v(" "),r("p",[e._v("Step 5:")]),e._v(" "),r("p",[e._v("Inside the root directory of your "),r("code",[e._v("btcpay-branch")]),e._v(" there are Dockerfiles prefixed by the following: amd64, arm32v7, arm64v8. We need to build and push a custom image using the Dockerfile for the OS being used.")]),e._v(" "),r("p",[e._v("Replace "),r("code",[e._v("<dockerUser>")]),e._v(" with your Dockerhub username. Replace the tag "),r("code",[e._v("1.0.0.1")]),e._v(" with your own custom version tag or use "),r("code",[e._v("latest")]),e._v(" tag in the following commands:")]),e._v(" "),r("div",{staticClass:"language-docker extra-class"},[r("pre",{pre:!0,attrs:{class:"language-docker"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#build image")]),e._v("\ndocker build -t <dockerUser>/btcpayserver:1.0.0.1 --file ./amd64.Dockerfile .\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#push image")]),e._v("\ndocker push <dockerUser>/btcpayserver:1.0.0.1\n")])])]),r("p",[e._v("Step 6:")]),e._v(" "),r("p",[e._v("Check that your image appears in your Docker Hub repository and the version tag matches the one you have supplied in the push command above.")]),e._v(" "),r("p",[e._v("Step 7:")]),e._v(" "),r("p",[e._v("Locate the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/tree/master/docker-compose-generator/docker-fragments",target:"_blank",rel:"noopener noreferrer"}},[e._v("btcpayserver.yml docker-fragment"),r("OutboundLink")],1),e._v(" in your local "),r("code",[e._v("docker-branch")]),e._v(" created in step 2. Replace the btcpayserver image's referenced repository to be your Docker image. Replace "),r("code",[e._v("<dockerUser>")]),e._v(" with your Dockerhub username and tag version (example: 1.0.0.1) with the one you have supplied in your step 5 above.")]),e._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("BTCPAY_IMAGE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("<dockerUser"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/btcpayserver"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("1.0.0.1$<BTCPAY_BUILD_CONFIGURATION"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("?")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Step 8:")]),e._v(" "),r("p",[e._v("Push your local "),r("code",[e._v("docker-branch")]),e._v(" changes to your BTCPayServer Docker repository on GitHub.")]),e._v(" "),r("p",[e._v("Step 9:")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-update-btcpay-server"}},[e._v("Update your server")]),e._v(".")],1),e._v(" "),r("p",[e._v("Now you can test your feature as if it was already released!")]),e._v(" "),r("h2",{attrs:{id:"create-invoice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-invoice"}},[e._v("#")]),e._v(" Create Invoice")]),e._v(" "),r("p",[e._v("Creating an invoice and sending payment is an important feature in BTCPay and in order to manually test this, you must first:")]),e._v(" "),r("ul",[r("li",[e._v("Create a Store")]),e._v(" "),r("li",[e._v("Setup a Wallet")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Use the hot wallet for fastest wallet setup during testing. Import from ... > a new/existing seed > check Is hot wallet > Generate")])]),e._v(" "),r("ul",[r("li",[e._v("Create an invoice for your store")])]),e._v(" "),r("h2",{attrs:{id:"pay-invoice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pay-invoice"}},[e._v("#")]),e._v(" Pay Invoice")]),e._v(" "),r("p",[e._v("Open a new Powershell terminal and navigate to your "),r("code",[e._v("BTCPayServer.Tests")]),e._v(" directory where our Docker-Compose commands are run for the project. Copy the amount and address for payment from your invoice. Add them into the following command:")]),e._v(" "),r("p",[r("code",[e._v('.\\docker-bitcoin-cli.ps1 sendtoaddress "bcrt1qym96l8gztggldraywdumgmfw27u8p8h5w7h9kc" 0.00097449')]),e._v(" then press "),r("code",[e._v("Enter")]),e._v(".")]),e._v(" "),r("p",[e._v("Notice that your invoice has now been paid in your local BTCPay Server.")]),e._v(" "),r("figure",[r("img",{attrs:{src:a(453),alt:"Test Paid Invoice"}})]),e._v(" "),r("p",[e._v("To pay other types of payments see "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"testers-faq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testers-faq"}},[e._v("#")]),e._v(" Testers FAQ")]),e._v(" "),r("h3",{attrs:{id:"start-debugging-gives-error-no-connection-could-be-made-because-the-target-machine-actively-refused-it-12700139372"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#start-debugging-gives-error-no-connection-could-be-made-because-the-target-machine-actively-refused-it-12700139372"}},[e._v("#")]),e._v(" Start Debugging gives Error: No connection could be made because the target machine actively refused it. 127.0.0.1:39372")]),e._v(" "),r("p",[e._v("If you see this error, it means you did not set up your Regtest Network using the "),r("code",[e._v("docker-compose up dev")]),e._v(" command in the "),r("code",[e._v("BTCPayServer.Tests")]),e._v(" directory. This command will set up all the dependencies you need for services used by BTCPay in the local development environment. You must run it before you try to start debugging.")]),e._v(" "),r("h3",{attrs:{id:"regtest-payments-are-not-showing-as-confirmed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regtest-payments-are-not-showing-as-confirmed"}},[e._v("#")]),e._v(" Regtest payments are not showing as confirmed?")]),e._v(" "),r("p",[e._v("If you make a "),r("a",{attrs:{href:"#pay-invoice"}},[e._v("test payment")]),e._v(" and it's stuck as unconfirmed, you should mine some blocks to add confirmations to your transaction.")]),e._v(" "),r("div",{staticClass:"language-powershell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-powershell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\docker-bitcoin-generate"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 3\n")])])]),r("p",[e._v("If you are missing things like test payment notifications or other expected events, this may be the reason.")]),e._v(" "),r("h3",{attrs:{id:"which-branch-should-be-tested-for-major-releases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#which-branch-should-be-tested-for-major-releases"}},[e._v("#")]),e._v(" Which branch should be tested for major releases?")]),e._v(" "),r("p",[e._v("Testing master branch is acceptable because it will include the release changes. However, other commits which are not yet released may also be in master. It is always good to find issues before the release so master (or a specific PR) is the ideal branch to test.")]),e._v(" "),r("p",[e._v("You can check the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest release"),r("OutboundLink")],1),e._v(" to see the changes which are available for current deployments as well as the unreleased commits.")]),e._v(" "),r("h3",{attrs:{id:"can-i-mark-an-invoice-as-paid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#can-i-mark-an-invoice-as-paid"}},[e._v("#")]),e._v(" Can I mark an invoice as paid?")]),e._v(" "),r("p",[e._v("No, you can't mark an invoice as paid. If you need completed payment status for development, either "),r("a",{attrs:{href:"#pay-invoice"}},[e._v("pay the invoice")]),e._v(" or create the invoice for $0 which will be automatically paid upon creation.")])])}),[],!1,null,null,null);t.default=o.exports}}]);