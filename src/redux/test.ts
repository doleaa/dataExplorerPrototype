export interface TestStateInterface {
    testString: string
}

type TestActionName = "SET_TEST_STRING";

export interface TestActionInterface {
    type: TestActionName,
    data: string
}

const defaultInitialState: TestStateInterface = {
    testString: "DEFAULT INITIAL VALUE"
};

const testReducer = (state: TestStateInterface = defaultInitialState, action: TestActionInterface): TestStateInterface => {
    switch (action.type) {
        case "SET_TEST_STRING":
            if (action.data !== undefined) {
                return {
                    testString: action.data
                };
            }
            return state;
        default:
            return state;
    }
};


//ACTIONS:
export const setTestString = (givenStringValue: string): TestActionInterface => {
    return {
        type: "SET_TEST_STRING",
        data: givenStringValue
    };
};


export default testReducer;