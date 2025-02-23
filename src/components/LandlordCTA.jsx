export default function LandlordCTA() {
    return (
        <div className="bg-[#100A55] text-white gap-[8px] md:py-16 py-[48px] px-6 text-center flex flex-col items-center">
            <p className="text-[#7065F0] md:leading-[36px] md:text-[24px] font-bold">No Spam Promise</p>
            <h2 className="md:text-[40px] text-[32px] md:leading-[56px] leading-[40px] font-bold mt-2">Are you a landlord?</h2>
            <p className="mt-4 text-[#D3D5DA] leading-[25.6px] ">
                Discover ways to increase your home's value and get listed. No Spam.
            </p>
            <div className="mt-6 w-full max-w-md relative">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full md:py-[22px] py-[15px] pr-[90px] pl-[16px] rounded-[8px] text-gray-900 outline-none"
                />
                <button className="bg-[#7065F0] font-bold leading-[24px] hidden sm:block rounded-[8px] text-white absolute right-2 top-1/2 transform -translate-y-1/2 py-[12px] px-[40px] hover:bg-purple-600">
                    Submit
                </button>
            </div>
            <button className="bg-[#7065F0] font-bold leading-[24px] w-full max-w-md sm:hidden block rounded-[8px] text-white py-[12px] px-[40px] hover:bg-purple-600">
                Submit
            </button>
            <p className="mt-4 text-[#D3D5DA] leading-[19.6px] text-[14px]">
                Join <span className="font-semibold text-white">10,000+</span> other landlords in our estatery community.
            </p>
        </div>
    );
}
