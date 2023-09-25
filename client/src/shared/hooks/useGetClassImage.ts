import safe from 'shared/assets/scp-ico/class/safe-icon.svg';
import euclid from 'shared/assets/scp-ico/class/euclid-icon.svg';
import keter from 'shared/assets/scp-ico/class/keter-icon.svg';
import pending from 'shared/assets/scp-ico/class/Pending-icon.svg';
import samosbor from 'shared/assets/scp-ico/outclass/decommissioned-icon.svg';

export const getImage = (id: number) => {
    switch (id) {
        case 0:
            return safe;
        case 1:
            return euclid;
        case 2:
            return keter;
        case 3:
            return samosbor;
        default:
            return pending;
    }
};