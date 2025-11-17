import { useEffect } from "react";
import { HiCheck, HiX } from "react-icons/hi";
export type ModalProps = {
  message: string;
  extra_msgs?: string[] | null;
  type: "success" | "error";
  open: boolean;
  modalCloser: () => void;
};

export default function MessageModal({
  message,
  extra_msgs,
  open,
  modalCloser,
  type,
}: ModalProps) {
  useEffect(() => {
    if (open) document.body.classList.add("fix-search-body");
    else document.body.classList.remove("fix-search-body");
  }, [open]);

  return (
    <div
      className={`fixed ${
        !open ? "hidden" : ""
      } z-[5000000] inset-0 overflow-y-auto`}
      id="my-modal"
    >
      <div className="bg-[#00000080] h-screen fixed top-0 right-0 bottom-0 left-0">
        <div
          className="absolute bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl -translate-1/2 top-1/2 left-1/2 transition-all sm:align-middle max-w-sm w-10/12"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div
              className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${
                type == "error" ? "bg-red-100" : "bg-green-100"
              }`}
            >
              <span
                className={`${
                  type == "error" ? "text-red-600" : "text-green-600"
                } text-2xl`}
              >
                {type == "error" ? <HiX /> : <HiCheck />}
              </span>
            </div>

            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                {message}
              </h3>
              <div className="mt-2 max-h-[65px] overflow-y-scroll modal">
                {extra_msgs?.map((msg, index) => (
                  <p
                    dangerouslySetInnerHTML={{ __html: msg }}
                    key={index}
                    className="text-sm text-gray-500"
                  ></p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className={`inline-flex custom-transition justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                type == "error"
                  ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                  : "bg-green-600 hover:bg-green-700 focus:ring-green-500"
              } sm:text-sm`}
              onClick={modalCloser}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
