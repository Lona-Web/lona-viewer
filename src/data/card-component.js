export default {
  canvases: [
    {
      backgroundColor: "white",
      exportScale: 1,
      height: 100,
      heightMode: "At Least",
      name: "iPhone SE",
      parameters: {},
      visible: true,
      width: 320
    },
    {
      backgroundColor: "white",
      exportScale: 1,
      height: 100,
      heightMode: "At Least",
      name: "iPhone 7",
      parameters: {},
      visible: true,
      width: 375
    },
    {
      backgroundColor: "white",
      exportScale: 1,
      height: 100,
      heightMode: "At Least",
      name: "iPhone 7+",
      parameters: {},
      visible: true,
      width: 414
    }
  ],
  cases: [
    {
      name: "Headline only",
      type: "entry",
      value: {
        headline: "Headline Only",
        image: "https://picsum.photos/600/600?image=20"
      },
      visible: true
    },
    {
      name: "All content",
      type: "entry",
      value: {
        body:
          "Located two hours south of Sydney in the Souther Highlands of New South Wales, this destination is truly one you won't want to miss.",
        headline: "Kangaroo Valley Safari",
        image: "https://picsum.photos/600/600?image=10"
      },
      visible: true
    }
  ],
  config: {
    canvasLayout: "xy"
  },
  logic: [
    {
      function: {
        arguments: {
          lhs: {
            type: "identifier",
            value: {
              path: ["parameters", "image"],
              type: "String"
            }
          },
          rhs: {
            type: "identifier",
            value: {
              path: ["layers", "Image", "image"],
              type: {
                alias: "URL",
                name: "Named",
                of: "String"
              }
            }
          }
        },
        name: "assign(lhs, to rhs)"
      },
      nodes: []
    },
    {
      function: {
        arguments: {
          lhs: {
            type: "identifier",
            value: {
              path: ["parameters", "headline"],
              type: "String"
            }
          },
          rhs: {
            type: "identifier",
            value: {
              path: ["layers", "Headline", "text"],
              type: "String"
            }
          }
        },
        name: "assign(lhs, to rhs)"
      },
      nodes: []
    },
    {
      function: {
        arguments: {
          lhs: {
            type: "identifier",
            value: {
              path: ["parameters", "body"],
              type: "String"
            }
          },
          rhs: {
            type: "identifier",
            value: {
              path: ["layers", "Body", "text"],
              type: "String"
            }
          }
        },
        name: "assign(lhs, to rhs)"
      },
      nodes: []
    },
    {
      function: {
        arguments: {
          lhs: {
            type: "value",
            value: {
              data: 20,
              type: "Number"
            }
          },
          value: {
            type: "identifier",
            value: {
              path: ["parameters", "body"],
              type: "String"
            }
          }
        },
        name: "if(value)"
      },
      nodes: [
        {
          function: {
            arguments: {
              lhs: {
                type: "value",
                value: {
                  data: true,
                  type: "Boolean"
                }
              },
              rhs: {
                type: "identifier",
                value: {
                  path: ["layers", "Body", "visible"],
                  type: "Boolean"
                }
              }
            },
            name: "assign(lhs, to rhs)"
          },
          nodes: []
        }
      ]
    }
  ],
  metadata: {},
  parameters: [
    {
      name: "image",
      type: {
        alias: "URL",
        name: "Named",
        of: "String"
      }
    },
    {
      name: "headline",
      type: "String"
    },
    {
      name: "body",
      type: "String"
    }
  ],
  rootLayer: {
    children: [
      {
        children: [],
        name: "Image",
        parameters: {
          alignSelf: "stretch",
          aspectRatio: 2,
          backgroundColor: "#D8D8D8",
          image: ""
        },
        type: "Image"
      },
      {
        children: [
          {
            children: [],
            name: "Headline",
            parameters: {
              font: "headline",
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              text: "Headline"
            },
            type: "Text"
          },
          {
            children: [],
            name: "Body",
            parameters: {
              font: "body2",
              numberOfLines: 2,
              text: "Body",
              visible: false
            },
            type: "Text"
          }
        ],
        name: "Description",
        parameters: {
          alignSelf: "stretch",
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 20
        },
        type: "View"
      }
    ],
    name: "View",
    parameters: {
      alignSelf: "stretch",
      flex: 0
    },
    type: "View"
  }
};
