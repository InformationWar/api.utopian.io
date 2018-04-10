import ideasQuestions from "./ideas";
import developmentQuestions from "./development";
import graphicsQuestions from "./graphics";
import bughuntingQuestions from "./bug-hunting";
import translationsQuestions from "./translations";
import analysisQuestions from "./analysis";
import socialQuestions from "./social";
import documentationQuestions from "./documentation";
import tutorialsQuestions from "./tutorials";
import videotutorialsQuestions from "./video-tutorials";
import copywritingQuestions from "./copywriting";
import blogQuestions from "./blog";
import taskRequestQuestions from "./task-requests";
import common from "./common";

const questionnaire = {
	// Main cetegories
	'ideas': {
		questions: [
			...ideasQuestions.questions,
			...common.questions,
		]
	},
	'development': {
		questions: [
			...developmentQuestions.questions,
			...common.questions,
		]
	}, // Done
	'graphics': {
		questions: [
			...graphicsQuestions.questions,
			...common.questions,
		]
	}, // Done
	'bug-hunting': {
		questions: [
			...bughuntingQuestions.questions,
			...common.questions,
		]
	}, // Done
	'translations': {
		questions: [
			...translationsQuestions.questions,
			...common.questions,
		]
	}, // Done
	'analysis': {
		questions: [
			...analysisQuestions.questions,
			...common.questions,
		]
	}, // Done
	'social': {
		questions: [
			...socialQuestions.questions,
			...common.questions,
		]
	}, // Done
	'documentation': {
		questions: [
			...documentationQuestions.questions,
			...common.questions,
		]
	}, // Done
	'tutorials': {
		questions: [
			...tutorialsQuestions.questions,
			...common.questions,
		]
	}, // Done
	"video-tutorials": {
		questions: [
			...videotutorialsQuestions.questions,
			...common.questions,
		]
	}, // Done
	'copywriting': {
		questions: [
			...copywritingQuestions.questions,
			...common.questions,
		]
	}, // Done
	'blog': {
		questions: [
			...blogQuestions.questions,
			...common.questions,
		]
	},
	'task-ideas': {
		questions: [
			...taskRequestQuestions.questions,
			...common.questions,
		]
	},
	'task-development': {
		questions: [
			...taskRequestQuestions.questions,
			...common.questions,
		]
	},
	'task-bug-hunting': {
		questions: [
			...taskRequestQuestions.questions,
			...common.questions,
		]
	},
	'task-documentation': {
		questions: [
			...taskRequestQuestions.questions,
			...common.questions,
		]
	},
	'task-translations': {
		questions: [
			...taskRequestQuestions.questions,
			...common.questions,
		]
	},
	'task-analysis': {
		questions: [
			...taskRequestQuestions.questions,
			...common.questions,
		]
	},
	'task-graphics': {
		questions: [
			...taskRequestQuestions.questions,
			...common.questions,
		]
	},
	'task-social': {
		questions: [
			...taskRequestQuestions.questions,
			...common.questions,
		]
	},
};

export default questionnaire;

