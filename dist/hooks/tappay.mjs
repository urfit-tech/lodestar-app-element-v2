import { useMemo } from 'react';
import { useApp } from '../contexts/AppContext';
export const _TPDirect = window['TPDirect'];
export const useTapPay = () => {
    const { settings } = useApp();
    const TPDirect = useMemo(() => {
        if (settings['tappay.app_id'] && settings['tappay.app_key'] && _TPDirect) {
            _TPDirect.setupSDK(settings['tappay.app_id'], settings['tappay.app_key'], settings['tappay.dry_run'] === 'true' ? 'sandbox' : 'production');
        }
        return _TPDirect;
    }, [_TPDirect, settings]);
    return { TPDirect };
};
