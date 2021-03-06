// @flow

export type LonaComponent = {|
  canvases: LonaCanvas[],
  cases: LonaCase[],
  config: {
    canvasLayout: string
  },
  rootLayer: LonaLayer,
  logic: LonaLogic[],
  metadata: {},
  parameters: LonaParameter[]
|};

export type LonaParameter = {|
  name: string,
  type: string | LonaParameterTypeAlias
|};

export type LonaParameterTypeAlias = {|
  alias: string,
  name: string,
  of: string
|};

export type LonaCanvas = {|
  backgroundColor: string,
  exportScale: number,
  height: number,
  heightMode: 'At Least' | 'Exactly',
  name: string,
  parameters: {},
  visible: boolean,
  width: number
|};

export type LonaCase = {|
  name: string,
  type: string,
  value: {},
  visible: boolean
|};

export type LonaLogic = {|
  function: LonaAssignLhsToRhs | LonaIfValue,
  nodes: LonaLogic[]
|};

export type LonaAssignLhsToRhs = {|
  arguments: {
    lhs: LonaVariable,
    rhs: LonaIdentifier
  },
  name: 'assign(lhs, to rhs)'
|};

export type LonaIfValue = {|
  arguments: {
    value: LonaIdentifier
  },
  name: 'if(value)'
|};

export type LonaVariable = LonaIdentifier | LonaValue;

export type LonaIdentifier = {|
  type: 'identifier',
  value: {
    path: string[],
    type: string
  }
|};

export type LonaValue = {|
  type: 'value',
  value: {
    data: any,
    type: string
  }
|};

export type LonaLayer =
  | LonaTextLayer
  | LonaViewLayer
  | LonaImageLayer
  | LonaComponentLayer;

export type LonaComponentLayer = {|
  type: 'Component',
  id: string,
  name: string,
  url: string,
  parameters: {}
|};

export type LonaLayerParameters = {|
  visible?: boolean,

  // layout
  flex?: number,
  alignSelf?: 'stretch' | 'space-between',

  // background
  backgroundColor?: string,

  //border
  borderColor?: string,
  borderRadius?: number,
  borderWidth?: number,

  // dimension
  width?: number,
  height?: number,
  aspectRatio?: number,

  // position
  position?: 'absolute' | 'relative',
  top?: number,
  right?: number,
  left?: number,
  bottom?: number,

  // spacing
  marginTop?: number,
  marginRight?: number,
  marginLeft?: number,
  marginBottom?: number,
  paddingTop?: number,
  paddingRight?: number,
  paddingLeft?: number,
  paddingBottom?: number
|};

export type LonaImageLayer = {|
  type: 'Image',
  id: string,
  name: string,
  parameters: LonaLayerParameters & {|
    image?: string
  |}
|};

export type LonaTextLayer = {|
  type: 'Text',
  id: string,
  name: string,
  parameters: LonaLayerParameters & {|
    text: string,
    font: string,
    numberOfLines: number
  |}
|};

export type LonaViewLayer = {|
  type: 'View',
  id: string,
  name: string,
  children: LonaLayer[],
  parameters: LonaLayerParameters & {
    flexDirection?: 'row' | 'column',
    alignItems?: 'flex-start' | 'center' | 'flex-end',
    justifyContent?: 'flex-start' | 'center' | 'flex-end',
    itemSpacing?: number
  }
|};

export type LonaTextStyles = {|
  defaultStyleName: string,
  styles: LonaTextStyle[]
|};

export type LonaTextStyle = {|
  id: string,
  name: string,
  fontFamily: string,
  fontWeight: string,
  fontSize: number,
  lineHeight: number,
  color: string
|};

export type LonaColor = {|
  name: string,
  id: string,
  value: string,
  comment?: string
|};

export type LonaShadows = {|
  defaultShadowName: string,
  shadows: LonaShadow[]
|};

export type LonaShadow = {|
  id: string,
  name: string,
  color: string,
  x: number,
  y: number,
  blur: number
|};
