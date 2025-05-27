import ManageCard from "../../components/Cards/ManageCard"
import { MediaIcon, NewspaperFoldingIcon} from "../../components/Icons/Icon"
// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageHomePage() {
  return (
   <>
   <div className="mt-[4rem]">
    <div  className="flex flex-row justify-center flex-wrap gap-[1.5rem]">
   <ManageCard textHeading="Manage Media" Icon={MediaIcon} link="view-all-media"/>
   <ManageCard textHeading="Manage News" Icon={NewspaperFoldingIcon}/>
    </div>
   </div>
   </>
  )
}

export default ManageHomePage