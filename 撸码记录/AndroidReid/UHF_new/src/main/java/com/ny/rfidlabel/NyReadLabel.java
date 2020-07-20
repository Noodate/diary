package com.ny.rfidlabel;

/**
 * 环宇智慧EPC的特殊转换规则，为了显示为标签上印刷的EPC号
 *
 * @author LeiHuang
 */
public class NyReadLabel {

    public static String getEPCContent(String paramString) {
        if (paramString != null) {
            if (paramString.isEmpty()) {
                return null;
            }
            if (paramString.length() != 16) {
                return null;
            }
            try {
                Object localObject = paramString.substring(0, 4);
                byte[] paramStringB = CP.hexString2Bytes(paramString.substring(4, 16));
                paramString = HexUtil.bytesToHexString(CP.uncbt_crypt(paramStringB, paramStringB.length, 0));
                localObject = new StringBuilder(String.valueOf(localObject));
                ((StringBuilder) localObject).append(paramString);
                paramString = ((StringBuilder) localObject).toString();
                return paramString;
            } catch (java.io.UnsupportedEncodingException e) {
                return null;
            }
        }
        return (String) null;
    }

    public static String getLabelNo(String paramString) {
        paramString = getEPCContent(paramString);
        if (paramString != null) {
            return paramString.substring(3, 13);
        }
        return null;
    }
    
    public static void main(String[] args) {
    	String[] arr = new String[] {"ABC06A6F73C605F5",
    		"ABC06A6F73C675F5","ABC06A6F73C935F5"};
    	for(String labelNo : arr) {
    	String label = NyReadLabel.getLabelNo(labelNo);
    		System.out.println("[long][short]=["+labelNo+"][" + label+"]");
    	}
	}
    
}
