export type Pickers='bg' | 'front'
export interface Pattern {
  id?:number;
  name: string;
  background: string;
  backgroundSize: string;
  backgroundColor?: string;
  backgroundPosition:string;
  opacity: number;
  favorite:boolean;

}

export interface PatternContextInterface{
  handleItemsPattern:(value:Pattern[])=>void,
  bgBody:Pattern,
  handleBgBody:(value:Pattern)=>void,
  handlePropertyOpacity:(value:number)=>void,
  handlePropertySize:(value:string)=>void,
  handlePropertyColor:(value:string)=>void,
  handlePropertyColorLine:(value:string)=>void,
  itemsPattern:Pattern[] | null,
  handleFavoriteItems:()=>void,
  handleModalCode:()=>void,
  openModalCode:boolean,
  handlePickerFront:()=>void,
  pickerFront:boolean
  handlePickerBg:()=>void,
  pickerBg:boolean,
  closePickers:(value:Pickers)=> void
}
