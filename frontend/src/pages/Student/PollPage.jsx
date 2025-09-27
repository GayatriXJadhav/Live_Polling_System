
import PollResults from "../../components/PollResults";
import PollForm from "../../components/PollForm";

const PollPage = ({
    poll,
    selectedOptions,
    results,
    hasSubmitted,
    dispatch,
    onSubmit
}) => {
    return (
        <div className="student">
            {!poll &&
                <div className="text-center my-25 " >
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ✦ Intervue Poll
                    </span>
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                    </div>
                    <p className="text-xl text-black mt-6 font-bold">Wait for the next question...</p>
                </div>
            }
            {!hasSubmitted && poll && (
                <PollForm
                    question={poll.question}
                    options={poll.options}
                    selectedOption={selectedOptions}
                    onOptionSelect={(opt) => dispatch({ type: "SELECT_OPTION", payload: opt })}
                    onSubmit={onSubmit}

                />
            )}

            {hasSubmitted && poll && (
                <PollResults
                    question={poll.question}
                    results={results}
                    options={poll.options}
                    showWaitingMessage={true}
                />
            )}
        </div>
    );
};

export default PollPage;
