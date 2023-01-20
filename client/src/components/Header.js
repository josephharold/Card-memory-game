
const Header = ({children})=>{
	return(
		<div className="w-full text-xs sm:text-sm no-wrap right-0 flex gap-5 items-baseline py-5">
			{children}
		</div>
	)	
}

export default Header;