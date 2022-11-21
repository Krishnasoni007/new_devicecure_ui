import { Fragment, useRef, useState } from "react";
import BookRepairLayout from "../../components/Layout/BookRepairLayout";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Review() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <h2 className="text-2xl font-medium text-primary mb-4">Order Details</h2>
      <div className="flex items-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
          alt=""
          className="w-16"
        />
        <div className="ml-4 detail">
          <p className="text-secondary text-lg mb-1">Iphone 13 pro max</p>
          <p className="text-secondary text-lg mb-1">space gray</p>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-secondary text-lg mb-1 font-light">
          <span className="font-medium">Repairing Date:</span> 12-10-22
        </p>
        <p className="text-secondary text-lg mb-1 font-light">
          <span className="font-medium">Time slot:</span> 01:30 pm
        </p>
        <p className="text-secondary text-lg mb-1 font-light">
          your mobile has <span className="font-medium">charging and mic</span>
          issue
        </p>
      </div>
      <h2 className="text-2xl font-medium text-primary mb-4">
        Address Details
      </h2>
      <div className="mb-8">
        <p className="text-secondary text-lg mb-1 font-light">
          <span className="font-medium">Repairing Date:</span> 12-10-22
        </p>
        <p className="text-secondary text-lg mb-1 font-light">
          <span className="font-medium">Time slot:</span> 01:30 pm
        </p>
      </div>
      <h2 className="text-2xl font-medium text-primary mb-4">
        Service Highlights
      </h2>
      <div className="mb-8">
        <details className="white-glass mb-3 rounded-lg p-3">
          <summary class="question py-3 px-4 cursor-pointer select-none w-full outline-none">
            How is this made?
          </summary>
          <p class="pt-1 pb-3 px-4">
            With the HTML5 <code class="text-sm text-red-500">details</code>{" "}
            element and some Tailwind for showcase.
          </p>
        </details>
        <details className="white-glass mb-3 rounded-lg p-3">
          <summary class="question py-3 px-4 cursor-pointer select-none w-full">
            Can I use it?
          </summary>
          <p class="pt-1 pb-3 px-4">
            Of course. It&apos;s yours to use wherever and whenever you like.
          </p>
        </details>
      </div>
      <button className="brand-btn" onClick={() => setOpen(true)}>
        Place order
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
      <div className="mb-4">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 backblur transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <img src="/success.gif" alt="" className="w-full" />
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Deactivate account
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to deactivate your account?
                              All of your data will be permanently removed. This
                              action cannot be undone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" px-4 py-3 justify-between sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="brand-btn"
                        onClick={() => setOpen(false)}
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        className="mt-3 text-primary underline"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}

Review.getLayout = function (page) {
  return <BookRepairLayout>{page}</BookRepairLayout>;
};
