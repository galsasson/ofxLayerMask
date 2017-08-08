#version 150

uniform sampler2D tex0;
uniform sampler2D maskTex;
in vec2 texCoordVarying;
out vec4 outputColor;

void main()
{
    vec3 src = texture(tex0, texCoordVarying).rgb;
    float srcA = texture(tex0, texCoordVarying).a;
    float mask = texture(maskTex, texCoordVarying).r;
    outputColor = vec4(src , mask * srcA);
}
